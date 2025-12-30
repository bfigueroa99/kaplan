/**
 * Componente Card - Tarjeta reutilizable
 * Ejemplo de componente bien estructurado
 */

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  className = '',
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
