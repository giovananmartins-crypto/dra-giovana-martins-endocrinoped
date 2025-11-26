"use client";

import { analytics } from "@/lib/analytics";
import Link from "next/link";
import { ReactNode } from "react";

interface CTALinkProps {
  href: string;
  children: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function CTALink({ 
  href, 
  children, 
  label, 
  className,
  onClick,
  ...props 
}: CTALinkProps) {
  const handleClick = () => {
    analytics.ctaClick(label);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

