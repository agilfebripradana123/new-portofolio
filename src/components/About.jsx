import SectionTitle from "./SectionTitle";
import ProfileCard from "./react-bits/ProfileCard";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-24 mb-16">
      <SectionTitle nomor="01" judul="Tentang" />
      <div className="mt-8 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* kartu profil 3D — foto di public/foto.webp */}
        <div className="lg:order-2 w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] md:max-w-[240px] shrink-0">
          <ProfileCard
            avatarUrl={profile.foto || undefined}
            showUserInfo={false}
            enableTilt
            behindGlowColor="rgba(34, 211, 238, 0.4)"
            innerGradient="linear-gradient(145deg,#0E74908c 0%,#22D3EE44 100%)"
          />
        </div>

        <div className="lg:order-1 max-w-2xl space-y-4 text-slate-300 leading-relaxed mb-8">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
