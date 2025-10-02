import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
}

export default function LinkButton({ href, icon, children, external = false }: LinkButtonProps) {
  const commonClasses = "flex items-center gap-3 px-6 py-4 border-2 border-accent rounded-lg hover:border-accent/70 hover:shadow-md transition-all duration-200 text-lg font-medium";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={commonClasses}>
      {icon}
      {children}
    </a>
  );
}
