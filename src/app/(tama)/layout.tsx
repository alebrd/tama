import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tamaklub.pl"),
  title: {
    default: "TAMA",
    template: "%s — TAMA",
  },
  description: "Premier techno and electronic music club in Poznań",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "TAMA",
    description: "Premier techno and electronic music club in Poznań",
    url: "https://tamaklub.pl",
    siteName: "TAMA",
    images: [
      {
        url: "/spaces/main-room.jpg",
        width: 1200,
        height: 630,
        alt: "TAMA Poznań",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAMA",
    description: "Premier techno and electronic music club in Poznań",
    images: ["/spaces/main-room.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body>
        <div className="noise-overlay" />
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
