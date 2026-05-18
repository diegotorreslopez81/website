/* Infinite Labs · Portfolio · app logic (i18n + filters + AI Twin) */
(function(){
  const LANG_KEY = "il-lang";
  const TWIN_API = "https://api.infinitelabs.co/portfolio-twin/chat"; // backend pendiente fase 2
  let currentLang = localStorage.getItem(LANG_KEY) || "es";

  // ----- i18n -----
  function applyI18n(lang){
    const dict = window.I18N[lang] || window.I18N.es;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const txt = dict[key];
      if(typeof txt === "string"){
        if(txt.includes("<")) el.innerHTML = txt;
        else el.textContent = txt;
      }
    });
    // language buttons
    document.querySelectorAll(".lang button").forEach(b=>{
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    // re-render dynamic cards using fresh dict
    if(typeof renderCases === "function") renderCases();
  }

  function setLang(lang){
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyI18n(lang);
  }

  document.querySelectorAll(".lang button").forEach(b=>{
    b.addEventListener("click", ()=> setLang(b.getAttribute("data-lang")));
  });

  // ----- filters & cases (landing only) -----
  const grid = document.getElementById("cases-grid");
  const noRes = document.getElementById("no-results");
  const countEl = document.getElementById("result-count");

  // Mapeo entre los 6 sectores del home v3 y los sectores internos del portfolio
  const SECTOR_HOME_TO_INTERNAL = {
    clinicas: "salud",
    industria: "b2b",
    distribucion: "b2b",
    despachos: "legal",
    administracion: "publico",
    formacion: "edu"
  };

  // Lee ?sector=X de la URL para pre-filtrar al cargar (link entrante desde home)
  function getInitialSector(){
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get("sector");
      if(!raw) return "all";
      return SECTOR_HOME_TO_INTERNAL[raw] || raw;
    } catch(e){ return "all"; }
  }

  const state = { family:"all", sector:getInitialSector(), tech:"all" };

  // Sincronizar el chip de sector activo en la UI cuando hay pre-filtro
  function syncSectorChip(){
    if(state.sector === "all") return;
    document.querySelectorAll('[data-filter-type="sector"] .chip').forEach(chip=>{
      const isActive = chip.getAttribute("data-value") === state.sector;
      chip.classList.toggle("active", isActive);
      if(isActive) chip.scrollIntoView({behavior:"smooth", block:"nearest", inline:"center"});
    });
  }

  function renderCases(){
    if(!grid || !window.PORTFOLIO_CASES) return;
    const dict = window.I18N[currentLang] || window.I18N.es;
    grid.innerHTML = "";
    let visible = 0;
    window.PORTFOLIO_CASES.forEach((c, i)=>{
      const matchFam = state.family === "all" || c.fam === state.family;
      const matchSec = state.sector === "all" || c.sectors.includes(state.sector);
      const matchTec = state.tech   === "all" || c.techs.includes(state.tech);
      if(!matchFam || !matchSec || !matchTec) return;
      visible++;
      const famNames = { conversacional:"f1.t", agentes:"f2.t", rag:"f3.t", workflow:"f4.t", governance:"f5.t", verticales:"f6.t", modelos:"f7.t" };
      const famLabel = dict[famNames[c.fam]] || c.fam;
      const title = dict[`c.${c.id}.t`] || c.id;
      const blurb = dict[`c.${c.id}.p`] || "";
      const techLabels = c.techs.map(t=> dict["ft.tec."+({rag:"rag",agentes:"ag",chat:"ch",datos:"dt",modelos:"md",compliance:"cp"}[t])] || t);
      const sectorLabels = c.sectors.map(s=> dict["ft.sec."+({publico:"pub",salud:"sal",turismo:"tur",edu:"edu",b2b:"b2b",legal:"leg"}[s])] || s);
      const tagsHTML = [...sectorLabels.slice(0,2), ...techLabels.slice(0,2)].map(t=>`<span class="case-tag">${t}</span>`).join("");
      const card = document.createElement("a");
      card.href = c.href;
      card.className = "case-card anim";
      card.style.transitionDelay = (Math.min(i%6,5)*0.05) + "s";
      card.innerHTML = `
        <div class="case-fam">${c.famNum} · ${famLabel}</div>
        <h3>${title}</h3>
        <p>${blurb}</p>
        <div class="case-meta">${tagsHTML}</div>
      `;
      grid.appendChild(card);
    });
    if(countEl) countEl.textContent = String(visible);
    if(noRes) noRes.style.display = visible === 0 ? "block" : "none";
    // observe new cards
    requestAnimationFrame(()=>{
      document.querySelectorAll(".case-card.anim:not(.in)").forEach(el=>{
        el.classList.add("in");
      });
    });
  }
  // expose so applyI18n can re-render
  window.renderCases = renderCases;

  // Pre-activar chip de sector si vino por ?sector=X desde la home
  // (declarado después de syncSectorChip)

  document.querySelectorAll("[data-filter-type]").forEach(group=>{
    const type = group.getAttribute("data-filter-type");
    group.querySelectorAll(".chip").forEach(chip=>{
      chip.addEventListener("click", ()=>{
        group.querySelectorAll(".chip").forEach(c=> c.classList.remove("active"));
        chip.classList.add("active");
        state[type === "family" ? "family" : type === "sector" ? "sector" : "tech"] = chip.getAttribute("data-value");
        renderCases();
      });
    });
  });

  // Aplicar pre-filtro si vino por ?sector=X
  syncSectorChip();

  // ----- nav scroll -----
  const nav = document.getElementById("nav");
  function onScroll(){
    if(window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  // ----- intersection observer for anim -----
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold:0.08, rootMargin:"0px 0px -40px 0px" });
  document.querySelectorAll(".anim").forEach(el=> io.observe(el));

  // ----- AI Twin -----
  const twinBody = document.getElementById("twin-body");
  const twinQ = document.getElementById("twin-q");

  document.querySelectorAll(".twin-sug").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(twinQ){ twinQ.value = btn.getAttribute("data-q") || btn.textContent; sendTwin(); }
    });
  });

  window.sendTwin = async function(){
    if(!twinQ || !twinBody) return;
    const q = (twinQ.value || "").trim();
    if(!q) return;
    twinQ.value = "";
    const userMsg = document.createElement("div");
    userMsg.className = "twin-msg user";
    userMsg.textContent = q;
    twinBody.appendChild(userMsg);
    twinBody.scrollTop = twinBody.scrollHeight;

    const botMsg = document.createElement("div");
    botMsg.className = "twin-msg bot";
    botMsg.textContent = currentLang === "ca" ? "Pensant..." : currentLang === "en" ? "Thinking..." : "Pensando...";
    twinBody.appendChild(botMsg);
    twinBody.scrollTop = twinBody.scrollHeight;

    try {
      const ctx = window.PORTFOLIO_CONTEXT || "portfolio";
      const res = await fetch(TWIN_API, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ q, context: ctx, lang: currentLang })
      });
      if(!res.ok) throw new Error("Backend offline");
      const data = await res.json();
      botMsg.textContent = data.text || (currentLang === "en" ? "No reply" : "Sin respuesta");
    } catch(err) {
      botMsg.innerHTML = currentLang === "ca"
        ? `El xat IA encara s'està desplegant. Mentrestant, reserva 30 minuts amb el Diego real: <a href="https://calendar.app.google/UvcME44u8dsucaVT9" target="_blank" style="color:var(--cyan);text-decoration:underline">calendar.app.google</a> · o escriu a <a href="mailto:hello@infinitelabs.co" style="color:var(--cyan);text-decoration:underline">hello@infinitelabs.co</a>.`
        : currentLang === "en"
        ? `The AI chat is still being deployed. In the meantime, book 30 minutes with the real Diego: <a href="https://calendar.app.google/UvcME44u8dsucaVT9" target="_blank" style="color:var(--cyan);text-decoration:underline">calendar.app.google</a> · or email <a href="mailto:hello@infinitelabs.co" style="color:var(--cyan);text-decoration:underline">hello@infinitelabs.co</a>.`
        : `El chat IA aún se está desplegando. Mientras tanto, reserva 30 minutos con el Diego real: <a href="https://calendar.app.google/UvcME44u8dsucaVT9" target="_blank" style="color:var(--cyan);text-decoration:underline">calendar.app.google</a> · o escribe a <a href="mailto:hello@infinitelabs.co" style="color:var(--cyan);text-decoration:underline">hello@infinitelabs.co</a>.`;
    }
    twinBody.scrollTop = twinBody.scrollHeight;
  };

  // ----- initial -----
  applyI18n(currentLang);
})();
