/**
 * Funciones auxiliares y utilidades
 * Añade funciones reutilizables aquí
 */

/**
 * Formatea una fecha de forma legible
 * @param date - Fecha a formatear
 * @returns Fecha formateada como string
 */
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formatea un precio con moneda
 * @param price - Precio a formatear
 * @param currency - Moneda (por defecto USD)
 * @returns Precio formateado
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

/**
 * Combina clases CSS de forma segura
 * @param classes - Array de clases CSS
 * @returns String con clases combinadas
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Realiza una pausa/delay
 * @param ms - Milisegundos a esperar
 * @returns Promise que se resuelve después del delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
