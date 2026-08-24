import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Touch Event Décor — Luxury Balloon & Event Styling",
  description:
    "One Touch Event Décor crafts world-class balloon installations and luxury event styling for weddings, birthdays, family functions, baby showers & corporate events. Botanical luxury, fresh & unforgettable.",
  keywords: [
    "balloon decoration",
    "luxury event decor",
    "balloon arch",
    "wedding decoration",
    "birthday decoration",
    "family function decor",
    "baby shower decoration",
    "corporate event styling",
    "One Touch Event Decor",
  ],
  authors: [{ name: "One Touch Event Décor" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "One Touch Event Décor — Luxury Balloon & Event Styling",
    description:
      "Botanical luxury balloon & event styling. Weddings, birthdays, family functions, baby showers & corporate events.",
    siteName: "One Touch Event Décor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Touch Event Décor — Luxury Balloon & Event Styling",
    description:
      "Botanical luxury balloon & event styling for life's most beautiful moments.",
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
        className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} ${manrope.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
