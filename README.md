# SIMULA-TOR

Aventura de sigilo en 3D con humor negro. Eres una **mula** con un cargamento que no es tuyo, un reloj en el estómago y un vuelo que no puede esperar. Esquiva policías, perros y escáneres hasta llegar a la **Puerta 27**.

Hecho con **Three.js** (3D en el navegador) y empaquetable como `.exe` con **Electron**.

## Reglas

- **60 segundos reales** para abordar. Si se acaban, pierdes el vuelo.
- **45 segundos reales** hasta que explotan tus cápsulas (±5 % según mercancía y camuflaje).
- Alarga tu vida con **antiácidos** 💊 (+6 s), **pastillas** (+12 s), **café** (+5 s), adrenalina al zafarte de un agarrón (+4 s) y escondiéndote en **taquillas** (el desgaste baja casi a la mitad).
- Los **relojes** ⏱ dorados suman +5 s de misión.
- Algunos policías van **armados** y disparan si huyes. Tienes 4 impactos de salud.
- Los **perros** te huelen desde lejos, te persiguen y te agarran si te alcanzan (minijuego de forcejeo).
- Los policías te persiguen con *pathfinding* real si tu sospecha es alta.

## Controles

| Tecla | Acción |
|---|---|
| WASD | Mover |
| Shift | Correr (más sospechoso) |
| Espacio | Saltar (muros bajos = atajos a la vista) |
| C | Agacharse (sigilo) |
| H | Esconderse / salir de la taquilla |
| E | Interactuar (check-in, tiendas, baños, puerta) |
| Q / R | Pastilla / spray anti-olor |
| Ratón (arrastrar) o ← → | Cámara |
| F11 | Pantalla completa (en la versión de escritorio) |

## Cómo ejecutarlo

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run build      # compila src/game.js -> dist/game.js
```

**En el navegador:**

```bash
npm run serve      # abre http://localhost:8767
```

**Como aplicación de escritorio:**

```bash
npm start
```

**Generar el `.exe` de Windows** (queda en `release/`):

```bash
npm run pack
```

> El `dist/game.js` ya está incluido en el repositorio, así que también se puede servir tal cual desde cualquier hosting estático (por ejemplo GitHub Pages) sin compilar.

## Estructura

```
index.html      interfaz (HUD, diálogos, minijuegos)
main.js         ventana de Electron
serve.js        servidor local sin caché
src/game.js     todo el juego (mundo 3D, IA, minijuegos)
dist/game.js    versión compilada
```

## Estado

Fase 1 (preparación) y Fase 2 (aeropuerto) jugables. La Fase 3 (vuelo, aduana de destino y entrega) está pendiente.
