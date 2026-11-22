# Portofolio Profesional Aqil Fauzi
**IT Support, Fullstack Web Programmer & Network Administrator**  
*Dipersiapkan untuk Portfolio MagangHub Kemnaker / SiapKerja & Karir Profesional*

---

## 🚀 Fitur Unggulan Website

1. **Light & Dark Mode Interaktif:**
   - Otomatis menyesuaikan preferensi sistem operasi atau diubah manual via tombol di navbar.
   - Tersimpan di `localStorage` sehingga preferensi tema tidak hilang saat reload.
2. **Koleksi Portofolio dengan Filter & Live Search:**
   - Filter instan berdasarkan kategori: *Web Programming*, *Network & Infrastructure*, dan *IT Support & System*.
   - Pencarian real-time berdasarkan judul proyek atau teknologi.
   - Modal detail interaktif untuk setiap proyek dengan deskripsi lengkap, poin fitur, dan tech stack.
3. **Tombol Salin Email 1-Klik:**
   - Pengunjung dapat menyalin alamat email `aqilfauzi2003@gmail.com` langsung dengan feedback notifikasi instan.
4. **Unduh CV Bilingual:**
   - Dropdown untuk pilihan unduh CV versi Bahasa Indonesia maupun English.
5. **Formulir Kontak & Integrasi WhatsApp:**
   - Pengunjung dapat langsung mengirim pesan via email atau membuka tautan WhatsApp dengan pesan pembuka otomatis.
6. **Responsif & Ringan:**
   - 100% optimal dibuka di perangkat HP, tablet, maupun desktop layar lebar.

---

## 💻 Cara Menjalankan Secara Lokal (Offline)

Tidak memerlukan instalasi rumit! Anda dapat langsung menjalankan website ini:
1. **Cara 1 (Langsung di Browser):**
   - Buka file explorer ke folder `c:\laragon\www\portofolioWebsite`
   - Klik ganda file `index.html` (akan langsung terbuka di Google Chrome/Edge/Firefox).
2. **Cara 2 (Via Laragon):**
   - Pastikan Laragon aktif.
   - Buka browser dan ketik alamat: `http://localhost/portofolioWebsite/`

---

## 🌐 Panduan Deploy Gratis ke Vercel (Langkah demi Langkah)

Website ini sudah dikonfigurasi dengan standar Vercel (`vercel.json`) dan dapat di-hosting **100% GRATIS selamanya**:

### Langkah 1: Buat Repository di GitHub
1. Buka [github.com](https://github.com) dan login ke akun Anda.
2. Buat repository baru, misalnya bernama: `portofolio-aqil-fauzi`.
3. Buka terminal (PowerShell / Git Bash) di folder proyek ini (`c:\laragon\www\portofolioWebsite`) dan jalankan perintah:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portofolio Aqil Fauzi"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/portofolio-aqil-fauzi.git
   git push -u origin main
   ```

### Langkah 2: Hubungkan & Deploy di Vercel
1. Buka [vercel.com](https://vercel.com) dan klik **Sign Up / Log In** (Pilih login menggunakan akun **GitHub** Anda).
2. Di dashboard Vercel, klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `portofolio-aqil-fauzi` yang baru saja Anda buat, lalu klik **"Import"**.
4. Biarkan pengaturan default (Framework Preset: *Other*), lalu klik **"Deploy"**.
5. Tunggu sekitar 30 detik — website Anda langsung **LIVE** di internet dengan alamat seperti:  
   👉 `https://portofolio-aqil-fauzi.vercel.app`

---

## 📁 Struktur Berkas

```
portofolioWebsite/
├── index.html        # Halaman utama semantik dan responsif
├── style.css         # Animasi orbit, glowing aura, dan kustomisasi tampilan
├── app.js            # Logika filter proyek, pencarian, modal, tema, dan salin email
├── vercel.json       # Konfigurasi keamanan & cache untuk deployment Vercel
└── README.md         # Dokumentasi panduan penggunaan & deployment
```
