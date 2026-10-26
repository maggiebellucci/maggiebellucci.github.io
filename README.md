# Portfolio — Magdalena Bellucci

Réplica en código del portfolio de Figma (maggiebellucci.figma.site) con la paleta nueva
(oliva, rosa, azul, bordó) y la sección de IA con el showcase 3D. HTML + CSS + JS, sin dependencias.

## Ver en local
```bash
cd .. && ruby serve.rb
```
Abrir http://localhost:5180

## Páginas
`index` (portada) · `menu` · `work` · `about` · `contact` · `motion` · `ia` (showcase de IA) ·
`editorial` + `editorial-*` · `interactive` + `interactive-*` · `immersive` · `tesis`

## Dónde editar
- **Colores**: variables en `:root` de `css/site.css`.
- **Videos de IA** (títulos, descripciones, herramientas): array `FILMS` en `js/films.js`.
- **Header / footer / links de contacto / CV**: `js/site.js`.
- **Posiciones**: cada elemento usa `--x`, `--y`, `--w` en píxeles del diseño de 1440px (como en Figma).

## Antes de publicar
- Canela Deck es versión *Trial*: hace falta la licencia web (o reemplazarla).
- `_borrador-v1/` es la primera propuesta descartada; se puede borrar.
