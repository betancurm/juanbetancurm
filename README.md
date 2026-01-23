<div align="center">
  <img src="./public/logo-marca-personal.svg" alt="juan-betancur.com Logo" width="150">
  <h1>juan-betancur.com</h1>
  <p>
    <b>Mi portafolio personal y blog.</b>
    <br />
    <a href="https://juan-betancur.com" target="_blank"><strong>Ver el sitio en vivo »</strong></a>
  </p>
</div>

---

## 📸 Demo

![Project Screenshot](./public/demo.png)


---

## ✨ Tecnologías Utilizadas

Estas son algunas de las tecnologías y herramientas que hacen posible este sitio:

<div align="center">
  <a href="https://astro.build/" target="_blank">
    <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
    <a href="https://bun.sh/" target="_blank">
    <img src="https://img.shields.io/badge/Bun-FD4100?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  </a>
  <a href="https://www.prettier.io/" target="_blank">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier">
  </a>
</div>

---

## 📂 Estructura del Proyecto

La estructura del proyecto sigue las convenciones de Astro para mantener el código organizado y escalable.

```
/
├── public/                 # Archivos estáticos (imágenes, fuentes, CNAME)
├── src/
│   ├── assets/             # Recursos como imágenes y SVGs
│   ├── components/         # Componentes reutilizables de Astro
│   ├── content/            # Colecciones de contenido (Markdown/MDX)
│   │   ├── projects/
│   │   └── work/
│   ├── layouts/            # Plantillas de página
│   └── pages/              # Rutas y páginas del sitio
├── astro.config.mjs        # Configuración principal de Astro
├── tailwind.config.cjs     # Configuración de Tailwind CSS
└── package.json            # Dependencias y scripts del proyecto
```

---

## 🚀 Despliegue

El sitio se despliega automáticamente en **GitHub Pages** cada vez que se realiza un `push` a la rama `main`. El proceso está gestionado por un workflow de **GitHub Actions** definido en `.github/workflows/astro.yml`.

Los pasos principales del workflow son:
1.  **Checkout:** Clona el repositorio.
2.  **Setup Bun:** Configura el entorno de Bun.
3.  **Install Dependencies:** Instala las dependencias del proyecto con `bun install`.
4.  **Build:** Compila el sitio de Astro con `bun run build`.
5.  **Deploy:** Despliega el contenido de la carpeta `dist/` a la rama `gh-pages`.

---

## 📫 Contacto

<div align="center">
  <a href="mailto:juanb9410@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://www.linkedin.com/in/juan-betancurm/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/juan-betancurm">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</div>