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

  /* ---------- Crest & flag (inline SVG) ---------- */
  let crestN = 0;
  window.crestSVG = function () {
    const id = "shield" + (++crestN);
    return `<svg viewBox="0 0 200 240" role="img" aria-label="${esc(CONFIG.cityName)}">
      <defs><clipPath id="${id}"><path d="M10 10h180v110c0 60-45 95-90 110C55 215 10 180 10 120z"/></clipPath></defs>
      <g clip-path="url(#${id})">
        <rect width="200" height="240" fill="#1f4e8c"/>
        <rect y="150" width="200" height="90" fill="#2e8b57"/>
        <path d="M0 150q25-12 50 0t50 0 50 0 50 0v16q-25-12-50 0t-50 0-50 0-50 0z" fill="#fff" opacity=".9"/>
        <circle cx="150" cy="52" r="20" fill="#f4c430"/>
        <g stroke="#f4c430" stroke-width="4" stroke-linecap="round">
          <path d="M150 20v-8M150 92v-8M118 52h-8M190 52h-8M127 29l-6-6M179 81l-6-6M173 29l6-6M121 81l6-6"/>
        </g>
        <path d="M52 40v66" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
        <g fill="#fff"><path d="M52 40l-4-24h8z"/><path d="M52 40l22 10-2 6z"/><path d="M52 40l-20 14 5 4z"/></g>
        <circle cx="52" cy="40" r="5" fill="#fff"/>
        <path d="M14 150V112H186V150H164A64 18 0 0 0 36 150Z" fill="#fff"/>
        <path d="M14 112H186" stroke="#f4c430" stroke-width="4"/>
        <path d="M58 112v8M82 112v13M100 112v14M118 112v13M142 112v8" stroke="#1f4e8c" stroke-width="3"/>
      </g>
      <path d="M10 10h180v110c0 60-45 95-90 110C55 215 10 180 10 120z" fill="none" stroke="#f4c430" stroke-width="8"/>
    </svg>`;
  };

  window.flagSVG = function () {
    return `<svg viewBox="0 0 300 200" role="img" aria-label="Flag">
      <rect width="300" height="200" fill="#1f4e8c"/>
      <rect y="133" width="300" height="67" fill="#2e8b57"/>
      <rect y="120" width="300" height="13" fill="#fff"/>
      <g transform="translate(118 18) scale(.42)">${window.crestSVG().replace(/<svg[^>]*>|<\/svg>/g, "")}</g>
    </svg>`;
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
    document.querySelectorAll("[data-flag]").forEach((el) => (el.innerHTML = window.flagSVG()));
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
