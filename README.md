# 🚀 HostPelis - Frontend de Renta de Películas

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn--ui-new--york-orange?logo=shadcn)](https://ui.shadcn.com)
[![Zustand](https://img.shields.io/badge/Zustand-5-ec4899?logo=zustand)](https://zustand-demo.pmnd.rs/)

## 📖 Descripción
HostPelis es el frontend moderno y responsive de una aplicación de renta y venta de películas. Construido con las últimas tecnologías de React y Next.js, ofrece una experiencia de usuario fluida para explorar películas (integración con TMDB), gestionar carrito, procesar órdenes, autenticación segura y pagos.

Integra perfectamente con el backend NestJS/Prisma en `../backpelis/` para operaciones CRUD de películas, usuarios, órdenes y sesiones.

## ✨ Características Principales
- 🛒 **Carrito Inteligente**: Agrega/elimina películas, calcula totales con Zustand.
- 🎥 **Gestión de Películas**: Contadores de renta/venta, selectores de calidad, modales interactivos.
- 🔐 **Autenticación Completa**: Login/register con Next-Auth, formularios validados, fuerza de contraseña, progreso de pasos.
- 💳 **Checkout & Pagos**: Resumen de órdenes, métodos de pago, badges de estado.
- 📱 **Responsive Design**: Detección desktop/mobile, secciones hero, features, suscripciones.
- 🌍 **Internacionalización**: Selector de idioma.
- ⚡ **Optimizado**: Animaciones con Framer Motion, debounce en inputs.

## 🛠️ Tecnologías y Stack
| Categoría | Tecnologías |
|-----------|-------------|
| **Framework** | Next.js 16 (App Router, RSC), React 19 |
| **Lenguaje** | TypeScript (strict mode, paths aliases) |
| **Estilos** | Tailwind CSS 4, shadcn/ui (Radix UI primitives), CVA, clsx, tailwind-merge |
| **Estado** | Zustand (tiendas livianas para cart/checkout/UI) |
| **Formularios** | React Hook Form, Zod (validación schema) |
| **Autenticación** | Next-Auth 4 |
| **API** | Fetch wrapper tipado (api-client.ts) con auth Bearer, integración TMDB |
| **Iconos/Anim** | Lucide React, Framer Motion, react-icons |
| **Calidad** | ESLint (Next.js config), Prettier (Tailwind plugin) |
| **Utils** | use-debounce, path aliases (@/*) |

## 📁 Estructura del Proyecto
```
hostpelis/
├── app/              # App Router: pages, layouts, providers
│   ├── (shop)/       # Ruta de tienda principal
│   ├── auth/         # Rutas protegidas
│   └── api/          # API routes
├── components/       # UI modulares (auth, cart, movie, orders, ui/)
├── lib/              # api-client.ts, tmdb.tsx, utils.ts
├── store/            # Zustand stores (cart, checkout, ui)
├── services/         # auth-service.ts
├── interfaces/       # Types: movie.ts, auth.ts
├── utils/            # isDesktop.ts
├── public/           # Assets estáticos
├── config/           # fonts.ts
├── .prettierrc       # + Tailwind plugin
├── eslint.config.mjs # Next.js rules
└── tsconfig.json     # Strict TS config
```

## 🚀 Instalación y Uso

### Requisitos
- Node.js 20+
- pnpm (package manager usado)

### 1. Clona/Instala Dependencias
```bash
cd hostpelis
pnpm install
```

### 2. Configura Variables de Entorno
Copia `.env.example` a `.env.local` y configura:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001  # Backend NestJS
NEXTAUTH_SECRET=tu-secret
NEXTAUTH_URL=http://localhost:3000
# TMDB API key si usas
```

### 3. Ejecuta en Desarrollo
```bash
pnpm dev
```
Abre [http://localhost:3000](http://localhost:3000)

### 4. Build y Producción
```bash
pnpm build
pnpm start
```

### 5. Lint y Formateo
```bash
pnpm lint
npx prettier --write .
```

## ✅ Características
- **Componentes Reutilizables**: compuestos (cart/, movie/), con props tipadas.
- **Type Safety**: Interfaces completas, Zod schemas, TS strict + paths.
- **Performance**: Lazy loading implícito (Next.js), debounce, optimización fonts (next/font).
- **Código Limpio**: ESLint/Prettier, no-any en lo posible, hooks personalizados.
- **API Robustez**: Manejo errores, tokens auth dinámicos, tipado genérico.
- **Estado Predictible**: Zustand con actions selectivas.
- **UX**: Animaciones suaves, feedback visual (password strength, badges), mobile-first.

## ☁️ Despliegue
- **Vercel**.
- **Docker**.

## 📄 Licencia
MIT
