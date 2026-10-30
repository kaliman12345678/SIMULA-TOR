/* Entrada: ratón/táctil para la cámara, joystick y botones táctiles */
export const TOUCH = { x:0, z:0, mag:0 };
const ITEMS = [['Digit1', '🌫️', 'smoke'], ['Digit2', '📣', 'decoy'], ['Digit3', '⚡', 'emp'], ['Digit4', '🐕', 'dogspray']];

export function initInput({ keys, pressed, cam, canvas, isTouch, clamp }) {
  if (isTouch) document.body.classList.add('touch');

  /* --- Cámara: arrastrar con ratón o con un dedo libre --- */
  const ptr = new Map();
  canvas.addEventListener('pointerdown', e => {
    ptr.set(e.pointerId, { x:e.clientX, y:e.clientY }); if (e.pointerType === 'touch') document.body.classList.add('touch');
    if (e.pointerType === 'mouse' && cam.view === 'fp' && canvas.requestPointerLock && document.pointerLockElement !== canvas) { try { canvas.requestPointerLock(); } catch (err) {} }   // ratón capturado en primera persona
  });
  addEventListener('mousemove', e => {
    if (document.pointerLockElement !== canvas) return;
    cam.yaw -= e.movementX * .0022; cam.fp = clamp(cam.fp - e.movementY * .0018, -1.3, 1.3);
  });
  addEventListener('pointermove', e => {
    if (document.pointerLockElement === canvas) return;
    const p = ptr.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    const k = e.pointerType === 'touch' ? .0075 : .006;
    cam.yaw -= dx * k;
    if (cam.view === 'fp') cam.fp = clamp(cam.fp - dy * (k * .65), -1.3, 1.3); else cam.pitch = clamp(cam.pitch + dy * (k * .65), .15, 1.15);
  });
  const up = e => ptr.delete(e.pointerId);
  addEventListener('pointerup', up); addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', e => { cam.dist = clamp(cam.dist + e.deltaY * .01, 5, 16); });

  /* --- Controles táctiles --- */
  const root = document.getElementById('touch');
  root.innerHTML = `
    <div id="joy"><div id="knob"></div></div>
    <div id="tbtns">
      <button class="tb" data-k="Space" style="grid-area:a">⤒<small>Saltar</small></button>
      <button class="tb" data-k="KeyE" id="tAct" style="grid-area:b">✋<small>Actuar</small></button>
      <button class="tb" data-k="KeyH" id="tHide" style="grid-area:c">🙈<small>Esconder</small></button>
      <button class="tb" data-k="KeyC" style="grid-area:d">⇩<small>Agachar</small></button>
      <button class="tb" data-k="KeyQ" style="grid-area:e">💊<small>Pastilla</small></button>
    </div>
    <div id="titems"><button class="tb it" data-k="KeyV" title="Vista">👁</button>${ITEMS.map(([c, ic, id]) => `<button class="tb it" data-k="${c}" data-i="${id}">${ic}<b id="ti-${id}">0</b></button>`).join('')}</div>`;
  root.querySelectorAll('button[data-k]').forEach(b => {
    const k = b.dataset.k;
    b.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); keys[k] = true; pressed[k] = true; b.classList.add('down'); try { b.setPointerCapture(e.pointerId); } catch (err) {} });
    const rel = () => { keys[k] = false; b.classList.remove('down'); };
    b.addEventListener('pointerup', rel); b.addEventListener('pointercancel', rel); b.addEventListener('pointerleave', rel);
  });

  const joy = document.getElementById('joy'), knob = document.getElementById('knob'); let jid = null, R = 56;
  const setJoy = e => {
    const r = joy.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2; R = r.width / 2;
    let dx = e.clientX - cx, dy = e.clientY - cy; const m = Math.hypot(dx, dy) || 1, k = Math.min(1, m / R);
    TOUCH.x = dx / m * k; TOUCH.z = dy / m * k; TOUCH.mag = k;
    knob.style.transform = `translate(${dx / m * k * R * .6}px,${dy / m * k * R * .6}px)`;
  };
  joy.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); jid = e.pointerId; try { joy.setPointerCapture(jid); } catch (err) {} setJoy(e); });
  joy.addEventListener('pointermove', e => { if (e.pointerId === jid) setJoy(e); });
  const endJoy = e => { if (e.pointerId !== jid) return; jid = null; TOUCH.x = TOUCH.z = TOUCH.mag = 0; knob.style.transform = 'translate(0,0)'; };
  joy.addEventListener('pointerup', endJoy); joy.addEventListener('pointercancel', endJoy);

  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('gesturestart', e => e.preventDefault());
}

export function updateTouchUI(S, avail) {
  const set = (id, v) => { const e = document.getElementById(id); if (e && e.textContent !== String(v)) e.textContent = v; };
  if (S) ITEMS.forEach(([, , id]) => set('ti-' + id, S.inv[id] || 0));
  const a = document.getElementById('tAct'), h = document.getElementById('tHide');
  if (a) { a.classList.toggle('avail', !!avail.act); const sm = a.querySelector('small'); if (sm && avail.actLabel && sm.textContent !== avail.actLabel) sm.textContent = avail.actLabel; }
  if (h) h.classList.toggle('avail', !!avail.hide);
}

export const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
export const isStandalone = () => { try { return matchMedia('(display-mode: fullscreen)').matches || matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; } };
export const inFullscreen = () => !!(document.fullscreenElement || document.webkitFullscreenElement) || isStandalone();
const canFS = () => { const d = document.documentElement; return !!(d.requestFullscreen || d.webkitRequestFullscreen); };
/* Devuelve 'on' | 'off' | 'ios' (iPhone: el navegador no lo permite, hay que instalar la app) | 'none' */
export async function toggleFullscreen() {
  try {
    if (document.fullscreenElement || document.webkitFullscreenElement) { await (document.exitFullscreen || document.webkitExitFullscreen).call(document); return 'off'; }
    if (!canFS()) return isIOS() ? 'ios' : 'none';
    const d = document.documentElement;
    await (d.requestFullscreen ? d.requestFullscreen({ navigationUI:'hide' }) : d.webkitRequestFullscreen());
    try { if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape'); } catch (e) {}
    return 'on';
  } catch (e) { return isIOS() ? 'ios' : 'none'; }
}
export async function goFullscreen() {
  try {
    const d = document.documentElement;
    if (d.requestFullscreen && !document.fullscreenElement) await d.requestFullscreen({ navigationUI:'hide' });
    if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape');
  } catch (e) {}
}
