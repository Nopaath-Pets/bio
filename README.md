# 🐾 Nopaath Pets — Bio Web

Este es el sitio **bio** oficial de nuestra tienda **Nopaath Pets**, un pequeño y simpático sitio hecho con [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/) y [shadcn/ui](https://ui.shadcn.com/).

🔗 **Enlace en producción**: [https://bio.nopaathpets.com](https://bio.nopaathpets.com)

---

## ✨ Características

- Diseño limpio y adaptable con Tailwind y shadcn/ui.
- Fetch dinámico de los **últimos 9 posts de Instagram** desde un microservicio.
- Sección de descripción de la tienda + beneficios clave.
- Completamente funcional aún sin conexión al microservicio (fallback de error para los posts).

---

## ⚙️ Tecnologías

- ⚡️ Vite
- 🟦 TypeScript
- 🎨 TailwindCSS
- 🧩 shadcn/ui
- 🔁 Axios (para consumir el microservicio)

---

## 🚀 Instalación local

Clona el proyecto:

```bash
git clone git@github.com:Nopaath-Pets/bio.git
cd bio
```

Instala las dependencias con el gestor de tu preferencia:

```bash
npm install       # o pnpm install / yarn install
```

Crea un archivo `.env` en la raíz con la siguiente variable:

```env
VITE_API_URL=https://tudominio.com/api
```

Ejecuta el proyecto:

```bash
npm run dev
```

---

## 📁 Estructura del proyecto

```
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   ├── favicon-dark.svg
│   ├── favicon-light.svg
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── config/
│   │   └── environment.ts
│   ├── hooks/
│   │   └── usePosts.ts
│   ├── components/
│   │   ├── instagram/
│   │   ├── icons/
│   │   ├── logos/
│   │   ├── ui/
│   │   └── *.tsx (otras secciones como perfil, links, size chart, etc.)
│   ├── assets/
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── post.ts
│   └── styles: App.css, index.css
├── tsconfig*.json
└── README.md
```

---

## ❓ ¿Qué pasa si el microservicio de Instagram falla?

El sitio se renderiza normalmente, solo la sección de Instagram mostrará un mensaje de error si no logra obtener los datos.

---

## 🧪 Preview

Puedes verlo en vivo en: [https://bio.nopaathpets.com](https://bio.nopaathpets.com)

---

## 📖 Código abierto

Este proyecto es público para que cualquier persona pueda aprender cómo se integró una sección dinámica de Instagram con un frontend moderno. **No tiene licencia**, por lo que puedes clonar y explorar sin restricciones, pero por favor no lo uses directamente con fines comerciales sin consentimiento.

---

## 💬 Contacto

Si quieres saber más sobre el proyecto o colaborar, puedes contactarnos desde la tienda o a través de Instagram: [@nopaath.pets](https://www.instagram.com/nopaath.pets)

---
