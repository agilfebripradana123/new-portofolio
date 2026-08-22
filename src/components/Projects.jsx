import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

function ProjectCard({ p }) {
  return (
    <article className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50">
      <h3 className="text-lg font-semibold">{p.judul}</h3>
      <p className="mt-2 grow text-sm leading-relaxed text-slate-300">
        {p.deskripsi}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-slate-400">
        {p.tech.map(t => (
          <span key={t} className="rounded bg-white/10 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="cursor-target text-cyan-400 hover:text-cyan-300"
          >
            Demo
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="cursor-target text-slate-300 hover:text-white"
          >
            Kode
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyek" className="mx-auto max-w-5xl px-4 py-24">
      <SectionTitle nomor="03" judul="Proyek" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map(p => (
          <ProjectCard key={p.judul} p={p} />
        ))}
      </div>
    </section>
  );
}
