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
          <div className="content-container">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
