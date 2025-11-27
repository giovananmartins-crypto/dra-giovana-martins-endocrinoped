"use client";

import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";
import React from "react";

interface DoctoraliaLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  label?: string;
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

