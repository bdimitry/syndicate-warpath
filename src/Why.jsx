import React from 'react';
import { rationale } from './rationale';
import './why.css';

export default function Why({ lang, children }) {
  if (!children) return null;
  return <div className="why-box"><strong>{rationale[lang].label}</strong><p>{children}</p></div>;
}
