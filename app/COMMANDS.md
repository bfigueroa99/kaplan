# 📝 Comandos Útiles

## Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```
**Acceso**: http://localhost:3000

### Compilar para producción
```bash
npm run build
```

### Iniciar servidor de producción
```bash
npm start
```

---

## Linting y Formato

### Verificar calidad del código
```bash
npm run lint
```

### Arreglar errores automáticamente
```bash
npm run lint -- --fix
```

---

## Creación de Archivos y Carpetas

### Crear un nuevo componente
```bash
# Crea manualmente en: src/components/NombreComponente.tsx
```

### Crear una nueva página
```bash
# Crea manualmente en: src/app/nombre-pagina/page.tsx
```

### Crear una ruta API
```bash
# Crea manualmente en: src/app/api/nombre-endpoint/route.ts
```

---

## Reinstalación de Dependencias

### Limpiar e instalar desde cero
```bash
rm -rf node_modules package-lock.json
npm install
```

### Instalar un nuevo paquete
```bash
npm install nombre-del-paquete
```

### Instalar como dependencia de desarrollo
```bash
npm install --save-dev nombre-del-paquete
```

---

## Debugging

### Ver logs del servidor
```bash
npm run dev
# Los logs aparecerán en la terminal
```

### Verificar el compilado
```bash
npm run build
# Muestra detalles del compilado
```

---

## Actualizar Next.js
```bash
npm update next
```

---

## Más Información

- [Next.js Docs](https://nextjs.org/docs)
- [npm Scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Tailwind CSS](https://tailwindcss.com/docs)

