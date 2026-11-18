import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import { Download, ExternalLink, FileText, Minus, Plus } from 'lucide-react';

// Copied into public/ by the prestart/prebuild scripts so it always matches the installed pdfjs-dist.
pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const ZOOMS = [0.75, 1, 1.25, 1.5];
const MAX_PAGE_WIDTH = 820; // "100%" means fit width, capped for readability
const PAGE_GAP = 16;

// Renders one page to a canvas and overlays its link annotations as real <a> tags.
const Page = ({ doc, number, width, onVisible }) => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const [size, setSize] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let task;
    let cancelled = false;
    (async () => {
      const page = await doc.getPage(number);
      if (cancelled) return;
      const base = page.getViewport({ scale: 1 });
      const viewport = page.getViewport({ scale: width / base.width });
      const dpr = window.devicePixelRatio || 1;
      const canvas = canvasRef.current;
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      setSize({ w: viewport.width, h: viewport.height });

      task = page.render({
        canvasContext: canvas.getContext('2d'),
        viewport,
        transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
      });
      task.promise.catch(() => {}); // cancelled renders reject; that's expected

      const annotations = await page.getAnnotations();
      if (cancelled) return;
      setLinks(
        annotations
          .filter((a) => a.subtype === 'Link' && a.url)
          .map((a) => {
            const [x1, y1, x2, y2] = viewport.convertToViewportRectangle(a.rect);
            return {
              url: a.url,
              style: {
                left: Math.min(x1, x2),
                top: Math.min(y1, y2),
                width: Math.abs(x2 - x1),
                height: Math.abs(y2 - y1),
              },
            };
          })
      );
    })();
    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [doc, number, width]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && onVisible(number), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [number, onVisible]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto bg-white shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5"
      style={{ width, height: size ? size.h : width * 1.294 }}
    >
      <canvas ref={canvasRef} aria-label={`Resume page ${number}`} style={{ width, height: size ? size.h : 'auto' }} />
      {links.map((l) => (
        <a
          key={`${l.url}-${l.style.left}-${l.style.top}`}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.url}
          className="absolute rounded-sm hover:bg-accent/15"
          style={l.style}
        />
      ))}
    </div>
  );
};

const IconButton = ({ label, onClick, disabled, children }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
  >
    {children}
  </button>
);

const ResumeViewer = ({ src, fileName }) => {
  const scrollRef = useRef(null);
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(1);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const task = pdfjsLib.getDocument(src);
    task.promise.then(setDoc, () => setError(true));
    return () => task.destroy();
  }, [src]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const zoom = ZOOMS[zoomIndex];
  const pageWidth = Math.floor(Math.min(containerWidth, MAX_PAGE_WIDTH) * zoom);
  const pages = doc ? Array.from({ length: doc.numPages }, (_, i) => i + 1) : [];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-2.5 dark:border-white/10">
        <div className="flex min-w-0 items-center gap-2.5">
          <FileText size={16} className="shrink-0 text-slate-400" />
          <span className="truncate font-mono text-xs text-slate-600 dark:text-slate-300">{fileName}</span>
          {doc && (
            <span className="hidden shrink-0 font-mono text-xs text-slate-400 sm:inline">
              · page {current} / {doc.numPages}
            </span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          <IconButton label="Zoom out" onClick={() => setZoomIndex((z) => z - 1)} disabled={zoomIndex === 0}>
            <Minus size={15} />
          </IconButton>
          <span className="w-11 text-center font-mono text-xs text-slate-500 dark:text-slate-400">{Math.round(zoom * 100)}%</span>
          <IconButton label="Zoom in" onClick={() => setZoomIndex((z) => z + 1)} disabled={zoomIndex === ZOOMS.length - 1}>
            <Plus size={15} />
          </IconButton>
          <span className="mx-1.5 h-4 w-px bg-slate-200 dark:bg-white/10" />
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in new tab"
            className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <ExternalLink size={15} />
          </a>
          <a href={src} download={fileName} className="btn-primary ml-1 px-3 py-1.5 text-xs">
            <Download size={13} /> Download
          </a>
        </div>
      </div>

      <div ref={scrollRef} className="max-h-[80vh] overflow-auto bg-slate-100 p-4 dark:bg-slate-950/60 sm:p-8">
        {error ? (
          <p className="py-16 text-center text-sm text-slate-500">
            The preview couldn't load.{' '}
            <a href={src} className="link">
              Open the PDF
            </a>{' '}
            instead.
          </p>
        ) : !doc || !pageWidth ? (
          <div className="mx-auto aspect-[1/1.294] max-w-[820px] animate-pulse bg-white/70 dark:bg-white/5" />
        ) : (
          <div className="flex w-max min-w-full flex-col" style={{ gap: PAGE_GAP }}>
            {pages.map((n) => (
              <Page key={n} doc={doc} number={n} width={pageWidth} onVisible={setCurrent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeViewer;
