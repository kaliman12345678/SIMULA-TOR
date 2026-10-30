/* Parámetros del juego, modos de dificultad y panel de administración */

// [clave, etiqueta, grupo, mín, máx, paso, novato, difícil, experto, ayuda]
const DEF = [
  ['missionSec', 'Tiempo de misión (s)', 'Tiempos y vida', 20, 300, 1, 90, 60, 50, 'Segundos reales para abordar en la Puerta 27.'],
  ['lifeSec', 'Vida de las cápsulas (s)', 'Tiempos y vida', 5, 120, 1, 45, 30, 20, 'Segundos reales hasta que explotan.'],
  ['lifeMax', 'Tope de vida (s)', 'Tiempos y vida', 10, 180, 1, 60, 45, 32, 'Máximo al que se puede alargar la vida.'],
  ['pickupLife', 'Antiácido: +s de vida', 'Tiempos y vida', 0, 30, .5, 8, 7, 7, 'Segundos de vida que da cada 💊 del suelo.'],
  ['pickupTime', 'Reloj dorado: +s de misión', 'Tiempos y vida', 0, 30, .5, 6, 5, 4, 'Segundos de misión que da cada ⏱.'],
  ['pillLife', 'Pastilla: +s de vida', 'Tiempos y vida', 0, 40, .5, 12, 10, 8, 'Segundos que da la pastilla (Q).'],
  ['coffeeLife', 'Café: +s de vida', 'Tiempos y vida', 0, 30, .5, 5, 4, 3, ''],
  ['adrenLife', 'Adrenalina al zafarte: +s', 'Tiempos y vida', 0, 30, .5, 4, 4, 3, 'Vida que ganas al soltarte de un agarrón.'],
  ['hiddenDrain', 'Desgaste escondido (×)', 'Tiempos y vida', .1, 1, .05, .5, .55, .6, 'Cuánto se desgastan las cápsulas dentro de una taquilla.'],
  ['actionTime', 'Coste de trámites (s)', 'Tiempos y vida', .1, 2, .05, .5, .6, .7, 'Segundos reales por cada "minuto" de las acciones de menú.'],

  ['walk', 'Velocidad al caminar (m/s)', 'Jugador', 2, 8, .1, 4.2, 4, 4, ''],
  ['run', 'Velocidad al correr (m/s)', 'Jugador', 4, 12, .1, 7.4, 7.2, 7.2, ''],
  ['crouchSpeed', 'Velocidad agachado (m/s)', 'Jugador', 1, 5, .1, 2.2, 2.1, 2.1, ''],
  ['hp', 'Salud máxima', 'Jugador', 25, 400, 5, 150, 100, 100, ''],

  ['armedPct', 'Policías armados (%)', 'Policía', 0, 100, 5, 15, 60, 100, 'Porcentaje de policías con pistola.'],
  ['bulletDmg', 'Daño de cada bala', 'Policía', 5, 100, 1, 20, 25, 34, ''],
  ['chaseHeat', 'Sospecha que activa la persecución', 'Policía', 5, 100, 1, 45, 30, 20, 'Menos = te persiguen antes.'],
  ['chaseSpeed', 'Velocidad de persecución (m/s)', 'Policía', 2, 10, .1, 4.4, 5, 5.8, ''],
  ['chaseSpeedHot', 'Persecución con sospecha > 70 (m/s)', 'Policía', 2, 12, .1, 5.2, 5.8, 6.6, ''],
  ['patrolMul', 'Velocidad de patrulla (×)', 'Policía', .5, 2, .05, .9, 1, 1.15, ''],
  ['visionMul', 'Alcance de visión (×)', 'Policía', .5, 2, .05, .85, 1, 1.2, ''],
  ['shootWarn', 'Aviso antes de disparar (s)', 'Policía', 0, 5, .1, 1.8, 1.2, .6, ''],
  ['fireMin', 'Cadencia de disparo mín (s)', 'Policía', .2, 4, .1, 1.4, .9, .6, ''],
  ['fireMax', 'Cadencia de disparo máx (s)', 'Policía', .2, 5, .1, 2, 1.4, 1, ''],
  ['hitBase', 'Precisión base', 'Policía', .1, 1, .01, .5, .62, .75, 'Probabilidad base de acertar (baja con la distancia).'],
  ['shootRange', 'Alcance de disparo (m)', 'Policía', 8, 40, 1, 20, 24, 28, ''],
  ['radioAll', 'Radio: alertan a todos', 'Policía', 0, 1, 1, 0, 1, 1, 'Al verte, todos los policías reciben tu posición.'],
  ['alertRadius', 'Radio de alerta sin radio (m)', 'Policía', 5, 60, 1, 14, 18, 26, ''],
  ['flank', 'Flanqueo y cierre de rutas', 'Policía', 0, 1, 1, 0, 1, 1, 'Parte de los perseguidores te corta el camino por delante.'],
  ['droneOn', 'Dron con foco', 'Policía', 0, 1, 1, 0, 1, 1, ''],
  ['droneSpeed', 'Velocidad del dron (m/s)', 'Policía', 2, 14, .5, 5, 6, 7.5, ''],

  ['dogRadius', 'Radio de olfato base (m)', 'Perros', 4, 40, 1, 12, 17, 22, ''],
  ['dogRadiusSmell', 'Radio extra por intensidad (m)', 'Perros', 0, 60, 1, 20, 26, 32, 'Se suma según lo que huela tu mercancía.'],
  ['dogRate', 'Velocidad de detección (×)', 'Perros', .2, 5, .05, 1.1, 1.6, 2.2, 'Más = te detectan antes.'],
  ['dogSpeed', 'Velocidad de persecución (m/s)', 'Perros', 3, 12, .1, 6.8, 7.6, 8.4, ''],
  ['stunSec', 'Aturdimiento tras zafarte (s)', 'Perros', 1, 15, .5, 6, 5, 4, ''],

  ['shiftSec', 'Cambio de pasillos cada (s, 0 = nunca)', 'Laberinto', 0, 120, 1, 30, 18, 10, 'Los huecos de las paredes se mueven.'],
  ['shiftWarn', 'Aviso previo del cambio (s)', 'Laberinto', 0, 8, .5, 3, 2.5, 1.5, ''],
  ['gapWidth', 'Ancho de los huecos (m)', 'Laberinto', 6, 22, 1, 14, 12, 10, ''],
  ['doorsClose', 'Puertas que se cierran a tu espalda', 'Laberinto', 0, 1, 1, 1, 1, 1, 'Si te devuelves, esa entrada ya no sirve.'],
  ['laneClose', 'Bloqueo rotativo de carriles', 'Laberinto', 0, 1, 1, 1, 1, 1, 'Cada cambio cierra una entrada del control.'],
  ['gps', 'Flecha de ruta (GPS)', 'Ayudas y objetos', 0, 1, 1, 1, 1, 0, ''],
  ['startSmoke', 'Bombas de humo iniciales', 'Ayudas y objetos', 0, 9, 1, 2, 1, 1, ''],
  ['startDecoy', 'Señuelos iniciales', 'Ayudas y objetos', 0, 9, 1, 2, 1, 1, ''],
  ['startEmp', 'Pulsos EMP iniciales', 'Ayudas y objetos', 0, 9, 1, 1, 1, 0, ''],
  ['startDogSpray', 'Sprays anti-perros iniciales', 'Ayudas y objetos', 0, 9, 1, 1, 1, 0, ''],
  ['itemDur', 'Duración de humo/spray/EMP (s)', 'Ayudas y objetos', 2, 30, 1, 8, 7, 6, ''],
  ['payoutMul', 'Multiplicador de ganancias', 'Economía', .1, 10, .1, 1, 1.5, 2.2, 'Dinero permanente que ganas por partida.']
];
const BOOLS = new Set(['radioAll', 'flank', 'droneOn', 'doorsClose', 'laneClose', 'gps']);

export const DIFF_IDS = ['novato', 'dificil', 'experto'];
export const DIFF_LABEL = { novato:'Novato', dificil:'Difícil', experto:'Experto' };
export const DIFF_DESC = {
  novato: 'Cápsulas 45 s · misión 90 s · pocos armados · pasillos cambian despacio.',
  dificil: 'Cápsulas 30 s · misión 60 s · mayoría armada · radio, flanqueo y dron.',
  experto: 'Cápsulas 20 s · misión 50 s · todos armados · sin flecha de ruta · cambios cada 10 s.'
};

const KEY = 'simulator.cfg.v1';
const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
export const cfg = Object.assign({ diff:'dificil', quality:'auto', pass:'admin' }, read());
cfg.over = Object.assign({ novato:{}, dificil:{}, experto:{} }, cfg.over || {});
try { const q = new URLSearchParams(location.search).get('q'); if (['low', 'med', 'high'].includes(q)) cfg.quality = q; } catch (e) {}   // ?q=low fuerza la calidad (no se guarda)
export const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) {} };

export const P = {};
export function defaults(id) { const i = DIFF_IDS.indexOf(id); const o = {}; DEF.forEach(d => o[d[0]] = d[6 + i]); return o; }
export function applyDifficulty(id) {
  if (!DIFF_IDS.includes(id)) id = 'dificil';
  cfg.diff = id; for (const k in P) delete P[k];
  Object.assign(P, defaults(id), cfg.over[id] || {}); P.diff = id; save();
}
applyDifficulty(cfg.diff);

export const isTouch = (() => { try { return matchMedia('(pointer:coarse)').matches || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent); } catch (e) { return false; } })();
export function qualityTier() { return cfg.quality === 'auto' ? (isTouch ? 'med' : 'high') : cfg.quality; }

/* ---------- Panel de administración ---------- */
let hook = null;
export const onAdminClose = fn => { hook = fn; };

function setParam(key, raw, d) {
  let v = typeof raw === 'boolean' ? (raw ? 1 : 0) : parseFloat(raw);
  if (!isFinite(v)) return null;
  v = Math.min(d[4], Math.max(d[3], v));
  const def = d[6 + DIFF_IDS.indexOf(cfg.diff)];
  if (v === def) delete cfg.over[cfg.diff][key]; else cfg.over[cfg.diff][key] = v;
  P[key] = v; save(); return v;
}

export function openAdmin() {
  const root = document.getElementById('admin');
  root.className = 'overlay on';
  if (sessionStorage.getItem('simAdmin') !== '1') {
    root.innerHTML = `<div class="adm"><h2>⚙ ADMINISTRACIÓN</h2><p>Introduce la clave de administrador.</p>
      <input id="admPass" type="password" placeholder="Clave" autocomplete="off"><div id="admMsg" class="msg"></div>
      <div class="row"><button id="admOk">Entrar</button><button id="admX">Cancelar</button></div>
      <p class="dim">Nota: en una página pública la clave solo evita abrir el panel por error; no es seguridad real.</p></div>`;
    const go = () => { if (document.getElementById('admPass').value === cfg.pass) { sessionStorage.setItem('simAdmin', '1'); render(root); } else document.getElementById('admMsg').textContent = 'Clave incorrecta.'; };
    document.getElementById('admOk').onclick = go; document.getElementById('admX').onclick = () => close(root);
    document.getElementById('admPass').addEventListener('keydown', e => { if (e.key === 'Enter') go(); e.stopPropagation(); });
    document.getElementById('admPass').focus();
    return;
  }
  render(root);
}
function close(root) { root.className = 'overlay'; root.innerHTML = ''; if (hook) hook(); }

function render(root) {
  const groups = [...new Set(DEF.map(d => d[2]))], i = DIFF_IDS.indexOf(cfg.diff);
  const row = d => {
    const key = d[0], val = P[key], def = d[6 + i], changed = val !== def;
    const inp = BOOLS.has(key) ? `<input type="checkbox" data-k="${key}" ${val ? 'checked' : ''}>` : `<input type="number" data-k="${key}" min="${d[3]}" max="${d[4]}" step="${d[5]}" value="${val}">`;
    return `<div class="prm ${changed ? 'chg' : ''}" title="${d[9] || ''}"><label>${d[1]}</label>${inp}<span class="def">def: ${BOOLS.has(key) ? (def ? 'sí' : 'no') : def}</span><button class="rs" data-r="${key}" ${changed ? '' : 'disabled'}>↺</button></div>`;
  };
  root.innerHTML = `<div class="adm wide">
    <div class="admHead"><h2>⚙ PANEL DE ADMINISTRACIÓN</h2><button id="admClose">✕ Cerrar</button></div>
    <div class="tabs">${DIFF_IDS.map(id => `<button data-d="${id}" class="${cfg.diff === id ? 'on' : ''}">${DIFF_LABEL[id]}</button>`).join('')}</div>
    <p class="dim">${DIFF_DESC[cfg.diff]} Los cambios se aplican al instante y se guardan en este navegador.</p>
    <div class="admBody">${groups.map(g => `<details open><summary>${g}</summary>${DEF.filter(d => d[2] === g).map(row).join('')}</details>`).join('')}
      <details open><summary>Gráficos y sistema</summary>
        <div class="prm"><label>Calidad gráfica</label><select id="admQ">${['auto', 'low', 'med', 'high'].map(q => `<option value="${q}" ${cfg.quality === q ? 'selected' : ''}>${{ auto:'Automática', low:'Baja', med:'Media', high:'Alta' }[q]}</option>`).join('')}</select><span class="def">se aplica al recargar</span><span></span></div>
        <div class="prm"><label>Nueva clave de administrador</label><input id="admNewPass" type="text" placeholder="(sin cambios)"><button id="admSetPass">Guardar</button><span></span></div>
      </details></div>
    <div class="row"><button id="admExp">⬇ Exportar JSON</button><button id="admImp">⬆ Importar JSON</button><button id="admRst">Restablecer este modo</button><button id="admRstAll">Restablecer todo</button><button id="admReload">↻ Aplicar y recargar</button></div>
    <textarea id="admJson" placeholder="Pega aquí un JSON exportado y pulsa Importar" style="display:none"></textarea></div>`;
  root.querySelectorAll('input[data-k]').forEach(el => {
    el.addEventListener('keydown', e => e.stopPropagation());
    el.onchange = () => { const d = DEF.find(x => x[0] === el.dataset.k); setParam(d[0], el.type === 'checkbox' ? el.checked : el.value, d); render(root); };
  });
  root.querySelectorAll('button[data-r]').forEach(b => b.onclick = () => { delete cfg.over[cfg.diff][b.dataset.r]; applyDifficulty(cfg.diff); render(root); });
  root.querySelectorAll('.tabs button').forEach(b => b.onclick = () => { applyDifficulty(b.dataset.d); render(root); });
  document.getElementById('admClose').onclick = () => close(root);
  document.getElementById('admQ').onchange = e => { cfg.quality = e.target.value; save(); };
  document.getElementById('admSetPass').onclick = () => { const v = document.getElementById('admNewPass').value.trim(); if (v) { cfg.pass = v; save(); document.getElementById('admNewPass').value = ''; document.getElementById('admNewPass').placeholder = 'Clave actualizada'; } };
  document.getElementById('admRst').onclick = () => { cfg.over[cfg.diff] = {}; applyDifficulty(cfg.diff); render(root); };
  document.getElementById('admRstAll').onclick = () => { if (confirm('¿Restablecer TODOS los modos a sus valores originales?')) { cfg.over = { novato:{}, dificil:{}, experto:{} }; applyDifficulty(cfg.diff); render(root); } };
  document.getElementById('admReload').onclick = () => location.reload();
  const ta = document.getElementById('admJson');
  document.getElementById('admExp').onclick = () => {
    const data = JSON.stringify({ diff:cfg.diff, quality:cfg.quality, over:cfg.over }, null, 2);
    ta.style.display = 'block'; ta.value = data;
    try { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], { type:'application/json' })); a.download = 'simula-tor-config.json'; a.click(); } catch (e) {}
  };
  document.getElementById('admImp').onclick = () => {
    if (ta.style.display === 'none') { ta.style.display = 'block'; ta.value = ''; ta.focus(); return; }
    try {
      const j = JSON.parse(ta.value), keys = new Set(DEF.map(d => d[0]));
      for (const id of DIFF_IDS) { if (!j.over || !j.over[id]) continue; cfg.over[id] = {}; for (const [k, v] of Object.entries(j.over[id])) { const d = DEF.find(x => x[0] === k); if (d && isFinite(v)) cfg.over[id][k] = Math.min(d[4], Math.max(d[3], +v)); } }
      if (['auto', 'low', 'med', 'high'].includes(j.quality)) cfg.quality = j.quality;
      applyDifficulty(DIFF_IDS.includes(j.diff) ? j.diff : cfg.diff); render(root);
    } catch (e) { ta.value = 'JSON no válido: ' + e.message; }
  };
  root.querySelector('.adm').addEventListener('keydown', e => e.stopPropagation());
}
