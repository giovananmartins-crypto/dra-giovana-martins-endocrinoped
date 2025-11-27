"use client";

import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";
import React from "react";

interface PhoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  label?: string;
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

