# 🚀 Inicio Rápido

## En 5 Minutos

### 1. Inicia el servidor
```bash
cd /home/f99/Documents/kaplan/app
npm run dev
```

### 2. Abre el navegador
```
http://localhost:3000
```

### 3. Edita el archivo principal
Abre `src/app/page.tsx` y realiza cambios. ¡El navegador se actualizará automáticamente!

---

## Estructura Creada

```
src/
├── app/                    # Rutas y páginas principales
│   ├── page.tsx           # Página de inicio (/)
│   ├── layout.tsx         # Layout global
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   └── Card.tsx           # Componente de ejemplo
├── lib/                   # Funciones auxiliares
│   └── utils.ts           # Funciones helper
└── types/                 # Tipos TypeScript
    └── index.ts           # Interfaces de ejemplo
```

---

## Comandos Útiles

```bash
npm run dev        # Inicia servidor de desarrollo
npm run build      # Compila para producción
npm start          # Inicia servidor de producción
npm run lint       # Verifica código
npm run lint --fix # Arregla errores automáticamente
```

---

## Ejemplos de Uso

### Crear un nuevo componente
```typescript
// src/components/MyComponent.tsx
export default function MyComponent() {
  return <div>Mi Componente</div>;
}
```

### Usar el componente
```typescript
// src/app/page.tsx
import MyComponent from '@/components/MyComponent';

export default function Home() {
  return <MyComponent />;
}
```

---

## Documentación Completa

Lee el `README.md` para:
- Instrucciones detalladas
- Tutoriales paso a paso
- Conceptos clave
- Recursos de aprendizaje

¡Ahora estás listo! 🎉
