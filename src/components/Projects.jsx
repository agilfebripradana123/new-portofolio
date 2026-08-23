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

      <div className="mt-5 flex items-center gap-5 border-t border-white/5 pt-4 font-mono text-sm">
        {p.demo ? (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Demo <span aria-hidden="true">→</span>
          </a>
        ) : (
          <span className="text-slate-500">Demo</span>
        )}
        {p.repo ? (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
          >
            Kode <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="text-slate-500">Kode</span>
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
      <div className="mx-auto max-w-5xl px-4 py-24">
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
