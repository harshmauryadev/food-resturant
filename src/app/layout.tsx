import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chatori Chowk | Authentic Dining",
  description: "Premium Quality Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
