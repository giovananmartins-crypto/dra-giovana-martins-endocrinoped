"use client";

import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";

interface PhoneLinkProps {
  href: string;
  children: ReactNode;
  label?: string;
  className?: string;
  [key: string]: any;
}

export function PhoneLink({ 
  href, 
  children, 
  label, 
  className,
  ...props 
}: PhoneLinkProps) {
  const handleClick = () => {
    analytics.phoneCall(label || 'Phone Link');
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

