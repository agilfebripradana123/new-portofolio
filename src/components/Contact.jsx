import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import SpecularButton from "./react-bits/SpecularButton";
import { profile } from "../data/profile";

const ICONS = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Instagram: <FaInstagram />,
  TikTok: <FaTiktok />,
  Mail: <HiMail />,
};

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_0c5ni6f",
        "template_inyiz1c",
        form.current,
        {
          publicKey: "2SrgRuIAmBOoVIBr5",
        },
      );

      setStatus("Pesan berhasil dikirim!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Pesan gagal dikirim. Silakan coba lagi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="kontak"
      className="border-t border-white/10 px-4 py-24 text-center"
    >
      {" "}
      <div className="mx-auto max-w-5xl">

        <div className="flex justify-center">
          <SectionTitle nomor="04" judul="Kontak" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          Tertarik bekerja sama atau sekadar menyapa? Hubungi saya lewat email
          atau sosial media.
        </p>
        <ul className="mt-8 flex items-center justify-center gap-6">
          {profile.sosial.map((s) => (
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
          ref={form}
          className="mx-auto mt-10 max-w-md space-y-4 text-left"
          onSubmit={sendEmail}
        >
          {/* Nama */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-300">
              Nama Lengkap
            </label>

            <input
              type="text"
              name="nama"
              required
              placeholder="Masukkan nama lengkap"
              className="w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Email */}
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

          {/* Pesan */}
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

          {/* Tombol */}
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-cyan-500/30 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {sending ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {/* Status */}
          {status && (
            <p className="text-center text-sm text-slate-300">{status}</p>
          )}
        </form>
        <p className="mt-16 font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.nama}
        </p>
      </div>
    </section>
  );
}
