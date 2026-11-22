/**
 * Portfolio Application Logic - Aqil Fauzi
 * Fullstack Web Programmer, IT Support & Network Administrator
 */

// --- 1. Project Data Store ---
const projectsData = [
  {
    id: "proj-1",
    title: "Sistem Informasi Manajemen Layanan Publik & Verifikasi Data",
    category: "web",
    badge: "Instansi Layanan Publik",
    summary: "Aplikasi web terintegrasi untuk pengelolaan berkas, verifikasi data masyarakat secara real-time, dan otomasi laporan pelayanan publik.",
    fullDescription: "Sistem ini dibangun untuk mengatasi kendala verifikasi berkas manual pada instansi layanan publik. Dilengkapi dengan antarmuka verifikator berkas, validasi input otomatis, rekapitulasi data berformat PDF/Excel, serta audit log aktivitas pengguna demi integritas data yang akuntabel.",
    keyFeatures: [
      "Verifikasi dokumen & berkas digital dengan status progres transparan (Pending, Terverifikasi, Revisi)",
      "Role-based Access Control (Admin, Petugas Verifikasi, Pemohon)",
      "Ekspor laporan rekapitulasi otomatis ke spreadsheet dan PDF",
      "Pencarian cepat terindeks untuk ribuan entri data pemohon",
      "Dashboard statistik harian dan mingguan efisiensi pelayanan"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
    categoryLabel: "Web Programming"
  },
  {
    id: "proj-2",
    title: "Network Infrastructure & Server Monitoring Dashboard PCR",
    category: "network",
    badge: "Laboratorium PCR",
    summary: "Perancangan arsitektur jaringan LAN/VLAN kampus dan integrasi dashboard pemantauan latensi, bandwidth, serta uptime server.",
    fullDescription: "Mengkonfigurasi infrastruktur jaringan berbasis MikroTik RouterOS dan switch manageable di lingkungan laboratorium. Dilengkapi dengan monitoring jaringan menggunakan SNMP dan visualisasi utilisasi traffic secara real-time untuk mencegah bottleneck pada jam beban puncak praktikum.",
    keyFeatures: [
      "Segmentasi jaringan dengan 4 VLAN berbeda (Staff, Mahasiswa, Server Lab, IoT Testbed)",
      "Pengaturan Queue Bandwidth Management (PCQ & Simple Queue) yang adil",
      "Firewall filter rules, NAT security, dan proteksi dari serangan DoS/Bruteforce",
      "Pemantauan utilisasi bandwidth dan status up/down server via SNMP",
      "Pencegahan routing loop dengan STP (Spanning Tree Protocol)"
    ],
    techStack: ["MikroTik RouterOS", "VLAN", "SNMP", "Winbox", "Linux Debian", "Grafana"],
    demoUrl: "#",
    githubUrl: "#",
    categoryLabel: "Network & Infrastructure"
  },
  {
    id: "proj-3",
    title: "IT Helpdesk & Hardware/Software Asset Ticketing System",
    category: "support",
    badge: "IT Support & Operasional",
    summary: "Sistem pencatatan tiket keluhan kendala teknis (PC, printer, jaringan lokal) serta manajemen inventaris aset perangkat kantor.",
    fullDescription: "Dikembangkan untuk merampingkan proses pelaporan kendala IT harian staf kantor. Setiap komplain (printer macet, gangguan koneksi, bluescreen, lisensi software) tercatat dengan SLA respon yang jelas, history troubleshooting teknisi, dan pencatatan serial number perangkat.",
    keyFeatures: [
      "Pelaporan tiket troubleshooting dengan tingkat urgensi (Low, Medium, High, Critical)",
      "Pencatatan riwayat penanganan kendala teknis (knowledge base solusi IT Support)",
      "Katalogisasi aset perangkat keras (spesifikasi PC, monitor, printer, IP address)",
      "Notifikasi status tiket otomatis ke email staf pemohon",
      "Statistik rata-rata waktu penyelesaian kendala (MTTR / Mean Time to Resolution)"
    ],
    techStack: ["Web Programming", "PHP", "Bootstrap", "MySQL", "AJAX", "ITIL Best Practices"],
    demoUrl: "#",
    githubUrl: "#",
    categoryLabel: "IT Support & System"
  },
  {
    id: "proj-4",
    title: "Automated Dual-WAN Failover & VPN Gateway (MikroTik / Cisco)",
    category: "network",
    badge: "Network Engineering",
    summary: "Implementasi redundansi koneksi internet otomatis (Failover) dan secure site-to-site VPN untuk menjamin kelancaran operasional.",
    fullDescription: "Proyek rekayasa jaringan yang mengimplementasikan recursive routing failover menggunakan dua ISP berbeda. Jika ISP utama mengalami timeout, router otomatis mengalihkan koneksi ke ISP cadangan dalam hitungan detik tanpa memutus sesi kerja kritis pengguna.",
    keyFeatures: [
      "Recursive Routing Failover menggunakan check-gateway ping ke DNS publik",
      "Secure WireGuard & L2TP/IPSec VPN untuk remote access aman teknisi luar kantor",
      "QoS prioritas traffic untuk aplikasi video conference dan sistem database utama",
      "Script automasi notifikasi peringatan pergantian link via bot Telegram",
      "Pengujian packet loss dan latency under stress test"
    ],
    techStack: ["MikroTik", "Cisco IOS", "WireGuard VPN", "Routing Failover", "Bash Script"],
    demoUrl: "#",
    githubUrl: "#",
    categoryLabel: "Network & Infrastructure"
  },
  {
    id: "proj-5",
    title: "Portal Verifikasi Berkas & Rekapitulasi Magang Mahasiswa",
    category: "web",
    badge: "Akademik & Mahasiswa",
    summary: "Portal web untuk validasi berkas pendaftaran magang, pencocokan data instansi mitra, dan pelaporan progres logbook mingguan.",
    fullDescription: "Solusi digitalisasi alur administrasi magang mahasiswa. Memungkinkan verifikator mengecek keaslian dokumen pendukung, mencocokkan bidang magang dengan kompetensi mahasiswa, serta mencetak rekapitulasi penilaian akhir secara terpusat.",
    keyFeatures: [
      "Validasi tipe file, ukuran, dan preview dokumen PDF langsung di browser",
      "Formulir bertahap (multi-step registration) yang ramah pengguna",
      "Modul verifikasi kilat dengan tombol persetujuan satu klik",
      "Fitur catatan revisi yang langsung diteruskan ke dasbor pengguna",
      "Database relasional ternormalisasi untuk menjamin integritas data"
    ],
    techStack: ["PHP", "CodeIgniter / Laravel", "PostgreSQL", "JavaScript", "HTML5/CSS3"],
    demoUrl: "#",
    githubUrl: "#",
    categoryLabel: "Web Programming"
  },
  {
    id: "proj-6",
    title: "IoT Server Room Temperature & Environmental Monitoring",
    category: "support",
    badge: "Hardware & Monitoring",
    summary: "Sistem monitoring suhu dan kelembaban ruang server mini dengan mikrokontroler ESP32 dan notifikasi alert dini.",
    fullDescription: "Sistem pemantau kondisi fisik ruang server untuk mencegah overheating perangkat rackmount router dan switch. Mengirimkan data sensor suhu/kelembaban berkala ke dasbor web dan memicu notifikasi peringatan ke smartphone teknisi IT Support jika suhu melampaui batas aman.",
    keyFeatures: [
      "Sensor DHT22 presisi tinggi membaca temperatur & kelembaban real-time",
      "Dasbor web visual dengan grafik tren suhu 24 jam terakhir",
      "Threshold buzzer & notifikasi instan via Telegram Bot saat suhu > 28°C",
      "Protokol komunikasi hemat daya MQTT untuk stabilitas transmisi data",
      "Panduan SOP penanganan darurat ruang server bagi staf on-duty"
    ],
    techStack: ["ESP32", "MQTT", "C++ / Arduino", "Web Dashboard", "Chart.js", "IT Support SOP"],
    demoUrl: "#",
    githubUrl: "#",
    categoryLabel: "IT Support & System"
  }
];

// --- 2. State & DOM Elements ---
let activeFilter = "all";
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

// --- 3. Projects Rendering & Filter/Search ---
const projectsGrid = document.getElementById("projectsGrid");
const projectCountEl = document.getElementById("projectCount");
const noResultsEl = document.getElementById("noResults");
const searchInput = document.getElementById("projectSearchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects() {
  if (!projectsGrid) return;

  const filtered = projectsData.filter(proj => {
    const matchesCategory = activeFilter === "all" || proj.category === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === "" || 
      proj.title.toLowerCase().includes(query) ||
      proj.summary.toLowerCase().includes(query) ||
      proj.techStack.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
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
          <span class="text-xs text-slate-600 dark:text-slate-300 font-medium">${proj.categoryLabel}</span>
        </div>

        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
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
        <span class="text-xs text-slate-600 dark:text-slate-300 font-mono">Verified Case</span>
      </div>
    </div>
  `).join("");
}

// Filter button events
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => {
      b.classList.remove("bg-blue-600", "text-white", "shadow-sm");
      b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300", "border", "border-slate-200", "dark:border-slate-700");
    });

    btn.classList.add("bg-blue-600", "text-white", "shadow-sm");
    btn.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300", "border");

    activeFilter = btn.dataset.filter;
    renderProjects();
  });
});

// Search input event with debounce
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

function resetFilters() {
  activeFilter = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  
  filterButtons.forEach(b => {
    if (b.dataset.filter === "all") {
      b.classList.add("bg-blue-600", "text-white", "shadow-sm");
      b.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300", "border");
    } else {
      b.classList.remove("bg-blue-600", "text-white", "shadow-sm");
      b.classList.add("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300", "border", "border-slate-200", "dark:border-slate-700");
    }
  });

  renderProjects();
}

// --- 4. Modal Detail Proyek ---
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalBadge = document.getElementById("modalBadge");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTechStack = document.getElementById("modalTechStack");

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project || !projectModal) return;

  modalTitle.textContent = project.title;
  modalBadge.textContent = project.badge;
  modalCategory.textContent = project.categoryLabel;
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

// --- 8. Contact Form Handler ---
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMessage").value;

  const mailtoBody = encodeURIComponent(`Halo Aqil Fauzi,\n\nSaya ${name} (${email}) menghubungi Anda mengenai:\n\n${message}`);
  const mailtoSubject = encodeURIComponent(`[Portofolio SiapKerja] ${subject}`);
  
  window.location.href = `mailto:aqilfauzi2003@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
}

function openWhatsAppDirect() {
  const waNumber = "6282288888888"; // User can customize with real WhatsApp
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
