# Conectar TT-website a Supabase

Ya integrado en el repo (2026-09-21): los archivos quedaron pegados dentro de
`src/` porque este proyecto usa esa carpeta, y `@supabase/supabase-js` ya está
instalado en `package.json`.

## 1. Dependencias

```bash
npm install
```

## 2. Archivos que se agregaron

```
src/middleware.ts
src/lib/slugify.ts
src/lib/admin-auth.ts
src/lib/supabase/public.ts
src/lib/supabase/admin.ts
src/lib/supabase/types.ts
src/app/admin/layout.tsx
src/app/admin/page.tsx
src/app/admin/login/page.tsx
src/app/admin/login/actions.ts
src/app/admin/productos/page.tsx
src/app/admin/productos/actions.ts
src/app/admin/productos/nuevo/page.tsx
src/app/admin/productos/[id]/editar/page.tsx
src/app/admin/categorias/page.tsx
src/app/admin/categorias/actions.ts
```

No había un `middleware.ts` previo en el repo, así que no hubo que fusionar
nada.

## 3. Variables de entorno

Copiá `.env.local.example` como `.env.local` y completá:

- `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` — ya vienen
  completas, son públicas y está bien que viajen al navegador.
- `SUPABASE_SERVICE_ROLE_KEY` — copiala del dashboard de Supabase
  (Settings → API → service_role, proyecto **tt-website**). Es secreta: solo
  se usa del lado del servidor para que el panel admin pueda escribir aunque
  las tablas tengan lectura pública.
- `ADMIN_PASSWORD` — la contraseña para entrar a `/admin`.
- `ADMIN_SESSION_SECRET` — corré `openssl rand -hex 32` y pegá el resultado.

En Vercel, cargá las mismas variables en Project Settings → Environment
Variables (las que no empiezan con `NEXT_PUBLIC_` marcalas como solo
servidor).

## 4. Cómo quedó armado

- **Lecturas públicas** (para la tienda: listar productos, categorías,
  "Más vendidos"): usá `createPublicClient()` de `lib/supabase/public.ts`
  con la anon key. Las políticas RLS solo dejan ver productos con
  `active = true`.
- **Panel admin** (`/admin`): protegido por `middleware.ts` con una
  contraseña simple (cookie firmada, no hay usuarios ni roles). Alcanza
  para que solo vos puedas cargar productos, pero si más adelante necesitás
  varios usuarios con permisos distintos, conviene migrar a Supabase Auth.
- Los productos pueden estar en **varias categorías a la vez** (tabla
  `product_categories`), así un producto puede estar en "Remeras" y en
  "Más vendidos" simultáneamente sin duplicarlo.
- Las fotos se suben al bucket `product-images` (público de lectura) y
  quedan asociadas al producto en `product_images`, con orden.

## 5. Cómo mostrar productos en la tienda (ejemplo)

```ts
import { createPublicClient, getProductImageUrl } from "@/lib/supabase/public";

const supabase = createPublicClient();

// Todos los productos activos
const { data: productos } = await supabase
  .from("products")
  .select("*, product_images(storage_path, position)")
  .eq("active", true);

// Solo "Más vendidos"
const { data: masVendidos } = await supabase
  .from("products")
  .select("*, product_categories!inner(category_id)")
  .eq("active", true)
  .eq("product_categories.category_id", "<id de la categoría Más vendidos>");
```

El id de la categoría "Más vendidos" lo podés obtener con:

```ts
const { data } = await supabase.from("categories").select("id").eq("slug", "mas-vendidos").single();
```
