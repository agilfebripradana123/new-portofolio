import { Component, Suspense, lazy } from 'react';
import Scanner from './react-bits/Scanner';
import SpecularButton from './react-bits/SpecularButton';
import { profile } from '../data/profile';

const scrollTo = selector => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

const btnProps = {
  size: 'md',
  radius: 12,
  blur: 8,
  tint: '#22D3EE',
  tintOpacity: 0.08,
  textColor: '#E2E8F0',
  lineColor: '#22D3EE',
  baseColor: '#1E293B'
};

// Lazy: three.js + rapier (~2 MB) dipecah ke chunk terpisah,
// dimuat setelah paint pertama.
const Lanyard = lazy(() => import('./react-bits/Lanyard'));

// ponytail: fallback = gradien statis; upgrade path: render Scanner sekali
// (frame tunggal) via snapshot canvas bila ingin efek tetap terlihat.
const FallbackGradient = () => (
  <div className="h-full w-full bg-gradient-to-b from-[#0f172a] to-[#0b1120]" />
);

class FxBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <FallbackGradient />
    ) : (
      this.props.children
    );
  }
}

function HeroBackground() {
  // ponytail: reduced-motion memakai fallback statis, bukan frame tunggal —
  // komponen React Bits selalu menjalankan loop RAF saat terlihat.
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) return <FallbackGradient />;

  return (
    <FxBoundary>
      <Scanner
        color1="#0E7490"
        color2="#22D3EE"
        color3="#E2E8F0"
        opacity={0.55}
        vignette={0.45}
        scanline
        grain
        grainIntensity={0.05}
        mouseInteraction
      />
    </FxBoundary>
  );
}

export default function Hero() {
  return (
    <section id="beranda" className="relative flex min-h-screen items-center overflow-hidden">
      {/* base opaque menutup background grid halaman di area hero */}
      <div className="absolute inset-0 bg-[#0b1120]">
        <HeroBackground />
      </div>
      {/* gradasi transisi ke section berikutnya */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0b1120]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-6 px-4 pb-16 pt-24 md:grid-cols-2 md:gap-10 md:pt-24">
        {/* kiri: profil */}
        <div className="text-center md:text-left">
          <p className="font-mono text-sm italic text-cyan-400">
            &ldquo;{profile.kutipan}&rdquo;
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hi, saya {profile.nama}
          </h1>
          <p className="mt-3 font-mono text-base text-slate-300 sm:text-lg">
            {profile.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300 md:mx-0">
            {profile.deskripsi}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <SpecularButton
              {...btnProps}
              className="cursor-target"
              onClick={() => scrollTo('#proyek')}
            >
              Lihat Proyek
            </SpecularButton>
            <SpecularButton
              {...btnProps}
              tintOpacity={0.04}
              className="cursor-target"
              onClick={() => scrollTo('#kontak')}
            >
              Hubungi Saya
            </SpecularButton>
          </div>
        </div>

        {/* kanan: kartu 3D interaktif */}
        <div className="hero-lanyard h-[480px] sm:h-[560px] md:h-[80vh] lg:h-[85vh]">
          <Suspense fallback={null}>
            <Lanyard
              position={[0, 0, 13]}
              gravity={[0, -40, 0]}
              frontImage="/kartu.webp"
              backImage="/kartu.webp"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
