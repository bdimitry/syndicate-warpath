import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {createServer} from 'vite';
import {siteUrl} from '../site.config.js';

const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const localizedPath = (lang,page) => lang + '/' + (page ? page + '/' : '');
const absolute = path => new URL(path,siteUrl).href;
const template = await readFile('dist/index.html','utf8');
const vite = await createServer({base:siteUrl.pathname,server:{middlewareMode:true,ws:false},appType:'custom'});
try {
  const {renderPage,languages,guidePages} = await vite.ssrLoadModule('/src/prerender.jsx');
  const locales = Object.keys(languages);
  const sitemap = [];
  async function writePage(lang,page,path) {
    const {title,description,body} = renderPage(lang,page);
    const canonical = absolute(path);
    const alternates = locales.map(code => `<link rel="alternate" hreflang="${code}" href="${absolute(localizedPath(code,page))}">`);
    alternates.push(`<link rel="alternate" hreflang="x-default" href="${absolute(page ? localizedPath('en',page) : '')}">`);
    const metadata = [
      `<link rel="canonical" href="${canonical}">`,
      ...alternates,
      '<meta property="og:type" content="website">',
      `<meta property="og:title" content="${escape(title)}">`,
      `<meta property="og:description" content="${escape(description)}">`,
      `<meta property="og:url" content="${canonical}">`,
      `<meta property="og:image" content="${absolute('syndicate-banner.png')}">`,
    ].join('\n');
    const html = template
      .replace(/<html\b[^>]*>/,`<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)
      .replace(/<title>.*?<\/title>/,() => `<title>${escape(title)}</title>`)
      .replace(/<meta name="description"[^>]*>/,() => `<meta name="description" content="${escape(description)}">`)
      .replace('</head>',() => `${metadata}\n</head>`)
      .replace('<div id="root"></div>',() => `<div id="root">${body}</div>`);
    const dir = join('dist',path);
    await mkdir(dir,{recursive:true});
    await writeFile(join(dir,'index.html'),html);
    sitemap.push(`  <url><loc>${escape(canonical)}</loc></url>`);
  }
  await writePage('en','','');
  for (const lang of locales) {
    for (const page of ['',...guidePages]) await writePage(lang,page,localizedPath(lang,page));
  }
  await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`);
  console.log(`Prerendered ${sitemap.length} pages and generated sitemap.xml`);
} finally {
  await vite.close();
}
