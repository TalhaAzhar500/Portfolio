import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CssBaseline } from "@mui/material";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talha Azhar",
  description: "Talha Azhar personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <CssBaseline />
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
