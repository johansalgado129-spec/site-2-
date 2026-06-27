# Los Guardianes del Tablero

SITE estático en HTML5, CSS3 y JavaScript para publicar en GitHub Pages.

## Estructura

- `index.html`: página principal del SITE.
- `assets/css/styles.css`: diseño responsivo.
- `assets/js/main.js`: menú móvil, filtros de misiones y animaciones.
- `assets/img/`: imágenes placeholder editables en SVG.
- `data/videos.json`: listado de videos embebidos usados como apoyo.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos de esta carpeta.
3. Entra a `Settings > Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda y espera a que GitHub genere el enlace público.

## Cómo reemplazar imágenes

Puedes reemplazar cualquier archivo dentro de `assets/img` conservando el mismo nombre.
También puedes editar directamente las rutas `src` dentro de `index.html`.

Rutas principales sugeridas:

- `assets/img/hero-tablero.svg`
- `assets/img/moodboard-narrativo.svg`
- `assets/img/marcadores-ra.svg`
- `assets/img/videos-lsc.svg`
- `assets/img/plataformas.svg`
- `assets/img/evaluacion.svg`
- `assets/img/kit-guardian.svg`
- `assets/img/tablero-progreso.svg`
- `assets/img/diploma-maestro.svg`

## Videos embebidos

Los videos están insertados con `youtube-nocookie.com`. Si alguno no carga por permisos del canal, reemplaza el ID del video en `index.html`.
