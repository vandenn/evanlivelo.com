import Link from "next/link";
import { ReactNode } from 'react';

interface SocialIconButtonProps {
  href: string;
  ariaLabel: string;
  icon: ReactNode;
  className?: string;
}

export default function SocialIconButton({ href, ariaLabel, icon, className = "" }: SocialIconButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {icon}
    </Link>
  );
}
