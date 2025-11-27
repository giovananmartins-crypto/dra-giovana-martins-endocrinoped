"use client";

import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";
import React from "react";

interface WhatsAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  label?: string;
}

export function WhatsAppLink({ 
  href, 
  children, 
  label, 
  className,
  target,
  rel,
  ...props 
}: WhatsAppLinkProps) {
  const handleClick = () => {
    analytics.whatsappClick(label || 'WhatsApp Link');
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

