import "./globals.css";

// Navbar import
import { Navbar } from "@/components/Navbar/navbar";

import { Outfit } from "next/font/google";

const font = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
