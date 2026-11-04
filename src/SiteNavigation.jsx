import {pageUrl} from './siteRoutes';
import React, {useEffect, useRef, useState} from 'react';
import './siteNavigation.css';

const labels = {
  ru: ['Разделы','Поиск по разделам','На этой странице','Закрыть','Ничего не найдено','Развитие базы','Офицерские сборки','Калькулятор строительства','Наверх'],
  en: ['Explore','Search guides','On this page','Close','No results','Base progression','Officer builds','Building calculator','Back to top'],
  pl: ["Sekcje","Szukaj w poradnikach","Na tej stronie","Zamknij","Brak wyników","Podstawowa progresja","Zestawy oficerów","Kalkulator budowy","Wróć na górę"],
  pt: ["Seções","Pesquisar guias","Nesta página","Fechar","Nenhum resultado","Progressão básica","Formações de oficiais","Calculadora de construção","Voltar ao topo"],
  vi: ['Khám phá','Tìm hướng dẫn','Trên trang này','Đóng','Không có kết quả','Phát triển căn cứ','Đội hình sĩ quan','Máy tính xây dựng','Về đầu trang'],
  ar: ['الأقسام','ابحث في الأدلة','في هذه الصفحة','إغلاق','لا توجد نتائج','تطوير القاعدة','تشكيلات الضباط','حاسبة البناء','العودة إلى الأعلى'],
};

export default function SiteNavigation({lang, page, guides, homeLabels}) {
  const [explore, search, onPage, close, empty, progression, officers, calculator, top] = labels[lang];
  const [mode, setMode] = useState('guides');
  const [query, setQuery] = useState('');
  const [sections, setSections] = useState([]);
  const [active, setActive] = useState('');
  const dialog = useRef(null);
  const searchInput = useRef(null);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.guide-layout aside nav a[href^="#"]'));
    setSections(links.map(link => ({href: link.getAttribute('href'), title: Array.from(link.childNodes).filter(node => node.nodeType === 3).map(node => node.textContent).join('').trim() || link.textContent.trim()})));
    const targets = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
    const update = () => {
      const current = targets.filter(target => target.getBoundingClientRect().top <= 170).at(-1);
      const href = current ? '#' + current.id : '';
      setActive(href);
      links.forEach(link => {
        if (link.hash === href) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    update();
    window.addEventListener('scroll', update, {passive:true});
    return () => window.removeEventListener('scroll', update);
  }, [lang, page]);

  function open(nextMode) {
    setMode(nextMode);
    setQuery('');
    dialog.current.showModal();
    requestAnimationFrame(() => searchInput.current?.focus());
  }
  useEffect(() => {
    function onShortcut(event) {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k' || dialog.current.open) return;
      if (document.querySelector('dialog[open]')) return;
      event.preventDefault();
      open('guides');
    }
    window.addEventListener('keydown', onShortcut);
    return () => window.removeEventListener('keydown', onShortcut);
  }, []);
  const groups = [
    [progression, ['construction','calculator','units','research','parts','events','combat']],
    [officers, ['tanks','infantry','artillery','aircraft','naval']],
  ];
  const items = {...guides, calculator: {title: calculator}};
  const matches = id => items[id].title.toLocaleLowerCase(lang).includes(query.trim().toLocaleLowerCase(lang));
  return <>
    <div className="site-nav-controls">
      <button type="button" className="site-nav-open" aria-haspopup="dialog" aria-keyshortcuts="Control+k Meta+k" onClick={() => open('guides')}>{explore} <span aria-hidden="true">⌕</span></button>
      {sections.length > 0 && <button type="button" className="site-nav-toc" onClick={() => open('page')}>{onPage}</button>}
    </div>
    <dialog className="site-nav-dialog" ref={dialog} aria-labelledby="site-nav-title" onKeyDown={event => {if(event.key === 'Escape'){event.preventDefault();dialog.current.close();}}} onClick={event => {if(event.target === dialog.current) dialog.current.close();}}>
      <div className="site-nav-panel">
        <div className="site-nav-heading"><h2 id="site-nav-title">{mode === 'page' ? onPage : explore}</h2><button type="button" aria-label={close} onClick={() => dialog.current.close()}>×</button></div>
        {mode === 'guides' ? <>
          <input ref={searchInput} type="search" aria-label={search} placeholder={search} value={query} onChange={event => setQuery(event.target.value)}/>
          <div className="site-nav-groups">{groups.map(([heading, ids]) => {
            const visible = ids.filter(matches);
            return visible.length > 0 && <div key={heading}><h3>{heading}</h3><ul>{visible.map(id => <li key={id}><a aria-current={id === page ? 'page' : undefined} href={id === 'calculator' ? `${pageUrl(lang, 'construction')}#construction-calculator` : pageUrl(lang, id)} onClick={() => dialog.current.close()}>{items[id].title}<span aria-hidden="true">↗</span></a></li>)}</ul></div>;
          })}</div>
          {!Object.keys(items).some(matches) && <p role="status">{empty}</p>}
          {!query.trim() && <div className="site-nav-home">{['manual','approach','alliance'].map((id,index) => <a key={id} href={`${pageUrl(lang)}#${id}`} onClick={() => dialog.current.close()}>{homeLabels[index]}</a>)}</div>}
        </> : <ul className="site-nav-sections">{sections.map(({href, title}) => <li key={href}><a href={href} aria-current={href === active ? 'location' : undefined} onClick={() => dialog.current.close()}>{title}</a></li>)}</ul>}
      </div>
    </dialog>
    {page && active && <a className="site-nav-top" href="#" aria-label={top} title={top}>↑</a>}
  </>;
}
