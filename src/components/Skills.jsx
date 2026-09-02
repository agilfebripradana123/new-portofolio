import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';
import { techIcons as ICONS, fallbackIcon } from './techIcons';

function SkillChip({ label }) {
  const Icon = ICONS[label] ?? fallbackIcon;
  return (
    <span className="inline-flex cursor-default items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors duration-200 hover:border-cyan-400/50 hover:bg-white/10">
      <Icon className="text-base text-cyan-400" aria-hidden="true" />
      {label}
    </span>
  );
}

function GroupCard({ grup, items, nomor }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      {/* garis aksen atas saat hover */}
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      <h3 className="flex items-baseline gap-2 font-mono text-sm uppercase tracking-wider text-slate-300">
        <span className="text-xs text-cyan-400">{nomor}.</span>
        {grup}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map(s => (
          <SkillChip key={s} label={s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      className="mt-12 grid-bg relative z-10 overflow-hidden rounded-t-[2rem] border-t border-white/10 shadow-[0_-24px_48px_rgba(0,0,0,0.45)] md:mt-16"
    >
      <div className="relative mx-auto max-w-5xl px-4 pt-12 md:pt-24 pb-36 md:pb-48">
        <SectionTitle nomor="02" judul="Skill" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((g, i) => (
            <GroupCard
              key={g.grup}
              grup={g.grup}
              items={g.items}
              nomor={String(i + 1).padStart(2, '0')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
