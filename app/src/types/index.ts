/**
 * Tipos TypeScript reutilizables para la aplicación
 * Añade tus tipos e interfaces aquí
 */

// Ejemplo de interfaz de usuario
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// Ejemplo de respuesta de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}

// Ejemplo de producto
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}
