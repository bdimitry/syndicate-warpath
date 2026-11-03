import React from 'react';
import {renderToString} from 'react-dom/server';
import App, {pageMetadata} from './App';
export {languages} from './content';
export {guidePages} from './siteRoutes';

export function renderPage(lang, page) {
  return {
    ...pageMetadata(lang, page),
    body: renderToString(<App initialLanguage={lang} page={page}/>),
  };
}
