import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "../(tama)/globals.css";
import "./slow-globals.css";
import SlowNavbar from "@/components/SlowNavbar";
import SlowFooter from "@/components/SlowFooter";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const virtuose = localFont({
  src: "../../../public/fonts/virtuose-bold.otf",
  variable: "--font-virtuose",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tamaklub.pl"),
  title: {
    default: "SLOW — The other side of TAMA",
    template: "%s — SLOW",
  },
  description: "Slow Club Poznań. Only House Music.",
  icons: {
    icon: "/slow/logo.png",
    apple: "/slow/logo.png",
  },
  openGraph: {
    title: "SLOW — The other side of TAMA",
    description: "Slow Club Poznań. Only House Music.",
    url: "https://tamaklub.pl/slowclub",
    siteName: "SLOW Club",
    images: [
      {
        url: "/slow/summer-break.jpg",
        width: 1200,
        height: 630,
        alt: "SLOW Club Poznań",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLOW — The other side of TAMA",
    description: "Slow Club Poznań. Only House Music.",
    images: ["/slow/summer-break.jpg"],
  },
};

export default function SlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${virtuose.variable}`} suppressHydrationWarning>
      <body>
        <div className="noise-overlay" />
        <SlowNavbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <SlowFooter />
      </body>
    </html>
  );
}
