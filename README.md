# Website Vihara Buddha Dharma Citaviriyo (VBDC)

Website resmi untuk Yayasan Vihara Buddha Dharma Citaviriyo yang dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🏛️ Tentang VBDC

Vihara Buddha Dharma Citaviriyo adalah tempat pembelajaran, praktik, dan pelestarian ajaran Buddha yang autentik. Kami berkomitmen untuk menjadi pusat spiritual yang mendukung pengembangan batin dan kebijaksanaan bagi semua umat.

## 🌐 Struktur Website

Website ini terdiri dari 4 halaman utama:

### 1. Beranda (`/`)
- Hero section dengan teks Pali dan penjelasan vihara
- Section kegiatan utama (Waisak Puja, Kathina, Bakti Sosial)
- Placeholder untuk foto vihara

### 2. Kegiatan (`/kegiatan`)
- Header dengan logo dan penjelasan
- Grid 7 kegiatan dengan placeholder foto:
  - Waisak Puja
  - Kathina
  - Pattidana
  - Fang Shen
  - Cheng Beng
  - Bakti Sosial
  - Pemasangan Lampion
- CTA section dengan quote "Semoga semua makhluk hidup berbahagia"

### 3. Tentang Kami (`/tentang`)
- Header dengan logo dan penjelasan vihara
- Section kegiatan utama dengan bullet list
- Section rencana pengembangan (4 kartu):
  - Dhamma School
  - Kelas Meditasi
  - Pelatihan Sukarelawan
  - Publikasi Edukatif
- Quote penutup "Semoga semua makhluk hidup berbahagia"

### 4. Kontak (`/kontak`)
- Header dengan logo dan ajakan menghubungi
- Informasi kontak lengkap
- Placeholder untuk Google Maps
- Section "Kunjungi Kami"

## 🎨 Desain & UI/UX

### Skema Warna
- **Dominan**: Putih (`bg-white`)
- **Aksen**: Orange keemasan (`bg-orange-500`, `text-orange-500`)
- **Footer**: Abu tua (`bg-gray-800`)

### Komponen Global
- **Navbar**: Sticky, responsive dengan logo bulat dan menu navigasi
- **Footer**: 3 kolom (nama yayasan, menu cepat, kontak) dengan copyright

### Tipografi
- Font yang rapi dan minimalis
- Hierarki yang jelas untuk heading dan body text
- Spacing yang longgar dan bersih

### Responsif
- Mobile-first design
- Breakpoint: `sm:`, `md:`, `lg:`, `xl:`
- Touch-friendly untuk mobile devices

## 🛠️ Teknologi

- **Framework**: Next.js 15 dengan App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.tsx              # Halaman Beranda
│   ├── kegiatan/
│   │   └── page.tsx          # Halaman Kegiatan
│   ├── tentang/
│   │   └── page.tsx          # Halaman Tentang Kami
│   ├── kontak/
│   │   └── page.tsx          # Halaman Kontak
│   └── layout.tsx            # Root Layout
├── components/
│   ├── Navbar.tsx            # Komponen Navbar
│   └── Footer.tsx            # Komponen Footer
└── hooks/
    └── use-toast.ts          # Toast hook
```

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm atau yarn

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 📝 Instructions untuk Upload Assets

### Logo
- Format: PNG atau SVG
- Shape: Bulat (circle)
- Background: Transparent
- Placement: 
  - Navbar (kiri atas)
  - Header setiap halaman (tengah)
  - Footer (kolom pertama)

### Foto Hero (Beranda)
- Format: JPG atau PNG
- Size: Full width
- Subject: Tampak depan vihara
- Akan diberi overlay gelap transparan

### Foto Kegiatan
- Format: JPG atau PNG
- Ratio: 16:10 atau 4:3 (disarankan)
- Placement: Grid cards di halaman Kegiatan
- Jumlah: 7 foto untuk setiap kegiatan

## 🤝 Kontribusi

1. Fork repository
2. Buat branch baru (`git checkout -b fitur/baru`)
3. Commit changes (`git commit -am 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur/baru`)
5. Buat Pull Request

## 📄 Lisensi

© 2025 Vihara Buddha Dharma Citaviriyo. Semua hak dilindungi.

## 🙏 Dedikasi

*Semoga semua makhluk hidup berbahagia.*

---

**Catatan**: Website ini dirancang dengan prinsip spiritual-tenang dan non-komersial, sesuai dengan nilai-nilai Buddhis yang dijunjung oleh Vihara Buddha Dharma Citaviriyo.