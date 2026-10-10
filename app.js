(() => {
  'use strict';
  const data = window.STORY_DATA;
  const app = document.getElementById('app');
  const lightbox = document.getElementById('lightbox');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const chapters = [...data.trips]; // Los próximos viajes se presentan aparte, nunca como recuerdos
  let position = -1; // -1 bienvenida, 0...9 recuerdos, 10 viaje especial, 11 cierre falso, 12 regalo
  const specialIndex = chapters.length, teaserIndex = specialIndex + 1, revealIndex = teaserIndex + 1;
  const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const photoSrc = (src) => src ? esc(src) : '';
  function imgMarkup(src, alt) {return src ? `<img src="${photoSrc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">` : '';}
  function setStep(step, viaGift=false) {
    const desired=Math.max(-1,Math.min(revealIndex,step));
    if(desired===revealIndex && (!viaGift || position!==teaserIndex)) return;
    const previousPosition=position;
    position=desired;
    render(); window.scrollTo({top:0,behavior:'instant'}); preloadNext();
  }
  function advance() {
    if (position===teaserIndex || position===revealIndex) return;
    setStep(position+1);
  }
  function retreat() {
    if (position===revealIndex) { setStep(-1); return; }
    setStep(position-1);
  }
  function preloadNext() {const next=chapters[position+1];if(!next)return;[next.cover,...(next.photos||[]).slice(0,2)].filter(Boolean).forEach(src=>{const i=new Image();i.src=src;});}
  function buttons(back, forward, text) {return `<nav class="footer-nav" aria-label="Navegación de la historia"><button class="back-btn" data-go="${back}">← Volver</button><button class="next-btn" data-go="${forward}">${esc(text)} →</button></nav>`;}
  function intro() {const i=data.intro;return `<main class="view landing"><div class="content"><div class="stamps" aria-hidden="true"><div class="stamp">✈️</div><div class="stamp">📸</div><div class="stamp">🧳</div></div><div class="eyebrow">${esc(i.eyebrow)}</div><h1>${esc(i.title)}</h1><p class="subtitle">${esc(i.subtitle)}</p><button class="pill-btn" data-go="0">Empezar nuestro viaje ↗</button><div class="micro">Nuestra historia · desde noviembre de 2024</div></div></main>`;}
  function trip(ch, ix) {
    const c = ch.colors || ['#2b5868', '#c79b78'];
    const nextText = ['Seguimos sumando kilómetros', '¿Te acordás de este?', 'Vamos al próximo destino', 'Otro capítulo más', 'Seguimos viajando'][ix%5];
    return `<main class="view trip album-trip portrait-trip" style="--c1:${esc(c[0])};--c2:${esc(c[1])}">
      <header class="topbar"><div class="brand">✦ Nuestra historia</div><div class="counter">CAPÍTULO ${String(ix+1).padStart(2,'0')} / ${String(chapters.length).padStart(2,'0')}</div></header>
      <div class="track" role="progressbar" aria-label="Progreso de la historia" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round((ix+1)/chapters.length*100)}"><div class="fill" style="width:${(ix+1)/chapters.length*100}%"></div></div>
      <div class="album-layout">
        <section class="album-heading"><div class="chapter-label">${esc(ch.date)} · UN NUEVO DESTINO</div><h2>${esc(ch.destination)}</h2><div class="kicker">${esc(ch.kicker||'Una nueva aventura')}</div>${ch.places?.length?`<div class="places">${ch.places.map(place=>`<span>✦ ${esc(place)}</span>`).join('')}</div>`:''}<p class="quote">“${esc(ch.message||'Un viaje más para recordar.')}”</p></section>
        <section class="album-content" aria-label="Postal de ${esc(ch.destination)}">
          ${ch.cover?`<div class="postcard-frame"><img class="postcard-backdrop" src="${photoSrc(ch.cover)}" alt="" aria-hidden="true"><img class="postcard-image" src="${photoSrc(ch.cover)}" alt="Recuerdo del grupo en ${esc(ch.destination)}" loading="eager" decoding="async"></div>`:''}
        </section>
      </div>
      ${buttons(ix-1,ix+1,ix===chapters.length-1?'Descubrir lo que viene':nextText)}
    </main>`;
  }
  // Una única pieza visual, tipo itinerario, con todos los destinos visibles a la vez.
  function specialTrip() {
    const info = data.specialTrip2026;
    const routeText = info.stops.map(stop => stop.name.toUpperCase().replace(' D. C.','')).join(' → ');
    const stops = info.stops.map((stop, i) => {
      const num = String(i + 1).padStart(2, '0');
      const featured = stop.id === 'new-york' || stop.id === 'punta-cana' ? ' is-featured' : '';
      const finale = stop.id === 'punta-cana' ? ' is-finale' : '';
      return `<li class="journey-stop stop-${esc(stop.id)}${featured}${finale}">
        <article class="journey-card">
          <div class="journey-node" aria-hidden="true"><span>${num}</span></div>
          <figure class="journey-photo">
            <img src="${photoSrc(stop.image)}" alt="${esc(stop.imageAlt || ('Vista de ' + stop.name))}" loading="eager" decoding="async">
          </figure>
          <div class="journey-copy">
            <div class="journey-meta">${num} · ${esc(stop.flag || '')}</div>
            <h3>${esc(stop.name)}</h3>
            <p>${esc(stop.message || '')}</p>
          </div>
        </article>
      </li>`;
    }).join('');

    return `<main class="view special-trip-v4">
      <header class="topbar"><div class="brand">✦ Nuestra historia</div><div class="counter">CAPÍTULO ESPECIAL · ${String(specialIndex + 1).padStart(2, '0')}</div></header>
      <div class="track"><div class="fill" style="width:100%"></div></div>

      <section class="special-heading special-heading-v4">
        <div class="eyebrow">${esc(info.date)}</div>
        <h2>${esc(info.title)}</h2>
        <p>${esc(info.subtitle)}</p>
        <div class="country-line">${esc(info.countries)}</div>
      </section>

      <section class="journey-board" aria-label="Nuestra próxima gran aventura: recorrido por seis destinos">
        <div class="journey-board-head">
          <div class="journey-overline">NUESTRA PRÓXIMA GRAN AVENTURA <span>·</span> 01 — 06</div>
          <div class="journey-route-line">${esc(routeText)}</div>
        </div>

        <div class="journey-canvas">
          <svg class="journey-path-desktop" viewBox="0 0 1000 760" role="presentation" aria-hidden="true" preserveAspectRatio="none">
            <path class="journey-path-shadow" d="M 120 120 C 210 95, 255 205, 315 250 S 510 330, 620 195 S 760 95, 845 150 S 850 330, 760 405 S 530 455, 420 455 S 320 490, 305 560 S 455 690, 705 635 S 875 565, 875 565" />
            <path class="journey-path-main" d="M 120 120 C 210 95, 255 205, 315 250 S 510 330, 620 195 S 760 95, 845 150 S 850 330, 760 405 S 530 455, 420 455 S 320 490, 305 560 S 455 690, 705 635 S 875 565, 875 565" />
          </svg>
          <ol class="journey-stops">${stops}</ol>
        </div>
      </section>

      <div class="journey-footer">
        <p class="journey-closing">${esc(info.closingTitle)}</p>
        <p class="journey-note">${esc(info.closingMessage || '')}</p>
        <nav class="footer-nav special-actions" aria-label="Navegación">
          <button class="back-btn" data-go="${specialIndex - 1}">← Volver</button>
          <button class="next-btn" data-go="${teaserIndex}">Continuar nuestra historia →</button>
        </nav>
      </div>
    </main>`;
  }
  function teaser() {return `<main class="view fake-end"><div class="center"><div class="large-icon" aria-hidden="true">✦</div><div class="eyebrow">HASTA ACÁ, NUESTRA HISTORIA…</div><h2>Qué manera de recorrer kilómetros juntos, ¿no?</h2><p class="false-ending">Pero hay algo que todavía no te contamos…</p><button class="pill-btn gift-btn" data-go="${revealIndex}">🎁 Chichi, abrí tu regalo</button><div><button class="ghost-btn" style="margin-top:30px" data-go="${specialIndex}">← Volver</button></div></div></main>`;}

  function syncCoverFrames(scope = app) {
    scope.querySelectorAll('.postcard-image').forEach(img => {
      const apply = () => {
        const frame = img.closest('.postcard-frame');
        if (!frame || !img.naturalWidth || !img.naturalHeight) return;
        const w = img.naturalWidth, h = img.naturalHeight;
        const ratio = `${w} / ${h}`;
        frame.style.setProperty('--media-ratio', ratio);
        const orientation = h > w * 1.06 ? 'portrait' : (w > h * 1.06 ? 'landscape' : 'square');
        frame.dataset.orientation = orientation;
      };
      if (img.complete && img.naturalWidth) apply();
      else img.addEventListener('load', apply, { once: true });
    });
  }

  function reveal() {const f=data.finale;const confetti=motionOK?`<div class="confetti confetti-v10" aria-hidden="true">${Array.from({length:24},(_,n)=>`<i style="--left:${(n*41.37)%100}%;--col:${['#f5cd83','#fff7e4','#f3a17c','#6fd3bf'][n%4]};--dur:${5+(n%5)}s;--delay:${1.7+(n%8)*0.08}s;--rot:${n*19}deg"></i>`).join('')}</div>`:'';return `<main class="view reveal reveal-v10">${confetti}<article class="reveal-card reveal-card-v10"><div class="reveal-kicker eyebrow">EL PRÓXIMO CAPÍTULO YA TIENE DESTINO</div><h2 class="reveal-title-v10"><span class="reveal-title-lead">¡CHICHI, NOS VAMOS A</span><span class="reveal-title-destination">${esc(f.destination)}!</span></h2><div class="reveal-year-v10">${esc(f.year)}</div><figure class="reveal-hero-v10">${imgMarkup(f.image,'Vista panorámica de Río de Janeiro')}</figure><div class="passport-stamp" aria-label="Detalle del regalo"><div><span>DESTINO</span><strong>${esc(f.destination)}</strong></div><div><span>AÑO</span><strong>${esc(f.year)}</strong></div><div><span>PASAJERA</span><strong>${esc(data.recipient || 'Chichi').toUpperCase()}</strong></div></div><p class="reveal-message-v10">${esc(f.message)}</p><div class="birthday birthday-v10">¡FELIZ CUMPLEAÑOS, ${esc(data.recipient || 'Chichi').toUpperCase()}!</div><button class="pill-btn replay replay-v10" data-go="-1">↺ Volver a vivir nuestra historia</button></article></main>`;}
  function render() {app.innerHTML=position===-1?intro():position<chapters.length?trip(chapters[position],position):position===specialIndex?specialTrip():position===teaserIndex?teaser():reveal();document.title=position===revealIndex?'¡Feliz cumpleaños, Chichi!':'Nuestra historia · Para Chichi';if(position>=0&&position<chapters.length)syncCoverFrames(app);}
  app.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b){setStep(Number(b.dataset.go),b.classList.contains('gift-btn'));return;}const p=e.target.closest('[data-photo]');if(p){lightbox.querySelector('img').src=p.dataset.photo;lightbox.querySelector('img').alt=p.dataset.alt;lightbox.hidden=false;lightbox.querySelector('button').focus();}});
  lightbox.querySelector('button').addEventListener('click',()=>lightbox.hidden=true);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.hidden=true;});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lightbox.hidden){lightbox.hidden=true;return;}if(!lightbox.hidden||['INPUT','TEXTAREA'].includes(document.activeElement.tagName))return;if(e.key==='ArrowRight')advance();if(e.key==='ArrowLeft')retreat();});
  let touchX=0,touchY=0;
  app.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;touchY=e.changedTouches[0].screenY;},{passive:true});
  app.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX,dy=e.changedTouches[0].screenY-touchY;if(Math.abs(dx)>95&&Math.abs(dx)>Math.abs(dy)*1.5){dx<0?advance():retreat();}},{passive:true});
  render();
})();
