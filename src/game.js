import * as THREE from 'three';
import { P, cfg, applyDifficulty, DIFF_IDS, DIFF_LABEL, DIFF_DESC, openAdmin, onAdminClose, isTouch, qualityTier } from './config.js';
import { meta, saveMeta, UPGRADES, lvl, buy, addMoney, mulberry32, dailySeed, addRecord, records } from './meta.js';
import { TOUCH, initInput, updateTouchUI, goFullscreen } from './touch.js';

/* ==========================================================
   UTILIDADES
   ========================================================== */
const $ = id => document.getElementById(id);
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const wrapPi = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const lerpAng = (a, b, t) => a + wrapPi(b - a) * t;
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ==========================================================
   DATOS DE DISEÑO
   ========================================================== */
const lifeBase = () => P.lifeSec + lvl('life') * 2;
const lifeCap = () => P.lifeMax + lvl('life') * 2;

const CARGO = {
  coca: { id:'coca', name:'Cocaína pura',       weight:1, smell:.50, profit:9000, acid:1.3, desc:'Ligera, valiosa, olor moderado. El látex sufre con los jugos gástricos.' },
  hero: { id:'hero', name:'Heroína',            weight:1, smell:.35, profit:7000, acid:1.0, desc:'Poco olor y cápsulas resistentes. Paga menos, pero es discreta.' },
  mari: { id:'mari', name:'Marihuana prensada', weight:3, smell:.90, profit:2500, acid:.8,  desc:'Pesa, huele a kilómetros y paga poco. Los perros te esperan con ilusión.' }
};
const METHOD = {
  capsules: { id:'capsules', name:'Cápsulas ingeridas',        stomach:1.3, desc:'Los perros casi no huelen, pero el escáner te ve por dentro y el estómago es un reloj de arena.' },
  tape:     { id:'tape',     name:'Pegado al cuerpo',          stomach:.6,  desc:'Los perros lo huelen y el escáner lo detecta a medias.' },
  bag:      { id:'bag',      name:'Doble fondo en la maleta',  stomach:.6,  desc:'Tu cuerpo va limpio, pero la maleta te delata ante rayos X y perros.' }
};
const PROFILE = {
  exec:    { id:'exec',    name:'Ejecutivo de negocios', cash:400, heat:5,  quiz:-.06, lie:.15,  nerv:1,  lost:false, look:{ shirt:0x1c2230, pants:0x1c2230, hair:0x201a14, tie:true },  desc:'Traje y maletín: te creen más. Entras con efectivo.' },
  tourist: { id:'tourist', name:'Turista despistado',    cash:250, heat:15, quiz:.02,  lie:.05,  nerv:1,  lost:true,  look:{ shirt:0xff7a3d, pants:0xe3d49a, hair:0x6b4a2b, hat:0xf0e0a0 }, desc:'Camisa hawaiana y mapa al revés. Nadie sospecha de un inútil.' },
  student: { id:'student', name:'Estudiante',            cash:120, heat:10, quiz:.06,  lie:-.05, nerv:.5, lost:false, look:{ shirt:0x3b5bdb, pants:0x2f3644, hair:0x15110d, pack:true }, desc:'Poco dinero y mucha sospecha, pero tus nervios pasan por "estrés".' }
};
const SHOP = [
  { id:'pills',   name:'Pastilla antimotilidad', cost:50,  desc:'Suma segundos de vida y frena el desgaste unos segundos. (Q para tomarla)' },
  { id:'perfume', name:'Spray anti-olor',        cost:40,  desc:'Los perros huelen la mitad. (R para usarlo)' },
  { id:'clothes', name:'Ropa de repuesto',       cost:70,  desc:'Cambia tu apariencia en un baño y baja la sospecha.' },
  { id:'contact', name:'Contacto de cómplice',   cost:120, desc:'Alguien en los baños cambia tu maleta por otra "más amable".' }
];
const MINI = {
  body:  { title:'Escáner corporal', hint:'Mantén pulsado (ratón o ESPACIO) y NO respires hasta que termine el barrido.' },
  dog:   { title:'Perro K9',         hint:'Sincroniza tu pulso: toca (clic o ESPACIO) cuando el anillo llegue al borde. 5 latidos.' },
  quiz:  { title:'Guardia',          hint:'Seca las gotas de sudor antes de que se note. 5 gotas.' },
  cramp: { title:'¡Retortijón!',     hint:'¡Aprieta! Toca rápido (clic o ESPACIO) 12 veces para contener las cápsulas.' },
  struggle: { title:'¡Te agarraron!', hint:'¡ZAFATE! Toca como loco (clic o ESPACIO) antes de que se acabe el tiempo.' }
};
const CHK_TXT = {
  body: { pass:'El agente del escáner mira tu silueta con aburrimiento profesional. "Siguiente."',
          fail:'La pantalla muestra tu abdomen como un collar de perlas. El operador sonríe y pulsa un botón rojo.' },
  bag:  { pass:'Tu equipaje pasa por rayos X entre un osito de peluche y un ukelele. Nada raro. Eso crees tú.',
          fail:'En el monitor, tu maleta tiene un doble fondo con un contorno que ningún ukelele tiene. "¿Me abre esto, por favor?"' },
  quiz: { pass:'El guardia te mira de arriba abajo... y decide que no vale la pena molestarse.' }
};

/* ==========================================================
   ESTADO
   ========================================================== */
let S = null;
const G = { mode:'title', busy:false, t:0, dlgKey:null, paused:false, daily:false, seed:1 };

function newState() {
  return { time:P.missionSec, life:lifeBase(), hp:P.hp + lvl('hp') * 25, playT:0, picked:0, empT:0, radioOff:0, dogOff:0, flankPt:null, heat:0, integrity:100, pillLeft:0, cash:0, lastBeep:99, hitFlash:0,
    inv:{ pills:0, perfume:0, perfumeOn:false, clothes:0, contact:0, smoke:P.startSmoke + lvl('bag'), decoy:P.startDecoy + lvl('bag'), emp:P.startEmp, dogspray:P.startDogSpray },
    cargo:null, method:null, profile:null, bagSwapped:false, disguised:0, camsOff:false,
    checkedIn:false, passed:false, done:{}, sniff:0, crampT:rnd(8, 14), over:false,
    lastKnown:null, lastKnownDog:null, invuln:0, compromised:false };
}

/* ==========================================================
   AUDIO
   ========================================================== */
let AC = null, humStarted = false;
const ac = () => AC || (AC = new (window.AudioContext || window.webkitAudioContext)());
function beep(f = 880, d = .1, type = 'square', v = .05) {
  try { const a = ac(), o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.value = f; g.gain.value = v;
    g.gain.exponentialRampToValueAtTime(.0001, a.currentTime + d); o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime + d); } catch (e) {}
}
function noise(d = 1, v = .3, lp = 1200) {
  try { const a = ac(), n = a.sampleRate * d, b = a.createBuffer(1, n, a.sampleRate), c = b.getChannelData(0);
    for (let i = 0; i < n; i++) c[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = a.createBufferSource(), g = a.createGain(), f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; g.gain.value = v;
    s.buffer = b; s.connect(f); f.connect(g); g.connect(a.destination); s.start(); } catch (e) {}
}
function startHum() {
  if (humStarted) return; humStarted = true;
  try { const a = ac(), n = a.sampleRate * 2, b = a.createBuffer(1, n, a.sampleRate), c = b.getChannelData(0);
    for (let i = 0; i < n; i++) c[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = b; s.loop = true; f.type = 'lowpass'; f.frequency.value = 380; g.gain.value = .05; s.connect(f); f.connect(g); g.connect(a.destination); s.start(); } catch (e) {}
}

/* ==========================================================
   ESCENA 3D
   ========================================================== */
const QUALITY = qualityTier();
const renderer = new THREE.WebGLRenderer({ antialias:QUALITY === 'high', powerPreference:'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, { low:1, med:1.5, high:2 }[QUALITY]));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = QUALITY !== 'low';
renderer.shadowMap.type = THREE.PCFShadowMap;
$('game').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, .1, 400);
{
  const c = document.createElement('canvas'); c.width = 2; c.height = 256;
  const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#1d3a6b'); g.addColorStop(.55, '#d98a5f'); g.addColorStop(1, '#f4c27a');
  x.fillStyle = g; x.fillRect(0, 0, 2, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t;
  scene.fog = new THREE.Fog(0xcf9a76, 90, 260);
}
scene.add(new THREE.HemisphereLight(0xdfeaff, 0x5a4a44, 1.25));
const sun = new THREE.DirectionalLight(0xffd9a8, 2.3);
sun.position.set(-40, 70, 50); sun.castShadow = true;
sun.shadow.mapSize.set(QUALITY === 'high' ? 2048 : 1024, QUALITY === 'high' ? 2048 : 1024);
sun.castShadow = QUALITY !== 'low';
Object.assign(sun.shadow.camera, { left:-70, right:70, top:110, bottom:-110, near:1, far:220 });
sun.shadow.bias = -.0005;
scene.add(sun, sun.target);

addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });

const matCache = {};
const mat = (color, extra) => extra ? new THREE.MeshStandardMaterial({ color, roughness:.85, ...extra }) : (matCache[color] ||= new THREE.MeshStandardMaterial({ color, roughness:.85 }));

const COLL = [], LOSB = [], ZONES = [], TRIGS = [], GUARDS = [], DOGS = [], NPCS = [], CARS = [], BELTS = [], HIDES = [];
const WALLS_DRAW = [];

function solid(x0, z0, x1, z1, h, color, o = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), o.mat ? mat(color, o.mat) : mat(color));
  m.position.set((x0 + x1) / 2, (o.y0 || 0) + h / 2, (z0 + z1) / 2);
  m.castShadow = o.shadow !== false; m.receiveShadow = true; scene.add(m);
  if (o.coll !== false) { const b = { x0, x1, z0, z1, h }; COLL.push(b); WALLS_DRAW.push(b); if (o.los !== false) LOSB.push(b); }
  return m;
}
function deco(x0, z0, x1, z1, h, color, y0 = 0, extra) { return solid(x0, z0, x1, z1, h, color, { coll:false, y0, mat:extra }); }

function label(text, x, y, z, w = 9, color = '#ffffff', bg = 'rgba(10,14,20,.85)') {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128;
  const g = c.getContext('2d'); g.fillStyle = bg; g.fillRect(0, 0, 512, 128); g.strokeStyle = color; g.lineWidth = 6; g.strokeRect(3, 3, 506, 122);
  g.fillStyle = color; g.font = 'bold 52px "Segoe UI", Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 256, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map:t, transparent:true }));
  s.scale.set(w * .6, w * .15, 1); s.position.set(x, y, z); scene.add(s); return s;
}

/* Segmento vs AABB (visión, caminos) */
function segHitsBox(ax, az, bx, bz, b, m = 0) {
  let t0 = 0, t1 = 1; const dx = bx - ax, dz = bz - az;
  for (const [p, d, lo, hi] of [[ax, dx, b.x0 - m, b.x1 + m], [az, dz, b.z0 - m, b.z1 + m]]) {
    if (Math.abs(d) < 1e-9) { if (p < lo || p > hi) return false; }
    else { let a = (lo - p) / d, c = (hi - p) / d; if (a > c) [a, c] = [c, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) return false; }
  }
  return true;
}
const clearSeg = (ax, az, bx, bz, list, m = 0) => !list.some(b => segHitsBox(ax, az, bx, bz, b, m));

/* ---------- Personajes ---------- */
function makeHuman(o) {
  const g = new THREE.Group();
  const M = c => new THREE.MeshStandardMaterial({ color:c, roughness:.8 });
  const shirtM = M(o.shirt), pantsM = M(o.pants), skinM = M(o.skin ?? 0xe0b48a), hairM = M(o.hair ?? 0x222222);
  const box = (w, h, d, m, x, y, z, p = g) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = true; p.add(b); return b; };
  const torso = box(.52, .66, .28, shirtM, 0, 1.13, 0);
  const head = box(.3, .3, .3, skinM, 0, 1.64, 0);
  box(.32, .1, .32, hairM, 0, 1.8, 0);
  const hat = box(.4, .09, .4, M(o.hat ?? 0x000000), 0, 1.86, 0); hat.visible = !!o.hat;
  const shades = box(.28, .06, .04, M(0x050505), 0, 1.66, .16); shades.visible = false;
  const mkLeg = x => { const p = new THREE.Group(); p.position.set(x, .8, 0); g.add(p); box(.19, .8, .21, pantsM, 0, -.4, 0, p); box(.2, .1, .27, M(0x151515), 0, -.78, .03, p); return p; };
  const mkArm = x => { const p = new THREE.Group(); p.position.set(x, 1.44, 0); g.add(p); box(.15, .6, .17, shirtM, 0, -.3, 0, p); box(.14, .12, .15, skinM, 0, -.64, 0, p); return p; };
  const legL = mkLeg(-.13), legR = mkLeg(.13), armL = mkArm(-.35), armR = mkArm(.35);
  if (o.tie) box(.08, .4, .02, M(0xaa1e1e), 0, 1.2, .15);
  if (o.vest) box(.54, .3, .3, M(0xe8e8e8), 0, 1.25, 0);
  if (o.capCol) { box(.34, .1, .34, M(o.capCol), 0, 1.84, 0); box(.3, .03, .16, M(o.capCol), 0, 1.78, .24); }
  if (o.pack) box(.4, .5, .18, M(0xc0392b), 0, 1.15, -.23);
  if (o.bag) { const b = box(.1, .42, .5, M(0x3a2f2a), 0, -.72, .1, armR); box(.14, .05, .3, M(0x8a7a6a), 0, -.5, .1, armR); b.name = 'bag'; }
  g.userData = { legL, legR, armL, armR, torso, head, shirtM, pantsM, hat, shades, ph:Math.random() * 6, o };
  return g;
}
function animHuman(h, speed, dt, sprint) {
  const u = h.userData; u.ph += speed * dt * 2.1;
  const amp = clamp(speed / 4, 0, 1.4) * .85;
  const s = Math.sin(u.ph) * amp;
  u.legL.rotation.x = s; u.legR.rotation.x = -s;
  u.armL.rotation.x = -s * .9; u.armR.rotation.x = u.o.bag ? -.15 : s * .9;
  const lean = sprint ? .18 : speed > .2 ? .06 : 0;
  u.torso.rotation.x += (lean - u.torso.rotation.x) * Math.min(1, dt * 8);
  u.torso.position.y = 1.13 + Math.abs(Math.sin(u.ph)) * .03 * (speed > .2 ? 1 : 0) + (speed < .2 ? Math.sin(G.t * 2 + u.ph) * .004 : 0);
  u.head.position.y = u.torso.position.y + .51;
  return Math.floor(u.ph / Math.PI);
}

function makeDog() {
  const g = new THREE.Group();
  const M = c => new THREE.MeshStandardMaterial({ color:c, roughness:.9 });
  const fur = M(0x8a5a2b), dark = M(0x2b1c10);
  const box = (w, h, d, m, x, y, z, p = g) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = true; p.add(b); return b; };
  box(.34, .34, .85, fur, 0, .55, 0);
  const head = new THREE.Group(); head.position.set(0, .72, .5); g.add(head);
  box(.24, .24, .26, fur, 0, 0, 0, head); box(.14, .12, .18, dark, 0, -.04, .2, head); box(.06, .12, .05, dark, -.09, .16, -.04, head); box(.06, .12, .05, dark, .09, .16, -.04, head);
  const tail = new THREE.Group(); tail.position.set(0, .66, -.42); g.add(tail); box(.06, .06, .34, fur, 0, .08, -.16, tail);
  const legs = [[-.12, .38], [.12, .38], [-.12, -.34], [.12, -.34]].map(([x, z]) => { const p = new THREE.Group(); p.position.set(x, .4, z); g.add(p); box(.09, .4, .09, fur, 0, -.2, 0, p); return p; });
  g.userData = { head, tail, legs, ph:0 };
  return g;
}
function animDog(d, speed, dt, excited) {
  const u = d.userData; u.ph += speed * dt * 3;
  u.legs.forEach((l, i) => l.rotation.x = Math.sin(u.ph + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI / 2 : 0)) * .7 * Math.min(1, speed / 2));
  u.tail.rotation.y = Math.sin(G.t * (excited ? 22 : 7)) * (excited ? .9 : .4);
  u.head.rotation.x = excited ? .35 : Math.sin(G.t * 1.5) * .06;
}

/* ---------- Suelo, exteriores ---------- */
function floorTex(c1, c2, rep) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.fillStyle = c1; g.fillRect(0, 0, 128, 128); g.fillStyle = c2; g.fillRect(0, 0, 64, 64); g.fillRect(64, 64, 64, 64);
  g.strokeStyle = '#0003'; g.strokeRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function plane(x0, z0, x1, z1, y, material) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), material);
  m.rotation.x = -Math.PI / 2; m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); m.receiveShadow = true; scene.add(m); return m;
}

let planeObj = null, jetLights = [], objMarker = null, boomMeshes = [];

function buildWorld() {
  // Exterior
  plane(-200, -200, 200, 80, -.02, mat(0x3b4a2f));
  plane(-70, 28, 70, 40, 0, mat(0x9b9a95));                       // acera
  plane(-200, 40, 200, 56, 0, mat(0x2c2d30));                     // calzada
  for (let x = -190; x < 190; x += 8) deco(x, 47.8, x + 4, 48.2, .02, 0xe8d97a, 0);
  plane(-40, -70, 40, 28, .01, new THREE.MeshStandardMaterial({ map:floorTex('#cfd3d8', '#b9bec6', [10, 24]), roughness:.5 }));

  // Muros exteriores
  const wallC = 0xe7e1d6;
  solid(-41, -71, 41, -70, 6, 0x6fb6d6, { mat:{ transparent:true, opacity:.4, roughness:.1 }, los:false, shadow:false });
  solid(-41, -71, -40, 29, 6, wallC); solid(40, -71, 41, 29, 6, wallC);
  solid(-41, 28, -5, 29, 6, wallC); solid(5, 28, 41, 29, 6, wallC);
  solid(-5, 28, 5, 29, 1, 0x222222, { coll:false, y0:5 });
  label('SALIDAS · DEPARTURES', 0, 6.6, 29.6, 12, '#37f0ff');
  deco(-5, 28, -4.8, 29, 5, 0x9fd6ee, 0, { transparent:true, opacity:.35 }); deco(4.8, 28, 5, 29, 5, 0x9fd6ee, 0, { transparent:true, opacity:.35 });

  // Bloques de seguridad (carriles: D -38..-30, A -26..-14, B -8..8, C 14..26)
  const blk = [[-40, -38], [-30, -26], [-14, -8], [8, 14], [26, 40]];
  blk.forEach(([a, b]) => solid(a, -28, b, 0, 4.6, 0x8a93a0));
  blk.forEach(([a, b]) => deco(a, -28, b, 0, .3, 0x333a45, 4.6));
  label('MANTENIMIENTO · SOLO PERSONAL', -34, 6, 1, 8.5, '#ffb020');
  label('CARRIL A · ESCÁNER', -20, 6, 1, 8.5, '#3ddc84');
  label('CARRIL B · K9', 0, 6, 1, 8.5, '#ff7a1a');
  label('CARRIL C · ENTREVISTA', 20, 6, 1, 8.5, '#37f0ff');
  label('SEGURIDAD', 0, 8, 1, 14, '#ffffff');

  // Escáner (arco) en carril A
  solid(-23.2, -11, -22.6, -10, 3, 0x2d3640); solid(-17.4, -11, -16.8, -10, 3, 0x2d3640);
  deco(-23.2, -11, -16.8, -10, .4, 0x2d3640, 3);
  deco(-22.6, -10.7, -17.4, -10.3, .05, 0x3ddc84, 2.8, { emissive:0x1fa05a, emissiveIntensity:.8 });
  const beam = deco(-22.6, -10.6, -17.4, -10.4, .08, 0xff2a2a, 1, { emissive:0xff0000, emissiveIntensity:1 }); beam.userData.beam = true; BELTS.push(beam);
  // Cintas de equipaje en A, B, C
  [-20, 0, 20].forEach(cx => {
    deco(cx - 3.2, -6.2, cx + 3.2, -3.8, .6, 0x2a2e35); deco(cx - 3.2, -6.2, cx + 3.2, -3.8, .05, 0x111317, .6);
    for (let i = 0; i < 3; i++) { const l = deco(-.35, -.25, .35, .25, .4, [0xa84432, 0x2e6b8a, 0x6b5a2e][i], .65); l.userData = { belt:true, cx, i }; BELTS.push(l); }
  });
  // Mesa de entrevista carril C
  solid(14.2, -13, 19.6, -11, 1.1, 0x6a4a2e, { los:false });
  label('PREGUNTAS', 17, 3, -12, 3.5, '#ffffff');

  // Check-in
  [[-27, -19, 'ECONÓMICO'], [-4, 4, 'EXPRÉS'], [19, 27, 'QUIOSCO']].forEach(([a, b, t]) => {
    solid(a, 15, b, 17, 1.2, 0x39414d); deco(a, 15, b, 17, .12, 0xdfe5ec, 1.2);
    label(t, (a + b) / 2, 4, 16, 6, '#ffffff');
  });
  // Baño y café en el hall
  solid(-40, 10, -33, 24, 3.4, 0x4a6f8a); label('BAÑOS 🚻', -33, 4.2, 17, 5, '#8fd3ff');
  solid(33, 10, 40, 24, 3.4, 0x8a5a3a); label('CAFÉ ☕', 33, 4.2, 17, 5, '#ffd18f');
  for (let z = 11.5; z < 24; z += 3.2) deco(33.4, z, 35, z + 1.4, .9, 0xd8c4a0, 0);
  // Bancas del hall
  [[-14, 4], [14, 4], [-12, 21], [12, 21]].forEach(([x, z]) => { solid(x - 2, z - .5, x + 2, z + .5, .5, 0x4c5666); });

  buildMazeRows();

  // Puerta de embarque
  solid(-6, -66, 6, -64.6, 1.1, 0x2e3a4a); label('PUERTA 27 · ÁMSTERDAM', 0, 4.4, -66.2, 11, '#ffffff');
  label('ABORDAJE', 0, 6.3, -69.5, 7, '#3ddc84');
  // Pasarela y avión
  deco(-2.5, -86, 2.5, -70, 3.2, 0x8a93a0, 0.1);
  buildPlane();

  // Exteriores: farolas, árboles, taxis
  for (let x = -50; x <= 50; x += 20) {
    deco(x - .1, 34.9, x + .1, 35.1, 7, 0x333333, 0);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(.35, 8, 8), new THREE.MeshBasicMaterial({ color:0xffe9a0 })); lamp.position.set(x, 7.2, 35); scene.add(lamp);
  }
  for (let x = -60; x <= 60; x += 15) if (Math.abs(x) > 8) {
    deco(x - .25, 36, x + .25, 36.5, 2.4, 0x6b4a2b, 0);
    const t = new THREE.Mesh(new THREE.SphereGeometry(1.6, 10, 8), mat(0x2f7d3c)); t.position.set(x, 3.6, 36.2); t.castShadow = true; scene.add(t);
  }
  for (let i = 0; i < 12; i++) { // edificios al fondo
    const w = rnd(8, 18), h = rnd(10, 40), x = -150 + i * 28 + rnd(-6, 6);
    deco(x, 70, x + w, 70 + rnd(8, 14), h, [0x4a5568, 0x5b6573, 0x3d4655][i % 3], 0);
  }
  objMarker = new THREE.Mesh(new THREE.ConeGeometry(.6, 1.4, 4), new THREE.MeshBasicMaterial({ color:0xf5c518 }));
  objMarker.rotation.x = Math.PI; scene.add(objMarker);
}

function buildPlane() {
  const g = new THREE.Group();
  const white = mat(0xf2f4f7), blue = mat(0x1d4f9a);
  const fus = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 3.1, 44, 18), white); fus.rotation.z = Math.PI / 2; fus.castShadow = true; g.add(fus);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(3.1, 16, 12), white); nose.position.x = 22; nose.scale.x = 1.5; g.add(nose);
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 1.2, 12, 14), white); tail.rotation.z = -Math.PI / 2; tail.position.x = -27; g.add(tail);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(7, 9, .5), blue); fin.position.set(-29, 6, 0); fin.rotation.z = -.5; g.add(fin);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(40, .6, 6.3), blue); stripe.position.y = .2; g.add(stripe);
  [-1, 1].forEach(s => {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(9, .5, 22), white); wing.position.set(-3, -1.2, s * 12); wing.rotation.y = s * -.3; wing.castShadow = true; g.add(wing);
    const eng = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 4.5, 14), mat(0x8b95a3)); eng.rotation.z = Math.PI / 2; eng.position.set(2, -2.4, s * 9); g.add(eng);
    const tl = new THREE.Mesh(new THREE.SphereGeometry(.4, 8, 8), new THREE.MeshBasicMaterial({ color:s > 0 ? 0xff2222 : 0x22ff55 })); tl.position.set(-8, -1, s * 22); g.add(tl); jetLights.push(tl);
  });
  for (let i = -8; i <= 8; i++) { const w = new THREE.Mesh(new THREE.BoxGeometry(.7, .8, .1), mat(0x1d2733)); w.position.set(i * 2.2, 1.4, 3.1); g.add(w); }
  g.position.set(0, 3.4, -90); planeObj = g; scene.add(g);
}

/* ---------- Guardias, perros, NPC, coches ---------- */
function coneMesh(range, fov) {
  const N = 14, v = [0, 0, 0];
  for (let i = 0; i <= N; i++) { const a = -fov + (i / N) * 2 * fov; v.push(Math.sin(a) * range, 0, Math.cos(a) * range); }
  const idx = []; for (let i = 1; i <= N; i++) idx.push(0, i, i + 1);
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); geo.setIndex(idx);
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color:0xffe14d, transparent:true, opacity:.22, side:THREE.DoubleSide, depthWrite:false }));
  m.position.y = .06; return m;
}
const bangTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.fillStyle = '#ff2020'; g.font = 'bold 60px Arial'; g.textAlign = 'center'; g.fillText('!', 32, 54); const t = new THREE.CanvasTexture(c); return t; })();

const flashTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const r = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  r.addColorStop(0, '#fff'); r.addColorStop(.3, '#ffd24a'); r.addColorStop(1, 'rgba(255,120,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();

function addGuard(x, z, path, opt = {}) {
  const m = makeHuman({ shirt:0x1d3557, pants:0x16263e, capCol:0x10203a, vest:!!opt.vest, hair:0x222222 });
  const gun = new THREE.Mesh(new THREE.BoxGeometry(.08, .16, .4), new THREE.MeshStandardMaterial({ color:0x050505 })); gun.position.set(0, -.62, .22); gun.visible = false; m.userData.armR.add(gun);
  m.position.set(x, 0, z); scene.add(m);
  const range = opt.range || 13, fov = opt.fov || .6;
  const cone = coneMesh(range, fov); m.add(cone);
  const bang = new THREE.Sprite(new THREE.SpriteMaterial({ map:bangTex, transparent:true })); bang.scale.set(.8, .8, 1); bang.position.y = 2.5; bang.visible = false; m.add(bang);
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map:flashTex, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false })); flash.scale.set(1.3, 1.3, 1); flash.position.set(.35, 1.05, .85); flash.visible = false; m.add(flash);
  const ang0 = path.length > 1 ? Math.atan2(path[1][0] - x, path[1][1] - z) : (opt.ang || 0);
  const g = { m, cone, bang, flash, gun, flashT: 0, rank: opt.rank ?? Math.random(), armed: false, aiming: false, warn: 1.2, fireT: 0, path, i: path.length > 1 ? 1 : 0, speed: opt.speed || 1.7, ang: ang0, base: opt.ang || 0, range, fov, wait: 0, seeing: false,
    sweep: opt.sweep ?? 1.0, x, z, moving: false, state: 'patrol', aware: 0, chaser: false, huntT: 0, stun: 0, retField: null, curSpeed: 0, tf: 'G', lostT: 0, flank: false };
  GUARDS.push(g); return g;
}
function setArmed(g, on) {
  g.armed = on; g.gun.visible = on; const u = g.m.userData;
  u.shirtM.color.set(on ? 0x14181f : 0x1d3557); u.pantsM.color.set(on ? 0x0e1117 : 0x16263e);
}
function applyArmed() { GUARDS.forEach(g => setArmed(g, g.rank < P.armedPct / 100)); }
function addDog(handler, offset = 1.6) {
  const d = makeDog(); scene.add(d);
  const o = { m: d, h: handler, off: offset, x: handler.x, z: handler.z + offset, ang: 0, sp: 0, state: 'follow', sniff: 0, stun: 0, huntT: 0, retT: 0, retField: null };
  d.position.set(o.x, 0, o.z); DOGS.push(o); return o;
}
function addNPC(room, kind) {
  const pal = [0xc0392b, 0x2e86c1, 0x27ae60, 0xf39c12, 0x8e44ad, 0xecf0f1, 0x16a085, 0xd35400];
  const m = makeHuman({ shirt:pal[Math.floor(Math.random() * pal.length)], pants:[0x2c3e50, 0x4a4a4a, 0x7f6a4a][Math.floor(Math.random() * 3)], hair:[0x111111, 0x5a3a1a, 0xc9a24a, 0x888888][Math.floor(Math.random() * 4)], skin:[0xe0b48a, 0xc68d62, 0x8d5a3b, 0xf1c9a5][Math.floor(Math.random() * 4)], pack:Math.random() < .3 });
  const x = rnd(room.x0, room.x1), z = rnd(room.z0, room.z1);
  m.position.set(x, 0, z); m.scale.setScalar(rnd(.92, 1.08)); scene.add(m);
  if (Math.random() < .5) { const bag = new THREE.Mesh(new THREE.BoxGeometry(.4, .55, .25), mat([0x333333, 0x884422, 0x225577][Math.floor(Math.random() * 3)])); bag.position.set(.45, .3, .1); m.add(bag); }
  const n = { m, room, p:{ x, z }, t:null, wait:Math.random() * 3, speed:rnd(1.1, 1.8), ang:0, queue:kind === 'queue' };
  NPCS.push(n); return n;
}
function pickTarget(n) {
  for (let i = 0; i < 14; i++) {
    const x = rnd(n.room.x0, n.room.x1), z = rnd(n.room.z0, n.room.z1);
    if (COLL.some(b => x > b.x0 - .8 && x < b.x1 + .8 && z > b.z0 - .8 && z < b.z1 + .8)) continue;
    if (clearSeg(n.p.x, n.p.z, x, z, COLL, .5)) { n.t = { x, z }; return; }
  }
  n.wait = 1;
}
function addCar(lane, dir, color, speed) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(4.2, .9, 1.9), mat(color)); body.position.y = .65; body.castShadow = true; g.add(body);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.2, .7, 1.7), mat(0x20262e, { roughness:.2 })); cab.position.set(-.2, 1.3, 0); g.add(cab);
  [[-1.3, .85], [1.3, .85], [-1.3, -.85], [1.3, -.85]].forEach(([x, z]) => { const w = new THREE.Mesh(new THREE.CylinderGeometry(.38, .38, .3, 12), mat(0x111111)); w.rotation.x = Math.PI / 2; w.position.set(x, .38, z); g.add(w); });
  [[2.1, .6], [2.1, -.6]].forEach(([x, z]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(.1, .2, .35), new THREE.MeshBasicMaterial({ color:0xfff2b0 })); l.position.set(x, .7, z); g.add(l); });
  g.position.set(rnd(-150, 150), 0, lane); g.rotation.y = dir > 0 ? 0 : Math.PI; scene.add(g);
  const c = { m:g, dir, speed, x:g.position.x }; CARS.push(c); return c;
}

let taxi = null, player = null;

const PICKUPS = [], ROUTE_P = [];
function addPickup(x, z, type, y = .9, row = null) {
  const g = new THREE.Group();
  if (type === 'life') {
    const caps = new THREE.Mesh(new THREE.CapsuleGeometry(.16, .34, 4, 10), new THREE.MeshStandardMaterial({ color:0x2ee59d, emissive:0x1fbf7a, emissiveIntensity:1.1, roughness:.3 }));
    caps.rotation.z = Math.PI / 2; g.add(caps);
    const half = new THREE.Mesh(new THREE.CapsuleGeometry(.165, .12, 4, 10), new THREE.MeshStandardMaterial({ color:0xffffff, emissive:0xdddddd, emissiveIntensity:.6 }));
    half.rotation.z = Math.PI / 2; half.position.x = -.2; g.add(half);
  } else {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.34, .06, 8, 20), new THREE.MeshStandardMaterial({ color:0xf5c518, emissive:0xf5a000, emissiveIntensity:1.2 })); g.add(ring);
    const face = new THREE.Mesh(new THREE.CircleGeometry(.3, 20), new THREE.MeshStandardMaterial({ color:0xfff4c8, emissive:0x886600, emissiveIntensity:.4 })); g.add(face);
    const h1 = new THREE.Mesh(new THREE.BoxGeometry(.04, .2, .02), new THREE.MeshBasicMaterial({ color:0x111111 })); h1.position.set(0, .08, .02); g.add(h1);
    const h2 = new THREE.Mesh(new THREE.BoxGeometry(.14, .04, .02), new THREE.MeshBasicMaterial({ color:0x111111 })); h2.position.set(.06, 0, .02); g.add(h2);
  }
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map:flashTex, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, color: type === 'life' ? 0x33ffaa : 0xffcc33 }));
  glow.scale.set(2.2, 2.2, 1); g.add(glow);
  g.position.set(x, y, z); scene.add(g);
  const p = { x, z, type, y, m:g, taken:false, ph:Math.random() * 6, row };
  PICKUPS.push(p); return p;
}
function buildPickups() {
  // Antiácidos y relojes en desvíos del camino
  [[20, 22], [-25, 8], [0, -18], [-20, -18], [-34, -12]].forEach(([x, z]) => addPickup(x, z, 'life'));
  [[-12, 20], [20, -18]].forEach(([x, z]) => addPickup(x, z, 'time'));
  // Bonus sobre los muros bajos: solo se alcanzan saltando (siguen al tramo bajo de su fila)
  ROWS.forEach((R, i) => addPickup(0, R.zc, i % 2 ? 'time' : 'life', 2.0, R));
  // Recolectables sobre la ruta óptima (se recolocan cuando el laberinto cambia)
  ['life', 'life', 'time', 'life', 'life', 'time', 'life', 'time'].forEach(t => ROUTE_P.push(addPickup(0, 30, t)));
}
function resnapPickups() {
  if (!ROUTE_P.length || !routeField) return;
  const u = player ? player.userData : { px:0, pz:36 }, pts = []; let x = u.px, z = u.pz;
  for (let k = 0; k < 500; k++) { const dir = flowDir(routeField, gridR, x, z); if (!dir) break; x += dir.x; z += dir.z; pts.push([x, z]); if (Math.hypot(x, z + 62) < 3) break; }
  const live = ROUTE_P.filter(p => !p.taken);
  live.forEach((p, k) => {
    const idx = Math.min(pts.length - 1, Math.max(6, Math.floor(pts.length * (k + .6) / live.length * .96)));
    if (pts[idx]) { p.x = pts[idx][0]; p.z = pts[idx][1]; p.m.position.set(p.x, p.y, p.z); }
  });
}
function pickupsUpdate(dt) {
  for (const p of PICKUPS) {
    if (p.taken) continue;
    if (p.row) { if (p.row.lowC == null) { p.m.visible = false; continue; } p.m.visible = true; p.x = p.row.lowC; p.z = p.row.zc; }
    p.m.rotation.y += dt * 2.2; p.m.position.set(p.x, p.y + Math.sin(G.t * 3 + p.ph) * .12, p.z);
  }
}

function buildHides() {
  const L = (x, z, ex, ez) => {
    solid(x - .6, z - .6, x + .6, z + .6, 2.1, 0x2a9d8f); deco(x - .5, z - .5, x + .5, z + .5, .12, 0x1c6f66, 2.1);
    label('TAQUILLA · H', x, 2.9, z, 2.6, '#3ddc84'); HIDES.push({ x, z, ex, ez });
  };
  L(-39.4, 5, -36.6, 5); L(39.4, 5, 36.6, 5); L(-30, 27.3, -30, 24.8); L(30, 27.3, 30, 24.8); L(-11, .7, -11, 3.3); L(11, .7, 11, 3.3);
  L(-25.4, -20, -22.5, -20); L(25.4, -20, 22.5, -20); L(7.4, -14, 4.6, -14); L(-37.4, -20, -34.4, -20);
  L(-24, -33.2, -24, -31); L(30, -33.2, 30, -31);
  L(18, -35.6, 18, -37.6); L(-30, -35.6, -30, -37.6);
  L(18, -41.6, 18, -43.6); L(34, -41.6, 34, -43.6);
  L(-30, -47.6, -30, -49.6); L(6, -47.6, 6, -49.6);
  L(14, -53.6, 14, -55.6); L(34, -53.6, 34, -55.6);
  L(-30, -59.6, -30, -61.6);
}

function buildActors() {
  buildHides(); buildPickups();
  const qm = { low:.4, med:.65, high:1 }[QUALITY] || 1;
  // --- Policías: "rank" decide quién va armado según el modo (rank < % armados) ---
  // Hall
  addGuard(-30, 6, [[-30, 6], [30, 6], [30, 24], [-30, 24]], { speed:1.5, vest:true, rank:.05 });
  addGuard(9, 25, [[9, 25]], { ang:Math.PI, sweep:.8, range:11, rank:.6 });
  const hh = addGuard(-30, 10, [[-30, 10], [30, 10]], { speed:1.3, range:9, fov:.5, rank:.7 }); addDog(hh, 1.7);
  addGuard(0, 12, [[0, 12]], { ang:0, sweep:1.1, range:12, rank:.8 });
  // Carriles
  addGuard(-16, -8.4, [[-16, -8.4]], { ang:0, sweep:.7, range:9, vest:true, rank:.75 });
  addGuard(-20, -22, [[-20, -22], [-20, -27]], { speed:1.2, range:9, fov:.5, rank:.85 });
  addGuard(17, -13.8, [[17, -13.8]], { ang:0, sweep:.5, range:10, fov:.55, rank:.1 });
  addGuard(20, -22, [[20, -22], [20, -27]], { speed:1.2, range:9, fov:.5, rank:.9 });
  const hb = addGuard(-4, -3, [[-4, -3], [4, -10], [-4, -17], [4, -24], [-4, -17], [4, -10]], { speed:1.3, range:9, fov:.5, rank:.65 }); addDog(hb, 1.8);
  addGuard(-34, -4, [[-34, -4], [-34, -15]], { speed:1.3, range:10, fov:.55, rank:.15 });
  addGuard(-34, -26, [[-34, -26], [-34, -16]], { speed:1.4, range:10, fov:.55, rank:.95 });
  // Laberinto del duty free
  addGuard(-30, -31, [[-30, -31], [30, -31]], { speed:1.6, range:12, fov:.45, vest:true, rank:.2 });
  addGuard(30, -37.4, [[30, -37.4], [-30, -37.4]], { speed:1.5, range:12, fov:.45, rank:.55 });
  addGuard(-30, -43.4, [[-30, -43.4], [30, -43.4]], { speed:1.5, range:12, fov:.45, rank:.25 });
  const hm = addGuard(30, -49.4, [[30, -49.4], [-30, -49.4]], { speed:1.3, range:10, fov:.45, rank:.7 }); addDog(hm, 1.6);
  addGuard(-30, -55.4, [[-30, -55.4], [30, -55.4]], { speed:1.6, range:12, fov:.45, vest:true, rank:.3 });
  addGuard(-12, -62, [[-12, -62], [12, -62]], { speed:1.4, range:11, fov:.5, rank:.45 });
  addGuard(8, -63, [[8, -63]], { ang:0, sweep:.9, range:11, rank:.35 });
  applyArmed();

  // NPCs (menos en dispositivos modestos)
  const hall = { x0:-36, x1:36, z0:2, z1:26 };
  for (let i = 0; i < Math.round(14 * qm); i++) addNPC(hall);
  [[-32.5, -29.2], [-38.8, -36.2], [-44.8, -42.2], [-50.8, -48.2], [-56.8, -54.2]].forEach(([a, b]) => { for (let i = 0; i < Math.max(1, Math.round(3 * qm)); i++) addNPC({ x0:-36, x1:36, z0:a, z1:b }); });
  for (let i = 0; i < 4; i++) { const n = addNPC({ x0:-24, x1:-22, z0:19 + i * 1.3, z1:19 + i * 1.3 }); n.m.rotation.y = Math.PI; n.queue = true; }

  // Coches
  const cars = [[44, 1, 0xc0392b], [44, 1, 0x2e86c1], [52, -1, 0xecf0f1], [52, -1, 0x27ae60], [44, 1, 0x8e44ad], [52, -1, 0xf39c12]];
  cars.slice(0, Math.max(2, Math.round(cars.length * qm))).forEach(([z, d, c]) => addCar(z, d, c, rnd(7, 12)));
  taxi = addCar(40.6, 1, 0xf5c518, 0); taxi.m.position.x = 0; taxi.x = 0; taxi.m.rotation.y = 0; taxi.parked = true;

  // Jugador
  player = makeHuman({ shirt:0x1c2230, pants:0x1c2230, bag:true });
  scene.add(player);
  Object.assign(player.userData, { px:0, pz:36, vx:0, vz:0, ang:Math.PI, y:0, vy:0, grounded:true, hidden:null, crouch:false, hideT:0, sprint:false, speed:0 });
  player.position.set(0, 0, 36); player.rotation.y = Math.PI;
  buildDrone(); initNav(); resnapPickups();
}

function outfit(profile) {
  const u = player.userData, l = profile.look;
  u.shirtM.color.set(l.shirt); u.pantsM.color.set(l.pants);
  if (l.hat) { u.hat.visible = true; u.hat.material.color.set(l.hat); }
  const t = new THREE.Mesh(new THREE.BoxGeometry(.08, .4, .02), new THREE.MeshStandardMaterial({ color:0xaa1e1e }));
  if (l.tie) { t.position.set(0, 1.2, .15); player.add(t); }
  if (l.pack) { const p = new THREE.Mesh(new THREE.BoxGeometry(.4, .5, .18), new THREE.MeshStandardMaterial({ color:0xc0392b })); p.position.set(0, 1.15, -.23); player.add(p); }
}

/* ==========================================================
   MOTOR DEL JUEGO
   ========================================================== */
function sub(html, ms = 4800) {
  const e = $('sub'); e.innerHTML = html; e.classList.add('on');
  clearTimeout(sub.h); sub.h = setTimeout(() => e.classList.remove('on'), ms);
}
const fmtS = s => (Math.round(s * 10) / 10).toString().replace(/\.0$/, '');
const hintS = h => h.replace(/(\d+(?:\.\d+)?) min/g, (m, n) => fmtS(n * P.actionTime) + ' s');
function popText(txt, color = '#3ddc84') {
  const e = document.createElement('div'); e.className = 'pop'; e.textContent = txt; e.style.color = color; document.body.appendChild(e); setTimeout(() => e.remove(), 1400);
}
async function fadeTime(mins) {
  const f = $('fade'); f.textContent = `⏱ -${fmtS(mins * P.actionTime)} s`; f.classList.add('on'); await sleep(750); f.classList.remove('on'); await sleep(250);
}

function note() {}

function addHeat(n) {
  if (!n) return;
  S.heat = clamp(S.heat + n, 0, 100);
  if (S.heat >= 100 && !S.over) end('busted', 'DETENIDO',
    `Tu cara ya es un cartel de "SE BUSCA". Cuatro agentes te rodean con la sonrisa de quien acaba de ganar un viaje a Cancún.<br>Lo bueno: ahora tu estómago es problema del médico forense... pero primero te harán una radiografía muy detallada.`);
}

/* Ritmo de desgaste de las cápsulas según mercancía y camuflaje (0.85 a 1.1) y efectos */
function lifeRate(hidden) {
  const x = S.cargo.acid * S.method.stomach, base = .95 + .1 * (x - .48) / 1.21;
  return base * (S.pillLeft > 0 ? .3 : 1) * (hidden ? P.hiddenDrain : 1);
}
function syncLife() { S.life = Math.min(lifeCap(), S.life); S.integrity = clamp(S.life / lifeBase() * 100, 0, 100); }
function addLife(s, why) { S.life = Math.min(lifeCap(), S.life + s); syncLife(); popText(`+${fmtS(s)} s de vida`, '#3ddc84'); if (why) note(why); }
function addTime(s) { S.time += s; popText(`+${fmtS(s)} s de misión`, '#f5c518'); }
function lateEnd() {
  end('dead', 'VUELO PERDIDO', `Por la ventana ves cómo la manga se retira. El avión despega sin ti con tu futuro a bordo.<br>Don Chuy no es un hombre de segundas oportunidades. Ni de primeras, la verdad.`);
}

/* Consume tiempo por una acción de menú (unidades de "minuto"). Devuelve false si termina el juego. */
function advance(units) {
  const s = units * P.actionTime;
  S.time -= s; S.life -= s * lifeRate(false); syncLife();
  if (S.over) return false;
  if (S.life <= 0) { explode('time'); return false; }
  if (S.time <= 0) { lateEnd(); return false; }
  return true;
}

function explode(cause) {
  const t = cause === 'time'
    ? `El contador de tus cápsulas marca 00. Sientes un calorcito agradable en el abdomen... y luego uno menos agradable. <b>¡BOOM!</b><br>Los policías no te arrestan: te <i>limpian</i>. El aeropuerto cierra la Terminal B por "derrame cosmético". Tu jefe lo llama "pérdida de inventario".`
    : `Un gorgoteo. Otro. El estómago se rinde antes que tú: las cápsulas ceden por los jugos gástricos. Alcanzas a pensar "debí tomar más pastillas".<br><b>¡BOOM!</b> Fuiste el primer pasajero en cumplir la norma de "equipaje de mano que explota".`;
  end('boom', 'EXPLOTASTE', t);
}

function boom() {
  const p = player.position;
  $('flash').style.transition = 'none'; $('flash').style.opacity = 1; requestAnimationFrame(() => { $('flash').style.transition = 'opacity 1.4s'; $('flash').style.opacity = 0; });
  noise(1.6, .6, 700); beep(70, .8, 'sawtooth', .25);
  for (let i = 0; i < 26; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(rnd(.25, .8), 8, 8), new THREE.MeshBasicMaterial({ color:[0xff5a1a, 0xffb020, 0xc01818, 0x333333][i % 4], transparent:true }));
    m.position.set(p.x, 1.2, p.z); m.userData = { v:new THREE.Vector3(rnd(-6, 6), rnd(3, 11), rnd(-6, 6)), life:1.6 }; scene.add(m); boomMeshes.push(m);
  }
  player.visible = false; G.shake = 1.2;
}

function end(kind, title, html, extra) {
  if (!S || S.over) return;
  S.over = true; G.mode = 'over'; G.busy = true; closeDialog(); $('mini').classList.remove('on');
  const won = kind === 'win'; const rewards = finishRun(kind);
  if (kind === 'boom') boom();
  if (kind === 'busted') { beep(700, .25, 'sawtooth', .08); setTimeout(() => beep(520, .25, 'sawtooth', .08), 280); setTimeout(() => beep(700, .25, 'sawtooth', .08), 560); }
  if (kind === 'shot') { noise(.5, .5, 1800); beep(90, .4, 'sawtooth', .15); G.shake = .8; }
  const delay = won ? 3800 : kind === 'boom' ? 2000 : 1100;
  setTimeout(() => {
    const e = $('end'); e.className = 'overlay on ' + (won ? 'win' : 'dead') + (kind === 'busted' ? ' busted' : '');
    e.innerHTML = `<h2>${won ? '✈ ' : '☠ '}${title}</h2><p>${html}</p>${extra ? `<p>${extra}</p>` : ''}${rewards}<p style="text-align:center;margin-top:20px"><button id="again" style="font:700 20px Impact;letter-spacing:2px;padding:12px 30px">↺ JUGAR OTRA VEZ</button></p>`;
    $('again').onclick = () => location.reload();
  }, delay);
}

function victory() {
  const payout = Math.round(S.cargo.profit * (.6 + .4 * S.integrity / 100));
  G.planeGo = true; G.mode = 'over';
  end('win', 'ABORDASTE', `Cruzas la manga con las rodillas flojas y te dejas caer en el asiento 34B. El pasajero de al lado te dice: "Pareces nervioso". Respondes: "Odio volar".<br>Mientras el avión despega, tu estómago gruñe. Es el sonido más bonito que has oído.<br><i>(Fase 3: vuelo, aduana de destino y entrega... próximamente.)</i>`,
    `Tiempo de misión restante: ${fmtS(Math.max(0, S.time))} s · Vida de las cápsulas: ${fmtS(Math.max(0, S.life))} s · Salud: ${Math.max(0, S.hp)}%<br>Pago: $${payout} + efectivo $${S.cash} = <b>$${payout + S.cash}</b>`);
}

/* Probabilidades de detección */
function pOf(t) {
  const m = S.method.id, w = S.cargo.weight, h = S.heat, wf = .7 + .15 * w;
  switch (t) {
    case 'body': return ({ capsules:.60, tape:.42, bag:.05 }[m]) * wf + h / 400;
    case 'bag':  return ({ capsules:.03, tape:.05, bag:.55 }[m]) * wf * (S.bagSwapped && m === 'bag' ? .4 : 1) + h / 600;
    case 'dog':  return S.cargo.smell * ({ capsules:.30, tape:.65, bag:.80 }[m]) * (S.inv.perfumeOn ? .5 : 1) + (S.integrity < 40 ? .15 : 0) + h / 500;
    case 'quiz': return Math.min(.9, Math.max(.03, .08 + h / 160 + S.profile.quiz + (S.time < 15 ? .05 : 0)));
  }
  return 0;
}
const camFactor = t => (S.camsOff && (t === 'body' || t === 'quiz')) ? .35 : 1;

function runCheck(c, mult = 1) {
  c = typeof c === 'string' ? { t:c } : c;
  const p = Math.min(.95, (c.p ?? pOf(c.t)) * camFactor(c.t) * mult);
  const hit = Math.random() < p;
  if (c.t === 'quiz') return hit ? { quiz:true, text:'Un guardia te señala con el dedo: "Usted. Acompáñeme un momento."' } : { text:CHK_TXT.quiz.pass };
  return hit ? { fail:true, text:CHK_TXT[c.t].fail } : { text:CHK_TXT[c.t].pass };
}

/* ---------- Diálogos ---------- */
function closeDialog() { $('dlg').classList.remove('on'); G.dlgKey = null; }
function dialog(sc) {
  return new Promise(res => {
    const d = $('dlg'); d.classList.add('on');
    $('dlgT').textContent = sc.title; $('dlgX').innerHTML = sc.text || '';
    const box = $('dlgO'); box.innerHTML = '';
    const opts = sc.opts.filter(o => o.show !== false);
    const finish = o => { d.classList.remove('on'); G.dlgKey = null; res(o); };
    opts.forEach((o, i) => {
      const b = document.createElement('button');
      b.innerHTML = `<span class="k">${i + 1}</span><span><b>${o.label}</b>${o.hint ? `<small>${hintS(o.hint)}</small>` : ''}</span>`;
      b.disabled = !!o.disabled; b.onclick = () => finish(o); box.appendChild(b);
    });
    G.dlgKey = n => { const o = opts[n]; if (o && !o.disabled) finish(o); };
  });
}

async function interrogation() {
  const P = S.profile, h = S.heat;
  const o = await dialog({ title:'INTERROGATORIO',
    text:`<p>Te llevan a un rincón. El agente tiene una carpeta, un café y cero prisa.</p><p>—Veo que viaja solo. ¿Motivo del viaje? ¿Quién hizo su maleta? ¿Por qué suda?</p><p><i>Tu estómago cruje en el silencio como un presagio.</i></p>`,
    opts:[
      { label:'Improvisar una historia', hint:'4 min · arriesgado, puede salvarte', time:4, p:Math.max(.1, .35 + P.lie - h / 400),
        win:'Cuentas una historia de boda en Ámsterdam con tantos detalles que el agente dice "ya, ya, basta". Te devuelve el pasaporte.',
        lose:'Te contradices a los 40 segundos. "Repítame lo de su hermana, la que se casa con el primo". No tenías hermana.' },
      { label:'Respuestas cortas y calmadas', hint:'3 min · mejor cuanto menos sospecha tengas', time:3, p:Math.max(.1, .6 - h / 200),
        win:'"Negocios." "Mi maleta." "Calor." Tres frases, cero errores. El agente suspira y te deja ir.',
        lose:'Tus respuestas son tan cortas que el agente nota que son demasiado cortas. Te invita a un cuarto con una mesa y dos sillas.' },
      { label:'Hacerte el ofendido', hint:'5 min · alto riesgo · +6 sospecha', time:5, heat:6, p:Math.max(.1, .3 + (P.id === 'exec' ? .15 : P.id === 'tourist' ? .1 : -.05)),
        win:'Tu indignación es tan teatral que el agente se siente culpable. Te ofrece una disculpa y un caramelo.',
        lose:'El supervisor llega y es peor que el agente. Y trae un perro. Que ya te conoce.' }
    ] });
  await fadeTime(o.time); if (!advance(o.time)) return false;
  if (o.heat) addHeat(o.heat);
  if (S.over) return false;
  if (Math.random() >= o.p) { end('busted', 'DETENIDO', o.lose); return false; }
  sub(o.win, 6000); S.heat = Math.max(0, S.heat - 15); return true;
}

/* Resuelve una lista de controles con minijuegos. Devuelve false si termina el juego. */
async function resolveChecks(list, out) {
  for (const c of list) {
    const cc = typeof c === 'string' ? { t:c } : c;
    const m = MINI[cc.t] ? (await mini(cc.t)).mult : 1;
    if (S.over) return false;
    const r = runCheck(cc, m);
    if (S.camsOff && (cc.t === 'body' || cc.t === 'quiz')) S.camsOff = false;
    if (r.fail) { end('busted', 'DETENIDO', r.text + '<br>Las esposas son frías. Tu estómago, por ahora, es el único que no está arrestado.'); return false; }
    if (r.quiz) { sub(r.text, 3000); if (!(await interrogation())) return false; }
    else if (out) out.push(r.text);
  }
  return true;
}

/* Ejecuta una opción de menú del mundo. Devuelve true si el menú debe reabrirse. */
async function doOption(o) {
  const out = [];
  if (o.cost) S.cash -= o.cost;
  if (o.time) { await fadeTime(o.time); if (!advance(o.time)) return false; }
  if (o.heat) addHeat(o.heat);
  if (S.over) return false;
  if (o.fx) { const r = o.fx(); if (r) out.push(r); }
  if (o.checks && !(await resolveChecks(o.checks, out))) return false;
  if (o.win) { victory(); return false; }
  if (out.length) sub(out.join(' '), 6000);
  return !!o.keep;
}

async function openZone(z) {
  G.busy = true;
  for (;;) {
    const o = await dialog(z.menu());
    if (o.close) break;
    const again = await doOption(o);
    if (!again || S.over) break;
  }
  if (!S.over) G.busy = false;
}

/* ---------- Escenas de menú ---------- */
const exitOpt = { label:'Salir', hint:'', close:true };
const pillFx = () => { S.inv.pills--; S.pillLeft = 5; addLife(P.pillLife); return `Te tragas la pastilla en seco: +${fmtS(P.pillLife)} s de vida y tus cápsulas se desgastan más lento unos segundos.`; };

function bathMenu() {
  return { title:'BAÑOS',
    text:`<p>Azulejos blancos, luz fluorescente y olor a desinfectante que apenas combate el olor a miedo. ${['Del último cubículo sale un sonido que prefieres no clasificar.', 'Un señor se lava las manos durante tres minutos, mirándote por el espejo.', 'El secador de manos ruge como una turbina. Ideal para los nervios.'][Math.floor(G.t) % 3]}</p><p>${S.inv.contact ? 'Tu contacto debería estar "arreglando un grifo".' : 'Sin contacto, esto es solo un baño.'}</p>`,
    opts:[
      { label:'🧳 Cambiar maleta con el contacto', hint:'6 min · riesgo de rayos X de maleta ×0.4 (doble fondo) · -5 sospecha', show:S.inv.contact > 0 && !S.bagSwapped, time:6, heat:-5, keep:true,
        fx(){ S.inv.contact--; S.bagSwapped = true; return 'Intercambio de maletas bajo la puerta del cubículo. "Encantado", susurra. Nunca lo volverás a ver.'; } },
      { label:'👔 Cambiar de ropa', hint:'7 min · -25 sospecha', show:S.inv.clothes > 0, time:7, heat:-25, keep:true,
        fx(){ S.inv.clothes--; S.disguised++; const u = player.userData; u.shirtM.color.set([0x2a9d8f, 0xe76f51, 0x6d597a][S.disguised % 3]); u.hat.visible = true; u.hat.material.color.set(0x222222); u.shades.visible = true;
          return 'Un gorro, otra camisa, unas gafas. El del espejo ya no se parece al de las cámaras. Casi.'; } },
      { label:'🌸 Rociar spray anti-olor', hint:'1 min · los perros huelen la mitad', show:S.inv.perfume > 0 && !S.inv.perfumeOn, time:1, keep:true,
        fx(){ S.inv.perfume--; S.inv.perfumeOn = true; return 'Hueles a pino sintético. Un pino con problemas legales.'; } },
      { label:'💊 Tomar pastilla', hint:`1 min · +${fmtS(P.pillLife)} s de vida · +2 sospecha`, show:S.inv.pills > 0, time:1, heat:2, keep:true, fx:pillFx },
      { label:'Lavarte la cara', hint:'3 min · -5 sospecha', time:3, heat:-5, keep:true, fx(){ return 'Agua fría, respiración profunda. Tu reflejo te mira como alguien que lo está pensando mejor.'; } },
      exitOpt
    ] };
}
const checkinMenu = (name, label, hint, time, cost, heat) => () => ({ title:'CHECK-IN · ' + name,
  text: S.checkedIn ? `<p>Ya tienes tu pase. La agente te mira: "¿Otra vez, caballero?"</p>` : `<p>El mostrador te espera con la sonrisa de quien cobra por sonreír.</p>`,
  opts:[{ label, hint, show:!S.checkedIn, time, cost, heat, disabled:S.cash < cost,
    fx(){ S.checkedIn = true; return 'Pase de abordar en mano. Un trámite menos entre tú y la puerta 27.'; } }, exitOpt] });

const ZDEF = [
  { x:-23, z:19.5, r:3.6, label:'Check-in económico', menu:checkinMenu('ECONÓMICO', 'Hacer fila (la familia con 9 maletas)', '12 min · -4 sospecha', 12, 0, -4) },
  { x:0, z:19.5, r:3.6, label:'Check-in exprés ($50)', menu:checkinMenu('EXPRÉS', 'Pagar el mostrador exprés · $50', '4 min · +3 sospecha (¿por qué tanto dinero?)', 4, 50, 3) },
  { x:23, z:19.5, r:3.6, label:'Quiosco automático', menu:checkinMenu('QUIOSCO', 'Usar el quiosco', '2 min · +8 sospecha · la cámara capta tu cara sudorosa', 2, 0, 8) },
  { x:-31, z:17, r:3.4, label:'Entrar a los baños', menu:bathMenu },
  { x:31, z:17, r:3.4, label:'Café', menu:() => ({ title:'CAFÉ', text:'<p>Una barista con cara de haberlo visto todo te sonríe.</p>',
    opts:[{ label:'Tomar un café "para calmar los nervios" · $5', hint:`6 min · -6 sospecha · +${fmtS(P.coffeeLife)} s de vida`, time:6, cost:5, disabled:S.cash < 5, heat:-6,
      fx(){ addLife(P.coffeeLife); return `El café está tibio, amargo y carísimo, pero el calor te asienta el estómago: +${fmtS(P.coffeeLife)} s de vida.`; } }, exitOpt] }) },
  { x:-35.5, z:-37.4, r:3.4, label:'Farmacia', menu:() => ({ title:'FARMACIA', text:'<p>La farmacéutica te mira un segundo de más.</p>',
    opts:[{ label:'Comprar una pastilla · $60', hint:'3 min · precio de aeropuerto', time:3, cost:60, disabled:S.cash < 60, keep:true, fx(){ S.inv.pills++; return '"Para el viaje", explicas. "Claro."'; } }, exitOpt] }) },
  { x:35.5, z:-43.4, r:3.4, label:'Perfumería', menu:() => ({ title:'PERFUMERÍA', text:'<p>Una nube de aromas caros te acaricia los pulmones.</p>',
    opts:[{ label:'Spray anti-olor · $40', hint:'4 min · los perros huelen la mitad', show:!S.inv.perfumeOn, time:4, cost:40, disabled:S.cash < 40, fx(){ S.inv.perfumeOn = true; return 'Te rocías con "Noche de Verano". Hueles como un cumpleaños sospechoso.'; } }, exitOpt] }) },
  { x:-35.5, z:-49.4, r:3.4, label:'Óptica', menu:() => ({ title:'ÓPTICA', text:'<p>Expositores de gafas que prometen cambiarte la vida (o la cara).</p>',
    opts:[{ label:'Gafas y gorra · $30', hint:'3 min · -10 sospecha', time:3, cost:30, disabled:S.cash < 30, heat:-10,
      fx(){ const u = player.userData; u.shades.visible = true; u.hat.visible = true; u.hat.material.color.set(0x222222); return 'Con las gafas puestas pareces menos nervioso. O más misterioso. Ambas son una mejora.'; } }, exitOpt] }) },
  { x:35.5, z:-55.4, r:3.4, label:'Entrar a los baños', menu:bathMenu },
  { x:0, z:-62.3, r:4, label:'Puerta de embarque', menu:() => ({ title:'PUERTA 27 · ÁMSTERDAM', text:'<p>La azafata sonríe con una paciencia que se acaba justo en tu fila. Al fondo, la manga del avión es el túnel más hermoso que has visto. Último filtro: un agente revisa pasaportes como un crítico gastronómico.</p>',
    opts:[
      { label:'Fila normal', hint:'8 min · calma · revisión estándar', time:8, checks:['quiz'], win:true },
      { label:'Fila prioritaria', hint:'3 min · +6 sospecha · "¿por qué tienes prioridad?"', time:3, heat:6, checks:['quiz'], win:true },
      { label:'Correr a la puerta', hint:'2 min · +15 sospecha · el sudor es sospechoso', time:2, heat:15, checks:['quiz'], win:true },
      exitOpt] }) }
];
ZDEF.forEach(z => ZONES.push(z));

/* Triggers de los carriles */
TRIGS.push(
  { id:'A', x0:-26, x1:-14, z0:-13.2, z1:-12, async run() {
    sub('<b>CARRIL A:</b> escáner corporal y rayos X.'); beep(1000, .15);
    return resolveChecks(['body', 'bag'], []); } },
  { id:'B', x0:-8, x1:8, z0:-8, z1:-7, async run() {
    sub('<b>CARRIL B:</b> rayos X de equipaje. Cuidado con el perro...'); return resolveChecks(['bag'], []); } },
  { id:'C', x0:14, x1:26, z0:-15, z1:-14, async run() {
    sub('<b>CARRIL C:</b> el guardia de la mesa te hace una seña.'); return resolveChecks(['quiz', 'bag'], []); } },
  { id:'D', x0:-38, x1:-30, z0:-2.2, z1:-1, async run() {
    sub('<b>MANTENIMIENTO:</b> "¿Usted qué hace aquí?" Dos guardias lo vigilan.'); addHeat(18); if (S.over) return false;
    return resolveChecks([{ t:'quiz', p:.40 }], []); } }
);

/* ==========================================================
   MINIJUEGOS
   ========================================================== */
const rate = (hits, n) => hits >= n - 1 ? .5 : hits >= Math.ceil(n / 2) ? .85 : 1.3;

function mini(kind, opts = {}) {
  return new Promise(resolve => {
    const m = $('mini'), area = $('miniA'); m.classList.add('on'); area.innerHTML = '';
    $('miniT').textContent = MINI[kind].title.toUpperCase(); $('miniH').textContent = MINI[kind].hint;
    let done = false, cleanup = [];
    const finish = (score, mult, text) => {
      if (done) return; done = true; cleanup.forEach(f => f()); $('miniH').textContent = text;
      setTimeout(() => { m.classList.remove('on'); resolve({ score, mult }); }, 1100);
    };
    const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; area.appendChild(e); return e; };
    const keys = (down, up) => {
      const kd = e => { if (e.code === 'Space' && !e.repeat) { e.preventDefault(); down(); } };
      const ku = e => { if (e.code === 'Space') { e.preventDefault(); up && up(); } };
      addEventListener('keydown', kd); addEventListener('keyup', ku); cleanup.push(() => { removeEventListener('keydown', kd); removeEventListener('keyup', ku); });
    };

    if (kind === 'body') {
      const D = 2500 + S.heat * 15;
      const bar = el('div', 'mbar'), fill = document.createElement('i'); bar.appendChild(fill);
      const btn = el('button', 'big', 'MANTÉN\nPULSADO');
      let t0 = null, raf;
      const tick = () => { const p = (performance.now() - t0) / D; fill.style.width = Math.min(100, p * 100) + '%';
        if (p >= 1) return finish(1, .5, '✔ Aguantaste. El operador bosteza y deja pasar la imagen.'); raf = requestAnimationFrame(tick); };
      const down = () => { if (done || t0) return; t0 = performance.now(); tick(); };
      const up = () => { if (t0 && !done) { cancelAnimationFrame(raf); finish(0, 1.45, '✘ Exhalaste a mitad del barrido. Mala idea.'); } };
      btn.onpointerdown = down; btn.onpointerup = up; btn.onpointercancel = up; btn.onpointerleave = up; keys(down, up);
      setTimeout(() => { if (!t0) finish(0, 1.2, 'Te quedaste paralizado.'); }, 6500);
    } else if (kind === 'dog') {
      const w = el('div'); w.id = 'dogArea';
      const ring = document.createElement('div'); ring.className = 'ring'; const fixed = document.createElement('div'); fixed.className = 'ring static';
      const tap = document.createElement('button'); tap.className = 'tap'; w.append(fixed, ring, tap);
      const info = el('div', null, 'Toques: 0 · acertados: 0');
      const t0 = performance.now(); let taps = 0, hits = 0; const beats = [1, 2, 3, 4, 5].map(k => t0 + k * 1000);
      const down = () => { if (done) return; taps++; const now = performance.now(), d = Math.min(...beats.map(b => Math.abs(b - now)));
        if (d < 230) { hits++; tap.style.background = '#3ddc8433'; beep(660, .06); } else { tap.style.background = '#ff3b3b33'; beep(200, .08); }
        setTimeout(() => tap.style.background = 'transparent', 120); info.textContent = `Toques: ${taps} · acertados: ${hits}`; };
      tap.onpointerdown = down; keys(down);
      setTimeout(() => finish(hits, rate(hits, 5), hits >= 4 ? '✔ Pulso de monje. El perro te ignora por completo.' : hits >= 3 ? 'Medio sudado, medio tranquilo. El perro duda.' : '✘ Tu corazón suena como un bombo. El perro inclina la cabeza.'), 5600);
    } else if (kind === 'quiz') {
      const field = el('div'); field.id = 'sweatArea'; const info = el('div', null, 'Gotas secadas: 0 / 5'); let hits = 0;
      for (let i = 0; i < 5; i++) setTimeout(() => {
        if (done) return; const d = document.createElement('button'); d.className = 'drop';
        d.style.left = (12 + Math.random() * 76) + '%'; d.style.top = (12 + Math.random() * 76) + '%';
        d.onpointerdown = () => { hits++; info.textContent = `Gotas secadas: ${hits} / 5`; d.remove(); };
        field.appendChild(d); setTimeout(() => d.remove(), 1000);
      }, i * 900);
      setTimeout(() => finish(hits, rate(hits, 5), hits >= 4 ? '✔ Frente seca, mirada firme. Un modelo de ciudadano.' : hits >= 3 ? 'Brillas un poco, pero el guardia lo atribuye al calor.' : '✘ Estás empapado. El guardia anota algo en su libreta.'), 5200);
    } else if (kind === 'cramp' || kind === 'struggle') {
      const N = opts.n || 12, T = opts.t || 3500, sg = kind === 'struggle';
      const bar = el('div', 'mbar'), fill = document.createElement('i'); bar.appendChild(fill);
      const btn = el('button', 'big', sg ? '¡ZÁFATE!' : '¡APRIETA!'); let n = 0;
      const down = () => { if (done) return; n++; fill.style.width = Math.min(100, n / N * 100) + '%'; beep(300 + n * 20, .04); if (n >= N) finish(1, 1, sg ? '✔ ¡Te soltaste de un tirón!' : '✔ Contenido. Por los pelos.'); };
      btn.onpointerdown = down; keys(down);
      setTimeout(() => finish(0, 1, sg ? '✘ No pudiste soltarte...' : '✘ No pudiste apretar a tiempo...'), T);
    }
  });
}

async function cramp() {
  G.busy = true; sub('<b>Tu estómago se retuerce...</b>', 2000);
  const r = await mini('cramp');
  if (!r.score) { S.life -= 4; syncLife(); addHeat(8); if (S.life <= 0) { explode('stomach'); return; } popText('-4 s de vida', '#ff3b3b'); sub('Un retortijón te dobla en dos: -4 s de vida, +8 sospecha.', 5000); }
  else sub('Apretaste los dientes y las cápsulas aguantaron.', 4000);
  if (!S.over) G.busy = false;
}

/* ==========================================================
   CONFIGURACIÓN (FASE 1)
   ========================================================== */
const SETUP = [
  () => ({ title:'PREPARACIÓN 1/4 · LA MERCANCÍA',
    text:`<p>Estás en un motel que huele a cloro y malas decisiones. Don Chuy golpea la mesa: —Elige tu producto, mula. Si lo pierdes, tú pagas.</p>`,
    opts:Object.values(CARGO).map(c => ({ label:c.name, hint:`${c.weight}kg · olor ${Math.round(c.smell * 100)}% · $${c.profit}. ${c.desc}`, fx(){ S.cargo = c; } })) }),
  () => ({ title:'PREPARACIÓN 2/4 · EL CAMUFLAJE',
    text:`<p>—¿Cómo lo llevamos? —dice Don Chuy, limpiando una navaja "para la fruta". En todos los casos te hará tragar una <b>cápsula de lealtad</b>: su relación contigo caduca con el reloj.</p>`,
    opts:Object.values(METHOD).map(m => ({ label:m.name, hint:m.desc, fx(){ S.method = m; } })) }),
  () => ({ title:'PREPARACIÓN 3/4 · EL DISFRAZ',
    text:`<p>—Nadie sospecha de lo que no recuerda —dice. Te lanza un bolso con tu nuevo "yo".</p>`,
    opts:Object.values(PROFILE).map(p => ({ label:p.name, hint:`$${p.cash} · sospecha ${p.heat}. ${p.desc}`, fx(){ S.profile = p; S.cash = p.cash; S.heat = p.heat; } })) }),
  () => ({ title:`PREPARACIÓN 4/4 · COMPRAS ($${S.cash})`,
    text:`<p>Un "proveedor" abre su gabardina. Dentro, un bazar de pecados. En el aeropuerto todo costará más y gastará minutos.</p>`,
    opts:SHOP.map(i => ({ label:`${i.name} · $${i.cost}`, hint:i.desc, disabled:S.cash < i.cost,
      fx(){ S.cash -= i.cost; if (i.id === 'contact') S.inv.contact++; else S.inv[i.id]++; } }))
      .concat([{ label:'✔ Terminar compras', hint:'Ir al resumen', done:true }]) }),
  () => ({ title:'RESUMEN DEL VUELO',
    text:`<p><b>${S.cargo.name}</b> · ${S.method.name} · ${S.profile.name} · $${S.cash}</p>
    <p>Tienes <b>${P.missionSec} segundos reales</b> para abordar en la Puerta 27, pero tus cápsulas explotan en <b>${lifeBase()} segundos</b>. Alarga tu vida con <b>antiácidos</b> 💊 del suelo, pastillas, café, adrenalina al zafarte y escondiéndote (el desgaste baja a la mitad). Los <b>relojes</b> ⏱ dorados suman segundos de misión.</p>
    <p>Cuidado: algunos policías van <b>armados</b> y disparan si huyes. Modo <b>${DIFF_LABEL[P.diff]}</b>: ${P.armedPct}% de los policías van armados y tienes ${P.hp} de salud. Los pasillos del laberinto cambian y las puertas se cierran a tu espalda.</p>
    <p>Esquiva los conos de visión de los guardias, no te acerques a los perros y cuida el estómago.</p>`,
    opts:[{ label:'✈ Entrar al aeropuerto', hint:'Empieza la cuenta regresiva', go:true }] })
];

async function setupFlow() {
  S = newState();
  for (let s = 0; s < 3; s++) (await dialog(SETUP[s]())).fx();
  for (;;) { const o = await dialog(SETUP[3]()); if (o.done) break; o.fx(); }
  await dialog(SETUP[4]());
  startGame();
}

function startGame() {
  outfit(S.profile);
  applyArmed();
  resetMaze(mulberry32(G.seed || 1));
  const u = player.userData; u.ang = 0; cam.yaw = 0;
  cam.x = u.px; cam.y = 1.6 + Math.sin(cam.pitch) * cam.dist; cam.z = u.pz + Math.cos(cam.pitch) * cam.dist;
  document.body.classList.remove('nohud');
  G.mode = 'play'; G.busy = false;
  $('help').style.opacity = isTouch ? 0 : 1; setTimeout(() => $('help').style.opacity = 0, 14000);
  sub(`<b>Don Chuy:</b> "No me falles, mula. Y si vas a explotar, hazlo lejos de mi coche." <i>(${DIFF_LABEL[P.diff]}${G.daily ? ' · reto diario' : ''})</i>`, 6500);
  if (taxi) taxi.parked = false;
}

/* Recompensas, puntuación y récords al terminar una partida */
function finishRun(kind) {
  const won = kind === 'win', pk = S.picked || 0;
  meta.runs++; if (won) meta.wins++;
  const payout = won ? Math.round(S.cargo.profit * (.6 + .4 * S.integrity / 100)) : 0, mult = { novato:1, dificil:1.3, experto:1.8 }[P.diff] || 1;
  const score = won ? Math.round((payout / 10 + Math.max(0, S.time) * 20 + Math.max(0, S.life) * 15 + Math.max(0, S.hp) * 2 + pk * 30) * mult) : Math.round(pk * 30 + (S.passed ? 200 : 0));
  const money = won ? Math.round(payout / 10 * P.payoutMul + Math.max(0, S.time) * 2) : Math.round((pk * 6 + (S.passed ? 40 : 0)) * P.payoutMul);
  addMoney(money);
  let rec = '';
  if (won) { const isNew = addRecord(P.diff, { score, time:+(S.playT || 0).toFixed(1), date:new Date().toLocaleDateString(), seed:G.seed }, G.daily); rec = isNew ? ' 🏆 <b>¡NUEVO RÉCORD!</b>' : ''; }
  saveMeta();
  return `<p style="text-align:center">Modo <b>${DIFF_LABEL[P.diff]}</b>${G.daily ? ' · reto diario' : ''} · Puntuación: <b>${score}</b> · Dinero ganado: <b>$${money}</b> (total $${meta.money})${rec}</p>`;
}

/* ==========================================================
   ENTRADA
   ========================================================== */
const keys = {}, pressed = {};
function toggleAdmin() {
  if ($('admin').classList.contains('on')) { $('admin').className = 'overlay'; $('admin').innerHTML = ''; G.paused = false; applyArmed(); return; }
  if (G.mode === 'play' && G.busy) return;
  G.paused = true; openAdmin();
}
onAdminClose(() => { G.paused = false; applyArmed(); refreshTitle(); });
addEventListener('keydown', e => {
  if (e.repeat) return;
  if (e.code === 'F2') { e.preventDefault(); toggleAdmin(); return; }
  if ($('admin').classList.contains('on')) return;
  keys[e.code] = true; pressed[e.code] = true;
  if (G.dlgKey && /^Digit[1-9]$/.test(e.code)) G.dlgKey(+e.code.slice(5) - 1);
  if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
});
addEventListener('keyup', e => { keys[e.code] = false; });
const cam = { yaw:0, pitch:.5, dist:9.5, x:0, y:0, z:0 };
initInput({ keys, pressed, cam, canvas:renderer.domElement, isTouch, clamp });

/* ---------- Menú principal ---------- */
function refreshTitle() {
  document.querySelectorAll('#diffSel button').forEach(b => b.classList.toggle('on', b.dataset.d === P.diff));
  $('diffDesc').textContent = DIFF_DESC[P.diff]; $('moneyTag').textContent = 'Dinero permanente: $' + meta.money;
}
document.querySelectorAll('#diffSel button').forEach(b => b.onclick = () => { applyDifficulty(b.dataset.d); refreshTitle(); beep(440, .05); });
refreshTitle();

async function beginRun(daily) {
  startHum(); beep(520, .08);
  if (isTouch) goFullscreen();
  $('title').classList.remove('on');
  G.daily = daily; G.seed = daily ? dailySeed() : (Math.random() * 1e9) | 0;
  setupFlow();
}
$('btnStart').onclick = () => beginRun(false);
$('btnDaily').onclick = () => beginRun(true);
$('btnAdmin').onclick = () => toggleAdmin();
$('btnAdminIn').onclick = () => toggleAdmin();

$('btnShop').onclick = async () => {
  $('title').classList.remove('on');
  for (;;) {
    const o = await dialog({ title:`TIENDA PERMANENTE · $${meta.money}`,
      text:'<p>Mejoras que se guardan en este navegador y valen para todas las partidas. Ganas dinero al abordar (y un poco al fallar).</p>',
      opts:UPGRADES.map(u => { const l = lvl(u.id), max = l >= u.max;
        return { label:`${u.name} · nivel ${l}/${u.max}`, hint:max ? 'Nivel máximo' : `${u.desc} · $${u.cost(l)}`, disabled:max || meta.money < u.cost(l), up:u.id }; })
        .concat([{ label:'← Volver', close:true }]) });
    if (o.close) break; if (buy(o.up)) beep(880, .08, 'sine', .08);
  }
  $('title').classList.add('on'); refreshTitle();
};
$('btnRecords').onclick = async () => {
  $('title').classList.remove('on');
  const fmt = list => list.length ? list.map((r, i) => `${i + 1}. <b>${r.score}</b> pts · ${r.time}s · ${r.date}`).join('<br>') : '<i>Sin récords todavía</i>';
  const html = DIFF_IDS.map(id => `<p><b>${DIFF_LABEL[id]}</b><br>${fmt(records(id, false))}</p>`).join('') +
    `<p><b>Reto diario de hoy (${dailySeed()}) · ${DIFF_LABEL[P.diff]}</b><br>${fmt(records(P.diff, true, dailySeed()))}</p>`;
  await dialog({ title:'RÉCORDS', text:html, opts:[{ label:'← Volver', close:true }] });
  $('title').classList.add('on');
};

/* ==========================================================
   BUCLE
   ========================================================== */
/* ---------- Navegación (pathfinding por campo de distancias) ---------- */
const GW = 84, GH = 132, GX0 = -42, GZ0 = -72;
const NB = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
let baseG = null, baseD = null, baseR = null, gridG = null, gridD = null, gridR = null;
let routeField = null, FIELD_G = null, FIELD_D = null, FIELD_FL = null, FIELD_DEC = null, fieldT = 0;
const tmpO = { x:0, z:0 };

function makeGrid(thr) {
  const g = new Uint8Array(GW * GH);
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) {
    const x = GX0 + i + .5, z = GZ0 + j + .5;
    for (const b of COLL) if (!b.dyn && b.h > thr && x > b.x0 - .7 && x < b.x1 + .7 && z > b.z0 - .7 && z < b.z1 + .7) { g[j * GW + i] = 1; break; }
  }
  return g;
}
function overlayGrid(base, thr) {
  const g = base.slice();
  for (const b of COLL) {
    if (!b.dyn || b.h <= thr || b.x0 > 5000) continue;
    const i0 = Math.max(0, Math.floor(b.x0 - .7 - GX0)), i1 = Math.min(GW - 1, Math.ceil(b.x1 + .7 - GX0));
    const j0 = Math.max(0, Math.floor(b.z0 - .7 - GZ0)), j1 = Math.min(GH - 1, Math.ceil(b.z1 + .7 - GZ0));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const x = GX0 + i + .5, z = GZ0 + j + .5; if (x > b.x0 - .7 && x < b.x1 + .7 && z > b.z0 - .7 && z < b.z1 + .7) g[j * GW + i] = 1; }
  }
  return g;
}
const cellIdx = (x, z) => clamp(Math.floor(z - GZ0), 0, GH - 1) * GW + clamp(Math.floor(x - GX0), 0, GW - 1);
function bfs(tx, tz, grid) {
  const f = new Int16Array(GW * GH).fill(-1), q = new Int32Array(GW * GH); let h = 0, t = 0, s = cellIdx(tx, tz);
  if (grid[s]) {
    let best = -1, bd = 1e9; const ci = s % GW, cj = (s / GW) | 0;
    for (let dj = -4; dj <= 4; dj++) for (let di = -4; di <= 4; di++) {
      const i = ci + di, j = cj + dj; if (i < 0 || j < 0 || i >= GW || j >= GH) continue;
      if (!grid[j * GW + i] && di * di + dj * dj < bd) { bd = di * di + dj * dj; best = j * GW + i; }
    }
    if (best < 0) return f; s = best;
  }
  f[s] = 0; q[t++] = s;
  while (h < t) {
    const c = q[h++], ci = c % GW, cj = (c / GW) | 0, d = f[c];
    for (let k = 0; k < 8; k++) {
      const i = ci + NB[k][0], j = cj + NB[k][1]; if (i < 0 || j < 0 || i >= GW || j >= GH) continue;
      const n = j * GW + i; if (grid[n] || f[n] >= 0) continue;
      if (k >= 4 && (grid[cj * GW + i] || grid[j * GW + ci])) continue;
      f[n] = d + 1; q[t++] = n;
    }
  }
  return f;
}
function flowDir(f, grid, x, z) {
  if (!f) return null;
  const c = cellIdx(x, z), ci = c % GW, cj = (c / GW) | 0; let best = f[c] >= 0 ? f[c] : 1e9, bi = -1, bj = -1;
  for (let k = 0; k < 8; k++) {
    const i = ci + NB[k][0], j = cj + NB[k][1]; if (i < 0 || j < 0 || i >= GW || j >= GH) continue;
    const n = j * GW + i; if (f[n] < 0 || (grid[n] && !grid[c])) continue;
    if (k >= 4 && (grid[cj * GW + i] || grid[j * GW + ci])) continue;
    if (f[n] < best) { best = f[n]; bi = i; bj = j; }
  }
  if (bi < 0) return null;
  const tx = GX0 + bi + .5 - x, tz = GZ0 + bj + .5 - z, l = Math.hypot(tx, tz) || 1; return { x:tx / l, z:tz / l };
}
function rebuildNav() { if (!baseG) return; gridG = overlayGrid(baseG, .95); gridD = overlayGrid(baseD, .6); gridR = overlayGrid(baseR, .3); routeField = bfs(0, -62, gridR); }
function initNav() { baseG = makeGrid(.95); baseD = makeGrid(.6); baseR = makeGrid(.3); rebuildNav(); }
function routeAhead(x, z, steps) {
  if (!routeField) return { x:0, z:-62 };
  for (let k = 0; k < steps; k++) { const dir = flowDir(routeField, gridR, x, z); if (!dir) break; x += dir.x; z += dir.z; }
  return { x, z };
}

function resolveCircle(o, r, minH) {
  for (let k = 0; k < 2; k++) for (const b of COLL) {
    if (b.h <= minH) continue;
    const cx = clamp(o.x, b.x0, b.x1), cz = clamp(o.z, b.z0, b.z1), dx = o.x - cx, dz = o.z - cz, d2 = dx * dx + dz * dz;
    if (d2 < r * r) {
      if (d2 > 1e-6) { const d = Math.sqrt(d2); o.x += dx / d * (r - d); o.z += dz / d * (r - d); }
      else { const l = o.x - b.x0, rr = b.x1 - o.x, t = o.z - b.z0, bt = b.z1 - o.z, m = Math.min(l, rr, t, bt);
        if (m === l) o.x = b.x0 - r; else if (m === rr) o.x = b.x1 + r; else if (m === t) o.z = b.z0 - r; else o.z = b.z1 + r; }
    }
  }
}
function groundAt(x, z) {
  let g = 0;
  for (const b of COLL) if (b.h <= 1.3 && b.h > 0 && x > b.x0 - .2 && x < b.x1 + .2 && z > b.z0 - .2 && z < b.z1 + .2) g = Math.max(g, b.h);
  return g;
}
function ptSegDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1, t = clamp(((px - ax) * dx + (pz - az) * dz) / l2, 0, 1);
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}

/* ---------- Laberinto dinámico ---------- */
const UNIT = new THREE.BoxGeometry(1, 1, 1);
const ROW_Z = [-34.4, -40.4, -46.4, -52.4, -58.4];
const LANE_X = [[-38, -30], [-26, -14], [-8, 8], [14, 26]];
const ROWS = [], LDOORS = [], MZ = { t:0, warned:false, rng:Math.random, navT:0, dirty:false, entLocked:false, exitLocked:false, lastWarnSec:0 };

function mkPiece(zc, kind, color) {
  const H = kind === 'low' ? 1.0 : 2.6;
  const mesh = new THREE.Mesh(UNIT, mat(color || (kind === 'low' ? 0xd9d2c0 : kind === 'door' ? 0xb03030 : 0xb8864b)));
  mesh.castShadow = true; mesh.receiveShadow = true; mesh.visible = false; scene.add(mesh);
  const b = { x0:9999, x1:9999, z0:zc - .6, z1:zc + .6, h:0, dyn:true };
  COLL.push(b); WALLS_DRAW.push(b); if (kind !== 'low') LOSB.push(b);
  return { b, mesh, H, kind, zc };
}
function setPiece(p, x0, x1, s = 1) {
  const b = p.b;
  if (x1 - x0 < .05 || s <= 0) { b.x0 = b.x1 = 9999; b.h = 0; p.mesh.visible = false; return; }
  b.x0 = x0; b.x1 = x1; b.h = p.H; p.mesh.visible = true;
  p.mesh.scale.set(x1 - x0, p.H * s, b.z1 - b.z0); p.mesh.position.set((x0 + x1) / 2, p.H * s / 2, p.zc);
}
function layoutRow(R) {
  const gw = P.gapWidth, g0 = clamp(R.gx - gw / 2, -40, 40 - gw), g1 = g0 + gw; R.g0 = g0; R.g1 = g1;
  const regs = [[-40, g0], [g1, 40]], big = (regs[0][1] - regs[0][0]) >= (regs[1][1] - regs[1][0]) ? 0 : 1, tall = []; let low = null;
  regs.forEach((r, k) => {
    if (r[1] - r[0] < .3) return;
    if (k === big && r[1] - r[0] >= 22) { const c = clamp((r[0] + r[1]) / 2 + R.lowOff, r[0] + 8, r[1] - 8); low = [c - 4, c + 4]; tall.push([r[0], c - 4]); tall.push([c + 4, r[1]]); }
    else tall.push(r);
  });
  R.pieces.forEach((p, k) => tall[k] ? setPiece(p, tall[k][0], tall[k][1]) : setPiece(p, 0, 0));
  low ? setPiece(R.low, low[0], low[1]) : setPiece(R.low, 0, 0);
  R.lowC = low ? (low[0] + low[1]) / 2 : null;
  if (R.doorOn) { setPiece(R.door, g0, g1, Math.max(.03, R.doorS)); } else setPiece(R.door, 0, 0);
}
function pickGap(R) {
  // El hueco nuevo debe quedar lejos de los de las filas vecinas (recorrido largo en serpentina) y distinto del actual
  const rng = MZ.rng, prev = ROWS[R.i - 1], next = ROWS[R.i + 1]; let best = R.gx, bs = -1;
  for (let k = 0; k < 24; k++) {
    const v = (rng() * 2 - 1) * 24;
    let sc = Math.min(prev ? Math.abs(v - prev.tx) : 99, next ? Math.abs(v - next.tx) : 99);
    if (Math.abs(v - R.gx) < P.gapWidth * .9) sc -= 40;
    if (sc > bs) { bs = sc; best = v; }
  }
  return best;
}
function buildMazeRows() {
  ROW_Z.forEach((zc, i) => {
    const R = { zc, i, gx:0, tx:0, g0:0, g1:0, lowOff:0, lowC:null, closed:false, doorOn:false, doorS:0,
      pieces:[mkPiece(zc, 'tall'), mkPiece(zc, 'tall'), mkPiece(zc, 'tall')], low:mkPiece(zc, 'low'), door:mkPiece(zc, 'door') };
    ROWS.push(R);
  });
  LANE_X.forEach(([a, b], k) => {
    const ent = mkPiece(-.6, 'door'), ex = mkPiece(-28.6, 'door'), tag = label('✖ CERRADO', (a + b) / 2, 3.4, 1.4, 7, '#ff4d4d'); tag.visible = false;
    LDOORS.push({ a, b, ent, ex, tag, entOn:false, exOn:false, entS:0, exS:0 });
  });
  // Tiendas pegadas a la zona fija de las paredes (los huecos nunca llegan a x = ±32 o más)
  const shop = (x, za, zb, color, text, tcol, zl) => { deco(x - 3, za, x + 3, zb, 2.2, color, 0); label(text, x, 3.4, zl, 5.5, tcol); };
  shop(-35.5, -39.8, -39.4, 0xe8f2ee, 'FARMACIA ✚', '#3ddc84', -39.8);
  shop(35.5, -41.4, -41, 0xf0d4e0, 'PERFUMERÍA', '#ff9fd0', -41);
  shop(-35.5, -47.4, -47, 0xe8e0c8, 'ÓPTICA 🕶', '#ffd18f', -47);
  shop(35.5, -53.4, -53, 0x4a6f8a, 'BAÑOS 🚻', '#8fd3ff', -53);
  label('DUTY FREE', 0, 6, -30, 10, '#ffd75a');
  resetMaze(Math.random);
}
function resetMaze(rng) {
  MZ.rng = rng; MZ.entLocked = false; MZ.exitLocked = false; MZ.warned = false; MZ.t = P.shiftSec || 0;
  ROWS.forEach((R, i) => { R.gx = R.tx = (i % 2 ? -1 : 1) * (8 + rng() * 14); R.lowOff = (rng() - .5) * 10; R.closed = false; R.doorOn = false; R.doorS = 0; layoutRow(R); });
  LDOORS.forEach(L => { L.entOn = L.exOn = false; L.entS = L.exS = 0; setPiece(L.ent, 0, 0); setPiece(L.ex, 0, 0); L.tag.visible = false; });
  rebuildNav(); resnapPickups();
}
function rotateLanes() {
  if (!P.laneClose) return;
  const n = P.diff === 'experto' ? 2 : 1, closed = new Set();
  while (closed.size < n) closed.add(Math.floor(MZ.rng() * 4));
  LDOORS.forEach((L, k) => { const on = closed.has(k); L.entOn = on; L.entS = on ? Math.max(.03, L.entS) : 0; L.tag.visible = on; if (!on) setPiece(L.ent, 0, 0); });
  MZ.dirty = true;
}
function closeBehind(u) {
  if (!P.doorsClose) return;
  if (!MZ.entLocked && u.pz < -2.5) { MZ.entLocked = true; LDOORS.forEach(L => { L.entOn = true; L.entS = Math.max(.03, L.entS); L.tag.visible = false; }); MZ.dirty = true; clunk('Las puertas del control se cierran a tu espalda.'); }
  if (!MZ.exitLocked && u.pz < -30.8) { MZ.exitLocked = true; LDOORS.forEach(L => { L.exOn = true; L.exS = .03; }); MZ.dirty = true; clunk('La salida del control se bloquea tras de ti.'); }
  for (const R of ROWS) if (!R.closed && u.pz < R.zc - 2.8) { R.closed = true; R.doorOn = true; R.doorS = .03; layoutRow(R); MZ.dirty = true; clunk('Una puerta se cierra detrás de ti. No hay vuelta atrás.'); }
}
function clunk(msg) { noise(.25, .3, 500); beep(90, .15, 'square', .08); sub(msg, 3000); }
function doShift() {
  const u = player.userData; let any = false;
  if (u.pz > 2 && !MZ.entLocked && P.laneClose) { rotateLanes(); any = true; }
  for (const R of ROWS) {
    if (R.closed || u.pz < R.zc + 3.5) continue;
    R.tx = pickGap(R); any = true;
  }
  if (any) { MZ.shifted = true; noise(.7, .3, 300); beep(70, .25, 'sawtooth', .1); sub('<b>¡El laberinto cambió!</b> Busca otro camino.', 3200); G.shake = Math.max(G.shake || 0, .35); MZ.dirty = true; }
}
function mazeUpdate(dt) {
  let moving = false;
  for (const R of ROWS) {
    if (Math.abs(R.tx - R.gx) > .01) { R.gx += clamp(R.tx - R.gx, -14 * dt, 14 * dt); layoutRow(R); moving = true; }
    else if (R.doorOn && R.doorS < 1) { R.doorS = Math.min(1, R.doorS + dt * 2.2); layoutRow(R); moving = true; }
  }
  for (const L of LDOORS) {
    if (L.entOn) { L.entS = Math.min(1, L.entS + dt * 2.2); setPiece(L.ent, L.a, L.b, L.entS); }
    if (L.exOn) { L.exS = Math.min(1, L.exS + dt * 2.2); setPiece(L.ex, L.a, L.b, L.exS); }
  }
  if (moving || MZ.dirty) { MZ.navT -= dt; if (MZ.navT <= 0) { MZ.navT = .25; if (!moving) MZ.dirty = false; rebuildNav(); if (!moving && MZ.shifted) { MZ.shifted = false; resnapPickups(); } } }
  if (G.mode !== 'play' || G.busy || !S) return;
  const u = player.userData;
  closeBehind(u);
  if (P.shiftSec > 0) {
    MZ.t -= dt;
    const left = Math.ceil(Math.max(0, MZ.t));
    if (MZ.t <= P.shiftWarn && P.shiftWarn > 0 && left !== MZ.lastWarnSec && MZ.t > 0) { MZ.lastWarnSec = left; beep(520, .06, 'square', .05); }
    if (MZ.t <= 0) { doShift(); MZ.t = P.shiftSec; MZ.lastWarnSec = 0; }
  }
}

/* ---------- Objetos tácticos ---------- */
const SMOKES = [], DECOYS = [];
const puffTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const r = g.createRadialGradient(32, 32, 4, 32, 32, 30);
  r.addColorStop(0, 'rgba(235,235,235,.95)'); r.addColorStop(1, 'rgba(200,200,200,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
function smokeBlocks(ax, az, bx, bz) { for (const s of SMOKES) if (ptSegDist(s.x, s.z, ax, az, bx, bz) < s.r * .75) return true; return false; }
const canSee = (ax, az, bx, bz) => clearSeg(ax, az, bx, bz, LOSB) && !smokeBlocks(ax, az, bx, bz);

function useItem(id) {
  if (!S || S.over || G.busy || G.mode !== 'play') return;
  const u = player.userData; if (!S.inv[id] || u.hidden) return;
  S.inv[id]--;
  if (id === 'smoke') {
    const g = new THREE.Group();
    for (let i = 0; i < 7; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map:puffTex, transparent:true, depthWrite:false, opacity:.9 })); s.scale.set(5, 5, 1); s.position.set(rnd(-2.2, 2.2), rnd(.8, 2.6), rnd(-2.2, 2.2)); g.add(s); }
    g.position.set(u.px, 0, u.pz); scene.add(g); SMOKES.push({ x:u.px, z:u.pz, r:5.5, t:P.itemDur, m:g });
    noise(.8, .25, 1500); sub('<b>Bomba de humo:</b> los policías y los perros pierden la vista.', 2600);
  } else if (id === 'decoy') {
    let x = u.px, z = u.pz; const dx = Math.sin(u.ang), dz = Math.cos(u.ang);
    for (let k = 0; k < 14; k++) { const nx = x + dx, nz = z + dz; if (!clearSeg(x, z, nx, nz, COLL.filter(b => b.h > 1.2 && b.x0 < 5000), .25)) break; x = nx; z = nz; }
    const m = new THREE.Mesh(new THREE.BoxGeometry(.4, .3, .4), new THREE.MeshStandardMaterial({ color:0xffcc33, emissive:0xff8800, emissiveIntensity:1.2 })); m.position.set(x, .2, z); scene.add(m);
    DECOYS.push({ x, z, t:6, m, beepT:0 }); sub('<b>Señuelo lanzado:</b> los policías van hacia el ruido.', 2600);
  } else if (id === 'emp') {
    S.camsOff = true; S.empT = P.itemDur; S.radioOff = P.itemDur; if (DRONE) DRONE.stun = P.itemDur;
    noise(.5, .4, 2200); beep(1800, .2, 'sawtooth', .08); sub('<b>Pulso EMP:</b> cámaras, radio y dron fuera de servicio.', 2800);
  } else if (id === 'dogspray') {
    S.dogOff = P.itemDur; DOGS.forEach(d => { if (d.state === 'hunt' && Math.hypot(d.x - u.px, d.z - u.pz) > 3) { d.state = 'return'; d.sniff = 0; } });
    noise(.4, .2, 3000); sub('<b>Spray anti-perros:</b> los perros pierden el rastro.', 2600);
  }
}
function itemsUpdate(dt) {
  for (let i = SMOKES.length - 1; i >= 0; i--) {
    const s = SMOKES[i]; s.t -= dt; s.m.rotation.y += dt * .2;
    s.m.children.forEach(c => c.material.opacity = Math.min(.9, s.t / 2));
    if (s.t <= 0) { scene.remove(s.m); SMOKES.splice(i, 1); }
  }
  for (let i = DECOYS.length - 1; i >= 0; i--) {
    const d = DECOYS[i]; d.t -= dt; d.beepT -= dt; if (d.beepT <= 0) { d.beepT = .55; beep(1400, .05, 'square', .05); }
    d.m.position.y = .2 + Math.abs(Math.sin(G.t * 12)) * .15;
    if (d.t <= 0) { scene.remove(d.m); DECOYS.splice(i, 1); }
  }
  if (!S) return;
  if (S.empT > 0) { S.empT -= dt; if (S.empT <= 0) S.camsOff = false; }
  if (S.radioOff > 0) S.radioOff -= dt;
  if (S.dogOff > 0) S.dogOff -= dt;
}

/* ---------- Dron con foco ---------- */
let DRONE = null;
function buildDrone() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(.9, .22, .9), new THREE.MeshStandardMaterial({ color:0x1a1d24 })); g.add(body);
  const rotors = [];
  [[-.55, -.55], [.55, -.55], [-.55, .55], [.55, .55]].forEach(([x, z]) => { const r = new THREE.Mesh(new THREE.CylinderGeometry(.34, .34, .03, 12), new THREE.MeshBasicMaterial({ color:0x667, transparent:true, opacity:.55 })); r.position.set(x, .16, z); g.add(r); rotors.push(r); });
  const led = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 8), new THREE.MeshBasicMaterial({ color:0xff2222 })); led.position.set(0, -.05, .45); g.add(led);
  const beam = new THREE.Mesh(new THREE.ConeGeometry(4.4, 7, 20, 1, true), new THREE.MeshBasicMaterial({ color:0xfff2a8, transparent:true, opacity:.12, side:THREE.DoubleSide, depthWrite:false })); beam.position.y = -3.5; g.add(beam);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(4.4, 28), new THREE.MeshBasicMaterial({ color:0xfff2a8, transparent:true, opacity:.28, depthWrite:false })); disc.rotation.x = -Math.PI / 2; scene.add(disc);
  g.position.set(0, 7, -30); g.visible = false; disc.visible = false; scene.add(g);
  DRONE = { m:g, disc, beam, led, rotors, x:0, z:-30, y:7, wp:0, stun:0, sees:false, active:false, tx:0, tz:-30 };
}
const DWP = [[0, -31], [-20, -37.4], [20, -43.4], [-20, -49.4], [20, -55.4], [0, -62], [20, -31], [-20, -43.4], [20, -37.4], [-20, -55.4]];
function droneUpdate(dt) {
  const d = DRONE; if (!d) return;
  const play = G.mode === 'play' && S && P.droneOn;
  d.active = !!(play && (S.passed || P.diff === 'experto'));
  d.m.visible = d.active; d.disc.visible = d.active;
  if (!d.active) return;
  const u = player.userData;
  d.rotors.forEach((r, i) => r.rotation.y += dt * 40 * (i % 2 ? 1 : -1));
  if (d.stun > 0) { d.stun -= dt; d.y = Math.max(3, d.y - dt * 2); d.sees = false; d.disc.material.color.set(0x555555); d.m.position.set(d.x, d.y, d.z); d.disc.position.set(d.x, .08, d.z); return; }
  d.y += (7 - d.y) * Math.min(1, dt * 2);
  let tx, tz;
  if (S.lastKnown && GUARDS.some(g => g.chaser)) { tx = S.lastKnown.x; tz = S.lastKnown.z; } else { const w = DWP[d.wp]; tx = w[0]; tz = w[1]; if (Math.hypot(tx - d.x, tz - d.z) < 2) d.wp = (d.wp + 1 + Math.floor(Math.random() * 3)) % DWP.length; }
  const dx = tx - d.x, dz = tz - d.z, dist = Math.hypot(dx, dz);
  if (dist > .5) { const sp = Math.min(P.droneSpeed, dist * 2); d.x += dx / dist * sp * dt; d.z += dz / dist * sp * dt; }
  d.m.position.set(d.x, d.y, d.z); d.disc.position.set(d.x, .08, d.z);
  const hd = Math.hypot(u.px - d.x, u.pz - d.z), was = d.sees;
  d.sees = !G.busy && !u.hidden && hd < 4.4 && !smokeBlocks(d.x, d.z, u.px, u.pz);
  d.disc.material.color.set(d.sees ? 0xff4040 : 0xfff2a8); d.beam.material.color.set(d.sees ? 0xff6060 : 0xfff2a8); d.led.material.color.set(d.sees ? 0xff0000 : 0x22ff66);
  if (d.sees) {
    if (!was) { sub('<b>🚁 ¡El dron te ilumina!</b> Todos saben dónde estás.', 2600); beep(1100, .15, 'sawtooth', .07); }
    S.lastKnown = { x:u.px, z:u.pz }; addHeat(7 * dt);
    GUARDS.forEach(g => { if (g.stun <= 0 && g.state !== 'hunt') { g.state = 'hunt'; g.huntT = 0; g.chaser = false; } });
    d.alertT = (d.alertT || 0) - dt;
    if (S.heat >= P.chaseHeat && d.alertT <= 0 && !GUARDS.some(x => x.chaser)) { d.alertT = 2; const g = GUARDS.filter(x => x.stun <= 0).sort((a, b) => Math.hypot(a.x - u.px, a.z - u.pz) - Math.hypot(b.x - u.px, b.z - u.pz))[0]; if (g) startChase(g); }
  }
}

/* ---------- Esconderse y ser atrapado ---------- */
function hidePlayer(spot) {
  const u = player.userData; u.hidden = spot; u.hideT = 0; u.crouch = false; player.visible = false;
  S.compromised = !!G.chasersSee;
  sub(S.compromised ? '<b>¡Te vieron esconderte!</b> Van a revisar la taquilla...' : 'Te metes en una taquilla. Huele a calcetines y a miedo.', 4000);
}
function unhidePlayer() {
  const u = player.userData, h = u.hidden; if (!h) return;
  u.px = h.ex; u.pz = h.ez; u.vx = u.vz = 0; u.hidden = null; u.hideT = 0; player.visible = true; S.compromised = false;
}

let caughtLock = false;
async function caught(ent, type) {
  if (G.busy || S.over || caughtLock) return;
  caughtLock = true; G.busy = true;
  const u = player.userData; if (u.hidden) unhidePlayer();
  beep(160, .3, 'sawtooth', .1); noise(.4, .3, 800);
  sub(type === 'dog' ? '<b>¡EL PERRO TE AGARRÓ!</b>' : '<b>¡UN POLICÍA TE AGARRÓ!</b>', 3000);
  const r = await mini('struggle', type === 'dog' ? { n:16, t:4300 } : { n:20, t:4300 });
  if (S.over) return;
  if (!r.score) {
    end('busted', 'DETENIDO', type === 'dog'
      ? 'Los colmillos del perro se cierran sobre tu pantorrilla. "Buen chico", dice el guía. Esta noche cenará mejor que tú.<br>Las esposas son frías. Tu estómago, por ahora, es el único que no está arrestado.'
      : 'Una mano enorme te aplasta contra la pared. "Alto, ciudadano". Lo de "ciudadano" sonó a "culpable".<br>Las esposas son frías. Tu estómago, por ahora, es el único que no está arrestado.');
    return;
  }
  ent.stun = P.stunSec; S.invuln = 3; addHeat(20); addLife(P.adrenLife);
  const dx = u.px - ent.x, dz = u.pz - ent.z, l = Math.hypot(dx, dz) || 1; u.px += dx / l * 1.8; u.pz += dz / l * 1.8;
  tmpO.x = u.px; tmpO.z = u.pz; resolveCircle(tmpO, PR, 0); u.px = tmpO.x; u.pz = tmpO.z;
  sub('<b>¡Te zafaste!</b> Corre, salta o escóndete antes de que se recupere.', 4500);
  G.busy = false; caughtLock = false;
}

/* ---------- Jugador ---------- */
const PR = .45;
let lastStride = 0;
function playerUpdate(dt) {
  const u = player.userData, play = G.mode === 'play';
  if (play && !G.busy) { if (keys.ArrowLeft) cam.yaw += dt * 1.8; if (keys.ArrowRight) cam.yaw -= dt * 1.8; }
  if (u.hidden) { u.px = u.hidden.x; u.pz = u.hidden.z; u.vx = u.vz = 0; u.hideT += dt; return; }
  let mx = 0, mz = 0, sprint = false;
  if (play && !G.busy) {
    const shoes = lvl('shoes') * .25;
    let ix = (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0), iz = (keys.KeyS ? 1 : 0) - (keys.KeyW ? 1 : 0), analog = 0;
    if (TOUCH.mag > .08) { ix += TOUCH.x; iz += TOUCH.z; analog = TOUCH.mag; }
    if (ix || iz) {
      const l = Math.hypot(ix, iz), nx = ix / l, nz = iz / l;
      const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
      mx = fx * -nz + rx * nx; mz = fz * -nz + rz * nx;
      sprint = !u.crouch && (!!(keys.ShiftLeft || keys.ShiftRight) || analog > .9);
    }
    const walk = P.walk + shoes, run = P.run + shoes;
    let sp = u.crouch ? P.crouchSpeed : sprint ? run : walk;
    if (analog && !sprint && !u.crouch) sp = walk * Math.min(1, analog / .9);
    const k = Math.min(1, dt * 10);
    u.vx += (mx * sp - u.vx) * k; u.vz += (mz * sp - u.vz) * k;
    if (pressed.Space && u.grounded) { u.vy = 9; u.grounded = false; u.crouch = false; beep(320, .05, 'triangle', .04); }
  } else { u.vx *= .8; u.vz *= .8; }
  u.px += u.vx * dt; u.pz += u.vz * dt;
  tmpO.x = u.px; tmpO.z = u.pz; resolveCircle(tmpO, PR, u.y + .12); u.px = tmpO.x; u.pz = tmpO.z;
  u.px = clamp(u.px, -118, 118); u.pz = clamp(u.pz, -69, 56);
  u.vy -= 26 * dt; u.y += u.vy * dt;
  const g0 = groundAt(u.px, u.pz);
  if (u.y <= g0 && u.vy <= 0) { if (!u.grounded && u.vy < -6 && play) beep(110, .05, 'triangle', .05); u.y = g0; u.vy = 0; u.grounded = true; }
  else if (u.y > g0 + .02) u.grounded = false;
  const speedNow = Math.hypot(u.vx, u.vz);
  if (speedNow > .3) u.ang = lerpAng(u.ang, Math.atan2(u.vx, u.vz), Math.min(1, dt * 12));
  player.position.set(u.px, u.y, u.pz); player.rotation.y = u.ang; player.scale.y = u.crouch ? .78 : 1;
  const stride = animHuman(player, speedNow, dt, sprint && speedNow > 5);
  if (!u.grounded) { u.legL.rotation.x = -.9; u.legR.rotation.x = .4; u.armL.rotation.x = -2.5; u.armR.rotation.x = -2.0; }
  if (speedNow > .8 && stride !== lastStride) { lastStride = stride; if (play && !u.crouch) beep(sprint ? 120 : 90, .04, 'triangle', .035); }
  u.sprint = sprint && speedNow > 5; u.speed = speedNow;
}

/* ---------- Policías ---------- */
function tracer(x0, y0, z0, x1, y1, z1) {
  const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x0, y0, z0), new THREE.Vector3(x1, y1, z1)]);
  const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color:0xffe27a }));
  scene.add(line); setTimeout(() => { scene.remove(line); geo.dispose(); }, 90);
}
let chaserSeq = 0;
function startChase(g) {
  if (g.stun > 0 || !S) return;
  const u = player.userData;
  g.state = 'hunt'; g.chaser = true; g.huntT = 0; g.flank = (chaserSeq++ % 2) === 1; g.lostT = 0;
  if (g.armed) { g.warn = P.shootWarn; g.fireT = 0; }
  S.lastKnown = { x:u.px, z:u.pz }; FIELD_G = bfs(u.px, u.pz, gridG); fieldT = .3;
  const radio = P.radioAll && !(S.radioOff > 0);
  GUARDS.forEach(o => { if (o !== g && o.state === 'patrol' && o.stun <= 0 && (radio || Math.hypot(o.x - g.x, o.z - g.z) < P.alertRadius)) { o.state = 'hunt'; o.chaser = false; o.huntT = 0; o.tf = 'G'; } });
  beep(1300, .1, 'sawtooth', .06); setTimeout(() => beep(900, .1, 'sawtooth', .06), 130);
  sub(g.armed ? '<b>¡ALTO O DISPARO!</b>' : (radio ? '<b>¡POLICÍA!</b> Radio: "¡Sospechoso localizado!"' : '<b>¡POLICÍA!</b> "¡ALTO AHÍ!"'), 3000);
}

function shoot(g, d) {
  const u = player.userData;
  g.fireT = rnd(P.fireMin, Math.max(P.fireMin, P.fireMax));
  let p = clamp(P.hitBase - d * .016, .1, P.hitBase);
  if (u.y > .4) p *= .4; if (u.crouch) p *= .7; if (u.sprint) p *= .8; if (S.invuln > 0) p = 0;
  const hit = Math.random() < p;
  const tx = u.px + (hit ? 0 : rnd(-1.8, 1.8)), tz = u.pz + (hit ? 0 : rnd(-1.8, 1.8));
  tracer(g.x + Math.sin(g.ang) * .6, 1.25, g.z + Math.cos(g.ang) * .6, tx, 1 + u.y, tz);
  g.flash.visible = true; g.flashT = .08; noise(.12, .3, 2600); beep(150, .08, 'square', .1);
  if (hit) {
    S.hp -= P.bulletDmg; S.hitFlash = .5; G.shake = Math.max(G.shake || 0, .4); popText(`-${P.bulletDmg} salud`, '#ff3b3b'); sub('<b>¡TE DISPARARON!</b>', 1500);
    if (navigator.vibrate) navigator.vibrate(120);
    if (S.hp <= 0) end('shot', 'TE DISPARARON', 'Un estruendo seco y el suelo sube hacia tu cara. "Alto" era una sugerencia con balas.<br>Lo último que escuchas es a alguien diciendo "tranquilos, tiene algo en el estómago". Eso no mejora el día de nadie.');
  } else if (Math.random() < .5) sub('Una bala silba junto a tu oreja.', 1200);
}

function guardsUpdate(dt) {
  const u = player.userData, play = G.mode === 'play' && S;
  G.chasing = false; G.chasersSee = false;
  const decoy = DECOYS[0] || null;
  if (play) {
    S.invuln = Math.max(0, S.invuln - dt); S.hitFlash = Math.max(0, S.hitFlash - dt); fieldT -= dt;
    if (fieldT <= 0) {
      fieldT = .3;
      const hunting = GUARDS.some(g => g.state === 'hunt');
      if (S.lastKnown && hunting) FIELD_G = bfs(S.lastKnown.x, S.lastKnown.z, gridG);
      if (S.lastKnownDog && DOGS.some(d => d.state === 'hunt')) FIELD_D = bfs(S.lastKnownDog.x, S.lastKnownDog.z, gridD);
      if (P.flank && GUARDS.some(g => g.chaser && g.flank)) { S.flankPt = routeAhead(u.px, u.pz, 16); FIELD_FL = bfs(S.flankPt.x, S.flankPt.z, gridG); } else FIELD_FL = null;
      FIELD_DEC = decoy ? bfs(decoy.x, decoy.z, gridG) : null;
    }
  }
  let seen = false;
  for (const g of GUARDS) {
    g.moving = false;
    if (g.flashT > 0) { g.flashT -= dt; if (g.flashT <= 0) g.flash.visible = false; }
    if (g.stun > 0) { g.stun -= dt; g.cone.visible = false; g.bang.visible = false; g.seeing = false; g.aiming = false; g.m.position.set(g.x, 0, g.z); animHuman(g.m, 0, dt, false); continue; }
    g.cone.visible = true; g.cone.scale.setScalar((u.crouch ? .55 : 1) * P.visionMul);
    let sees = false;
    if (play && !u.hidden) {
      const dx = u.px - g.x, dz = u.pz - g.z, d = Math.hypot(dx, dz), rng = g.range * P.visionMul * (u.crouch ? .55 : 1);
      const inCone = d < rng && Math.abs(wrapPi(Math.atan2(dx, dz) - g.ang)) < g.fov;
      if ((inCone || d < 2.2) && canSee(g.x, g.z, u.px, u.pz)) sees = true;
    }
    if (sees && !g.seeing) beep(1500, .06, 'square', .04);
    g.seeing = sees;
    if (sees) {
      seen = true; g.lostT = 0; g.aware = Math.min(1.5, g.aware + dt * (.5 + S.heat / 90 + (u.sprint ? .6 : 0)));
      if (g.aware >= 1 && S.heat >= P.chaseHeat && !g.chaser) startChase(g);
      if (g.chaser) { S.lastKnown = { x:u.px, z:u.pz }; G.chasersSee = true; }
      g.tf = 'G';
    } else { g.aware = Math.max(0, g.aware - dt * .4); g.lostT = (g.lostT || 0) + dt; }

    if (g.state === 'patrol') {
      if (g.path.length > 1) {
        if (g.wait > 0) { g.wait -= dt; g.ang += Math.sin(G.t * 2) * dt * 1.2; }
        else {
          const t = g.path[g.i], dx = t[0] - g.x, dz = t[1] - g.z, d = Math.hypot(dx, dz), sp = g.speed * P.patrolMul;
          if (d < .4) { g.i = (g.i + 1) % g.path.length; g.wait = rnd(.4, 1.6); }
          else { g.x += dx / d * sp * dt; g.z += dz / d * sp * dt; g.ang = lerpAng(g.ang, Math.atan2(dx, dz), Math.min(1, dt * 5)); g.moving = true; g.curSpeed = sp; }
        }
      } else g.ang = g.base + Math.sin(G.t * .8 + g.x) * g.sweep;
      if (decoy && Math.hypot(decoy.x - g.x, decoy.z - g.z) < 32 && !sees) { g.state = 'hunt'; g.chaser = false; g.huntT = 0; g.tf = 'DEC'; }
    } else if (g.state === 'hunt') {
      if (decoy && !sees && (!g.chaser || g.lostT > 2)) g.tf = 'DEC'; else if (g.tf === 'DEC' && !decoy) g.tf = 'G';
      let T = S ? S.lastKnown : null, field = FIELD_G;
      if (g.tf === 'DEC' && decoy && FIELD_DEC) { T = decoy; field = FIELD_DEC; }
      else if (g.chaser && g.flank && P.flank && FIELD_FL && S && S.flankPt && g.lostT > .4) { T = S.flankPt; field = FIELD_FL; }
      const d = T ? Math.hypot(T.x - g.x, T.z - g.z) : 0;
      if (T && d > 1.6 && field) {
        const dir = flowDir(field, gridG, g.x, g.z);
        if (dir) {
          g.curSpeed = g.chaser ? (S.heat > 70 ? P.chaseSpeedHot : P.chaseSpeed) : P.chaseSpeed * .68;
          g.x += dir.x * g.curSpeed * dt; g.z += dir.z * g.curSpeed * dt; g.ang = lerpAng(g.ang, Math.atan2(dir.x, dir.z), Math.min(1, dt * 9)); g.moving = true;
          tmpO.x = g.x; tmpO.z = g.z; resolveCircle(tmpO, .45, .95); g.x = tmpO.x; g.z = tmpO.z;
        }
        g.huntT = 0;
      } else {
        g.huntT += dt; g.ang += Math.sin(G.t * 3) * dt * 2.2;
        if (g.huntT > 6) { g.state = 'return'; g.chaser = false; g.aware = 0; g.tf = 'G'; g.retField = bfs(g.path[g.i][0], g.path[g.i][1], gridG); }
      }
    } else if (g.state === 'return') {
      const tx = g.path[g.i][0], tz = g.path[g.i][1];
      if (Math.hypot(tx - g.x, tz - g.z) < 1.2) g.state = 'patrol';
      else { const dir = flowDir(g.retField, gridG, g.x, g.z);
        if (dir) { g.curSpeed = 2.4; g.x += dir.x * 2.4 * dt; g.z += dir.z * 2.4 * dt; g.ang = lerpAng(g.ang, Math.atan2(dir.x, dir.z), Math.min(1, dt * 6)); g.moving = true; }
        else g.state = 'patrol'; }
    }

    g.aiming = false;
    if (play && g.armed && g.chaser && !u.hidden && !G.busy) {
      const dx = u.px - g.x, dz = u.pz - g.z, d = Math.hypot(dx, dz);
      if (d < P.shootRange && d > 3.2 && canSee(g.x, g.z, u.px, u.pz)) {
        g.aiming = true; g.warn -= dt; g.fireT -= dt;
        g.ang = lerpAng(g.ang, Math.atan2(dx, dz), Math.min(1, dt * 10));
        if (g.warn <= 0 && g.fireT <= 0) shoot(g, d);
      }
    }

    g.m.position.set(g.x, 0, g.z); g.m.rotation.y = g.ang;
    animHuman(g.m, g.moving ? g.curSpeed : 0, dt, g.chaser && g.moving);
    if (g.aiming) g.m.userData.armR.rotation.x = -1.5;
    g.bang.visible = sees || g.chaser; g.cone.material.color.set(sees || g.chaser ? 0xff3030 : 0xffe14d); g.cone.material.opacity = sees || g.chaser ? .38 : .2;
    if (g.chaser) G.chasing = true;

    if (play && !G.busy) {
      const d = Math.hypot(u.px - g.x, u.pz - g.z);
      if (g.chaser && S.invuln <= 0 && !u.hidden && d < 1.15 && u.y < 1.0) caught(g, 'guard');
      else if (u.hidden && g.state === 'hunt' && S.invuln <= 0 && Math.hypot(u.hidden.x - g.x, u.hidden.z - g.z) < 2.1 && (S.compromised || Math.random() < dt * .8)) caught(g, 'guard');
    }
  }
  if (play && !G.busy) {
    if (seen) {
      const rate = (2.2 + (u.sprint ? 4.5 : 0) + S.heat * .05) * (S.profile.id === 'student' ? .85 : 1) * (S.disguised ? .7 : 1) * (S.camsOff ? .35 : 1);
      addHeat(rate * dt);
    } else S.heat = Math.max(0, S.heat - (u.hidden && !S.compromised ? 1.6 : .7) * dt);
  }
  G.seen = seen;
}

/* ---------- Perros ---------- */
function startDogHunt(d) {
  if (!S) return; const u = player.userData;
  d.state = 'hunt'; d.huntT = 0; S.lastKnownDog = { x:u.px, z:u.pz }; FIELD_D = bfs(u.px, u.pz, gridD); fieldT = .3;
  addHeat(8); beep(260, .12, 'sawtooth', .08); setTimeout(() => beep(220, .12, 'sawtooth', .08), 150);
  sub('<b>¡El perro te detectó!</b> Corre, salta o escóndete.', 4000);
  if (d.h.state !== 'hunt' || !d.h.chaser) startChase(d.h);
}

function dogsUpdate(dt) {
  const u = player.userData, play = G.mode === 'play' && S; let maxS = 0;
  for (const d of DOGS) {
    const h = d.h; let spd = 0, exc = false;
    if (d.stun > 0) { d.stun -= dt; d.m.position.set(d.x, 0, d.z); animDog(d.m, 0, dt, false); continue; }
    const pd = Math.hypot(u.px - d.x, u.pz - d.z);
    if (play && d.state !== 'hunt' && !G.busy) {
      const pr = pOf('dog'), R = P.dogRadius + pr * P.dogRadiusSmell;
      if (pd < R && !(S.dogOff > 0)) {
        let k = pr * P.dogRate * (1 - pd / R);
        if (!clearSeg(d.x, d.z, u.px, u.pz, LOSB)) k *= .55;
        if (smokeBlocks(d.x, d.z, u.px, u.pz)) k *= .5;
        if (u.hidden) k *= .35; if (u.crouch) k *= .75; if (u.sprint) k *= 1.3;
        d.sniff += k * dt;
      } else d.sniff = Math.max(0, d.sniff - .15 * dt);
      if (d.sniff >= 1) startDogHunt(d);
    }
    if (d.state === 'follow') {
      const tx = h.x + Math.sin(h.ang + .9) * d.off, tz = h.z + Math.cos(h.ang + .9) * d.off, dx = tx - d.x, dz = tz - d.z, dist = Math.hypot(dx, dz);
      spd = Math.min(dist * 3, 3.2);
      if (dist > .05) { d.x += dx / dist * spd * dt; d.z += dz / dist * spd * dt; d.ang = lerpAng(d.ang, Math.atan2(dx, dz), Math.min(1, dt * 8)); }
      if (play && d.sniff > .25 && pd < 30) d.ang = lerpAng(d.ang, Math.atan2(u.px - d.x, u.pz - d.z), Math.min(1, dt * 3));
      exc = d.sniff > .5;
    } else if (d.state === 'hunt') {
      exc = true;
      const tracking = u.hidden ? pd < 5 : pd < 16;
      if (play && tracking && !(S.dogOff > 0 && pd > 3)) S.lastKnownDog = { x:u.px, z:u.pz };
      const T = S && S.lastKnownDog ? S.lastKnownDog : { x:d.x, z:d.z }, dist = Math.hypot(T.x - d.x, T.z - d.z);
      if (dist > 1.2 && FIELD_D) {
        const dir = flowDir(FIELD_D, gridD, d.x, d.z);
        if (dir) { spd = P.dogSpeed; d.x += dir.x * spd * dt; d.z += dir.z * spd * dt; d.ang = lerpAng(d.ang, Math.atan2(dir.x, dir.z), Math.min(1, dt * 12));
          tmpO.x = d.x; tmpO.z = d.z; resolveCircle(tmpO, .35, .6); d.x = tmpO.x; d.z = tmpO.z; }
        d.huntT = 0;
      } else { d.huntT += dt; if (d.huntT > 5) { d.state = 'return'; d.sniff = .3; d.retT = 0; } }
      if (play && !G.busy && S.invuln <= 0) {
        if (!u.hidden && pd < 1.05 && u.y < 1.0) caught(d, 'dog');
        else if (u.hidden && Math.hypot(u.hidden.x - d.x, u.hidden.z - d.z) < 1.6) caught(d, 'dog');
      }
    } else if (d.state === 'return') {
      d.retT -= dt; if (d.retT <= 0) { d.retT = .6; d.retField = bfs(h.x, h.z, gridD); }
      const dir = d.retField ? flowDir(d.retField, gridD, d.x, d.z) : null;
      if (Math.hypot(h.x - d.x, h.z - d.z) < 2.5 || !dir) d.state = 'follow';
      else { spd = 4.5; d.x += dir.x * spd * dt; d.z += dir.z * spd * dt; d.ang = lerpAng(d.ang, Math.atan2(dir.x, dir.z), Math.min(1, dt * 8)); }
    }
    d.sp = spd; d.m.position.set(d.x, 0, d.z); d.m.rotation.y = d.ang; animDog(d.m, spd, dt, exc);
    if (d.state === 'hunt') G.chasing = true;
    if (exc && Math.random() < dt * 3) beep(240, .07, 'sawtooth', .05);
    maxS = Math.max(maxS, d.state === 'hunt' ? 1 : d.sniff);
  }
  if (S) S.sniff = Math.min(1, maxS);
}

/* ---------- Mundo vivo ---------- */
function worldUpdate(dt) {
  for (const n of NPCS) {
    if (n.queue) { animHuman(n.m, 0, dt, false); continue; }
    if (n.wait > 0) { n.wait -= dt; animHuman(n.m, 0, dt, false); continue; }
    if (!n.t) { pickTarget(n); continue; }
    const dx = n.t.x - n.p.x, dz = n.t.z - n.p.z, d = Math.hypot(dx, dz);
    if (d < .3) { n.t = null; n.wait = rnd(1, 5); continue; }
    n.p.x += dx / d * n.speed * dt; n.p.z += dz / d * n.speed * dt; n.ang = lerpAng(n.ang, Math.atan2(dx, dz), Math.min(1, dt * 6));
    n.m.position.set(n.p.x, 0, n.p.z); n.m.rotation.y = n.ang; animHuman(n.m, n.speed, dt, false);
  }
  for (const c of CARS) {
    if (c.parked) continue;
    c.x += c.dir * c.speed * dt; if (c.x > 170) c.x = -170; if (c.x < -170) c.x = 170;
    c.m.position.x = c.x;
  }
  if (taxi && !taxi.parked && taxi.speed < 14) taxi.speed += dt * 6;
  for (const b of BELTS) {
    if (b.userData.beam) b.position.y = 1 + (Math.sin(G.t * 2.2) * .5 + .5) * 1.6;
    else if (b.userData.belt) { const k = ((G.t * .8 + b.userData.i / 3) % 1); b.position.set(b.userData.cx, .85, -6 + k * 2.4); }
  }
  jetLights.forEach((l, i) => l.visible = Math.sin(G.t * 5 + i * 3) > -.3);
  if (G.planeGo && planeObj) { G.planeV = (G.planeV || 0) + dt * 6; planeObj.position.x += G.planeV * dt; if (planeObj.position.x > 20) planeObj.position.y += dt * (planeObj.position.x - 18) * .15; }
  for (let i = boomMeshes.length - 1; i >= 0; i--) {
    const m = boomMeshes[i], d = m.userData; d.life -= dt; d.v.y -= 14 * dt; m.position.addScaledVector(d.v, dt);
    m.scale.multiplyScalar(1 + dt * 1.2); m.material.opacity = Math.max(0, d.life / 1.6);
    if (d.life <= 0) { scene.remove(m); boomMeshes.splice(i, 1); }
  }
}

function collectPickups(u) {
  for (const p of PICKUPS) {
    if (p.taken || !p.m.visible) continue;
    if (Math.hypot(u.px - p.x, u.pz - p.z) < 1.3 && Math.abs(u.y + 1 - p.y) < 1.5) {
      p.taken = true; scene.remove(p.m); S.picked = (S.picked || 0) + 1;
      if (p.type === 'life') { addLife(P.pickupLife); beep(880, .08, 'sine', .08); setTimeout(() => beep(1180, .1, 'sine', .08), 80); sub(`<b>Antiácido:</b> +${fmtS(P.pickupLife)} s de vida para tus cápsulas.`, 2200); }
      else { addTime(P.pickupTime); beep(660, .08, 'triangle', .08); setTimeout(() => beep(990, .1, 'triangle', .08), 80); sub(`<b>Reloj dorado:</b> +${fmtS(P.pickupTime)} s para abordar.`, 2200); }
      if (navigator.vibrate) navigator.vibrate(30);
    }
  }
}

function clockTick(dt) {
  if (G.mode !== 'play' || !S) return;
  const u = player.userData;
  G.near = null; G.nearHide = null;
  if (G.busy) return;
  S.playT += dt; S.time -= dt; S.life -= dt * lifeRate(u.hidden); if (S.pillLeft > 0) S.pillLeft = Math.max(0, S.pillLeft - dt);
  syncLife();
  if (S.life < lifeBase() * .4) addHeat(.7 * S.profile.nerv * dt);
  const sn = Math.ceil(Math.min(S.time, S.life));
  if (sn !== S.lastBeep) { S.lastBeep = sn; if (sn <= 10 && sn > 0) beep(sn <= 3 ? 1200 : 900, .07); }
  if (S.life <= 0) return explode('time');
  if (S.time <= 0) return lateEnd();
  if (S.integrity < 45) { S.crampT -= dt; if (S.crampT <= 0) { S.crampT = rnd(8, 14); cramp(); } }
  if (!S.passed && u.pz < -29) { S.passed = true; sub('Pasaste seguridad. Ahora, el laberinto del Duty Free hasta la Puerta 27.', 3500); }
  if (!u.hidden) for (const t of TRIGS) if (!S.done[t.id] && u.px > t.x0 && u.px < t.x1 && u.pz > t.z0 && u.pz < t.z1 && u.y < 1.5) {
    S.done[t.id] = true; G.busy = true; t.run().then(() => { if (!S.over) G.busy = false; }); return;
  }
  if (!u.hidden) {
    collectPickups(u);
    for (const z of ZONES) if (Math.hypot(u.px - z.x, u.pz - z.z) < z.r) { G.near = z; break; }
    for (const h of HIDES) if (Math.hypot(u.px - h.x, u.pz - h.z) < 2.3) { G.nearHide = h; break; }
  }
  if (pressed.KeyE && G.near && u.grounded) openZone(G.near);
  if (pressed.KeyH) { if (u.hidden) unhidePlayer(); else if (G.nearHide) hidePlayer(G.nearHide); }
  if (u.hidden && u.hideT > .5 && (pressed.KeyE || pressed.Space || pressed.KeyW || pressed.KeyA || pressed.KeyS || pressed.KeyD)) unhidePlayer();
  if (pressed.KeyC && !u.hidden) u.crouch = !u.crouch;
  if (pressed.KeyQ && S.inv.pills > 0) { sub(pillFx(), 3500); addHeat(2); }
  if (pressed.KeyR && S.inv.perfume > 0 && !S.inv.perfumeOn) { S.inv.perfume--; S.inv.perfumeOn = true; sub('Hueles a pino sintético. Un pino con problemas legales.', 3500); }
  if (pressed.Digit1) useItem('smoke'); if (pressed.Digit2) useItem('decoy'); if (pressed.Digit3) useItem('emp'); if (pressed.Digit4) useItem('dogspray');
}

function updateCamera(dt) {
  if (G.mode === 'title' || !player) {
    const a = G.t * .08; camera.position.set(Math.sin(a) * 50, 22, 10 + Math.cos(a) * 50); camera.lookAt(0, 2, -10); return;
  }
  const u = player.userData;
  const tx = u.px, ty = 1.6 + u.y * .7, tz = u.pz;
  const cp = Math.cos(cam.pitch), px = tx + Math.sin(cam.yaw) * cp * cam.dist, py = ty + Math.sin(cam.pitch) * cam.dist, pz = tz + Math.cos(cam.yaw) * cp * cam.dist;
  const k = Math.min(1, dt * 10);
  cam.x += (px - cam.x) * k; cam.y += (py - cam.y) * k; cam.z += (pz - cam.z) * k;
  let sx = 0, sy = 0;
  if (S && S.integrity < 40 && G.mode === 'play') { sx = (Math.random() - .5) * .04; sy = (Math.random() - .5) * .04; }
  if (G.shake > 0) { G.shake -= dt; sx += (Math.random() - .5) * G.shake * .5; sy += (Math.random() - .5) * G.shake * .5; }
  camera.position.set(cam.x + sx, Math.max(.6, cam.y + sy), cam.z);
  camera.lookAt(tx, ty + .1, tz);
  if (G.planeGo) camera.lookAt(planeObj.position.x * .5, 3, -60);
}

/* ---------- HUD y radar ---------- */
const rc = $('radar'), rx = rc.getContext('2d');
let routeLast = 0, routePt = { x:0, z:-62 };
function objective() {
  const u = player.userData;
  if (u.pz > 29) return { t:'Entra a la terminal', x:0, z:27 };
  if (!S.passed) {
    let best = null;
    LDOORS.forEach(L => { if (L.entOn) return; const cx = (L.a + L.b) / 2, d = Math.abs(cx - u.px); if (!best || d < best.d) best = { x:cx, d }; });
    return { t: MZ.entLocked ? 'Sal del control de seguridad' : 'Cruza el control de seguridad por un carril abierto', x: best ? best.x : 0, z:-1 };
  }
  if (!P.gps) return { t:'Llega a la Puerta 27 (modo sin flecha: guíate por el radar)', x:0, z:-62, far:true };
  const now = performance.now(); if (now - routeLast > 350) { routeLast = now; routePt = routeAhead(u.px, u.pz, 12); }
  return { t:'Atraviesa el laberinto hasta la Puerta 27 (sigue la flecha amarilla)', x:routePt.x, z:routePt.z };
}
function drawRadar(obj) {
  const u = player.userData, R = 34, k = rc.width / 2 / R, c = rc.width / 2;
  rx.clearRect(0, 0, rc.width, rc.width); rx.save(); rx.beginPath(); rx.arc(c, c, c - 2, 0, Math.PI * 2); rx.clip();
  rx.fillStyle = '#1b2430'; rx.fillRect(0, 0, rc.width, rc.width);
  rx.translate(c, c); rx.rotate(cam.yaw); rx.scale(k, k); rx.translate(-u.px, -u.pz);
  rx.fillStyle = '#2f3b4a'; rx.fillRect(-40, -70, 80, 98);
  for (const b of WALLS_DRAW) { if (b.x0 > 5000) continue; rx.fillStyle = b.h <= 1.3 ? '#8a9a7a' : '#5b6878'; rx.fillRect(b.x0, b.z0, b.x1 - b.x0, b.z1 - b.z0); }
  rx.fillStyle = '#37f0ff'; for (const z of ZONES) { rx.beginPath(); rx.arc(z.x, z.z, 1, 0, 7); rx.fill(); }
  rx.fillStyle = '#3ddc84'; for (const h of HIDES) { rx.fillRect(h.x - .7, h.z - .7, 1.4, 1.4); }
  for (const g of GUARDS) {
    const hot = g.chaser || g.seeing;
    rx.fillStyle = g.stun > 0 ? '#777' : hot ? '#ff2020' : g.state === 'hunt' ? '#ff9020' : '#ff7a7a';
    rx.beginPath(); rx.arc(g.x, g.z, g.chaser ? 1.5 : 1, 0, 7); rx.fill();
    if (g.armed) { rx.strokeStyle = '#ffffff'; rx.lineWidth = .4; rx.beginPath(); rx.arc(g.x, g.z, 1.9, 0, 7); rx.stroke(); }
    if (g.stun <= 0) { rx.fillStyle = hot ? 'rgba(255,40,40,.35)' : 'rgba(255,225,77,.22)';
      rx.beginPath(); rx.moveTo(g.x, g.z); rx.arc(g.x, g.z, g.range * P.visionMul, Math.PI / 2 - g.ang - g.fov, Math.PI / 2 - g.ang + g.fov); rx.closePath(); rx.fill(); }
  }
  for (const d of DOGS) { rx.fillStyle = d.state === 'hunt' ? '#ff2020' : '#ffa733'; rx.beginPath(); rx.arc(d.x, d.z, d.state === 'hunt' ? 1.4 : .9, 0, 7); rx.fill(); }
  if (DRONE && DRONE.active) { rx.fillStyle = DRONE.sees ? '#ff2020' : '#ffffff'; rx.beginPath(); rx.arc(DRONE.x, DRONE.z, 1.3, 0, 7); rx.fill(); }
  for (const d of DECOYS) { rx.fillStyle = '#ffcc33'; rx.beginPath(); rx.arc(d.x, d.z, 1.2, 0, 7); rx.fill(); }
  for (const p of PICKUPS) { if (p.taken || !p.m.visible) continue; rx.fillStyle = p.type === 'life' ? '#33ffaa' : '#ffd23a'; rx.fillRect(p.x - .6, p.z - .6, 1.2, 1.2); }
  let ox = obj.x, oz = obj.z; const dx = ox - u.px, dz = oz - u.pz, dd = Math.hypot(dx, dz);
  if (dd > R - 3) { ox = u.px + dx / dd * (R - 3); oz = u.pz + dz / dd * (R - 3); }
  rx.fillStyle = '#f5c518'; rx.beginPath(); rx.arc(ox, oz, 1.5, 0, 7); rx.fill();
  rx.restore();
  rx.save(); rx.translate(c, c); rx.rotate(cam.yaw - u.ang + Math.PI); rx.fillStyle = u.hidden ? '#3ddc84' : '#fff'; rx.strokeStyle = '#000'; rx.lineWidth = 1.5;
  rx.beginPath(); rx.moveTo(0, -8); rx.lineTo(6, 7); rx.lineTo(0, 3); rx.lineTo(-6, 7); rx.closePath(); rx.fill(); rx.stroke(); rx.restore();
}

const stomLbl = i => i > 70 ? ['Estables', '#3ddc84'] : i > 40 ? ['Inquietas', '#ffb020'] : i > 15 ? ['Fugas ácidas', '#ff7a1a'] : ['¡A PUNTO DE ESTALLAR!', '#ff3b3b'];
function hudUpdate() {
  if (!S || !S.cargo || G.mode === 'title') return;
  const u = player.userData;
  const t = Math.max(S.time, 0);
  const c = $('clock'); c.textContent = `${Math.floor(t / 60)}:${String(Math.floor(t) % 60).padStart(2, '0')}`;
  c.className = 'hud ' + (S.time <= 10 ? 'crit' : S.time <= 20 ? 'warn' : '');
  const lf = $('life'); lf.textContent = `💣 ${Math.max(S.life, 0).toFixed(1)} s`;
  lf.className = 'hud ' + (S.life <= 10 ? 'crit' : S.life <= 20 ? 'warn' : '');
  const lv = Math.round(S.heat / 20);
  $('stars').innerHTML = Array.from({ length:5 }, (_, i) => `<span class="${i < lv ? 'on' : 'off'}">★</span>`).join('');
  $('stars').className = 'hud' + (lv >= 3 ? ' flash' : '');
  $('money').textContent = '$' + String(S.cash).padStart(8, '0');
  const inv = []; if (S.inv.pills) inv.push(`💊 ×${S.inv.pills} (Q)`); if (S.inv.perfume) inv.push('🌸 spray (R)'); if (S.inv.perfumeOn) inv.push('🌸 aplicado');
  if (S.inv.clothes) inv.push(`👔 ×${S.inv.clothes}`); if (S.inv.contact) inv.push('📞 contacto'); if (S.bagSwapped) inv.push('🧳 maleta cambiada'); if (S.pillLeft > 0) inv.push(`⏳ desgaste lento ${S.pillLeft.toFixed(0)}s`);
  $('inv').innerHTML = inv.join('<br>');
  $('itemsBar').innerHTML = [['1', '🌫️', 'smoke'], ['2', '📣', 'decoy'], ['3', '⚡', 'emp'], ['4', '🐕', 'dogspray']].map(([k, ic, id]) => `<span class="${S.inv[id] ? '' : 'none'}"><b>${k}</b>${ic}×${S.inv[id] || 0}</span>`).join('');
  $('diffTag').textContent = DIFF_LABEL[P.diff] + (G.daily ? ' · RETO DIARIO' : '');
  const [l, col] = stomLbl(S.integrity); $('stomLbl').textContent = l; $('stomLbl').style.color = col;
  $('stomBar').style.width = Math.max(0, S.integrity) + '%'; $('stomBar').style.background = col;
  const hc = S.hp > P.hp * .5 ? '#3ddc84' : S.hp > P.hp * .25 ? '#ffb020' : '#ff3b3b';
  $('hpBar').style.width = Math.max(0, S.hp / (P.hp + lvl('hp') * 25) * 100) + '%'; $('hpBar').style.background = hc;
  $('sniffBox').style.display = S.sniff > .03 ? 'block' : 'none'; $('sniffBar').style.width = Math.min(100, S.sniff * 100) + '%';
  $('sniffBar').style.background = S.sniff >= 1 ? '#ff2020' : '#ffb020';
  $('vig').style.background = `radial-gradient(ellipse at center, transparent ${45 - S.hitFlash * 40}%, rgba(255,0,0,${Math.min(.85, (S.heat / 100) * .5 + S.hitFlash * 1.2)}) 100%)`;
  const sh = $('shift');
  if (G.mode === 'play' && P.shiftSec > 0 && !MZ.entLocked || (G.mode === 'play' && P.shiftSec > 0 && ROWS.some(R => !R.closed))) {
    const left = Math.max(0, MZ.t); sh.style.display = 'block'; sh.textContent = `↻ Laberinto cambia en ${Math.ceil(left)} s`; sh.className = 'hud' + (left <= P.shiftWarn ? ' warn' : '');
  } else sh.style.display = 'none';
  const al = $('alert');
  if (G.mode !== 'play') al.style.display = 'none';
  else if (u.hidden) { al.style.display = 'block'; al.className = 'hud ' + (S.compromised ? 'bad' : 'ok'); al.textContent = S.compromised ? '👁 TE VIERON ESCONDERTE' : '🙈 ESCONDIDO · cápsulas más lentas'; }
  else if (DRONE && DRONE.sees) { al.style.display = 'block'; al.className = 'hud bad'; al.textContent = '🚁 ¡TE ILUMINA EL DRON!'; }
  else if (GUARDS.some(g => g.aiming)) { al.style.display = 'block'; al.className = 'hud bad'; al.textContent = '🔫 ¡TE APUNTAN!'; }
  else if (G.chasing) { al.style.display = 'block'; al.className = 'hud bad'; al.textContent = '⚠ PERSECUCIÓN'; }
  else if (u.crouch) { al.style.display = 'block'; al.className = 'hud ok'; al.textContent = 'AGACHADO · sigiloso'; }
  else al.style.display = 'none';
  const obj = objective(); $('obj').textContent = obj.t; $('obj').style.display = G.mode === 'play' ? 'block' : 'none';
  const p = $('prompt');
  if (G.mode === 'play' && !G.busy && u.hidden) { p.style.display = 'block'; p.innerHTML = `<b>${isTouch ? '🙈' : 'H'}</b>Salir de la taquilla`; }
  else if (G.near && !G.busy && G.mode === 'play') { p.style.display = 'block'; p.innerHTML = `<b>${isTouch ? '✋' : 'E'}</b>${G.near.label}`; }
  else if (G.nearHide && !G.busy && G.mode === 'play') { p.style.display = 'block'; p.innerHTML = `<b>${isTouch ? '🙈' : 'H'}</b>Esconderse`; }
  else p.style.display = 'none';
  updateTouchUI(S, { act: !!G.near && !G.busy, hide: !!(G.nearHide || u.hidden) });
  drawRadar(obj);
  const showMarker = G.mode === 'play' && (!obj.far || Math.hypot(u.px - obj.x, u.pz - obj.z) < 28);
  objMarker.visible = showMarker; objMarker.position.set(obj.x, 3.2 + Math.sin(G.t * 3) * .3, obj.z); objMarker.rotation.y = G.t * 2;
}

let lastFrame = performance.now(), fpsT = 0, fpsN = 0, tierNow = QUALITY;
function applyTier(t) {
  const dpr = devicePixelRatio || 1;
  renderer.setPixelRatio(Math.min(dpr, { low:1, med:1.5, high:2 }[t])); renderer.setSize(innerWidth, innerHeight);
  const sh = t !== 'low'; renderer.shadowMap.enabled = sh; sun.castShadow = sh;
  if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  sun.shadow.mapSize.set(t === 'high' ? 2048 : 1024, t === 'high' ? 2048 : 1024);
  scene.traverse(o => { if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.needsUpdate = true); } });
}
function adaptQuality(rawDt) {
  if (cfg.quality !== 'auto' || G.mode !== 'play' || G.busy || tierNow === 'low') return;
  fpsT += rawDt; fpsN++;
  if (fpsT >= 3) { const fps = fpsN / fpsT; fpsT = 0; fpsN = 0; if (fps < 28) { tierNow = tierNow === 'high' ? 'med' : 'low'; applyTier(tierNow); sub('Calidad gráfica reducida para mantener la fluidez.', 2500); } }
}
function stepSim(dt) {
  if (G.paused) return;
  G.t += dt;
  mazeUpdate(dt); itemsUpdate(dt);
  worldUpdate(dt); pickupsUpdate(dt);
  if (player) { playerUpdate(dt); guardsUpdate(dt); dogsUpdate(dt); droneUpdate(dt); }
  if (G.mode === 'play') clockTick(dt);
  for (const k in pressed) pressed[k] = false;
  updateCamera(dt); hudUpdate();
}
function loop() {
  requestAnimationFrame(loop);
  const now = performance.now(), raw = (now - lastFrame) / 1000, dt = Math.min(raw, .05); lastFrame = now;
  stepSim(dt); adaptQuality(raw);
  renderer.render(scene, camera);
}

buildWorld(); buildActors(); loop();

window.__dbg = { P, cfg, MZ, ROWS, LDOORS, SMOKES, DECOYS, get DRONE() { return DRONE; }, useItem, rebuildNav, resetMaze, doShift, applyArmed, setArmed, flow: (x, z) => flowDir(routeField, gridR, x, z), nav: () => ({ gridG, gridD, gridR, routeField, cellIdx, bfs }),
  sim: (secs, dt = .05) => { for (let i = 0; i < Math.round(secs / dt); i++) stepSim(dt); }, PICKUPS, keys, pressed, DOGS, NPCS, HIDES, COLL, startChase, startDogHunt, S: () => S, G, player: () => player, ZONES, TRIGS, GUARDS, newState, CARGO, METHOD, PROFILE, meta, finishRun, toggleAdmin };
