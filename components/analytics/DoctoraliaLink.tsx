"use client";

import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";

interface DoctoraliaLinkProps {
  href: string;
  children: ReactNode;
  label?: string;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

export function DoctoraliaLink({ 
  href, 
  children, 
  label, 
  className,
  target,
  rel,
  ...props 
}: DoctoraliaLinkProps) {
  const handleClick = () => {
    analytics.doctoraliaClick(label || 'Doctoralia Link');
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  );
}

