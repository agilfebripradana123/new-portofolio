import SectionTitle from './SectionTitle';
import ProfileCard from './react-bits/ProfileCard';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <SectionTitle nomor="01" judul="Tentang" />
      <div className="mt-8 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4 text-slate-300 leading-relaxed">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* kartu profil 3D — foto di public/foto.webp */}
        <div className="w-full max-w-[300px] shrink-0">
          <ProfileCard
            avatarUrl={profile.foto || undefined}
            showUserInfo={false}
            enableTilt
            behindGlowColor="rgba(34, 211, 238, 0.4)"
            innerGradient="linear-gradient(145deg,#0E74908c 0%,#22D3EE44 100%)"
          />
        </div>
      </div>
    </section>
  );
}
