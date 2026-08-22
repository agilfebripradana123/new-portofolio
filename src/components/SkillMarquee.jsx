import LogoLoop from './react-bits/LogoLoop';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiMysql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiWordpress
} from 'react-icons/si';

// Divider hanya ikon — skill tanpa logo tetap tampil di section Skill.
const chip = (Icon, label) => ({
  node: (
    <span
      title={label}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
    >
      <Icon className="text-2xl" aria-hidden="true" />
    </span>
  )
});

const baris1 = [
  chip(SiHtml5, 'HTML'),
  chip(SiCss, 'CSS'),
  chip(SiJavascript, 'JavaScript'),
  chip(SiReact, 'React.js'),
  chip(SiTailwindcss, 'Tailwind CSS'),
  chip(SiBootstrap, 'Bootstrap'),
  chip(SiMysql, 'MySQL'),
  chip(SiSupabase, 'Supabase')
];

const baris2 = [
  chip(SiLaravel, 'Laravel'),
  chip(SiGit, 'Git'),
  chip(SiGithub, 'GitHub'),
  chip(SiVite, 'Vite'),
  chip(SiFigma, 'Figma'),
  chip(SiWordpress, 'WordPress')
];

export default function SkillMarquee() {
  return (
    <section aria-label="Teknologi yang digunakan" className="space-y-4 overflow-hidden py-10">
      <LogoLoop
        logos={baris1}
        speed={90}
        direction="left"
        logoHeight={44}
        gap={28}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0b1120"
        ariaLabel="Teknologi frontend dan database"
      />
      <LogoLoop
        logos={baris2}
        speed={90}
        direction="right"
        logoHeight={44}
        gap={28}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0b1120"
        ariaLabel="Teknologi backend dan tools"
      />
    </section>
  );
}
