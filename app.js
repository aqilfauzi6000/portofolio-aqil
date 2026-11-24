/**
 * Portfolio Application Logic - Aqil Fauzi
 * Fullstack Web Programmer, IT Support & Network Administrator
 */

// --- 1. Project Data Store (4 Proyek Nyata) ---
const projectsData = [
  {
    id: "proj-1",
    title: "Desain UI Dashboard Admin E-Commerce UMKM di Figma",
    badge: "UI/UX Design",
    summary: "Perancangan desain antarmuka pengguna (UI/UX) khusus dashboard admin untuk platform e-commerce UMKM, memfasilitasi pengelolaan produk, pesanan, dan analitika penjualan.",
    fullDescription: "Proyek perancangan UI/UX berbasis Figma yang berfokus pada kebutuhan user admin platform e-commerce UMKM. Dirancang untuk memudahkan pemilik usaha memantau stok barang, memproses pesanan masuk, mengelola katalog produk, serta membaca ringkasan performa penjualan dengan antarmuka yang bersih, intuitif, dan responsif.",
    keyFeatures: [
      "Perancangan antarmuka User Admin lengkap (Dashboard ringkasan, Manajemen Produk, Transaksi, dan Laporan)",
      "Penerapan Design System konsisten (Color Palette, Typography, Reusable Components, dan Auto-Layout Figma)",
      "Interactive Prototyping untuk mensimulasikan alur navigasi admin mulai dari validasi pesanan hingga status pengiriman",
      "Penerapan prinsip Human-Centered Design untuk kemudahan operasional pengguna non-teknis",
      "Penyusunan wireframe low-fidelity hingga high-fidelity mockup siap serah-terima ke tim developer"
    ],
    techStack: ["Figma", "UI/UX Design", "Wireframing", "Interactive Prototyping", "Design System"]
  },
  {
    id: "proj-2",
    title: "Sistem Internal Staf BPJS Ketenagakerjaan: Manajemen Data Tenaga Kerja JMO",
    badge: "Instansi Layanan Publik",
    summary: "Pengembangan sistem internal staf BPJS Ketenagakerjaan untuk otomasi download & upload data Excel tenaga kerja pengguna JMO guna mengakuisisi dan memverifikasi kepesertaan aktif.",
    fullDescription: "Sistem ini dikembangkan khusus untuk mempermudah staf internal BPJS Ketenagakerjaan dalam mengakuisisi dan memverifikasi tenaga kerja aktif pengguna aplikasi Jamsostek Mobile (JMO). Sistem ini memproses import dan export data Excel dalam volume besar secara efisien, melakukan validasi kelengkapan data kepesertaan, serta memastikan rekonsiliasi data berjalan akurat dan transparan.",
    keyFeatures: [
      "Modul Upload / Import data Excel tenaga kerja ribuan baris dengan validasi skema otomatis",
      "Fitur Download / Export rekapitulasi data tenaga kerja aktif pengguna JMO ke format spreadsheet (.xlsx / .csv)",
      "Verifikasi dan pencocokan otomatis data kepesertaan untuk mempercepat proses akuisisi tenaga kerja aktif",
      "Pencatatan riwayat pemrosesan data (audit trail) untuk memastikan integritas dan keamanan data internal",
      "Antarmuka cepat dan teroptimasi untuk meminimalisir waktu tunggu pengolahan berkas staf"
    ],
    techStack: ["Laravel", "PHP", "Excel / PhpSpreadsheet", "MySQL", "JavaScript", "Bootstrap / Tailwind"]
  },
  {
    id: "proj-3",
    title: "Pengembangan Progressive Web App (PWA) Sistem Informasi Sekolah",
    badge: "Web & Mobile PWA",
    summary: "Transformasi sistem informasi sekolah berbasis PHP Yii2 menjadi Progressive Web App (PWA) yang dapat diinstal langsung di perangkat dan mendukung akses yang lebih cepat.",
    fullDescription: "Mengembangkan fitur Progressive Web App (PWA) pada sistem informasi sekolah yang sudah berjalan dengan framework PHP Yii2. Integrasi PWA ini memungkinkan guru, staf, dan siswa mengakses sistem secara instan dari homescreen smartphone maupun desktop layaknya aplikasi native, dilengkapi caching pintar untuk meningkatkan kecepatan akses dan reliabilitas koneksi.",
    keyFeatures: [
      "Implementasi Web App Manifest & Service Worker sehingga sistem dapat diinstal (Installable PWA)",
      "Caching data pintar untuk mempercepat loading aset dan mendukung performa optimal pada jaringan lambat",
      "Integrasi seamless dengan arsitektur backend framework PHP Yii2 yang sudah ada",
      "User Experience (UX) responsif yang menyerupai kenyamanan aplikasi native di Android dan desktop",
      "Pengurangan beban server melalui efisiensi penyimpanan cache sisi klien (browser cache)"
    ],
    techStack: ["PHP", "Yii2", "Progressive Web App (PWA)", "Service Worker", "JavaScript", "MySQL"]
  },
  {
    id: "proj-4",
    title: "Sistem Manajemen Usaha Cucian Mobil, Motor & Karpet",
    badge: "Sistem Operasional Bisnis",
    summary: "Pengembangan sistem web terintegrasi untuk pencatatan transaksi kasir (POS), pemantauan antrean cuci real-time, manajemen tarif layanan, dan rekapitulasi omzet usaha.",
    fullDescription: "Sistem informasi berbasis web yang dibangun dengan framework Laravel dan PHP untuk mendigitalisasi operasional jasa cuci kendaraan dan karpet. Sistem ini menggantikan pembukuan manual dengan sistem kasir otomatis, pelacakan status antrean pengerjaan, manajemen tarif dinamis, serta pencetakan struk dan laporan keuangan periodik.",
    keyFeatures: [
      "Manajemen antrean cuci kendaraan & karpet dengan status progres real-time",
      "Katalog layanan dengan tarif fleksibel untuk Mobil, Motor, dan Karpet (per meter/satuan)",
      "Modul Kasir / POS untuk pencatatan pembayaran cepat dan kalkulasi total biaya otomatis",
      "Laporan rekapitulasi omzet dan pendapatan harian serta bulanan yang rapi dan terstruktur",
      // "Manajemen data pelanggan untuk riwayat pemesanan dan peningkatan retensi layanan"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS / Bootstrap", "JavaScript", "HTML5"]
  }
];

// --- 2. State & DOM Elements ---
let searchQuery = "";

// Theme Management
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const mobileThemeToggleBtn = document.getElementById("mobileThemeToggle");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove("dark");
    updateThemeIcon(false);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const sunIcon = `<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>`;
  const moonIcon = `<svg class="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
  
  if (themeIcon) themeIcon.innerHTML = isDark ? sunIcon : moonIcon;
  const mobileThemeIcon = document.getElementById("mobileThemeIcon");
  if (mobileThemeIcon) mobileThemeIcon.innerHTML = isDark ? sunIcon : moonIcon;
}

if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener("click", toggleTheme);

// --- 3. Projects Rendering & Search ---
const projectsGrid = document.getElementById("projectsGrid");
const projectCountEl = document.getElementById("projectCount");
const noResultsEl = document.getElementById("noResults");
const searchInput = document.getElementById("projectSearchInput");

function renderProjects() {
  if (!projectsGrid) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = projectsData.filter(proj => {
    return query === "" || 
      proj.title.toLowerCase().includes(query) ||
      proj.summary.toLowerCase().includes(query) ||
      proj.techStack.some(t => t.toLowerCase().includes(query));
  });

  // Update counter
  if (projectCountEl) {
    projectCountEl.textContent = `Menampilkan ${filtered.length} dari ${projectsData.length} total proyek`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    projectsGrid.innerHTML = "";
    if (noResultsEl) noResultsEl.classList.remove("hidden");
    return;
  } else {
    if (noResultsEl) noResultsEl.classList.add("hidden");
  }

  // Render cards
  projectsGrid.innerHTML = filtered.map(proj => `
    <div class="group bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
            ${proj.badge}
          </span>
          <span class="text-xs text-slate-600 dark:text-slate-300 font-mono">Case Study</span>
        </div>

        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          ${proj.title}
        </h3>

        <p class="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed line-clamp-3">
          ${proj.summary}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${proj.techStack.map(tech => `
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              ${tech}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
        <button onclick="openProjectModal('${proj.id}')" class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          Detail Proyek
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
        <span class="text-xs text-slate-600 dark:text-slate-300 font-mono">Verified</span>
      </div>
    </div>
  `).join("");
}

// Search input event
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

function resetFilters() {
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  renderProjects();
}

// --- 4. Modal Detail Proyek ---
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalBadge = document.getElementById("modalBadge");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTechStack = document.getElementById("modalTechStack");

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project || !projectModal) return;

  modalTitle.textContent = project.title;
  modalBadge.textContent = project.badge;
  modalDescription.textContent = project.fullDescription;

  modalFeatures.innerHTML = project.keyFeatures.map(f => `
    <li class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
      <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <span>${f}</span>
    </li>
  `).join("");

  modalTechStack.innerHTML = project.techStack.map(t => `
    <span class="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
      ${t}
    </span>
  `).join("");

  projectModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal && !projectModal.classList.contains("hidden")) {
    closeProjectModal();
  }
});

// --- 5. Direct Copy Email with Toast ---
function copyEmail() {
  const email = "aqilfauzi2003@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const copyBtn = document.getElementById("copyEmailBtn");
    const copyText = document.getElementById("copyEmailText");
    const originalText = copyText ? copyText.textContent : "Salin";

    if (copyText) copyText.textContent = "Tersalin! ✓";
    if (copyBtn) copyBtn.classList.add("bg-emerald-600", "text-white");

    setTimeout(() => {
      if (copyText) copyText.textContent = originalText;
      if (copyBtn) copyBtn.classList.remove("bg-emerald-600", "text-white");
    }, 2000);
  });
}

// --- 6. Bilingual CV Dropdown Toggle ---
const cvDropdownBtn = document.getElementById("cvDropdownBtn");
const cvDropdownMenu = document.getElementById("cvDropdownMenu");

if (cvDropdownBtn && cvDropdownMenu) {
  cvDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cvDropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    if (!cvDropdownMenu.classList.contains("hidden")) {
      cvDropdownMenu.classList.add("hidden");
    }
  });
}

function downloadCV(lang) {
  if (cvDropdownMenu) cvDropdownMenu.classList.add("hidden");
  alert(`Memulai unduh Curriculum Vitae (${lang === 'id' ? 'Bahasa Indonesia' : 'English'}). Pastikan Anda menaruh file CV di folder aset atau menghubungkan tautan Google Drive / Cloud Anda.`);
}

// --- 7. Mobile Navigation Drawer ---
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavDrawer = document.getElementById("mobileNavDrawer");
const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");

function toggleMobileNav() {
  if (!mobileNavDrawer) return;
  mobileNavDrawer.classList.toggle("hidden");
  document.body.style.overflow = mobileNavDrawer.classList.contains("hidden") ? "auto" : "hidden";
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleMobileNav);
if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener("click", toggleMobileNav);

function closeMobileNav() {
  if (mobileNavDrawer && !mobileNavDrawer.classList.contains("hidden")) {
    mobileNavDrawer.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// --- 8. WhatsApp Direct ---
function openWhatsAppDirect() {
  const waNumber = "6281910322466";
  const text = encodeURIComponent("Halo Aqil Fauzi, saya melihat portofolio Anda di SiapKerja / Web dan tertarik untuk berdiskusi mengenai peluang magang / kerja IT Support & Web Programming.");
  window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
}

// --- 9. Back to Top Button ---
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 400) {
    backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
    backToTopBtn.classList.add("opacity-100", "translate-y-0");
  } else {
    backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
    backToTopBtn.classList.remove("opacity-100", "translate-y-0");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects();
});
