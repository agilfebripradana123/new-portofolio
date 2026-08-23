import { useEffect } from 'react';
import PillNav from './components/react-bits/PillNav';
import TargetCursor from './components/react-bits/TargetCursor';
import TextLoop from './components/react-bits/TextLoop';
import Hero from './components/Hero';
import SkillMarquee from './components/SkillMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Skill', href: '#skill' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' }
];

export default function App() {
  // Anchor smooth-scroll manual: target #tentang/#skill adalah elemen sticky
  // yang selalu menempel di atas saat dipin — getBoundingClientRect/anchor
  // bawaan jadi salah sasaran. offsetTop mengikuti posisi layout asli.
  useEffect(() => {
    const onClick = e => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      let y = 0;
      let n = el;
      while (n) {
        y += n.offsetTop;
        n = n.offsetParent;
      }
      window.scrollTo({ top: Math.max(0, y - 76), behavior: 'smooth' });
      history.replaceState(null, '', a.getAttribute('href'));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <PillNav
        items={navItems}
        initialLoadAnimation={false}
        baseColor="#0B1120"
        pillColor="#1E293B"
        pillTextColor="#E2E8F0"
        hoveredPillTextColor="#22D3EE"
      />
      <TargetCursor
        cursorColor="#22D3EE"
        cursorColorOnTarget="#E2E8F0"
        spinDuration={3}
        hideDefaultCursor
        parallaxOn
      />
      <main>
        <Hero />
        <SkillMarquee />

        {/* parallax tumpuk: Tentang sticky → Skill menutupi → Proyek menutupi */}
        <div className="relative">
          {/* penanda posisi anchor (bukan elemen sticky, agar bisa dilompati) */}
          <span id="tentang" className="block h-0" aria-hidden="true" />
          <div className="sticky top-0 z-0">
            <About />
          </div>

          <span id="skill" className="block h-0" aria-hidden="true" />
          <div className="sticky top-0 z-10">
            <Skills />
          </div>

          {/* banner transisi masuk ke Proyek — layer paling atas */}
          <div className="grid-bg relative z-30 flex h-20 items-center overflow-hidden border-y border-white/5 md:h-24">
            <TextLoop
              text="Proyek"
              shape="line"
              speed={90}
              fontSize={40}
              fontWeight={700}
              letterSpacing={6}
              color="#0B1120"
              ribbon
              ribbonColor="#22D3EE"
              ribbonWidth={60}
              pauseOnHover
            />
          </div>
        </div>

        <Projects />

        <Contact />
      </main>
    </>
  );
}
