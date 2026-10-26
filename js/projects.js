// Páginas de proyectos en formato lista (mismo esquema que la vista Lista de IA).
// Cada página define window.GROUPS = [{ label, items: [{ title, src, poster, ar, desc, meta: [[etiqueta, valor], ...] }] }].
(() => {
  const groups = window.GROUPS || [];
  const all = groups.flatMap(g => g.items.map(it => ({ ...it, group: g.label })));
  const list = document.getElementById('list');
  const pad = n => String(n).padStart(2, '0');

  groups.forEach(g => {
    const wrap = document.createElement('div');
    wrap.className = 'list__group';
    wrap.innerHTML = `${g.label && !g.hideLabel ? `<h2 class="list__label">${g.label}</h2>` : ""}<div class="list__grid"></div>`;
    g.items.forEach(it => {
      const t = document.createElement('button');
      t.className = 'tile';
      t.style.setProperty('--ar', it.ar || '16/10');
      t.innerHTML = `<video muted loop playsinline preload="none" poster="${it.poster}" src="${it.src}"></video>
        <span class="tile__cap"><b>${it.title}</b></span>`;
      const v = t.querySelector('video');
      t.addEventListener('mouseenter', () => v.play().catch(() => {}));
      t.addEventListener('mouseleave', () => v.pause());
      t.addEventListener('click', () => open(all.findIndex(x => x.src === it.src && x.title === it.title)));
      wrap.querySelector('.list__grid').appendChild(t);
    });
    list.appendChild(wrap);
  });

  const player = document.getElementById('player');
  const pvideo = document.getElementById('pvideo');
  let idx = 0;
  function open(i) {
    idx = i;
    const it = all[i];
    pvideo.src = it.src;
    pvideo.poster = it.poster;
    pvideo.muted = false;
    const desc = (it.desc || '').split('\n\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');
    const meta = (it.meta || []).map(([k, v]) => `<div><p class="label">${k}</p><p>${v}</p></div>`).join('');
    document.getElementById('pinfo').innerHTML = `
      <p class="cat">${it.group} · ${pad(i + 1)} / ${pad(all.length)}</p>
      <h3>${it.title}</h3>
      <div class="desc">${desc}</div>
      <div class="meta">${meta}</div>`;
    player.hidden = false;
    document.body.style.overflow = 'hidden';
    list.querySelectorAll('video').forEach(v => v.pause());
    pvideo.play().catch(() => {});
  }
  function close() {
    pvideo.pause();
    pvideo.removeAttribute('src');
    pvideo.load();
    player.hidden = true;
    document.body.style.overflow = '';
  }
  const step = d => open((idx + d + all.length) % all.length);
  player.querySelector('.player__close').addEventListener('click', close);
  player.querySelector('.player__nav--prev').addEventListener('click', () => step(-1));
  player.querySelector('.player__nav--next').addEventListener('click', () => step(1));
  player.addEventListener('click', e => { if (e.target === player) close(); });
  addEventListener('keydown', e => {
    if (player.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
})();
