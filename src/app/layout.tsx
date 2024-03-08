import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HABIT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-ui-medium container mx-auto px-4 relative top-0 text-black md:max-h-screen min-h-screen overflow-hidden">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
