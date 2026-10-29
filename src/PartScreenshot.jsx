import React, { useId, useRef } from 'react';

export default function PartScreenshot({ screenshot, copy, labels }) {
  const modal = useRef(null);
  const headingId = useId();
  const src = `${import.meta.env.BASE_URL}guides/parts/${screenshot.file}`;

  function annotatedImage() {
    return <span className="part-shot-image" dir="ltr">
      <img src={src} alt={copy.alt} width="1280" height="591" loading="lazy" decoding="async" />
      {screenshot.marks.map(([left, top], i) => (
        <span className="part-shot-marker" key={i} aria-hidden="true" style={{ left: `${left}%`, top: `${top}%` }}>{i + 1}</span>
      ))}
    </span>;
  }

  function legend() {
    return <ol className="part-shot-legend">{copy.points.map((point, i) => (
      <li key={point}><span aria-hidden="true">{i + 1}</span><p>{point}</p></li>
    ))}</ol>;
  }

  return <figure className="part-shot">
    <figcaption>{copy.title}</figcaption>
    <button className="part-shot-open" onClick={() => modal.current.showModal()} aria-label={`${labels.zoom}: ${copy.title}`}>
      {annotatedImage()}
      <span className="part-shot-zoom">{labels.zoom} ↗</span>
    </button>
    {legend()}
    <dialog className="part-shot-dialog" ref={modal} aria-labelledby={headingId} onClick={event => {
      if (event.target === modal.current) modal.current.close();
    }}>
      <div className="part-shot-modal-header"><h3 id={headingId}>{copy.title}</h3><button onClick={() => modal.current.close()}>{labels.close} ×</button></div>
      {annotatedImage()}
      <a className="part-shot-original" href={src} target="_blank" rel="noopener noreferrer">{labels.original} ↗</a>
      {legend()}
    </dialog>
  </figure>;
}
