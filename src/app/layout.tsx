import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DM_Serif_Text, Roboto } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

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
