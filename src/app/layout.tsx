import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div className="w-full min-h-screen flex flex-col">
          <div className="content-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
