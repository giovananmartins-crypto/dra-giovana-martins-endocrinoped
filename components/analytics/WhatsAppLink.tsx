"use client";

import { analytics } from "@/lib/analytics";
import { ReactNode } from "react";

interface WhatsAppLinkProps {
  href: string;
  children: ReactNode;
  label?: string;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
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

