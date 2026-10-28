// Header y footer compartidos, como en el sitio de Figma.
const ICONS = {
  mail: '<svg viewBox="0 0 24 17" fill="none" stroke="currentColor" stroke-width="1.4"><rect x=".7" y=".7" width="22.6" height="15.6"/><path d="M1 1l11 8.5L23 1"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1" y="1" width="22" height="22" rx="6"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="6" r=".9" fill="currentColor"/></svg>',
  in: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 8h4.5v14H2zM4.2 1.5a2.6 2.6 0 110 5.2 2.6 2.6 0 010-5.2zM9 8h4.3v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.5v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V22H9z"/></svg>',
  be: '<svg viewBox="0 0 28 18" fill="currentColor"><path d="M8.2 8.4c1.4-.6 2.1-1.6 2.1-3C10.3 2.6 8.2 1 5.5 1H0v16h5.7c3 0 5.4-1.4 5.4-4.4 0-1.9-1-3.6-2.9-4.2zM2.6 3.3h2.6c1 0 2.2.3 2.2 1.8 0 1.3-.9 1.9-2.1 1.9H2.6zm2.8 11.4H2.6V9.2h2.9c1.5 0 2.6.7 2.6 2.7s-1.2 2.8-2.7 2.8zM18.5 1.9h6.9v1.7h-6.9zM27.9 11.3c0-3.5-2-6.3-5.7-6.3-3.6 0-6 2.7-6 6.2 0 3.7 2.3 6.2 6 6.2 2.8 0 4.6-1.3 5.5-3.9h-2.8c-.3 1-1.6 1.5-2.6 1.5-1.9 0-2.9-1.1-2.9-3h8.5v-.7zm-8.5-1.4c.1-1.5 1.1-2.5 2.7-2.5 1.6 0 2.4.9 2.6 2.5z"/></svg>',
};
const LINKS = {
  mail: ['mailto:magdalenabellucci03@gmail.com', 'magdalenabellucci03@gmail.com'],
  ig: ['https://www.instagram.com/maggiebellucci/', '@maggiebellucci'],
  in: ['https://www.linkedin.com/in/magdalena-bellucci-691284264', 'Magdalena Bellucci'],
  be: ['https://www.behance.net/magdalebellucc', 'Magdalena Bellucci'],
};
const CV = 'https://drive.google.com/file/d/1ZZdna8riiYEvZ2eGP06CkeP2mN1pD-8X/view?usp=sharing';

document.querySelectorAll('header.hd').forEach(h => {
  const nav = (h.dataset.nav || 'work about').split(' ');
  h.innerHTML = `
    <nav class="hd__nav">
      ${nav.includes('work') ? '<a href="work.html">Trabajos</a>' : ''}
      ${nav.includes('about') ? '<a href="about.html">Sobre mí</a>' : ''}
    </nav>
    ${'back' in h.dataset ? '<a class="hd__back" href="work.html">Trabajos</a>' : ''}
    <a class="hd__logo" href="index.html"><b>Magdalena Bellucci</b><small>${h.dataset.label || ''}</small></a>
    <a class="burger" href="menu.html" aria-label="Menú"><i></i><i></i><i></i></a>`;
});

document.querySelectorAll('footer.ft').forEach(f => {
  f.innerHTML = ['mail', 'ig', 'in', 'be'].map(k => {
    const [href, txt] = LINKS[k];
    const ext = k === 'mail' ? '' : ' target="_blank" rel="noopener"';
    const name = { mail: 'Mail', ig: 'Instagram', in: 'LinkedIn', be: 'Behance' }[k];
    return `<a href="${href}"${ext} aria-label="${name}" title="${name}">${ICONS[k]}</a>`;
  }).join('');
});

document.querySelectorAll('[data-cv]').forEach(a => { a.href = CV; a.target = '_blank'; a.rel = 'noopener'; });

// Videos sueltos de las páginas (no los que ya abren el reproductor o llevan a otra página):
// al tocarlos se abren grandes, con sonido y controles.
(() => {
  const vids = [...document.querySelectorAll('main video, .opening video')]
    .filter(v => !v.closest('a, .tile, .card, .player, #stage'));
  if (!vids.length) return;
  const box = document.createElement('div');
  box.className = 'vbox';
  box.hidden = true;
  box.innerHTML = '<button class="vbox__close" aria-label="Cerrar">✕</button><video controls playsinline></video>';
  document.body.appendChild(box);
  const big = box.querySelector('video');
  let source = null;
  const close = () => {
    big.pause(); big.removeAttribute("src"); big.load();
    box.hidden = true; document.body.style.overflow = "";
    if (source) source.play().catch(() => {});
  };
  vids.forEach(v => {
    v.classList.add('zoomable');
    let wrap = v.closest('.media');
    if (!wrap) { wrap = document.createElement('span'); wrap.style.display = 'block'; v.before(wrap); wrap.appendChild(v); }
    wrap.classList.add('zoom-wrap', 'has-ver');
    // El click se escucha en el contenedor, por si algo queda encima del video
    wrap.addEventListener("click", () => {
      source = v;
      v.pause();
      big.src = v.currentSrc || v.src;
      big.currentTime = 0;
      big.poster = v.poster;
      big.muted = false;
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      big.play().catch(() => {});
    });
  });
  box.querySelector('.vbox__close').addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });
})();
