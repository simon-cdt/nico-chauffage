import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nico Chauffage",
  description: "Nico Chauffage - Chauffage et Sanitaire à Paris. Découvrez nos services de chauffage, plomberie et entretien pour votre confort.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
