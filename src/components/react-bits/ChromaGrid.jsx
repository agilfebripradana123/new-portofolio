import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';
import { techIcons, fallbackIcon } from '../techIcons';

// Diadaptasi dari React Bits: footer kartu diperluas untuk konten proyek
// (kategori, deskripsi, chip teknologi berlogo, tombol Demo/Kode).
// Mekanik spotlight/overlay/fade tetap verbatim.
export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {(items ?? []).map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.demo || c.repo)}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient,
            cursor: c.demo || c.repo ? 'pointer' : 'default'
          }}
        >
          <div className="chroma-img-wrapper">
            {c.gambar ? (
              <img src={c.gambar} alt={c.judul} loading="lazy" />
            ) : (
              <div className="chroma-img-placeholder">
                <span>Screenshot</span>
              </div>
            )}
          </div>
          <footer className="chroma-info">
            <span className="chroma-kategori">{c.kategori}</span>
            <h3 className="name">{c.judul}</h3>
            <p className="role">{c.deskripsi}</p>
            <div className="chroma-tech">
              {(c.tech ?? []).map(t => {
                const Icon = techIcons[t] ?? fallbackIcon;
                return (
                  <span key={t} className="chroma-chip">
                    <Icon className="chroma-chip-icon" aria-hidden="true" />
                    {t}
                  </span>
                );
              })}
            </div>
            <div className="chroma-links">
              {c.demo ? (
                <a
                  href={c.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="chroma-link chroma-link-demo"
                  onClick={e => e.stopPropagation()}
                >
                  Demo <span aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="chroma-link is-muted">Demo</span>
              )}
              {c.repo ? (
                <a
                  href={c.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="chroma-link"
                  onClick={e => e.stopPropagation()}
                >
                  Kode <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="chroma-link is-muted">Kode</span>
              )}
            </div>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
