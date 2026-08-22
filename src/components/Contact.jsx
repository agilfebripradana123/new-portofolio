import SectionTitle from './SectionTitle';
import SpecularButton from './react-bits/SpecularButton';
import { profile } from '../data/profile';

const ICONS = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.91c.58.1.79-.25.79-.55v-2.1c-3.2.69-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  Mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
};

export default function Contact() {
  return (
    <section id="kontak" className="border-t border-white/10 px-4 py-24 text-center">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center">
          <SectionTitle nomor="04" judul="Kontak" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          Tertarik bekerja sama atau sekadar menyapa? Hubungi saya lewat
          email atau sosial media.
        </p>
        <SpecularButton
          size="md"
          radius={12}
          blur={8}
          tint="#22D3EE"
          tintOpacity={0.08}
          textColor="#E2E8F0"
          lineColor="#22D3EE"
          baseColor="#1E293B"
          className="cursor-target font-mono"
          onClick={() => {
            window.location.href = `mailto:${profile.email}`;
          }}
        >
          {profile.email}
        </SpecularButton>
        <ul className="mt-8 flex items-center justify-center gap-6">
          {profile.sosial.map(s => (
            <li key={s.nama}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.nama}
                title={s.nama}
                className="cursor-target text-slate-400 transition hover:text-cyan-400"
              >
                {ICONS[s.nama] ?? s.nama}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.nama}
        </p>
      </div>
    </section>
  );
}
