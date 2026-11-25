/* Site engine: language switching, header/footer, photos, audio, gallery, team. */
(function () {
  const LANGS = ["cs", "de", "en"];
  const LABEL = { cs: "CZ", de: "DE", en: "EN" };
  const NAV = [
    { id: "home", href: "index.html", key: "nav.home" },
    { id: "landmarks", href: "landmarks.html", key: "nav.landmarks" },
    { id: "green", href: "green.html", key: "nav.green" },
    { id: "team", href: "team.html", key: "nav.team" }
  ];

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); }
    catch (e) { return null; }
  }

  function pickLang() {
    const p = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(p)) return p;
    const s = store("city-lang");
    if (LANGS.includes(s)) return s;
    const b = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (b === "cs" || b === "sk") return "cs";
    if (b === "de") return "de";
    return "en";
  }

  let lang = pickLang();
  const t = (k) => (TEXT[lang] && TEXT[lang][k] !== undefined ? TEXT[lang][k] : TEXT.en[k]);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const withLang = (href) => {
    const [path, hash] = href.split("#");
    return path + "?lang=" + lang + (hash ? "#" + hash : "");
  };

  /* ---------- Crest (your own image: photos/crest.png) ---------- */
  const LEAF = `<svg class="leaf" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 52C12 26 28 12 54 10c-2 26-16 42-42 42z"/><path d="M12 52L38 26"/><path d="M26 38h9M31 33v-7"/></svg>`;
  window.crestFallback = function (img) { const d = document.createElement("span"); d.innerHTML = LEAF; img.replaceWith(d.firstChild); };
  window.crestSVG = function () {
    return `<img src="photos/crest.png" alt="${esc(CONFIG.cityName)}" onerror="crestFallback(this)">`;
  };

  /* ---------- Header / footer ---------- */
  function renderChrome() {
    const header = document.getElementById("site-header");
    if (header) {
      const page = header.dataset.page;
      header.innerHTML = `
        <div class="bar">
          <a class="brand" href="${withLang("index.html")}">
            <span class="brand-crest">${window.crestSVG()}</span>
            <span class="brand-name">${esc(CONFIG.cityName)}</span>
          </a>
          <button class="menu-btn" aria-label="Menu" aria-expanded="false">☰</button>
          <nav class="nav">
            ${NAV.map((n) => `<a href="${withLang(n.href)}"${n.id === page ? ' aria-current="page"' : ""}>${esc(t(n.key))}</a>`).join("")}
          </nav>
          <div class="langs" role="group" aria-label="Language">
            ${LANGS.map((l) => `<button data-lang="${l}" lang="${l}" title="${esc(TEXT[l].langName)}" aria-pressed="${l === lang}">${LABEL[l]}</button>`).join("")}
          </div>
        </div>`;
      const btn = header.querySelector(".menu-btn");
      btn.addEventListener("click", () => {
        const open = header.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
      });
      header.querySelectorAll("[data-lang]").forEach((b) =>
        b.addEventListener("click", () => setLang(b.dataset.lang))
      );
    }
    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.innerHTML = `
        <div class="foot-inner">
          <span class="foot-crest">${window.crestSVG()}</span>
          <div>
            <strong>${esc(CONFIG.cityName)}</strong> · <em>${esc(t("home.motto"))}</em><br>
            <span class="muted">${esc(t("footer"))}</span>
          </div>
          <a class="print-link" href="${withLang("print.html")}">${esc(t("nav.print"))}</a>
        </div>`;
    }
  }

  /* ---------- Page content ---------- */
  function photo(el) {
    const src = el.dataset.photo;
    const cap = el.dataset.cap ? t(el.dataset.cap) : "";
    el.innerHTML = `<img src="${esc(src)}" alt="${esc(cap)}" loading="lazy">${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}`;
    el.querySelector("img").addEventListener("error", function () {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.innerHTML = `<span class="ph-icon">📷</span><span>${esc(t("photoMissing"))}</span><code>${esc(src)}</code>`;
      this.replaceWith(ph);
    });
  }

  function audio(el) {
    const n = el.dataset.audio;
    el.innerHTML = `
      <div class="audio-head"><span class="qr-badge">QR ${esc(n)}</span> 🎧 ${esc(t("audio.title"))}</div>
      ${["cs", "de"].map((l) => `
        <div class="audio-row">
          <span class="audio-lang">${esc(t("audio." + l))}</span>
          <audio controls preload="metadata" src="media/audio/qr${esc(n)}-${l}.mp3"></audio>
        </div>`).join("")}`;
    el.querySelectorAll("audio").forEach((a) =>
      a.addEventListener("error", () => {
        const s = document.createElement("span");
        s.className = "muted";
        s.textContent = t("audio.missing");
        a.replaceWith(s);
      })
    );
  }

  function gallery(el) {
    el.innerHTML = "";
    let pending = CONFIG.gallery.length, shown = 0;
    const done = () => {
      if (--pending === 0 && shown === 0) el.innerHTML = `<p class="muted empty">${esc(t("tm.galleryEmpty"))}</p>`;
    };
    if (!pending) { pending = 1; done(); return; }
    CONFIG.gallery.forEach((f) => {
      const a = document.createElement("a");
      a.href = "photos/" + f;
      a.target = "_blank";
      a.rel = "noopener";
      a.hidden = true;
      const img = document.createElement("img");
      img.alt = f.startsWith("day1") ? t("tm.day1Title") : t("tm.day2Title");
      img.onload = () => { a.hidden = false; shown++; done(); };
      img.onerror = () => { a.remove(); done(); };
      img.src = "photos/" + f;
      a.appendChild(img);
      el.appendChild(a);
    });
  }

  function team(el) {
    el.innerHTML = CONFIG.team.map((p, i) => `
      <div class="pair card">
        <div class="pair-num">${esc(t("tm.pair"))} ${p.pair}</div>
        <div class="pair-role">${esc(t("tm.roles")[i] || "")}</div>
        <ul>
          <li><span class="tag cz">CZ</span>${esc(p.cz)}</li>
          <li><span class="tag de">DE</span>${esc(p.de)}</li>
        </ul>
      </div>`).join("");
  }

  function render() {
    document.documentElement.lang = lang;
    renderChrome();
    document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = t(el.dataset.t)));
    document.querySelectorAll("[data-city]").forEach((el) => (el.textContent = CONFIG.cityName));
    document.querySelectorAll("[data-list]").forEach((el) => {
      el.innerHTML = t(el.dataset.list).map((x) => `<li>${esc(x)}</li>`).join("");
    });
    document.querySelectorAll("[data-href]").forEach((el) => (el.href = withLang(el.dataset.href)));
    document.querySelectorAll("[data-crest]").forEach((el) => (el.innerHTML = window.crestSVG()));
    document.querySelectorAll("[data-photo]").forEach(photo);
    document.querySelectorAll("[data-audio]").forEach(audio);
    document.querySelectorAll("[data-gallery]").forEach(gallery);
    document.querySelectorAll("[data-team]").forEach(team);
    const titleKey = document.body.dataset.titleKey;
    document.title = (titleKey ? t(titleKey) + " · " : "") + CONFIG.cityName;
    if (window.onLangChange) window.onLangChange(lang);
  }

  function setLang(l) {
    lang = l;
    store("city-lang", l);
    const u = new URL(location.href);
    u.searchParams.set("lang", l);
    history.replaceState(null, "", u);
    render();
  }

  window.SITE = { t: (k) => t(k), lang: () => lang, esc, withLang: (h) => withLang(h) };

  render();

  // Highlight the section a QR code points to
  function flash() {
    const id = location.hash.slice(1);
    const el = id && document.getElementById(id);
    if (!el) return;
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
    el.scrollIntoView({ block: "start" });
  }
  window.addEventListener("hashchange", flash);
  window.addEventListener("load", flash);
})();
