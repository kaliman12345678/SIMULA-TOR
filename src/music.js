/* Música procedural con Web Audio (sin archivos). Ambientes: calm, suspense, adrenaline, win, sad, epic. */
let ctx = null, getCtx = null, master = null, rev = null, noiseBuf = null, timer = null, stg = null;
let started = false, mood = 'off', want = 'off', step = 0, nextT = 0;
const buses = {};
const VOL = .5;
export const music = { muted:false, intensity:0, mood:'off' };

const mf = m => 440 * Math.pow(2, (m - 69) / 12);
export function initMusic(g, muted) { getCtx = g; music.muted = !!muted; }

function ensure() {
  if (ctx) return true;
  try { ctx = getCtx(); } catch (e) { return false; }
  if (!ctx) return false;
  master = ctx.createGain(); master.gain.value = music.muted ? 0 : VOL;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 6;
  master.connect(comp); comp.connect(ctx.destination);
  const len = Math.floor(ctx.sampleRate * 2.4), ib = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ib.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.4); }
  rev = ctx.createConvolver(); rev.buffer = ib; const rg = ctx.createGain(); rg.gain.value = .55; rev.connect(rg); rg.connect(master);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate); const nd = noiseBuf.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  stg = mkBus(1);
  timer = setInterval(tick, 40);
  return true;
}
function mkBus(v = 0) { const dry = ctx.createGain(), wet = ctx.createGain(); dry.gain.value = v; wet.gain.value = v; dry.connect(master); wet.connect(rev); return { dry, wet }; }
const bus = n => buses[n] || (buses[n] = mkBus(0));

export function start() {
  if (started) { if (ctx && ctx.state === 'suspended') ctx.resume(); return; }
  started = true; if (!ensure()) { started = false; return; }
  if (ctx.state === 'suspended') ctx.resume();
  const w = want; mood = 'off'; setMood(w);
}
export function setMuted(m) { music.muted = !!m; if (master) master.gain.setTargetAtTime(m ? 0 : VOL, ctx.currentTime, .05); }
export function setMood(m) {
  want = m; if (!started || !ctx || m === mood) return;
  const t = ctx.currentTime;
  if (buses[mood]) { buses[mood].dry.gain.setTargetAtTime(0, t, .5); buses[mood].wet.gain.setTargetAtTime(0, t, .5); }
  if (m !== 'off') { const b = bus(m); b.dry.gain.setTargetAtTime(1, t, .3); b.wet.gain.setTargetAtTime(1, t, .3); }
  mood = m; music.mood = m; step = 0; nextT = Math.max(nextT, t + .08);
}

/* ---------- instrumentos ---------- */
function tone(b, f, t, dur, o = {}) {
  const { type = 'sine', vol = .2, a = .01, r = .1, detune = 0, lp = 0, wet = 0 } = o;
  const osc = ctx.createOscillator(), g = ctx.createGain(); osc.type = type; osc.frequency.setValueAtTime(f, t); osc.detune.value = detune;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + a);
  g.gain.setValueAtTime(vol, Math.max(t + a, t + dur - r)); g.gain.linearRampToValueAtTime(0, t + dur);
  let n = osc; if (lp) { const f2 = ctx.createBiquadFilter(); f2.type = 'lowpass'; f2.frequency.value = lp; osc.connect(f2); n = f2; }
  n.connect(g); g.connect(b.dry);
  if (wet) { const w = ctx.createGain(); w.gain.value = wet; g.connect(w); w.connect(b.wet); }
  osc.start(t); osc.stop(t + dur + .05);
}
function noiseHit(b, t, dur, vol, type, freq, q = 1) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(b.dry); s.start(t, Math.random() * .5); s.stop(t + dur + .02);
}
function kick(b, t, v) {
  const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + .13);
  g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + .28); o.connect(g); g.connect(b.dry); o.start(t); o.stop(t + .3);
}
function thump(b, t, v) {
  const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(78, t); o.frequency.exponentialRampToValueAtTime(34, t + .16);
  g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + .26); o.connect(g); g.connect(b.dry); o.start(t); o.stop(t + .28);
}
const hat = (b, t, v, d = .04) => noiseHit(b, t, d, v, 'highpass', 7500);
const snare = (b, t, v) => { noiseHit(b, t, .16, v, 'bandpass', 1900, .8); tone(b, 190, t, .1, { type:'triangle', vol:v * .7, a:.002, r:.08 }); };
const click = (b, t, v) => noiseHit(b, t, .02, v, 'highpass', 3200);
const bassN = (b, f, t, d, v) => tone(b, f, t, d, { type:'sawtooth', vol:v, a:.005, r:.05, lp:520 });

/* ---------- ambientes ---------- */
const CALM = [[48, 52, 55, 59], [45, 48, 52, 55], [41, 45, 48, 52], [43, 47, 50, 52]];
const PENT = [72, 74, 76, 79, 81, 84];
const ADR = [{ r:33, a:[57, 60, 64, 69] }, { r:29, a:[53, 57, 60, 65] }, { r:36, a:[55, 60, 64, 67] }, { r:31, a:[55, 59, 62, 67] }];
const ARP = [0, 1, 2, 3, 2, 1, 3, 2, 0, 1, 2, 3, 2, 1, 3, 1];
const WIN = [{ r:36, c:[60, 64, 67, 72] }, { r:43, c:[59, 62, 67, 71] }, { r:45, c:[60, 64, 69, 72] }, { r:41, c:[60, 65, 69, 72] }];
const SAD = [[45, 52, 57, 60], [41, 48, 53, 57], [43, 50, 55, 59], [40, 47, 52, 56]];
const EPIC = [{ r:36, c:[60, 64, 67, 72] }, { r:41, c:[60, 65, 69, 72] }, { r:43, c:[62, 67, 71, 74] }, { r:33, c:[60, 64, 69, 72] }];

const MOODS = {
  calm: { sd: () => 60 / 72 / 4, step(s, t, b, sd) {
    const bar = Math.floor(s / 16) % 4, st = s % 16;
    if (st === 0) {
      CALM[bar].forEach((n, i) => tone(b, mf(n), t, sd * 18, { type:i % 2 ? 'triangle' : 'sine', vol:.05, a:1.1, r:1.8, wet:.6, detune:(i - 1.5) * 4 }));
      tone(b, mf(CALM[bar][0] - 12), t, sd * 15, { vol:.1, a:.4, r:1.2 });
    }
    if ([2, 6, 10, 14].includes(st) && Math.random() < .3) tone(b, mf(PENT[(Math.random() * PENT.length) | 0]), t, 1.7, { vol:.06, a:.005, r:1.4, wet:.9 });
  } },
  suspense: { sd: () => 60 / (52 + music.intensity * 46) / 4, step(s, t, b, sd) {
    const st = s % 16, I = music.intensity;
    if (st === 0) { tone(b, 55, t, sd * 17, { type:'sawtooth', vol:.07, a:1.8, r:1.5, lp:160 + I * 240 }); tone(b, 110.5, t, sd * 17, { vol:.06, a:1.4, r:1.5 }); }
    if (st % 4 === 0) thump(b, t, .32 + I * .22);
    if (st % 4 === 2) thump(b, t, .15 + I * .12);
    if (st % 2 === 0) click(b, t, .03 + I * .03);
    if (st === 8 && Math.random() < .55) { const base = [76, 64, 71][(Math.random() * 3) | 0]; tone(b, mf(base), t, sd * 14, { vol:.028, a:1.5, r:2, wet:.9 }); tone(b, mf(base + 1), t, sd * 14, { vol:.022, a:1.7, r:2, wet:.9 }); }
    if (st === 4 && I > .5 && Math.random() < .5) tone(b, mf(57 + ((Math.random() * 3) | 0)), t, sd * 6, { type:'sawtooth', vol:.025, a:.8, r:1, lp:900, wet:.5 });
  } },
  adrenaline: { sd: () => 60 / 152 / 4, step(s, t, b, sd) {
    const bar = ADR[Math.floor(s / 16) % 4], st = s % 16;
    if (st % 4 === 0) kick(b, t, .5);
    if (st === 4 || st === 12) snare(b, t, .2);
    if (st % 2 === 0) hat(b, t, .05);
    if (st % 4 === 2) hat(b, t, .06, .1);
    if (st % 2 === 0) bassN(b, mf(bar.r + (st % 8 === 6 ? 12 : 0)), t, sd * 1.8, .22);
    tone(b, mf(bar.a[ARP[st]]), t, sd * 1.6, { type:'sawtooth', vol:.03, a:.004, r:.05, lp:2400, wet:.25 });
  } },
  win: { sd: () => 60 / 104 / 4, step(s, t, b, sd) {
    const bar = WIN[Math.floor(s / 16) % 4], st = s % 16;
    if (st === 0) { bar.c.forEach((n, i) => tone(b, mf(n - 12), t, sd * 17, { type:'triangle', vol:.05, a:.5, r:1.2, wet:.5, detune:(i - 1.5) * 5 })); tone(b, mf(bar.r - 12), t, sd * 15, { vol:.15, a:.1, r:.6 }); }
    if (st === 0 || st === 8) kick(b, t, .2);
    if (st % 4 === 2) hat(b, t, .03);
    if (st % 2 === 0) tone(b, mf(bar.c[[0, 1, 2, 3, 2, 1, 3, 2][(st / 2) % 8] ] + 12), t, sd * 3, { type:'triangle', vol:.05, a:.005, r:.4, wet:.5 });
  } },
  sad: { sd: () => 60 / 52 / 4, step(s, t, b, sd) {
    const bar = Math.floor(s / 16) % 4, st = s % 16;
    if (st === 0) { SAD[bar].forEach((n, i) => tone(b, mf(n), t, sd * 17, { type:'sawtooth', vol:.025, a:1.6, r:2, lp:520, wet:.8, detune:(i - 1.5) * 6 })); tone(b, mf(SAD[bar][0] - 12), t, sd * 16, { vol:.1, a:.6, r:1.5 }); }
    if ((st === 6 || st === 12) && Math.random() < .6) tone(b, mf(SAD[bar][(Math.random() * 4) | 0] + 12), t, 2, { vol:.045, a:.01, r:1.8, wet:1 });
  } },
  epic: { sd: () => 60 / 96 / 4, step(s, t, b, sd) {
    const bar = EPIC[Math.floor(s / 16) % 4], st = s % 16, I = music.intensity;
    if (st === 0) { bar.c.forEach((n, i) => tone(b, mf(n - 12), t, sd * 17, { type:'sawtooth', vol:.03 + I * .03, a:.8, r:1, lp:600 + I * 1600, wet:.4, detune:(i - 1.5) * 7 })); bassN(b, mf(bar.r - 12), t, sd * 16, .16); }
    if (st % 4 === 0) kick(b, t, .12 + I * .38);
    if (I > .35 && st % 2 === 0) hat(b, t, .03 + I * .03);
    if (I > .55 && (st === 4 || st === 12)) snare(b, t, .14);
    if (I > .2 && st % 2 === 0) tone(b, mf(bar.c[[0, 1, 2, 3, 2, 1, 3, 2][(st / 2) % 8]] + 12), t, sd * 2.5, { type:'sawtooth', vol:.02 + I * .025, a:.005, r:.1, lp:2600, wet:.4 });
  } }
};

function tick() {
  if (!ctx || ctx.state !== 'running' || !MOODS[mood]) return;
  const M = MOODS[mood], sd = M.sd();
  if (nextT < ctx.currentTime - .5) nextT = ctx.currentTime + .05;
  while (nextT < ctx.currentTime + .3) { M.step(step, nextT, bus(mood), sd); nextT += sd; step++; }
}

/* ---------- efectos musicales ---------- */
export function stinger(kind, x = 0) {
  if (!started || !ctx || ctx.state !== 'running') return; const t = ctx.currentTime + .03, b = stg;
  if (kind === 'fanfare') {
    [[60, 0, .3], [64, .13, .3], [67, .26, .3], [72, .4, .35], [76, .68, 1.1]].forEach(([n, d, du]) => tone(b, mf(n), t + d, du, { type:'sawtooth', vol:.075, a:.01, r:.15, lp:3200, wet:.5 }));
    [72, 76, 79, 84].forEach((n, i) => tone(b, mf(n), t + .68, 2.4, { type:'triangle', vol:.05, a:.02, r:1.6, wet:1, detune:(i - 1.5) * 4 }));
    kick(b, t + .68, .4); noiseHit(b, t + .68, .8, .08, 'highpass', 5000);
  } else if (kind === 'chime') { tone(b, mf(84), t, .55, { vol:.1, a:.005, r:.5, wet:.8 }); tone(b, mf(91), t + .13, .8, { vol:.1, a:.005, r:.7, wet:.9 }); }
  else if (kind === 'ding') { tone(b, mf(91), t, .7, { vol:.1, a:.005, r:.6, wet:.7 }); tone(b, mf(86), t + .28, .9, { vol:.1, a:.005, r:.8, wet:.7 }); }
  else if (kind === 'lose') [57, 53, 50, 45].forEach((n, i) => tone(b, mf(n), t + i * .38, 1, { type:'sawtooth', vol:.07, a:.02, r:.7, lp:800, wet:.9 }));
  else if (kind === 'coin') tone(b, mf(83 + x), t, .13, { type:'square', vol:.045, a:.002, r:.1 });
  else if (kind === 'stamp') { thump(b, t, .5); noiseHit(b, t, .12, .15, 'lowpass', 1200); }
  else if (kind === 'clap') for (let i = 0; i < 70; i++) noiseHit(b, t + Math.random() * x, .05 + Math.random() * .05, .025 + Math.random() * .02, 'bandpass', 1800 + Math.random() * 1800, 1.2);
}
/* Rugido de motores: sube de grave a agudo durante `dur` segundos y se apaga */
export function roar(dur, peak = .5) {
  if (!started || !ctx || ctx.state !== 'running') return; const t = ctx.currentTime + .02;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(140, t); f.frequency.exponentialRampToValueAtTime(2400, t + dur * .8);
  const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + dur * .75); g.gain.linearRampToValueAtTime(0, t + dur);
  s.connect(f); f.connect(g); g.connect(stg.dry); s.start(t); s.stop(t + dur + .1);
  const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(38, t); o.frequency.linearRampToValueAtTime(95, t + dur * .8);
  og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(peak * .35, t + dur * .7); og.gain.linearRampToValueAtTime(0, t + dur);
  const lpf = ctx.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 260; o.connect(lpf); lpf.connect(og); og.connect(stg.dry); o.start(t); o.stop(t + dur + .1);
}
