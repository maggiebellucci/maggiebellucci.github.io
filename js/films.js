// ---------- Datos de Videos con IA ----------
// Orden: primero Historias de marca, después Inmobiliario (así se ven en el carrusel y en la lista).
const NOA = {
  agency: 'Not Ordinary Agency', year: 2026,
  tools: 'Seedance · Kling AI · Runway · Veo · MiniMax · Nano Banana Pro · Image 2 · Claude · After Effects',
};
const FABRIC_DESC = 'Fabric es un restaurante de sushi premium en Buenos Aires, concebido como una propuesta gastronómica japonesa de alta gama. Su comunicación audiovisual busca transmitir esa misma exclusividad: una estética cuidada, un producto impecable y un público con un perfil de marca claramente definido.\n\nPara Fabric se produjo una serie de piezas generadas íntegramente con inteligencia artificial, sin cámara ni producción tradicional. El proceso abarca desde la generación de imágenes de referencia hasta la síntesis de video, con una etapa completa de posproducción en After Effects: color, composición y entrega en especificaciones de broadcast.\n\nEl desafío central de cada pieza es la precisión de marca. El sushi, el packaging y los logos deben verse impecables en cada plano, sin las distorsiones de texto, tipografía o producto habituales en la generación por IA. A su vez, cada persona que aparece en los videos fue seleccionada para responder al perfil de marca: la estética, la edad y la actitud del público que Fabric busca representar.';
const FILMS = [
  // Historias de marca
  { id: 'fabric-1', src: 'assets/v/fabric-1.mp4', poster: 'assets/posters/fabric-1.jpg', title: 'Fabric Sushi - Restaurante', cat: 'brand', ar: '9/16', desc: FABRIC_DESC },
  { id: 'meli', src: 'media/meli.mp4', title: 'Presentación de agencia', cat: 'brand', ar: '4/3',
    desc: 'Primera pieza audiovisual realizada con inteligencia artificial por la agencia, pensada para redes sociales con el objetivo de presentar a su fundadora.\n\nA partir de una fotografía suya y de una locación en Palermo, se construyó un video ágil y descontracturado que recorre sus objetos esenciales y transmite su personalidad y la de la agencia.' },
  { id: 'capitulo-2', src: 'media/capitulo-2.mp4', title: 'Capítulo 2 - Serie Fabric', cat: 'brand', ar: '1450/1080',
    desc: 'Segundo capítulo de la serie audiovisual de Fabric. El punto de partida fue un espacio real: uno de los restaurantes de la marca, que funcionó como set de la historia.\n\nSobre esa locación se realizó un casting íntegramente generado con inteligencia artificial y se desarrolló un concepto narrativo que combina la presentación del menú con una cita entre dos personajes. Todo el contenido fue producido con IA a partir de un lugar que existe, integrando ficción y espacio real en una misma pieza.' },
  { id: 'bago', src: 'media/bago.mp4?v=3', title: 'Evento Bagó', cat: 'brand', ar: '16/9', poster: 'media/posters/bago.jpg?v=3',
    desc: 'Video institucional desarrollado para presentar una nueva plataforma de Laboratorios Bagó destinada a las dermoconsejeras.\n\nLa pieza cumple un doble objetivo: explicar con claridad el funcionamiento técnico de la herramienta y, al mismo tiempo, generar una conexión emocional con los distintos perfiles que trabajan en la farmacia, motivándolos a capacitarse.' },
  { id: 'fabric-2', src: 'assets/v/fabric-2.mp4', poster: 'assets/posters/fabric-2.jpg', title: 'Fabric Sushi - Restaurante II', cat: 'brand', ar: '9/16', desc: FABRIC_DESC },

  // Inmobiliario
  { id: 'munecas', src: 'media/munecas.mp4', title: 'Casa de muñecas - TERRE La Imprenta', cat: 'realestate', ar: '9/16',
    desc: 'Vender un edificio en obra presenta un desafío: todavía no se puede recorrer. Para TERRE La Imprenta, ese desafío se convirtió en el concepto de la pieza.\n\nEl edificio se lleva a una maqueta, algo que se puede tocar, abrir y observar por dentro, como una casa de muñecas. Primero se lo ve en obra, con obreros y grúa. Luego los pisos se iluminan y aparecen las historias: alguien trabajando, una familia, el verano en la terraza. Hacia el final, la escala cambia y la maqueta se vuelve real.\n\nLa idea es simple: si todavía no se puede visitar, al menos se pueda imaginar.' },
  { id: 'gral2', src: 'media/gral2.mp4', title: 'Un día en el edificio - Proyecto en pozo', cat: 'realestate', ar: '9/16',
    desc: 'Pieza vertical para stories de un proyecto en pozo. Todo lo que aparece en el video fue creado a partir de renders: ninguno de los espacios existe todavía.\n\nLa narrativa se construye a partir de un día completo. El recorrido avanza hora por hora y muestra qué está haciendo cada habitante, con el objetivo de que quien lo mira pueda sentir cómo sería vivir allí.' },
  { id: 'luz', src: 'media/luz.mp4', title: 'Vivir en el proyecto - Proyecto en pozo', cat: 'realestate', ar: '9/16',
    desc: 'Pieza vertical para stories de un proyecto en pozo. Todo lo que aparece en el video fue creado a partir de renders: ninguno de los espacios existe todavía.\n\nEl objetivo es contar una historia que permita anticipar la experiencia de habitar el edificio y transmitir lo que se sentiría vivir allí, antes de que esté construido.' },
  { id: 'modo-serena', src: 'media/modo-serena.mp4', title: 'Modo Serena - Serena Arredondo', cat: 'realestate', ar: '9/16',
    desc: 'Pieza para Serena Arredondo, un proyecto en pozo. El concepto parte de una idea simple: activar el "modo Serena".\n\nA través de notificaciones en el celular, el video cuenta lo que va sucediendo en la vida de una persona dentro y alrededor del edificio, y transmite cómo sería el día a día de quienes lo habiten.' },
  { id: 'mirabilia', src: 'assets/v/mirabilia.mp4', poster: 'assets/posters/mirabilia.jpg', title: 'Mirabilia Hype - Nota Infobae', cat: 'realestate', ar: '800/585',
    link: ['Ver nota en Infobae', 'https://www.infobae.com/inhouse/2026/09/23/el-barrio-que-le-pisa-los-talones-a-palermo-y-todavia-hoy-cuesta-20-menos/'],
    desc: 'Pieza realizada para acompañar una nota de Infobae que promociona Mirabilia, un proyecto en pozo ubicado en un barrio en pleno crecimiento.\n\nNada de lo que se ve en el video existe todavía, pero va a existir. A través de transiciones, la pieza recorre lo que el edificio va a ofrecer y anticipa sus espacios y su escala.' },
].map(f => ({ ...NOA, poster: `media/posters/${f.id}.jpg`, desc: '', ...f }));

const CAT_LABEL = { realestate: 'Inmobiliario', brand: 'Historia de marca' };

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const isMobile = () => matchMedia('(max-width: 700px)').matches;
const pad = n => String(n).padStart(2, '0');
const pageTop = el => el.getBoundingClientRect().top + scrollY;

// ---------- Showcase 3D ----------
const showcase = $('#showcase');
const stage = $('#stage');
let active = FILMS;
let target = 0, current = 0;

FILMS.forEach(f => {
  const el = document.createElement('div');
  el.className = 'card';
  // En el carrusel todos van verticales (9:16); los horizontales se recortan
  el.innerHTML = `<video muted loop playsinline preload="metadata" poster="${f.poster}" src="${f.src}"></video><span class="card__go" aria-hidden="true">↗</span>`;
  stage.appendChild(el);
  f.card = el;
  f.cardVideo = el.querySelector('video');
});

// Carrusel infinito: la posición recorre 0..n y cada carta toma el camino más corto
const wrapOffset = d => { const n = active.length; d = ((d % n) + n) % n; return d > n / 2 ? d - n : d; };
const centerIndex = () => ((Math.round(current) % active.length) + active.length) % active.length;
const spacing = () => Math.min(innerWidth * (isMobile() ? 0.56 : 0.24), 400);

// El carrusel queda fijo debajo del header: el recorrido empieza cuando su borde llega al header
const sticky = $('.showcase__sticky');
const stickyTop = () => parseFloat(getComputedStyle(sticky).top) || 0;
function range() { return showcase.offsetHeight - sticky.offsetHeight; }
function readScroll() {
  const p = clamp((stickyTop() - showcase.getBoundingClientRect().top) / range(), 0, 1);
  target = p * active.length;
  $('#progress').style.width = `${p * 100}%`;
}
const isPinned = (r = showcase.getBoundingClientRect()) =>
  !showcase.hidden && r.top <= stickyTop() + 1 && r.bottom >= stickyTop() + sticky.offsetHeight - 1;

// Solo se redibuja cuando algo cambió (en el celular, dibujar de más traba el scroll)
let lastCurrent = null, lastInView = null, dirty = true;
function render() {
  current += (target - current) * 0.12;
  if (Math.abs(target - current) < 0.0005) current = target;
  const r = showcase.getBoundingClientRect();
  const inView = !showcase.hidden && r.bottom > 0 && r.top < innerHeight;
  if (!dirty && current === lastCurrent && inView === lastInView) { requestAnimationFrame(render); return; }
  dirty = false; lastCurrent = current; lastInView = inView;
  const sp = spacing();

  FILMS.forEach(f => {
    const idx = active.indexOf(f);
    f.card.classList.toggle('is-hidden', idx === -1);
    if (idx === -1) { f.cardVideo.pause(); return; }
    const d = wrapOffset(idx - current);
    const ad = Math.abs(d);
    const s = ad < 1 ? 1 - ad * 0.12 : 0.88 - (ad - 1) * 0.06;
    f.card.style.transform = `translate(-50%, -50%) translate3d(${d * sp}px, 0, ${-ad * 280}px) rotateY(${clamp(d * 32, -66, 66)}deg) scale(${s})`;
    f.card.style.zIndex = 100 - Math.round(ad * 10);
    f.card.style.opacity = clamp(Math.min(1.6 - ad * 0.32, (active.length / 2 - ad) * 1.4), 0, 1);
    f.card.style.setProperty('--fog', clamp((ad - 0.4) * 0.22, 0, 0.55).toFixed(3));
    const play = inView && ad < 1.6;
    if (play && f.cardVideo.paused) f.cardVideo.play().catch(() => {});
    else if (!play && !f.cardVideo.paused) f.cardVideo.pause();
  });

  const ci = centerIndex();
  const f = active[ci];
  if (f) {
    $('#count').textContent = `${pad(ci + 1)} / ${pad(active.length)}`;
    $('#ctitle').textContent = f.title;
    $('#ccat').textContent = CAT_LABEL[f.cat];
  }
  requestAnimationFrame(render);
}

function scrollToIndex(i) {
  scrollTo({ top: pageTop(showcase) - stickyTop() + (clamp(i, 0, active.length) / active.length) * range(), behavior: "smooth" });
}

// Imán a la carta más cercana al soltar el scroll. En el celular no: pelearía con el scroll con inercia y se traba.
const touchScreen = matchMedia("(pointer: coarse)").matches;
let snapTimer, dragging = false;
addEventListener("scroll", () => {
  readScroll();
  clearTimeout(snapTimer);
  if (dragging || touchScreen) return;
  snapTimer = setTimeout(() => {
    const r = showcase.getBoundingClientRect();
    if (isPinned(r) && r.bottom > stickyTop() + sticky.offsetHeight + 2) {
      const near = Math.round(target);
      if (Math.abs(near - target) > 0.02) scrollToIndex(near);
    }
  }, 160);
}, { passive: true });
addEventListener("resize", () => { dirty = true; readScroll(); });

// Arrastrar de costado mueve el carrusel (scroll y drag son la misma cosa).
// Con el dedo, si el gesto es vertical se deja scrollear la página normalmente.
let startX = 0, startY = 0, lastX = 0, moved = 0, axis = null;
stage.addEventListener("pointerdown", e => {
  dragging = true; startX = lastX = e.clientX; startY = e.clientY; moved = 0;
  axis = e.pointerType === "mouse" ? "x" : null;
  stage.classList.add("is-drag");
  stage.setPointerCapture(e.pointerId);
});
stage.addEventListener("pointermove", e => {
  if (!dragging) return;
  const tx = Math.abs(e.clientX - startX), ty = Math.abs(e.clientY - startY);
  if (!axis) {
    if (ty > 8 && ty > tx) { cancelDrag(); return; }
    if (tx > 8) axis = "x";
  }
  moved = Math.max(moved, tx);
  const dx = e.clientX - lastX;
  lastX = e.clientX;
  if (axis === "x") scrollBy({ top: (-dx / spacing()) * (range() / active.length), behavior: "instant" });
});
const cancelDrag = () => { dragging = false; axis = null; stage.classList.remove("is-drag"); };
const endDrag = e => {
  if (!dragging) return;
  cancelDrag();
  if (moved < 6) {
    const hit = document.elementsFromPoint(e.clientX, e.clientY).find(el => el.classList?.contains("card"));
    const f = hit && FILMS.find(x => x.card === hit);
    if (f) {
      const idx = active.indexOf(f);
      if (idx === centerIndex()) openPlayer(idx);
      else scrollToIndex(Math.round(current) + wrapOffset(idx - current));
    }
  } else scrollToIndex(Math.round(target));
};
stage.addEventListener("pointerup", endDrag);
// Si el navegador se queda con el gesto (scroll vertical), no es un toque: no abre nada
stage.addEventListener("pointercancel", cancelDrag);

addEventListener("keydown", e => {
  if (!$("#player").hidden) {
    if (e.key === "Escape") closePlayer();
    if (e.key === "ArrowRight") stepPlayer(1);
    if (e.key === "ArrowLeft") stepPlayer(-1);
    return;
  }
  if (isPinned()) {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollToIndex(Math.round(target) + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollToIndex(Math.round(target) - 1); }
    if (e.key === "Enter") openPlayer(centerIndex());
  }
});

// ---------- Vista lista ----------
const list = $('#list');
FILMS.forEach(f => {
  const t = document.createElement('button');
  t.className = 'tile';
  t.style.setProperty('--ar', f.ar.startsWith('9/') ? '9/16' : '16/10');
  t.innerHTML = `<video muted loop playsinline preload="none" poster="${f.poster}" src="${f.src}"></video>
    <span class="tile__cap"><b>${f.title}</b></span>`;
  const v = $('video', t);
  t.addEventListener('mouseenter', () => v.play().catch(() => {}));
  t.addEventListener('mouseleave', () => v.pause());
  t.addEventListener('click', () => openPlayer(active.indexOf(f)));
  $(`.list__group[data-group="${f.cat}"] .list__grid`, list).appendChild(t);
});

$$('.seg button').forEach(b => b.addEventListener('click', () => {
  $$('.seg button').forEach(x => x.classList.toggle('is-on', x === b));
  const isList = b.dataset.view === 'list';
  showcase.hidden = isList;
  list.hidden = !isList;
  if (isList) FILMS.forEach(f => f.cardVideo.pause());
  dirty = true;
  readScroll();
}));

$$('.chips button').forEach(b => b.addEventListener('click', () => {
  $$('.chips button').forEach(x => x.classList.toggle('is-on', x === b));
  const filter = b.dataset.filter;
  active = filter === 'all' ? FILMS : FILMS.filter(f => f.cat === filter);
  $$('.list__group').forEach(g => g.hidden = filter !== 'all' && g.dataset.group !== filter);
  current = 0;
  dirty = true;
  if (!showcase.hidden) scrollTo({ top: pageTop(showcase) - stickyTop(), behavior: 'instant' });
  readScroll();
}));

// ---------- Player ----------
const player = $('#player');
const pvideo = $('#pvideo');
let pIndex = 0;
function openPlayer(i) {
  if (i < 0) return;
  pIndex = i;
  const f = active[i];
  pvideo.src = f.src;
  pvideo.poster = f.poster;
  pvideo.muted = false;
  const todo = '<span class="todo">a completar</span>';
  const desc = f.desc ? f.desc.split('\n\n').map(p => `<p>${p}</p>`).join('') : '<p class="todo">Descripción del proyecto — próximamente.</p>';
  $('#pinfo').innerHTML = `
    <p class="cat">${CAT_LABEL[f.cat]} · ${pad(i + 1)} / ${pad(active.length)}</p>
    <h3>${f.title}</h3>
    <div class="desc">${desc}</div>
    <div class="meta">
      <div><p class="label">Herramientas:</p><p>${f.tools || todo}</p></div>
      <div><p class="label">Año:</p><p>${f.year}</p></div>
      <div><p class="label">Agencia:</p><p>${f.agency}</p></div>
      ${f.link ? `<div><a class="plink" href="${f.link[1]}" target="_blank" rel="noopener">${f.link[0]} ↗</a></div>` : ''}
    </div>`;
  player.hidden = false;
  document.body.style.overflow = 'hidden';
  FILMS.forEach(x => x.cardVideo.pause());
  pvideo.play().catch(() => {});
}
function closePlayer() {
  pvideo.pause();
  pvideo.removeAttribute('src');
  pvideo.load();
  player.hidden = true;
  document.body.style.overflow = '';
}
function stepPlayer(dir) { openPlayer((pIndex + dir + active.length) % active.length); }
$('.player__close').addEventListener('click', closePlayer);
$('.player__nav--prev').addEventListener('click', () => stepPlayer(-1));
$('.player__nav--next').addEventListener('click', () => stepPlayer(1));
player.addEventListener('click', e => { if (e.target === player) closePlayer(); });

readScroll();
current = target;
render();
