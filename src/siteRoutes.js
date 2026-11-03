import {languages} from './content';

export const guidePages = ['construction','units','research','parts','events','tanks','infantry','artillery','aircraft','naval'];
export const isLanguage = code => Object.hasOwn(languages, code);

export function pageUrl(lang, page = '') {
  return `${import.meta.env.BASE_URL}${lang}/${page ? page + '/' : ''}`;
}

export function readRoute(url) {
  const base = import.meta.env.BASE_URL;
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : '';
  const [pathLanguage, pathPage] = path.split('/');
  const language = url.searchParams.get('lang');
  const page = url.searchParams.get('page') ?? pathPage;
  return {
    lang: isLanguage(language) ? language : isLanguage(pathLanguage) ? pathLanguage : null,
    page: guidePages.includes(page) ? page : '',
  };
}
