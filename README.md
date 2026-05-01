# AniFlow

AniFlow es una aplicación web desarrollada con **Astro** y **TailwindCSS** para explorar y visualizar información de distintos animes populares.

El proyecto fue construido con un enfoque moderno, rápido y responsivo utilizando componentes reutilizables y rutas dinámicas.

---

## Tecnologías utilizadas

* [Astro](https://astro.build/)
* [TailwindCSS](https://tailwindcss.com/)
* TypeScript
* PNPM

---

## Estructura del proyecto

```bash
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimeFeed.astro
│   │   ├── EpisodesCard.astro
│   │   ├── Footer.astro
│   │   ├── MainHero.astro
│   │   ├── Navbar.astro
│   │   └── Tags.astro
│   ├── content/
│   │   └── *.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── animes/
│       │   └── [id].astro
│       └── index.astro
├── package.json
└── README.md
```

---

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/migueliignacio/Aniflow-taller.git
```

Ingresa al proyecto:

```bash
cd Aniflow-taller
```

Instala las dependencias:

```bash
pnpm install
```

---

## Scripts disponibles

| Comando        | Descripción                      |
| -------------- | -------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo |
| `pnpm build`   | Genera la versión de producción  |
| `pnpm preview` | Previsualiza el build generado   |
| `pnpm astro`   | Ejecuta comandos de Astro CLI    |

---

## Ejecutar el proyecto

```bash
pnpm run dev
```

El proyecto estará disponible en:

```bash
http://localhost:4321
```

---

## Características

* Diseño moderno y responsive
* Navegación dinámica por animes
* Componentes reutilizables
* Contenido basado en Markdown
* Arquitectura escalable
* Optimización de rendimiento gracias a Astro

---

## Autor

Desarrollado por Matias Rocha, Miguel Rocha y Cristofer Leiva.

---

## Licencia

Este proyecto es únicamente con fines educativos y de práctica.
