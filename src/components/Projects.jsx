import SectionTitle from './SectionTitle';
import { dataProyek } from '../data/dataProyek';
import { techIcons, fallbackIcon } from './techIcons';

function TechChip({ label }) {
  const Icon = techIcons[label] ?? fallbackIcon;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-slate-300">
      <Icon className="text-sm text-cyan-400" aria-hidden="true" />
      {label}
    </span>
  );
}

function ProjectImage({ p }) {
  if (!p.gambar) {
    return (
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <span className="font-mono text-xs text-slate-500">Screenshot</span>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <img
        src={p.gambar}
        alt={`Tampilan ${p.judul}`}
        loading="lazy"
        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      {/* garis aksen atas saat hover */}
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />

      <ProjectImage p={p} />

      <span className="mt-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-cyan-300">
        {p.kategori}
      </span>

      <h3 className="mt-3 text-lg font-semibold">{p.judul}</h3>
      <p className="mt-2 grow text-sm leading-relaxed text-slate-300">
        {p.deskripsi}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map(t => (
          <TechChip key={t} label={t} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 border-t border-white/5 pt-4">
        {p.demo ? (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-500/40 hover:text-cyan-100 border border-cyan-500/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Demo
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-slate-500 border border-white/10 cursor-not-allowed">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Demo
          </span>
        )}
        {p.repo ? (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white border border-white/10"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Kode
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-slate-500 border border-white/10 cursor-not-allowed">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Kode
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="proyek"
      className="grid-bg rounded-t-[2rem] border-t border-white/10"
    >
      <div className="mx-auto max-w-5xl px-4 pt-12 md:pt-24 pb-36 md:pb-48">
        <SectionTitle nomor="03" judul="Proyek" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataProyek.map(p => (
            <ProjectCard key={p.judul} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
