"use client";

import dynamic from "next/dynamic";

// Desativar SSR para Header e Footer para evitar erro de hydration
const Header = dynamic(() => import("@/components/Header").then(mod => ({ default: mod.Header })), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })), { ssr: false });

export { Header, Footer };

