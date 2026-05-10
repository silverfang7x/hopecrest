import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Hopecrest — Building Better Futures",
  description:
    "Hopecrest is a nonprofit organization dedicated to creating safer, healthier, and more hopeful futures for underserved communities.",
  metadataBase: new URL("https://hopecrest.org"),
  openGraph: {
    title: "Hopecrest — Building Better Futures",
    description:
      "Hopecrest is a nonprofit organization dedicated to creating safer, healthier, and more hopeful futures for underserved communities.",
    type: "website",
    url: "https://hopecrest.org",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Hopecrest nonprofit dark social banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hopecrest — Building Better Futures",
    description:
      "Hopecrest is a nonprofit organization dedicated to creating safer, healthier, and more hopeful futures for underserved communities.",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
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
        className={`${playfairDisplay.variable} ${dmSans.variable} bg-primary text-cream font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
