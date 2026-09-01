import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import SpecularButton from './react-bits/SpecularButton';
import { profile } from '../data/profile';

const ICONS = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Instagram: <FaInstagram />,
  TikTok: <FaTiktok />,
  Mail: <HiMail />
};

export default function Contact() {
  return (
    <section id="kontak" className="border-t border-white/10 px-4 py-24 text-center">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center">
          <SectionTitle nomor="04" judul="Kontak" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          Tertarik bekerja sama atau sekadar menyapa? Hubungi saya lewat
          email atau sosial media.
        </p>
        <ul className="mt-8 flex items-center justify-center gap-6">
          {profile.sosial.map(s => (
            <li key={s.nama}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.nama}
                title={s.nama}
                className="cursor-target text-2xl text-slate-400 transition hover:text-cyan-400"
              >
                {ICONS[s.nama] ?? s.nama}
              </a>
            </li>
          ))}
        </ul>

        {/* Kontak Form */}
        <form
          className="mx-auto mt-10 max-w-md space-y-4 text-left"
          onSubmit={e => {
            e.preventDefault();
            const nama = e.target.nama.value.trim();
            const email = e.target.email.value.trim();
            const pesan = e.target.pesan.value.trim();
            if (!nama || !email || !pesan) return;
            const subject = encodeURIComponent('Kontak Portofolio');
            const body = encodeURIComponent(
              `Nama: ${nama}\nEmail: ${email}\nPesan:\n${pesan}`
            );
            window.location.href = `mailto:agilfebripradana123@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-300">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              required
              placeholder="Masukkan nama lengkap"
              className="w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Masukkan email"
              className="w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-300">Pesan</label>
            <textarea
              name="pesan"
              required
              placeholder="Tulis pesan..."
              rows={4}
              className="w-full resize-none rounded border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500/30 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-cyan-500/50"
          >
            Kirim Pesan
          </button>
        </form>

        <p className="mt-16 font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.nama}
        </p>
      </div>
    </section>
  );
}
