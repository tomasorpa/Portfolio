# Tomas Ortega Palencia | Portfolio

React + Vite. Diseño DeveloperOS™ con acento naranja Claude (`#c15f3c` / `#d97757`).

## Correr en local

```bash
npm install
npm run dev
```

## Deploy en Vercel

Vercel detecta Vite solo: Build `npm run build`, Output `dist`.

## Estructura

- `src/Portfolio.jsx`: la página completa: datos (`SKILLS`, `PROJECTS`), estado y lógica (filtro de skills, case studies, menú móvil, animaciones) y el JSX.
- `src/ds.jsx`: componentes del design system: `Button`, `Tag`, `Icon`.
- `src/styles.css`: tokens (colores, tipografía, espaciado), fuentes y estados hover/focus.
- `public/assets/`: imágenes, íconos, CV y transcript en PDF.
- `public/fonts/`: Montserrat, Poppins, JetBrains Mono (woff2, servidas localmente).

## Cambiar el color de acento

Los colores del acento están en `src/styles.css` (`--primary`, `--primary-hover`, `--primary-light`, `--acc-rgb`). La prop `accent` de `<Portfolio />` también acepta `"blue"`, `"purple"` o `"canada-red"`.
