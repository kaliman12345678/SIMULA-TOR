# SIMULA-TOR

Aventura de sigilo en 3D con humor negro. Eres una **mula** con un cargamento que no es tuyo, un reloj en el estómago y un vuelo que no puede esperar. Esquiva policías, perros y escáneres hasta llegar a la **Puerta 27**.

Hecho con **Three.js**. Se juega en el **navegador (PC y móvil)**, se puede **instalar como app (PWA)** y se empaqueta como `.exe` con **Electron**.

## Modos de dificultad

| | Novato | Difícil | Experto |
|---|---|---|---|
| Vida de las cápsulas | 45 s | 30 s | **20 s** |
| Tiempo de misión | 90 s | 60 s | 50 s |
| Policías armados | 15 % | 60 % | 100 % |
| Persecución | lenta | rápida, radio, flanqueo, dron | muy rápida, radio, flanqueo, dron |
| Olfato de los perros | normal | alto | muy alto |
| Laberinto cambia cada | 30 s | 18 s | 10 s |
| Flecha de ruta (GPS) | sí | sí | **no** |

Todos los valores se pueden cambiar en el **panel de administración** (ver abajo).

## Reglas

- Aborda antes de que se acabe el **tiempo de misión**, pero antes de que **exploten tus cápsulas**.
- Alarga tu vida con **antiácidos** 💊, **pastillas**, **café**, adrenalina al zafarte de un agarrón y escondiéndote en **taquillas** (el desgaste baja casi a la mitad). Los **relojes** ⏱ suman segundos de misión.
- **El laberinto cambia solo**: los huecos de las paredes se mueven (con aviso previo), las entradas del control de seguridad se bloquean por turnos y **las puertas se cierran a tu espalda**: si te devuelves, esa entrada ya no sirve. Siempre hay un camino hasta la meta.
- **Policía:** si tu sospecha es alta te persiguen con *pathfinding*; la radio avisa a todos, algunos te **cortan el paso** por delante (flanqueo), un **dron con foco** te revela y los **armados** disparan si huyes.
- **Perros:** te huelen desde lejos, te persiguen y te agarran si te alcanzan (minijuego de forcejeo).
- **Objetos tácticos:** 🌫️ bomba de humo, 📣 señuelo, ⚡ pulso EMP (cámaras, radio y dron) y 🐕 spray anti-perros.
- **Progresión:** ganas dinero permanente en cada partida y lo gastas en la **Tienda** (más vida, chaleco, bolsa táctica, zapatillas).
- **Récords** por modo y **reto diario** (el mismo laberinto para todos ese día).

## Controles

**PC**

| Tecla | Acción |
|---|---|
| WASD | Mover |
| Shift | Correr (más sospechoso) |
| Espacio | Saltar (los muros bajos son atajos a la vista) |
| C | Agacharse (sigilo) |
| H | Esconderse / salir de la taquilla |
| E | Interactuar |
| Q / R | Pastilla / spray anti-olor |
| 1 / 2 / 3 / 4 | Humo / señuelo / EMP / spray anti-perros |
| Ratón (arrastrar) o ← → | Cámara |
| F2 | Panel de administración |
| F11 | Pantalla completa (versión de escritorio) |

**Móvil** (en horizontal): joystick a la izquierda (empújalo a fondo para correr), botones a la derecha (saltar, actuar, esconder, agacharse, pastilla), objetos arriba de los botones y un dedo libre arrastrando para girar la cámara.

## Calidad gráfica y rendimiento

Es **automática**: el móvil arranca en calidad media y baja sola (resolución, sombras) si los fotogramas bajan de 28 FPS. Se puede forzar con la URL: `?q=low`, `?q=med` o `?q=high`, o desde el panel de administración.

## Instalar en el móvil

Abre el enlace del juego en Chrome/Safari y elige **"Añadir a la pantalla de inicio"**. Se abre a pantalla completa y funciona sin conexión después de la primera carga.

## Panel de administración

Se abre con **F2** o con el botón ⚙ (en el menú principal y en la esquina de la partida). La clave por defecto es **`admin`** y se puede cambiar dentro del panel.

- Edita **48 parámetros** por modo: tiempos, vida, velocidades, policía, disparos, perros, laberinto, objetos y economía.
- Los cambios se aplican al instante y se guardan en el navegador.
- Restablece un parámetro, un modo o todo; **exporta/importa** la configuración en JSON.

> En un sitio público (como GitHub Pages) el código es visible, así que la clave solo evita abrir el panel por error: no es seguridad real.

## Cómo ejecutarlo

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run build      # compila src/*.js -> dist/game.js
npm run serve      # http://localhost:8767  (navegador)
npm start          # aplicación de escritorio (Electron)
npm run pack       # genera el .exe de Windows en release/
```

`dist/game.js` ya está incluido, así que también se puede servir tal cual desde cualquier hosting estático (por ejemplo **GitHub Pages**) sin compilar.

## Estructura

```
index.html            interfaz (HUD, menú, panel, controles táctiles)
manifest.webmanifest  datos de la app instalable (PWA)
sw.js                 service worker (modo sin conexión)
icon-192.png / 512    iconos de la app
main.js               ventana de Electron
serve.js              servidor local sin caché
src/game.js           motor del juego (mundo 3D, IA, minijuegos)
src/config.js         parámetros, modos de dificultad y panel de administración
src/meta.js           progresión, tienda, récords y reto diario
src/touch.js          cámara, joystick y botones táctiles
dist/game.js          versión compilada
```

## Estado

Fase 1 (preparación) y Fase 2 (aeropuerto) jugables. La Fase 3 (vuelo, aduana de destino y entrega) está pendiente.
