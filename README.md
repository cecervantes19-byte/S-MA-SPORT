# SŌMA — Catálogo deportivo

Repositorio de migración desde Hatchable hacia Cloudflare Pages.

## Estado

- `public/index.html` y `public/admin.html` son una copia de los archivos actuales de la tienda.
- **Aún no desplegar:** las API originales usan servicios propios de Hatchable y deben adaptarse a Cloudflare Pages Functions, D1 y R2 antes de publicar.
- Las fotos y los 31 registros de productos siguen en el proyecto original; la migración de datos e imágenes queda pendiente.

## Siguiente etapa

1. Adaptar endpoints de productos y ajustes a Cloudflare Pages Functions.
2. Crear y enlazar una base de datos D1 y un bucket R2.
3. Importar inventario y copiar las imágenes.
4. Probar el carrito, WhatsApp y el panel de administración antes de cambiar el dominio.
