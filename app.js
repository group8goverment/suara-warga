const initialPrograms = [
  { id: "taman-cempaka", title: "Revitalisasi Taman Cempaka", location: "Kel. Sukamaju, Kec. Cibeunying", category: "Ruang Publik", description: "Ruang hijau ramah keluarga dengan area bermain aman dan kebun komunitas.", budget: 185000000, contributors: 34, target: 60, roles: { Relawan: 20, Pengawasan: 8, "Keahlian teknis": 6 }, roleTargets: { Relawan: 32, Pengawasan: 16, "Keahlian teknis": 12 }, disbursed: 0, illustration: "park" },
  { id: "lampu-melati", title: "Penerangan Jalan Gang Melati", location: "Kel. Cikutra, Kec. Cibeunying", category: "Infrastruktur", description: "Pemasangan lampu hemat energi untuk akses jalan yang lebih aman di malam hari.", budget: 92000000, contributors: 48, target: 50, roles: { Relawan: 30, Pengawasan: 10, "Keahlian teknis": 8 }, roleTargets: { Relawan: 30, Pengawasan: 10, "Keahlian teknis": 10 }, disbursed: 0, illustration: "street" },
  { id: "perpustakaan-rw", title: "Perpustakaan Mini RW 04", location: "Kel. Dago, Kec. Coblong", category: "Pendidikan", description: "Menghidupkan ruang belajar bersama dan akses buku untuk anak-anak sekitar.", budget: 67500000, contributors: 27, target: 45, roles: { Relawan: 16, Pengawasan: 6, "Keahlian teknis": 5 }, roleTargets: { Relawan: 27, Pengawasan: 9, "Keahlian teknis": 9 }, disbursed: 0, illustration: "library" },
  { id: "drainase-cilaki", title: "Perbaikan Drainase Cilaki", location: "Kel. Cihapit, Kec. Bandung Wetan", category: "Infrastruktur", description: "Mengurangi genangan dengan perbaikan saluran dan pemetaan titik rawan.", budget: 210000000, contributors: 62, target: 60, roles: { Relawan: 36, Pengawasan: 16, "Keahlian teknis": 10 }, roleTargets: { Relawan: 30, Pengawasan: 12, "Keahlian teknis": 8 }, disbursed: 0, illustration: "drain" }
];

const illustrations = {
  park: `<svg viewBox="0 0 720 300" role="img" aria-label="Taman komunitas" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="pk" x2="0" y2="1"><stop stop-color="#e8f5ed"/><stop offset="1" stop-color="#d4e9dc"/></linearGradient></defs><rect width="720" height="300" fill="url(#pk)"/><circle cx="590" cy="58" r="34" fill="#f3d78f"/><path d="M0 190Q140 130 270 184T540 170T720 178V300H0Z" fill="#c1ddc5"/><path d="M0 225Q160 175 330 222T720 205V300H0Z" fill="#8fbd9c"/><path d="M255 300Q305 225 360 218Q420 222 470 300Z" fill="#e8dfc8"/><rect x="95" y="120" width="120" height="88" rx="5" fill="#f8f3e8"/><path d="M82 126 155 78l74 48Z" fill="#bd866a"/><rect x="139" y="157" width="32" height="51" rx="15" fill="#d7a879"/><g fill="#4e8d68"><circle cx="505" cy="155" r="34"/><circle cx="536" cy="166" r="25"/><circle cx="478" cy="174" r="23"/></g><path d="M505 178v48" stroke="#896c4d" stroke-width="10" stroke-linecap="round"/></svg>`,
  street: `<svg viewBox="0 0 720 300" role="img" aria-label="Penerangan jalan" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="st" x2="0" y2="1"><stop stop-color="#e9f2f0"/><stop offset="1" stop-color="#d7e6df"/></linearGradient></defs><rect width="720" height="300" fill="url(#st)"/><circle cx="570" cy="58" r="30" fill="#f3d78f"/><path d="M0 195 720 142V300H0Z" fill="#b5cbb9"/><path d="M250 300 340 174 450 166 580 300Z" fill="#647b70"/><path d="m386 204 13-2 8 33-13 2Zm28-4 13-2 8 33-13 2Zm29-4 13-2 8 33-13 2Z" fill="#f4e7b5"/><rect x="62" y="94" width="112" height="111" rx="3" fill="#f1e3cb"/><path d="m48 99 70-49 70 49Z" fill="#c98d6e"/><rect x="86" y="128" width="24" height="29" fill="#9bbcac"/><path d="M560 85v120M560 85q-8-35-35-35m35 35q8-35 35-35" stroke="#607b6c" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M525 50h70" stroke="#fff5c9" stroke-width="8" stroke-linecap="round"/><g fill="#6d9d79"><circle cx="620" cy="180" r="28"/><circle cx="647" cy="187" r="22"/></g></svg>`,
  library: `<svg viewBox="0 0 720 300" role="img" aria-label="Perpustakaan komunitas" preserveAspectRatio="xMidYMid slice"><rect width="720" height="300" fill="#e7efe6"/><circle cx="590" cy="54" r="29" fill="#f3d78f"/><path d="M0 230Q180 195 360 225T720 210V300H0Z" fill="#a9c6a7"/><rect x="150" y="82" width="410" height="158" rx="9" fill="#f8f1df" stroke="#dfd4bd" stroke-width="5"/><path d="m130 91 225-67 225 67Z" fill="#bd866a"/><rect x="190" y="112" width="330" height="17" rx="5" fill="#83a98a"/><rect x="190" y="145" width="330" height="17" rx="5" fill="#d49a70"/><rect x="190" y="178" width="330" height="17" rx="5" fill="#8ea9b6"/><rect x="190" y="211" width="330" height="13" rx="4" fill="#83a98a"/><g fill="#6c9b76"><circle cx="92" cy="195" r="27"/><circle cx="118" cy="205" r="21"/></g></svg>`,
  drain: `<svg viewBox="0 0 720 300" role="img" aria-label="Perbaikan drainase" preserveAspectRatio="xMidYMid slice"><rect width="720" height="300" fill="#e8f1ef"/><path d="M0 205Q170 170 350 205T720 180V300H0Z" fill="#a9c4b0"/><path d="M0 252h720v48H0Z" fill="#819b8d"/><path d="M70 300 260 190h170l190 110Z" fill="#71877b"/><path d="M150 300 290 220h105l130 80Z" fill="#d9e5dd"/><path d="M260 242h170" stroke="#607a6c" stroke-width="9"/><g stroke="#71877b" stroke-width="8"><path d="M285 236v46m34-48v48m34-48v48m34-48v48m34-48v48"/></g><rect x="70" y="87" width="120" height="112" rx="4" fill="#f1e3cb"/><path d="m56 92 74-51 74 51Z" fill="#bd866a"/><g fill="#6d9d79"><circle cx="590" cy="167" r="31"/><circle cx="621" cy="179" r="22"/></g><circle cx="535" cy="60" r="28" fill="#f3d78f"/></svg>`
};

const initialActivities = [
  { initials: "RA", name: "Rizky Ananda", action: "mendaftar sebagai relawan", program: "Revitalisasi Taman Cempaka", time: "12 menit lalu", kind: "Relawan" },
  { initials: "DL", name: "Dewi Lestari", action: "mengirim masukan warga", program: "Perbaikan Drainase Cilaki", time: "35 menit lalu", kind: "Masukan warga" },
  { initials: "AF", name: "Andi Firmansyah", action: "bergabung sebagai tenaga ahli", program: "Perpustakaan Mini RW 04", time: "1 jam lalu", kind: "Keahlian teknis" }
];

const storageKey = "suarawarga-state-v2";
const adminEmail = "admin@suarawarga.id";
const demoPassword = "SuaraWarga2026!";
const contributionLabels = {
  Relawan: "mendaftar sebagai relawan",
  Pengawasan: "mendaftar sebagai pengawas lapangan",
  "Keahlian teknis": "mendaftar sebagai tenaga ahli",
  "Masukan warga": "mengirim masukan data warga"
};

let state = loadState();
let currentUser = state.users.find((user) => user.id === localStorage.getItem("suarawarga-session")) || null;
let activeFilter = "all";
let activeView = "dashboard";
let authMode = "login";
let sortByProgress = true;
let capturedLocation = null;
let toastTimeout;
let evidenceDatabase;
const evidenceObjectUrls = new Map();

function openEvidenceDatabase() {
  if (evidenceDatabase) return evidenceDatabase;
  evidenceDatabase = new Promise((resolve, reject) => {
    const request = indexedDB.open("suarawarga-evidence", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("files");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Penyimpanan lampiran lokal tidak tersedia."));
  });
  return evidenceDatabase;
}

async function saveEvidenceFile(id, file) {
  const database = await openEvidenceDatabase();
  await new Promise((resolve, reject) => {
    const transaction = database.transaction("files", "readwrite");
    transaction.objectStore("files").put(file, id);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error("Lampiran bukti gagal disimpan di perangkat."));
    transaction.onabort = () => reject(transaction.error || new Error("Penyimpanan lampiran dibatalkan."));
  });
}

async function getEvidenceFile(id) {
  const database = await openEvidenceDatabase();
  return new Promise((resolve, reject) => {
    const request = database.transaction("files", "readonly").objectStore("files").get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("Lampiran bukti gagal dibaca."));
  });
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const programs = Array.isArray(saved.programs) ? saved.programs : initialPrograms;
    return {
      programs,
      activities: Array.isArray(saved.activities) ? saved.activities : initialActivities,
      contributions: Array.isArray(saved.contributions) ? saved.contributions : [],
      peerReviews: Array.isArray(saved.peerReviews) ? saved.peerReviews : [],
      ledger: Array.isArray(saved.ledger) ? saved.ledger : [],
      users: Array.isArray(saved.users) ? saved.users : [],
      localContributions: Number.isInteger(saved.localContributions) && saved.localContributions > 0 ? saved.localContributions : 0
    };
  } catch (error) {
    console.error("Tidak dapat membaca data Suara Warga dari penyimpanan lokal.", error);
    return { programs: initialPrograms, activities: initialActivities, contributions: [], peerReviews: [], ledger: [], users: [], localContributions: 0 };
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.error("Tidak dapat menyimpan data Suara Warga ke penyimpanan lokal.", error);
    showToast("Penyimpanan gagal. Perubahan mungkin hilang saat halaman ditutup.");
  }
}

function bytesToBase64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)));
}

async function passwordDigest(password, salt) {
  if (!crypto.subtle) throw new Error("Penyimpanan kata sandi terenkripsi tidak didukung. Buka aplikasi di browser modern dengan koneksi aman.");
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" }, key, 256);
  return bytesToBase64(bits);
}

async function createAccount({ name, email, password, role }) {
  const normalizedEmail = email.trim().toLocaleLowerCase("id");
  if (state.users.some((user) => user.email === normalizedEmail)) throw new Error("Email tersebut sudah terdaftar.");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const user = { id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name: name.trim(), email: normalizedEmail, role, salt: bytesToBase64(salt), digest: await passwordDigest(password, salt), createdAt: new Date().toISOString() };
  state.users.push(user);
  saveState();
  return user;
}

async function seedDemoAdmin() {
  const existingAdmin = state.users.find((user) => user.email === adminEmail);
  if (existingAdmin) {
    if (existingAdmin.name === "Admin Dinas Bandung") {
      existingAdmin.name = "Admin Dinas";
      saveState();
    }
    return;
  }
  await createAccount({ name: "Admin Dinas", email: adminEmail, password: demoPassword, role: "admin" });
}

function formatBudget(value) {
  if (value >= 1000000000) return `Rp ${(value / 1000000000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} M`;
  return `Rp ${(value / 1000000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} jt`;
}

function isProgramReady(program) {
  const counts = program.roles || {};
  const targets = program.roleTargets || {};
  return Object.entries(targets).every(([role, target]) => (counts[role] || 0) >= target);
}

function renderPrograms() {
  const grid = document.getElementById("programGrid");
  const query = document.getElementById("searchInput").value.trim().toLocaleLowerCase("id");
  const programs = [...state.programs].sort((a, b) => {
    if (!sortByProgress) return a.title.localeCompare(b.title, "id");
    return (b.contributors / b.target) - (a.contributors / a.target);
  });
  const filtered = programs.filter((program) => {
    const ready = isProgramReady(program);
    const text = `${program.title} ${program.location} ${program.category} ${program.description}`.toLocaleLowerCase("id");
    return (activeFilter === "all" || (activeFilter === "ready" ? ready : !ready)) && text.includes(query);
  });
  const readyCount = state.programs.filter(isProgramReady).length;
  const totalBudget = state.programs.reduce((total, program) => total + Number(program.budget || 0), 0);
  const disbursed = state.programs.reduce((total, program) => total + Number(program.disbursed || 0), 0);
  document.getElementById("metricPrograms").textContent = String(state.programs.length);
  const residentCount = new Set(state.contributions.filter((item) => item.status !== "Ditolak").map((item) => item.email)).size;
  document.getElementById("metricResidents").textContent = residentCount.toLocaleString("id-ID");
  document.getElementById("heroResidents").textContent = residentCount.toLocaleString("id-ID");
  document.getElementById("metricDisbursed").textContent = formatBudget(disbursed);
  document.getElementById("metricTotalBudget").textContent = formatBudget(totalBudget);
  document.querySelector('[data-filter="all"] span').textContent = String(state.programs.length);
  document.querySelector('[data-filter="active"] span').textContent = String(state.programs.length - readyCount);
  document.querySelector('[data-filter="ready"] span').textContent = String(readyCount);
  document.getElementById("sectionProgramCount").textContent = String(state.programs.length);
  document.getElementById("navProgramCount").textContent = String(state.programs.length).padStart(2, "0");
  grid.innerHTML = filtered.map((program) => {
    const ready = isProgramReady(program);
    const progress = Math.min(100, Math.round(program.contributors / Math.max(program.target, 1) * 100));
    const quotaText = Object.entries(program.roleTargets || {}).map(([role, target]) => `${role}: ${program.roles?.[role] || 0}/${target}`).join(" · ");
    return `<article class="program-card"><div class="program-image">${illustrations[program.illustration] || illustrations.park}<span class="program-category">${escapeHTML(program.category)}</span><span class="program-status ${ready ? "ready" : ""}">${ready ? "Siap eksekusi" : escapeHTML(program.status === "Menunggu review" ? "Menunggu review" : "Butuh kontribusi")}</span></div>
      <div class="program-body"><div class="program-location">${escapeHTML(program.location)}</div><h3>${escapeHTML(program.title)}</h3><p class="program-description">${escapeHTML(program.description)}</p>
      <div class="contribution-summary"><strong>${program.contributors} dari ${program.target} aktivitas</strong><span>${progress}%</span></div><div class="progress-track" role="progressbar" aria-label="Kontribusi ${escapeHTML(program.title)}" aria-valuemin="0" aria-valuemax="${program.target}" aria-valuenow="${Math.min(program.contributors, program.target)}"><div class="progress-fill ${ready ? "ready-fill" : ""}" style="width:${progress}%"></div></div>
      <p class="quota-summary">${escapeHTML(quotaText)}</p><div class="program-footer"><div class="budget-label">Pagu<strong>${formatBudget(program.budget)}</strong></div><button class="contribute-button" data-contribute="${escapeHTML(program.id)}" ${ready ? "disabled" : ""}>${ready ? "Siap eksekusi ✓" : "Kontribusi +"} </button></div></div></article>`;
  }).join("");
  document.getElementById("emptyState").hidden = filtered.length !== 0;
  grid.querySelectorAll("[data-contribute]").forEach((button) => button.addEventListener("click", () => openContribution(button.dataset.contribute)));
}

function renderActivities() {
  document.getElementById("activityList").innerHTML = state.activities.slice(0, 6).map((activity, index) => `<article class="activity-item"><div class="activity-avatar color-${index % 3}">${escapeHTML(activity.initials)}</div><div class="activity-copy"><strong>${escapeHTML(activity.name)}</strong> ${escapeHTML(activity.action)} di <strong>${escapeHTML(activity.program)}</strong><small>${escapeHTML(activity.time)} · ${escapeHTML(activity.kind)}</small></div></article>`).join("");
}

function renderLedger() {
  const body = document.getElementById("ledgerBody");
  body.innerHTML = [...state.ledger].reverse().map((entry) => `<tr><td>${escapeHTML(new Date(entry.time).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }))}</td><td><strong>${escapeHTML(entry.program)}</strong><small>${escapeHTML(entry.description)}</small></td><td>${escapeHTML(entry.reference)}</td><td><span class="ledger-status ${entry.type === "alokasi" ? "allocation-status" : ""}">${escapeHTML(entry.status)}</span></td><td>${entry.amount ? escapeHTML(formatBudget(entry.amount)) : "—"}</td></tr>`).join("");
  document.getElementById("ledgerEmpty").hidden = state.ledger.length > 0;
}

function renderAdmin() {
  document.getElementById("adminSummary").innerHTML = [
    ["Inisiatif", state.programs.length],
    ["Siap eksekusi", state.programs.filter(isProgramReady).length],
    ["Menunggu verifikasi", state.contributions.filter((item) => item.status === "Menunggu verifikasi admin" || item.status === "Menunggu verifikasi silang").length],
    ["Pagu keseluruhan", formatBudget(state.programs.reduce((sum, item) => sum + Number(item.budget || 0), 0))]
  ].map(([label, value]) => `<div class="admin-stat"><small>${escapeHTML(label)}</small><strong>${escapeHTML(value)}</strong></div>`).join("");

  const verificationList = document.getElementById("verificationList");
  const pending = state.contributions.filter((item) => item.status !== "Ditolak");
  document.getElementById("pendingCount").textContent = String(pending.filter((item) => item.status === "Menunggu verifikasi admin" || item.status === "Menunggu verifikasi silang").length);
  for (const url of evidenceObjectUrls.values()) URL.revokeObjectURL(url);
  evidenceObjectUrls.clear();
  verificationList.innerHTML = pending.length ? pending.map((item) => {
    const program = state.programs.find((candidate) => candidate.id === item.programId);
    const remaining = program ? Math.max(0, program.budget - (program.disbursed || 0)) : 0;
    const location = item.location ? `${item.location.latitude.toFixed(4)}, ${item.location.longitude.toFixed(4)}` : "GPS tidak disertakan";
    const peers = state.peerReviews.filter((review) => review.contributionId === item.id);
    return `<article class="verification-item"><div class="verification-top"><strong>${escapeHTML(item.name)}</strong><span class="ledger-status">${escapeHTML(item.status)}</span></div><p>${escapeHTML(item.role)} · ${escapeHTML(program?.title || "Program dihapus")}</p><small><a class="evidence-link" data-evidence="${escapeHTML(item.id)}" href="#">Buka bukti: ${escapeHTML(item.fileName)}</a> · ${escapeHTML(new Date(item.time).toLocaleString("id-ID"))}</small><small>Lokasi: ${escapeHTML(location)}${item.location ? " · GPS browser, belum diverifikasi independen" : ""}</small>${peers.length ? `<small>Verifikasi silang oleh ${escapeHTML(peers.map((peer) => peer.name).join(", "))}</small>` : ""}${item.note ? `<p class="verification-note">${escapeHTML(item.note)}</p>` : ""}<div class="verification-actions">${item.status === "Menunggu verifikasi silang" ? `<span class="peer-waiting">Menunggu verifikasi silang warga</span>` : ""}${item.status === "Menunggu verifikasi admin" ? `<button class="small-action verify-evidence" data-id="${escapeHTML(item.id)}">Verifikasi bukti</button><button class="small-action reject-evidence" data-id="${escapeHTML(item.id)}">Tolak</button>` : ""}${item.status === "Terverifikasi" && isProgramReady(program || {}) && remaining > 0 ? `<button class="small-action approve-allocation" data-id="${escapeHTML(item.id)}" data-remaining="${remaining}">Setujui pencairan simulasi</button>` : item.status === "Terverifikasi" ? `<span class="peer-waiting">Menunggu ambang partisipasi</span>` : ""}</div></article>`;
  }).join("") : `<p class="empty-admin">Belum ada bukti kontribusi dari warga.</p>`;

  const memberList = document.getElementById("memberList");
  memberList.innerHTML = state.users.filter((user) => user.role !== "demo").map((user) => `<div class="member-row"><span class="member-initial">${escapeHTML(initialsFor(user.name))}</span><span><strong>${escapeHTML(user.name)}</strong><small>${escapeHTML(user.email)}</small></span><i class="member-role ${user.role === "admin" ? "role-admin" : ""}">${user.role === "admin" ? "Admin" : "Warga"}</i><button class="small-action edit-member" data-id="${escapeHTML(user.id)}" type="button">Ubah nama</button></div>`).join("");
  memberList.querySelectorAll(".edit-member").forEach((button) => button.addEventListener("click", () => {
    if (currentUser?.role !== "admin") return showToast("Hanya admin yang dapat mengubah nama anggota.");
    const user = state.users.find((item) => item.id === button.dataset.id);
    if (!user) return showToast("Akun tidak ditemukan.");
    document.getElementById("memberEditForm").dataset.userId = user.id;
    document.getElementById("memberEditName").value = user.name;
    document.getElementById("memberEditDialog").showModal();
  }));
  document.querySelectorAll(".verify-evidence").forEach((button) => button.addEventListener("click", () => verifyEvidence(button.dataset.id)));
  renderPeerReviews();
  document.querySelectorAll(".evidence-link").forEach((link) => link.addEventListener("click", async (event) => {
    event.preventDefault();
    const viewer = window.open("about:blank", "_blank");
    if (!viewer) return showToast("Popup diblokir. Izinkan popup untuk membuka bukti lampiran.");
    try {
      const file = await getEvidenceFile(link.dataset.evidence);
      if (!file) {
        viewer.close();
        return showToast("Lampiran tidak ditemukan pada penyimpanan lokal perangkat ini.");
      }
      const objectUrl = URL.createObjectURL(file);
      evidenceObjectUrls.set(link.dataset.evidence, objectUrl);
      viewer.opener = null;
      viewer.location.replace(objectUrl);
    } catch (error) {
      viewer.close();
      console.error("Gagal membuka bukti kontribusi.", error);
      showToast(error.message);
    }
  }));
  document.querySelectorAll(".reject-evidence").forEach((button) => button.addEventListener("click", () => rejectEvidence(button.dataset.id)));
  document.querySelectorAll(".approve-allocation").forEach((button) => button.addEventListener("click", () => approveAllocation(button.dataset.id, Number(button.dataset.remaining))));
}

function renderPeerReviews() {
  const section = document.getElementById("peerReviewSection");
  section.hidden = currentUser?.role !== "resident" || activeView === "admin" || activeView === "ledger";
  if (!currentUser || currentUser.role !== "resident") return;
  const available = state.contributions.filter((item) => item.status === "Menunggu verifikasi silang" && item.email !== currentUser.email && !state.peerReviews.some((review) => review.contributionId === item.id && review.email === currentUser.email));
  const list = document.getElementById("peerReviewList");
  list.innerHTML = available.length ? available.map((item) => {
    const program = state.programs.find((candidate) => candidate.id === item.programId);
    return `<article class="peer-review-card"><div><strong>${escapeHTML(item.name)}</strong><p>${escapeHTML(item.role)} · ${escapeHTML(program?.title || "Program")}</p><small>${escapeHTML(item.fileName)} · ${escapeHTML(item.note || "Tidak ada catatan tambahan")}</small></div><button class="small-action peer-confirm" data-id="${escapeHTML(item.id)}">Saya sudah memeriksa</button></article>`;
  }).join("") : `<p class="empty-admin">Belum ada laporan lain yang menunggu verifikasi silang.</p>`;
  list.querySelectorAll(".peer-confirm").forEach((button) => button.addEventListener("click", () => confirmPeerReview(button.dataset.id)));
}

function confirmPeerReview(id) {
  const item = state.contributions.find((contribution) => contribution.id === id);
  if (!item || item.status !== "Menunggu verifikasi silang" || item.email === currentUser.email || state.peerReviews.some((review) => review.contributionId === id && review.email === currentUser.email)) return showToast("Laporan ini tidak tersedia untuk verifikasi silang akunmu.");
  state.peerReviews.push({ id: `peer-${Date.now()}`, contributionId: item.id, name: currentUser.name, email: currentUser.email, time: new Date().toISOString() });
  item.status = "Menunggu verifikasi admin";
  addLedgerEntry({ program: state.programs.find((program) => program.id === item.programId)?.title || "Program", description: "Lolos satu verifikasi silang warga", reference: item.id, status: "Menunggu pemeriksaan admin" });
  saveState();
  renderPeerReviews();
  renderAdmin();
  renderLedger();
  showToast("Verifikasi silang tercatat. Laporan diteruskan ke admin.");
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function initialsFor(name) {
  return String(name).trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toLocaleUpperCase("id");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3500);
}

function openContribution(programId) {
  if (!currentUser) return showToast("Masuk atau registrasi untuk mengirim kontribusi.");
  const program = state.programs.find((item) => item.id === programId);
  if (!program || isProgramReady(program)) return;
  document.getElementById("contributionProgramId").value = program.id;
  document.getElementById("contributionTitle").textContent = `Kontribusi untuk ${program.title}`;
  document.getElementById("contributionDescription").textContent = "Aktivitas dihitung setelah satu warga lain dan admin memeriksa bukti. Satu akun hanya dapat mendaftar sekali untuk tiap peran di program ini.";
  capturedLocation = null;
  document.getElementById("locationStatus").textContent = "Lokasi belum ditambahkan";
  document.getElementById("contributionDialog").showModal();
}

function setView(view) {
  if ((view === "admin" || view === "members") && currentUser?.role !== "admin") return showToast("Menu ini hanya tersedia untuk admin.");
  activeView = view;
  const labels = { dashboard: "Ringkasan", programs: "Program warga", activity: "Aktivitas", admin: "Dashboard dinas", ledger: "Ledger anggaran" };
  document.getElementById("breadcrumbCurrent").textContent = labels[view] || labels.dashboard;
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === view));
  document.getElementById("adminPanel").hidden = view !== "admin";
  document.getElementById("peerReviewSection").hidden = currentUser?.role !== "resident" || view === "admin" || view === "ledger";
  document.getElementById("programSection").hidden = view === "admin" || view === "ledger";
  document.getElementById("activitySection").hidden = view === "admin" || view === "ledger";
  document.getElementById("ledgerSection").hidden = view !== "ledger";
  document.querySelector(".hero-card").hidden = view === "admin" || view === "ledger";
  document.querySelector(".metrics-grid").hidden = view === "admin" || view === "ledger";
  document.querySelector(".welcome-row").hidden = view === "admin" || view === "ledger";
  if (view === "admin") renderAdmin();
  if (view === "ledger") renderLedger();
  if (view === "programs") document.getElementById("programSection").scrollIntoView({ behavior: "smooth", block: "start" });
  else if (view === "activity") document.getElementById("activitySection").scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateAuthenticatedUI() {
  const screen = document.getElementById("authScreen");
  screen.hidden = Boolean(currentUser);
  document.getElementById("topRole").textContent = currentUser ? `${currentUser.name} · ${currentUser.role === "admin" ? "Admin" : "Warga"}` : "Tamu";
  document.getElementById("authAction").textContent = currentUser ? "Keluar" : "Masuk";
  document.getElementById("authAction").setAttribute("aria-label", currentUser ? "Keluar dari akun" : "Masuk atau registrasi");
  document.getElementById("welcomeName").textContent = currentUser ? currentUser.name : "Warga";
  document.getElementById("sidebarUserName").textContent = currentUser ? currentUser.name : "Belum masuk";
  document.getElementById("sidebarUserRole").textContent = currentUser ? `${currentUser.role === "admin" ? "Admin" : "Warga"} · Akun terverifikasi lokal` : "Silakan masuk ke akun";
  document.getElementById("sidebarAvatar").textContent = currentUser ? initialsFor(currentUser.name) : "??";
  document.querySelector(".user-profile").setAttribute("aria-label", currentUser ? `Profil ${currentUser.name}` : "Belum ada pengguna masuk");
  document.querySelector(".admin-nav").hidden = currentUser?.role !== "admin";
  document.getElementById("openProposal").hidden = currentUser?.role !== "resident";
  renderPeerReviews();
  if (currentUser) {
    document.querySelector("#authAction").title = currentUser.email;
    document.getElementById("authScreen").setAttribute("aria-hidden", "true");
  } else {
    document.getElementById("authScreen").removeAttribute("aria-hidden");
    setView("dashboard");
  }
}

function addLedgerEntry({ program, description, reference, status, amount = 0, type = "aktivitas" }) {
  state.ledger.push({ id: `ledger-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, time: new Date().toISOString(), program, description, reference, status, amount, type });
}

function verifyEvidence(id) {
  const evidence = state.contributions.find((item) => item.id === id);
  const program = state.programs.find((item) => item.id === evidence?.programId);
  if (!evidence || evidence.status !== "Menunggu verifikasi admin" || !program) return;
  const count = Number(program.roles[evidence.role] || 0);
  const target = Number(program.roleTargets[evidence.role] || 0);
  if (target && count >= target) return showToast(`Kuota ${evidence.role} sudah terpenuhi; bukti ini tidak dihitung lagi.`);
  evidence.status = "Terverifikasi";
  evidence.verifiedBy = currentUser.email;
  program.roles[evidence.role] = count + 1;
  program.contributors = Object.values(program.roles).reduce((total, value) => total + Number(value || 0), 0);
  if (isProgramReady(program)) program.status = "Siap eksekusi";
  addLedgerEntry({ program: program.title, description: `Bukti ${evidence.role} diverifikasi`, reference: evidence.id, status: "Aktivitas terverifikasi" });
  saveState();
  renderAdmin();
  renderPrograms();
  renderLedger();
  showToast(isProgramReady(program) ? "Kuota peran terpenuhi. Program siap eksekusi." : "Bukti terverifikasi dan kontribusi masuk ke ledger.");
}

function rejectEvidence(id) {
  const evidence = state.contributions.find((item) => item.id === id);
  if (!evidence || (evidence.status !== "Menunggu verifikasi admin" && evidence.status !== "Menunggu verifikasi silang")) return;
  evidence.status = "Ditolak";
  evidence.verifiedBy = currentUser.email;
  addLedgerEntry({ program: state.programs.find((item) => item.id === evidence.programId)?.title || "Program", description: `Bukti ${evidence.role} ditolak`, reference: evidence.id, status: "Ditolak" });
  saveState();
  renderAdmin();
  renderLedger();
  showToast("Bukti ditolak dan alasan dapat disampaikan secara langsung kepada warga.");
}

function approveAllocation(id, remaining) {
  const evidence = state.contributions.find((item) => item.id === id);
  const program = state.programs.find((item) => item.id === evidence?.programId);
  if (!evidence || evidence.status !== "Terverifikasi" || !program || !isProgramReady(program) || remaining <= 0) return;
  const amount = Math.min(1000000, remaining);
  program.disbursed = (program.disbursed || 0) + amount;
  evidence.status = "Alokasi disetujui (simulasi)";
  addLedgerEntry({ program: program.title, description: `Tahap alokasi untuk aktivitas ${evidence.role}`, reference: evidence.id, status: "Disetujui · simulasi", amount, type: "alokasi" });
  saveState();
  renderAdmin();
  renderLedger();
  showToast(`Persetujuan alokasi ${formatBudget(amount)} dicatat sebagai simulasi.`);
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll(".filter-tab").forEach((tab) => tab.addEventListener("click", () => {
  activeFilter = tab.dataset.filter;
  document.querySelectorAll(".filter-tab").forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderPrograms();
}));
document.getElementById("searchInput").addEventListener("input", renderPrograms);
document.getElementById("sortButton").addEventListener("click", (event) => {
  sortByProgress = !sortByProgress;
  event.currentTarget.lastElementChild.textContent = sortByProgress ? "⌄" : "A–Z";
  renderPrograms();
});
document.getElementById("viewAllPrograms").addEventListener("click", () => setView("programs"));
document.getElementById("loadMoreButton").addEventListener("click", () => currentUser?.role === "resident" ? document.getElementById("proposalDialog").showModal() : showToast("Masuk sebagai warga untuk mengajukan program."));
document.getElementById("openProposal").addEventListener("click", () => document.getElementById("proposalDialog").showModal());
document.getElementById("adminNewProject").addEventListener("click", () => document.getElementById("initiativeDialog").showModal());
document.getElementById("openMemberRegistration").addEventListener("click", () => document.getElementById("memberDialog").showModal());
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.close).close()));
document.querySelectorAll(".app-dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));

document.getElementById("captureLocation").addEventListener("click", () => {
  if (!navigator.geolocation) return showToast("Geolokasi tidak didukung browser ini.");
  document.getElementById("locationStatus").textContent = "Meminta izin lokasi...";
  navigator.geolocation.getCurrentPosition((position) => {
    capturedLocation = { latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy, capturedAt: new Date().toISOString() };
    document.getElementById("locationStatus").textContent = `Lokasi tercatat (${Math.round(position.coords.accuracy)} m).`;
  }, (error) => {
    document.getElementById("locationStatus").textContent = "Lokasi tidak tersedia.";
    showToast(`Lokasi gagal diambil: ${error.message}`);
  }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 });
});

document.getElementById("contributionForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const program = state.programs.find((item) => item.id === document.getElementById("contributionProgramId").value);
  const role = document.getElementById("contributionType").value;
  const file = document.getElementById("evidenceFile").files[0];
  if (!program || !role || !file) return showToast("Pilih peran dan lampirkan bukti aktivitas.");
  if (file.size > 5 * 1024 * 1024) return showToast("Ukuran berkas melebihi batas 5 MB.");
  if (state.contributions.some((item) => item.programId === program.id && item.email === currentUser.email && item.role === role && item.status !== "Ditolak")) return showToast("Kontribusi untuk peran ini di program tersebut sudah pernah dikirim.");
  const contributionId = `bukti-${Date.now()}`;
  try {
    await saveEvidenceFile(contributionId, file);
  } catch (error) {
    console.error("Gagal menyimpan berkas kontribusi.", error);
    return showToast(error.message);
  }
  const contribution = {
    id: contributionId, programId: program.id, name: currentUser.name, email: currentUser.email, role,
    note: document.getElementById("contributionNote").value.trim(), fileName: file.name, fileType: file.type,
    location: capturedLocation, time: new Date().toISOString(), status: "Menunggu verifikasi silang"
  };
  state.contributions.unshift(contribution);
  state.localContributions += 1;
  state.activities.unshift({ initials: initialsFor(currentUser.name), name: currentUser.name, email: currentUser.email, action: contributionLabels[role], program: program.title, time: "Baru saja · menunggu verifikasi", kind: role });
  saveState();
  renderAdmin();
  document.getElementById("contributionForm").reset();
  capturedLocation = null;
  document.getElementById("locationStatus").textContent = "Lokasi belum ditambahkan";
  document.getElementById("contributionDialog").close();
  renderPeerReviews();
  showToast("Bukti tersimpan. Menunggu verifikasi silang warga sebelum ditinjau admin.");
});

document.getElementById("proposalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("proposalName").value.trim();
  const location = document.getElementById("proposalLocation").value.trim();
  const description = document.getElementById("proposalDescription").value.trim();
  if (!title || !location || !description) return;
  const target = Number(document.getElementById("proposalThreshold").value);
  state.programs.unshift({
    id: `usulan-${Date.now()}`, title, location, description, category: "Usulan warga", budget: 50000000,
    contributors: 0, target, roles: { Relawan: 0, Pengawasan: 0, "Keahlian teknis": 0 },
    roleTargets: { Relawan: target - 2, Pengawasan: 1, "Keahlian teknis": 1 }, disbursed: 0, status: "Menunggu review", illustration: "park"
  });
  saveState();
  renderPrograms();
  document.getElementById("proposalForm").reset();
  document.getElementById("proposalDialog").close();
  setView("programs");
  showToast("Usulan warga dikirim. Pagu dan kuota final menunggu peninjauan admin.");
});

document.getElementById("initiativeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentUser?.role !== "admin") return showToast("Hanya admin yang dapat membuka inisiatif.");
  const targetVolunteers = Number(document.getElementById("initiativeVolunteers").value);
  const targetSupervisors = Number(document.getElementById("initiativeSupervisors").value);
  const targetExperts = Number(document.getElementById("initiativeExperts").value);
  const targets = { Relawan: targetVolunteers, Pengawasan: targetSupervisors, "Keahlian teknis": targetExperts };
  if (!Object.values(targets).some((value) => value > 0)) return showToast("Tetapkan setidaknya satu kuota partisipasi.");
  const project = {
    id: `inisiatif-${Date.now()}`, title: document.getElementById("initiativeName").value.trim(),
    location: document.getElementById("initiativeLocation").value.trim(), description: document.getElementById("initiativeDescription").value.trim(),
    category: "Inisiatif dinas", budget: Number(document.getElementById("initiativeBudget").value),
    contributors: 0, target: Object.values(targets).reduce((total, value) => total + value, 0),
    roles: { Relawan: 0, Pengawasan: 0, "Keahlian teknis": 0 }, roleTargets: targets, disbursed: 0, status: "Terbuka", illustration: "park"
  };
  state.programs.unshift(project);
  addLedgerEntry({ program: project.title, description: "Inisiatif proyek dipublikasikan", reference: project.id, status: "Inisiatif terbuka", amount: project.budget });
  saveState();
  renderPrograms();
  renderAdmin();
  renderLedger();
  document.getElementById("initiativeForm").reset();
  document.getElementById("initiativeDialog").close();
  showToast("Inisiatif diterbitkan di prototipe.");
});

document.getElementById("memberForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (currentUser?.role !== "admin") return showToast("Hanya admin yang dapat mendaftarkan anggota.");
  try {
    await createAccount({
      name: document.getElementById("memberName").value,
      email: document.getElementById("memberEmail").value,
      password: document.getElementById("memberPassword").value,
      role: document.getElementById("memberRole").value
    });
    renderAdmin();
    document.getElementById("memberForm").reset();
    document.getElementById("memberDialog").close();
    showToast("Anggota berhasil didaftarkan di perangkat ini.");
  } catch (error) {
    showToast(error.message);
  }
});

document.getElementById("memberEditForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentUser?.role !== "admin") return showToast("Hanya admin yang dapat mengubah nama anggota.");
  const user = state.users.find((item) => item.id === event.currentTarget.dataset.userId);
  const name = document.getElementById("memberEditName").value.trim();
  if (!user) return showToast("Akun tidak ditemukan.");
  if (!name) return showToast("Nama tampilan tidak boleh kosong.");

  user.name = name;
  state.contributions.filter((item) => item.email === user.email).forEach((item) => { item.name = name; });
  state.peerReviews.filter((item) => item.email === user.email).forEach((item) => { item.name = name; });
  state.activities.filter((item) => item.email === user.email).forEach((item) => {
    item.name = name;
    item.initials = initialsFor(name);
  });
  saveState();
  updateAuthenticatedUI();
  renderAdmin();
  renderActivities();
  document.getElementById("memberEditDialog").close();
  showToast("Nama tampilan anggota berhasil diperbarui. Email login tidak berubah.");
});

document.querySelectorAll("[data-auth-mode]").forEach((tab) => tab.addEventListener("click", () => {
  authMode = tab.dataset.authMode;
  document.querySelectorAll(".auth-tab").forEach((item) => {
    item.classList.toggle("active", item === tab);
    item.setAttribute("aria-selected", String(item === tab));
  });
  const registering = authMode === "register";
  document.getElementById("authName").hidden = !registering;
  document.getElementById("authNameLabel").hidden = !registering;
  document.getElementById("authName").required = registering;
  document.getElementById("authTerms").hidden = !registering;
  document.getElementById("authTitle").textContent = registering ? "Mulai dari lingkunganmu." : "Bangun kota, bersama.";
  document.getElementById("authSubmit").textContent = registering ? "Buat akun warga →" : "Masuk ke portal →";
  document.getElementById("authPassword").autocomplete = registering ? "new-password" : "current-password";
  document.getElementById("authError").textContent = "";
}));

document.getElementById("authForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("authEmail").value.trim().toLocaleLowerCase("id");
  const password = document.getElementById("authPassword").value;
  const errorElement = document.getElementById("authError");
  errorElement.textContent = "";
  try {
    if (authMode === "register") {
      if (!document.getElementById("termsCheck").checked) throw new Error("Konfirmasi bahwa kamu memahami batasan prototipe ini.");
      currentUser = await createAccount({ name: document.getElementById("authName").value, email, password, role: "resident" });
      localStorage.setItem("suarawarga-session", currentUser.id);
      showToast("Registrasi berhasil. Selamat datang di Suara Warga!");
    } else {
      const user = state.users.find((item) => item.email === email);
      if (!user) throw new Error("Akun tidak ditemukan. Silakan registrasi warga atau periksa email demo admin.");
      const actualDigest = await passwordDigest(password, Uint8Array.from(atob(user.salt), (char) => char.charCodeAt(0)));
      if (actualDigest !== user.digest) throw new Error("Kata sandi tidak sesuai.");
      currentUser = user;
      localStorage.setItem("suarawarga-session", currentUser.id);
      showToast(`Berhasil masuk sebagai ${user.role === "admin" ? "admin" : "warga"}.`);
    }
    updateAuthenticatedUI();
    renderAdmin();
  } catch (error) {
    errorElement.textContent = error.message;
  }
});

document.getElementById("authAction").addEventListener("click", () => {
  if (!currentUser) return document.getElementById("authScreen").hidden = false;
  currentUser = null;
  localStorage.removeItem("suarawarga-session");
  document.getElementById("authForm").reset();
  updateAuthenticatedUI();
  showToast("Kamu sudah keluar.");
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("searchInput").focus();
  }
  if (event.key === "Escape") document.querySelectorAll(".app-dialog[open]").forEach((dialog) => dialog.close());
});

async function initializeApp() {
  renderPrograms();
  renderActivities();
  renderLedger();
  try {
    await seedDemoAdmin();
  } catch (error) {
    document.getElementById("authError").textContent = error.message;
  }
  updateAuthenticatedUI();
}

initializeApp();
