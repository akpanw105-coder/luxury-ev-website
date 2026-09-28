import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060709",
};

export const metadata: Metadata = {
  title: "AETHER | The Future of High-Performance Electric Luxury",
  description:
    "Introducing the AETHER Grand Tourer GT9. Pure electric architectural brilliance, 1,180 HP, 820 km range, and handcrafted sanctuary.",
  keywords: [
    "AETHER",
    "electric hypercar",
    "luxury EV",
    "electric vehicle",
    "flagship GT",
    "automotive innovation",
  ],
  authors: [{ name: "AETHER Automotive" }],
  openGraph: {
    title: "AETHER | The Pinnacle of Electric Grand Touring",
    description:
      "A testament to aerospace aerodynamics and silent omnipotence. Reserve the all-electric AETHER GT9.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-automotive-950 text-foreground antialiased selection:bg-automotive-accent selection:text-automotive-950 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
