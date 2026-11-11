
document.addEventListener("DOMContentLoaded", () => {

  const style = document.createElement("style");

  style.textContent = `
    #sw-chat-button {
      position: fixed;
      bottom: 25px;
      right: 25px;
      width: 62px;
      height: 62px;
      border: none;
      border-radius: 50%;
      background: #176b52;
      color: white;
      font-size: 27px;
      cursor: pointer;
      z-index: 99999;
      box-shadow: 0 4px 15px #0003;
    }

    #sw-chat-box {
      display: none;
      position: fixed;
      bottom: 100px;
      right: 25px;
      width: 360px;
      max-width: calc(100vw - 30px);
      height: 510px;
      max-height: calc(100vh - 125px);
      background: white;
      border-radius: 17px;
      box-shadow: 0 5px 30px #0003;
      overflow: hidden;
      z-index: 99999;
      font-family: Arial, sans-serif;
      border: 1px solid #e5eae7;
    }

    #sw-chat-header {
      background: #176b52;
      color: white;
      padding: 17px;
    }

    #sw-chat-header strong {
      font-size: 16px;
    }

    #sw-chat-header small {
      display: block;
      margin-top: 5px;
      opacity: .85;
    }

    #sw-close {
      float: right;
      cursor: pointer;
      font-size: 19px;
    }

    #sw-chat-messages {
      height: 340px;
      overflow-y: auto;
      padding: 13px;
      font-size: 13px;
    }

    .sw-message {
      padding: 11px;
      border-radius: 11px;
      margin-bottom: 10px;
      background: #edf4f1;
      line-height: 1.6;
      white-space: pre-wrap;
    }

    .sw-message.user {
      background: #dcefe4;
      text-align: right;
      margin-left: 35px;
    }

    .sw-menu-title {
      font-weight: bold;
      margin: 12px 0 8px;
      color: #244c3d;
    }

    .sw-quick-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 12px;
    }

    .sw-quick-buttons button {
      padding: 11px 7px;
      background: white;
      color: #176b52;
      border: 1px solid #cbded3;
      border-radius: 9px;
      cursor: pointer;
      font-size: 12px;
      text-align: left;
    }

    .sw-quick-buttons button:hover {
      background: #edf6f0;
    }

    .sw-quick-buttons button span {
      display: block;
      font-size: 19px;
      margin-bottom: 5px;
    }

    .sw-menu-home {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background: #edf4f1;
      color: #176b52;
      cursor: pointer;
      margin-top: 5px;
    }

    #sw-chat-form {
      display: flex;
      padding: 9px;
      gap: 6px;
      border-top: 1px solid #eee;
    }

    #sw-chat-input {
      flex: 1;
      min-width: 0;
      padding: 11px;
      border: 1px solid #ddd;
      border-radius: 9px;
      outline-color: #176b52;
    }

    #sw-chat-form button {
      background: #176b52;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 9px;
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);

  document.body.insertAdjacentHTML("beforeend", `
    <button id="sw-chat-button" aria-label="Buka bantuan">
      💬
    </button>

    <div id="sw-chat-box">

      <div id="sw-chat-header">
        <span id="sw-close">✕</span>
        <strong>🤖 Asisten Suara Warga</strong>
        <small>● Pusat Bantuan Masyarakat</small>
      </div>

      <div id="sw-chat-messages"></div>

      <form id="sw-chat-form">
        <input id="sw-chat-input"
          placeholder="Ketik pertanyaan Anda..."
          autocomplete="off">
        <button type="submit">➤</button>
      </form>

    </div>
  `);

  const box = document.getElementById("sw-chat-box");
  const messages = document.getElementById("sw-chat-messages");
  const input = document.getElementById("sw-chat-input");

  function addMessage(text, type = "") {
    const div = document.createElement("div");
    div.className = "sw-message " + type;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showMenu() {
    messages.innerHTML = "";

    addMessage(
      "Halo! Selamat datang di Suara Warga 👋\n\nSaya Asisten Suara Warga. Saya siap membantu Anda mendapatkan informasi mengenai pelayanan dan partisipasi masyarakat."
    );

    const title = document.createElement("div");
    title.className = "sw-menu-title";
    title.textContent = "Apa yang ingin Anda lakukan?";
    messages.appendChild(title);

    const menu = document.createElement("div");
    menu.className = "sw-quick-buttons";

    const options = [
      ["📢", "Pengaduan", "pengaduan"],
      ["🏘️", "Program", "program"],
      ["🤝", "Kontribusi", "kontribusi"],
      ["📊", "Transparansi", "transparansi"],
      ["❓", "Bantuan / FAQ", "bantuan"]
    ];

    options.forEach(option => {
      const button = document.createElement("button");
      button.innerHTML = `<span>${option[0]}</span>${option[1]}`;

      button.onclick = () => {
        addMessage(option[1], "user");
        showAnswer(option[2]);
      };

      menu.appendChild(button);
    });

    messages.appendChild(menu);
    messages.scrollTop = messages.scrollHeight;
  }

  function showAnswer(category) {

    const answers = {

      pengaduan:
        "📢 PENGADUAN MASYARAKAT\n\nAnda dapat menyampaikan aspirasi dan permasalahan lingkungan melalui fitur pengaduan.\n\nLangkah-langkah:\n1. Buka fitur pengaduan.\n2. Tuliskan permasalahan.\n3. Sertakan lokasi kejadian.\n4. Kirim laporan melalui sistem.\n\nContoh: jalan rusak, drainase tersumbat, dan fasilitas umum.",

      program:
        "🏘️ PROGRAM WARGA\n\nWarga dapat mengusulkan program prioritas sesuai kebutuhan lingkungan.\n\nLangkah-langkah:\n1. Buka menu Program Warga.\n2. Pilih program yang tersedia atau usulkan program baru.\n3. Isi nama dan lokasi program.\n4. Jelaskan manfaat program bagi masyarakat.\n5. Kirim usulan.\n\nUsulan dapat ditinjau sesuai mekanisme platform.",

      kontribusi:
        "🤝 KONTRIBUSI WARGA\n\nAnda dapat ikut berpartisipasi dalam pembangunan lingkungan.\n\nBentuk kontribusi:\n1. Menjadi relawan.\n2. Memberikan masukan warga.\n3. Membantu pengawasan lapangan.\n4. Menyumbangkan keahlian teknis.\n\nSilakan buka fitur kontribusi pada program yang tersedia.",

      transparansi:
        "📊 TRANSPARANSI ANGGARAN\n\nFitur Ledger Anggaran membantu masyarakat melihat informasi anggaran dan pencatatan dana yang tersedia pada platform.\n\nSilakan buka menu Ledger Anggaran untuk melihat informasi yang ditampilkan.\n\nTransparansi membantu meningkatkan kepercayaan masyarakat.",

      bantuan:
        "❓ PUSAT BANTUAN / FAQ\n\nBerikut beberapa pertanyaan umum:\n\n1. Apa itu Suara Warga?\nPlatform partisipasi masyarakat untuk menyampaikan aspirasi dan mendukung program lingkungan.\n\n2. Siapa yang dapat berpartisipasi?\nMasyarakat yang menggunakan platform sesuai ketentuan.\n\n3. Apa fungsi Dashboard Dinas?\nMenyediakan tampilan informasi dan pengelolaan bagi pihak dinas terkait.\n\n4. Apakah warga dapat mengusulkan program?\nYa, melalui fitur pengajuan program masyarakat."
    };

    addMessage(answers[category] || "Maaf, informasi belum tersedia.");
    addHomeButton();
  }

  function addHomeButton() {
    const button = document.createElement("button");
    button.className = "sw-menu-home";
    button.textContent = "↩ Kembali ke Menu Utama";

    button.onclick = showMenu;
    messages.appendChild(button);

    messages.scrollTop = messages.scrollHeight;
  }

  function getAnswer(question) {
    const q = question.toLowerCase();

    if (q.includes("pengaduan") || q.includes("lapor")) {
      return "Untuk pengaduan, silakan buka fitur pengaduan dan isi informasi permasalahan serta lokasi kejadian.";
    }

    if (q.includes("program") || q.includes("usul")) {
      return "Anda dapat mengajukan program melalui menu Program Warga. Isi nama program, lokasi, deskripsi, dan kebutuhan warga.";
    }

    if (q.includes("relawan") || q.includes("kontribusi")) {
      return "Anda dapat bergabung menjadi relawan melalui fitur Kontribusi pada program yang tersedia.";
    }

    if (q.includes("anggaran") || q.includes("ledger")) {
      return "Silakan buka menu Ledger Anggaran untuk melihat informasi transparansi yang tersedia.";
    }

    if (q.includes("dashboard") || q.includes("dinas")) {
      return "Dashboard Dinas merupakan bagian untuk membantu pihak terkait memantau informasi dan aktivitas pada platform.";
    }

    if (q.includes("status")) {
      return "Silakan gunakan fitur pengecekan status jika tersedia pada platform. Pastikan Anda memiliki informasi laporan.";
    }

    if (q.includes("halo") || q.includes("hai")) {
      return "Halo! Selamat datang di Suara Warga. Ada yang bisa saya bantu?";
    }

    return "Maaf, saya belum memahami pertanyaan Anda. Silakan pilih kategori bantuan atau gunakan tombol menu utama.";
  }

  document.getElementById("sw-chat-button").onclick = () => {
    box.style.display = "block";
    showMenu();
  };

  document.getElementById("sw-close").onclick = () => {
    box.style.display = "none";
  };

  document.getElementById("sw-chat-form").onsubmit = (e) => {
    e.preventDefault();

    const question = input.value.trim();
    if (!question) return;

    addMessage(question, "user");
    addMessage(getAnswer(question));
    addHomeButton();

    input.value = "";
  };

});
