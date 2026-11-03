import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {isLanguage, pageUrl, readRoute} from './siteRoutes';

function preferredLanguage() {
  try {
    const saved = localStorage.getItem('syndicate-language');
    if (isLanguage(saved)) return saved;
  } catch {}
  const browser = navigator.language.split('-')[0];
  return isLanguage(browser) ? browser : 'en';
}

const url = new URL(location.href);
const route = readRoute(url);
const lang = route.lang ?? preferredLanguage();
if (url.searchParams.has('page') || url.searchParams.has('lang')) {
  url.pathname = pageUrl(lang,route.page);
  url.searchParams.delete('page');
  url.searchParams.delete('lang');
  location.replace(url);
} else {
  createRoot(document.getElementById('root')).render(<App initialLanguage={lang} page={route.page}/>);
}
