import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "../(tama)/globals.css";
import "./slow-globals.css";
import SlowNavbar from "@/components/SlowNavbar";
import SlowFooter from "@/components/SlowFooter";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const virtuose = localFont({
  src: "../../../public/fonts/virtuose-bold.otf",
  variable: "--font-virtuose",
});

export const metadata: Metadata = {
  title: "SLOW — The other side of TAMA",
  description: "Slow Club Poznań",
};

export default function SlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${virtuose.variable}`}>
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
