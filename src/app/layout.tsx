import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "One Touch Event Decor — Luxury Balloon & Event Decoration",
  description:
    "One Touch Event Decor crafts breathtaking balloon installations and luxury event decor for weddings, birthdays, baby showers, corporate events, and family functions. Bespoke designs, premium materials, world-class execution.",
  keywords: [
    "balloon decoration",
    "event decor",
    "luxury balloon arch",
    "wedding decoration",
    "birthday decoration",
    "baby shower decor",
    "corporate event decoration",
    "family function decoration",
    "One Touch Event Decor",
  ],
  authors: [{ name: "One Touch Event Decor" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "One Touch Event Decor — Luxury Balloon & Event Decoration",
    description:
      "Bespoke balloon installations and luxury event decor. We turn ordinary moments into extraordinary memories.",
    siteName: "One Touch Event Decor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Touch Event Decor",
    description: "Luxury balloon & event decoration that takes your breath away.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
