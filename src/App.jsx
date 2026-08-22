import PillNav from './components/react-bits/PillNav';
import TargetCursor from './components/react-bits/TargetCursor';
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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
