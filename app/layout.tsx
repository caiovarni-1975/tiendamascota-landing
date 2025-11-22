// app/layout.tsx
"use client";

import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Fuentes (aplico Geist al body)
const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tienda Mascotera — Lanzamos el 15/12/2025",
  description:
    "Juegos, premios y mimos para tu mascota. Anotate y recibí el pase — AMBA.",
  robots: { index: false, follow: false }, // no indexar mientras es demo
  // Usamos tu logo existente como favicon (PNG)
  icons: { icon: "/images/logo_tienda_mascotera_web_1024.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
