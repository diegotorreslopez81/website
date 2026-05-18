# Infinite Labs · Logo Pack canónico

> Variant B oficial · 2026-05-04
> Símbolo infinito en lila #8000FF · bolitas + wordmark adaptables al fondo
> Color principal: lila Infinite Labs `#8000FF`
> Negro: `#0A0A0F` · Blanco: `#FFFFFF` · Off-white: `#FAFAFA`

## Estructura

```
/Users/diego/dev/logos/
├── svg/         · 11 SVG masters (vectoriales, prefer estos)
├── png/         · 45 PNGs raster en múltiples tamaños
├── favicon/    · favicon.ico + .svg + apple-touch + android-chrome
├── og/          · OpenGraph images (1200×630, square, story)
├── square/      · avatars sociales (LinkedIn, X, GitHub)
└── README.md
```

## SVG masters (`svg/`)

### Wordmark completo (símbolo + "infinitelabs")

| Archivo | Uso |
|---|---|
| `infinitelabs-on-dark.svg` | Fondo oscuro · símbolo lila + bolitas+texto blancos |
| `infinitelabs-on-light.svg` | Fondo claro · símbolo lila + bolitas+texto negros |
| `infinitelabs-mono-lila.svg` | Todo en lila · marketing y print color |
| `infinitelabs-mono-white.svg` | Todo blanco · sobre imágenes con color saturado |
| `infinitelabs-mono-black.svg` | Todo negro · print B/N, papel claro |

### Símbolo solo (cuadrado-friendly · favicons, app icons, avatars)

| Archivo | Uso |
|---|---|
| `symbol-on-dark.svg` | Fondo oscuro · símbolo lila + bolitas blancas |
| `symbol-on-light.svg` | Fondo claro · símbolo lila + bolitas negras |
| `symbol-mono-lila.svg` | Todo lila |
| `symbol-mono-white.svg` | Todo blanco |
| `symbol-mono-black.svg` | Todo negro |

### Favicon SVG responsive

`svg/favicon.svg` → símbolo lila + bolitas que se adaptan a `prefers-color-scheme` (blancas en dark, negras en light).

## PNGs (`png/`)

- Wordmark: 400w / 800w / 1600w / 3200w · transparent bg
- Symbol: 128 / 256 / 512 / 1024 / 2048 · transparent bg, square canvas

## Favicons (`favicon/`)

| Archivo | Tamaño | Uso |
|---|---|---|
| `favicon.svg` | vectorial | `<link rel="icon" type="image/svg+xml">` (Chrome+Safari modernos) |
| `favicon.ico` | 16+32+48+64 multi | `<link rel="icon" type="image/x-icon">` (legacy IE/Edge) |
| `favicon-{16,32,48,64,96,128,256}.png` | square | fallback PNG |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-{192,512}.png` | square | Android PWA |

### Snippet HTML estándar

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

## OpenGraph (`og/`)

| Archivo | Tamaño | Uso |
|---|---|---|
| `og-default-1200x630.png` | 1200×630 | Twitter/X cards, LinkedIn share, FB |
| `og-light-1200x630.png` | 1200×630 | Variante fondo claro |
| `og-square-1200x1200.png` | 1200×1200 | LinkedIn square posts |
| `og-story-1080x1920.png` | 1080×1920 | Instagram/IG stories |

## Square avatars (`square/`)

| Archivo | Uso |
|---|---|
| `avatar-dark-{400,800,1024,2048}.png` | LinkedIn, X, GitHub · símbolo sobre fondo dark |
| `avatar-light-{400,800,1024}.png` | Plataformas que prefieren bg claro |
| `symbol-lila-{400,800,1024}.png` | Mono lila transparente · uso flexible |

## Reglas de uso

1. **Master canónico** = SVG. Siempre que sea posible, usar el SVG original (escala perfecta, peso bajo).
2. **PNG solo cuando SVG no es viable** (email clientes que no renderizan SVG, OG sharing tags que requieren PNG, etc.).
3. **Variant B = canónica para 2026+**. Las variantes A, C y otras experimentales del repo `~/dev/website/img/logos/` son históricas y no deben usarse en producción.
4. **No deformar el aspect ratio**. Wordmark = 400×54 (≈7.4:1). Symbol = 200×97 (≈2:1). Si necesitas square, usar `symbol-*.svg` y nunca el wordmark recortado.
5. **Spacing mínimo** alrededor del logo = altura de las bolitas (≈15px en viewBox base).
6. **Color**: lila #8000FF es no-negociable. No alterarlo a magenta, púrpura, violeta, etc.

## Regeneración

Si necesitas regenerar el paquete tras cambios al SVG master, ver script `~/dev/logos/scripts/build.sh` (a crear cuando haga falta).

Tools usados (instalados via brew):
- `librsvg` (rsvg-convert) · vector → raster
- `imagemagick` (magick) · composite, ICO multi-size

## Histórico

- 2026-05-04: Variant B oficializada como canónica tras testing en propuesta One Hub Energy. Diego: "me gusta mucho con logo B".
- Antes: 4 variantes (A/B/C/D) en exploración, sin definir cuál era canónica.

Memoria engram: `infinite-labs/logo-canonical` (id pendiente)
