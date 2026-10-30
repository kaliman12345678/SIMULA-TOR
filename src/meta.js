/* Progresión permanente, tienda, récords y reto diario (guardado en el navegador) */
const KEY = 'simulator.meta.v1';
const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
export const meta = Object.assign({ money:0, up:{}, rec:{}, runs:0, wins:0 }, read());
meta.up = meta.up || {}; meta.rec = meta.rec || {};
export const saveMeta = () => { try { localStorage.setItem(KEY, JSON.stringify(meta)); } catch (e) {} };

export const UPGRADES = [
  { id:'life',  name:'Estómago de acero',  desc:'+2 s de vida de las cápsulas por nivel.', max:5, cost: l => 200 + 150 * l },
  { id:'hp',    name:'Chaleco antibalas',  desc:'+25 de salud por nivel.',                  max:4, cost: l => 250 + 200 * l },
  { id:'bag',   name:'Bolsa táctica',      desc:'+1 bomba de humo y +1 señuelo por nivel.', max:3, cost: l => 300 + 250 * l },
  { id:'shoes', name:'Zapatillas ligeras', desc:'+0,25 m/s al caminar y correr por nivel.', max:4, cost: l => 200 + 175 * l }
];
export const lvl = id => meta.up[id] || 0;
export function buy(id) {
  const u = UPGRADES.find(x => x.id === id), l = lvl(id);
  if (!u || l >= u.max || meta.money < u.cost(l)) return false;
  meta.money -= u.cost(l); meta.up[id] = l + 1; saveMeta(); return true;
}
export function addMoney(n) { meta.money += Math.max(0, Math.round(n)); saveMeta(); }

export function mulberry32(a) {
  return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function dailySeed() { const d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }

/* Récords: top 5 por modo, y por semilla en el reto diario */
export function addRecord(diff, rec, daily) {
  const k = daily ? 'daily-' + rec.seed + '-' + diff : diff;
  const list = meta.rec[k] = meta.rec[k] || [];
  list.push(rec); list.sort((a, b) => b.score - a.score); meta.rec[k] = list.slice(0, 5); saveMeta();
  return meta.rec[k][0] === rec;
}
export const records = (diff, daily, seed) => meta.rec[daily ? 'daily-' + seed + '-' + diff : diff] || [];
