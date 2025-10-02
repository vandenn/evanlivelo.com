import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";

const dmSerifText = localFont({
  src: [
    {
      path: "../../public/fonts/DMSerifText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSerifText-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-dm-serif",
});

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const sharedMetadata = {
  siteName: "Evan Livelo",
  siteUrl: "https://evanlivelo.com",
  locale: "en_US",
  type: "website" as const,
  description: "Senior ML consultant, engineer, and GenAI technical leader who builds AI systems from research to production. Board game enthusiast and aspiring polyglot.",
};

export const metadata: Metadata = {
  title: {
    default: "Evan Livelo",
    template: "%s | Evan Livelo"
  },
  description: sharedMetadata.description,
  keywords: ["Evan Livelo", "software engineer", "developer", "portfolio", "blog"],
  authors: [{ name: "Evan Livelo" }],
  creator: "Evan Livelo",
  openGraph: {
    type: sharedMetadata.type,
    locale: sharedMetadata.locale,
    url: sharedMetadata.siteUrl,
    siteName: sharedMetadata.siteName,
    title: "Evan Livelo",
    description: sharedMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Livelo",
    description: sharedMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${dmSerifText.variable} ${roboto.variable}`}>
        <Navbar />
        <div className="w-full flex flex-col">
          <div className="w-4/5 max-w-5xl mx-auto bg-[var(--foreground)] rounded-lg shadow-lg p-8 max-sm:w-[calc(100%-2rem)] max-sm:mx-4">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
