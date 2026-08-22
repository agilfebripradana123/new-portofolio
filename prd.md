# PRD — Website Portofolio Developer (web-porto-v2)

Tanggal: 2026-08-22 · Status: Disetujui

## 1. Ringkasan

Website portofolio pribadi satu halaman untuk developer, berbahasa Indonesia, bertema **developer dark**. Elemen visual utama: background animasi **Scanner** dari React Bits (WebGL via `ogl`) di hero section.

**Tujuan:**
- Menampilkan identitas, keahlian, dan proyek secara profesional.
- Membuat kesan pertama yang kuat lewat visual interaktif.
- Mudah di-update: semua konten terpusat di satu file data.

## 2. Tech Stack

| Teknologi | Peran |
|---|---|
| React 18 + Vite | Framework & build tool (JavaScript) |
| Tailwind CSS v4 | Styling utility-first |
| ogl | Dependensi runtime tambahan untuk Topography |
| Vercel / Netlify / GitHub Pages | Hosting statis |

## 3. Struktur Halaman

Satu halaman scroll dengan navigasi sticky (anchor link, smooth scroll):

| Bagian | Isi | Visual |
|---|---|---|
| **Hero** | Nama, tagline "Developer", CTA ke Projects & Contact | Topography fullscreen sebagai background, teks overlay |
| **About** | Bio singkat 2–3 paragraf + foto/avatar | Kartu semi-transparan |
| **Skills** | Grup Frontend, Backend, Tools dalam badge/chip | Grid responsif |
| **Projects** | Kartu proyek: judul, deskripsi, tech badges, link demo + repo | Grid 1/2/3 kolom |
| **Contact** | Email + ikon sosial (GitHub, LinkedIn, dll) | Gaya footer |

## 4. Integrasi Scanner

Komponen disalin verbatim dari React Bits (varian JavaScript + CSS) ke `src/components/react-bits/`, tanpa modifikasi logika internal.

Penempatan di Hero:
```jsx
<section className="relative h-screen">
  <div className="absolute inset-0">
    <Scanner ... />
  </div>
  <div className="relative z-10">{/* konten teks */}</div>
</section>
```

Adaptasi warna untuk tema dark:

| Prop | Nilai | Alasan |
|---|---|---|
| `color1` | `#0E7490` | Base cyan gelap, selaras background slate |
| `color2` | `#22D3EE` | Aksen cyan |
| `color3` | `#E2E8F0` | Puncak sinyal pucat |
| `opacity` | 0.55 | Teks tetap terbaca |
| `vignette` | 0.45 | Tepi memudar, fokus ke tengah |
| `scanline`, `grain` | `true` | Nuansa CRT developer |
| `mouseInteraction` | `true` | Fokus scan mengikuti kursor |

Prop lain memakai default komponen; penyetelan akhir dilakukan saat implementasi visual.

## 5. Struktur File

```
src/
├── App.jsx                  # susunan 5 section + Navbar
├── main.jsx
├── index.css                # Tailwind + font + smooth scroll
├── data/
│   └── profile.js           # SEMUA konten: bio, skills, projects, sosial
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx             # memuat <Topography />
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
└── components/react-bits/
    ├── Scanner.jsx          # source verbatim dari React Bits
    └── Scanner.css
```

Prinsip: konten di-hardcode di `data/profile.js`. Mengganti isi situs = mengedit satu file.

## 6. Model Data (`profile.js`)

```js
export const profile = {
  nama: "",
  tagline: "",
  bio: ["paragraf 1", "paragraf 2"],
  foto: "/avatar.jpg",
  email: "",
  sosial: [{ nama: "GitHub", url: "", ikon: "" }],
  skills: { frontend: [], backend: [], tools: [] },
  projects: [
    {
      judul: "",
      deskripsi: "",
      tech: [],
      demo: "",
      repo: ""
    }
  ]
};
```

## 7. Persyaratan Non-Fungsional

### Performa
- Komponen Scanner sudah otomatis pause animasi saat off-screen (`IntersectionObserver`) dan saat tab hidden — tidak ada pekerjaan tambahan.
- `dpr` dibatasi maksimal 2 oleh komponen.
- Target Lighthouse: Performance ≥ 90, Accessibility ≥ 95.

### Fallback & Aksesibilitas
- **WebGL tidak tersedia**: hero tetap tampil dengan gradien dark sebagai fallback (kegagalan WebGL dibiarkan silent → background solid).
- **`prefers-reduced-motion`**: Topography dirender tanpa loop animasi (frame tunggal statis).
- **Mobile**: mouse interaction tidak aktif (tidak ada cursor); layout responsif mulai 375px.
- Kontras teks minimal WCAG AA di atas background animasi.

### SEO
Meta title, description, dan Open Graph tags di `index.html`.

## 8. Di Luar Cakupan (v2)

- Blog/artikel
- Form kontak dengan backend (email ditampilkan sebagai link `mailto:`)
- Dwibahasa (ID/EN)
- CMS atau headless content management

## 9. Kriteria Selesai

1. `npm run build` lolos tanpa error.
2. Kelima bagian tampil dan anchor navigasi berfungsi.
3. Scanner tampil di hero dengan palet dark; fallback gradien bekerja saat WebGL dimatikan.
4. Responsif pada viewport 375px, 768px, 1440px (dicek manual).
5. Lighthouse Performance ≥ 90, Accessibility ≥ 95.
