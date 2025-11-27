"use client";

import { analytics } from "@/lib/analytics";
import Link from "next/link";
import { ReactNode } from "react";
import React from "react";

interface CTALinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  href: string;
  children: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
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

