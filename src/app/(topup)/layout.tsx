import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HABIT - Top up",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-ui-medium container mx-auto px-4 relative top-0 text-black ">
        <Navbar />
        <section>
          <section className="min-h-screen absolute z-[1]">
            <div className="flex flex-col gap-64 md:gap-44 container mx-auto">
              <Image
                width={100}
                height={100}
                quality={100}
                className="w-3 md:w-6"
                src={"/bg-1.png"}
                alt="bg-1"
              />
              <Image
                width={100}
                height={100}
                quality={100}
                className="w-3 md:w-6"
                src={"/bg-2.png"}
                alt="bg-1"
              />
              <Image
                width={100}
                height={100}
                quality={100}
                className="h-6 md:h-10"
                src={"/bg-3.png"}
                alt="bg-1"
              />
            </div>
          </section>
          <section className="min-h-screen absolute  z-[1] right-0">
            <div className="flex justify-end gap-44 container mx-auto">
              <Image
                width={100}
                height={100}
                quality={100}
                className="w-1 h-[30rem]"
                src={"/bg-4.png"}
                alt="bg-4"
              />
            </div>
          </section>
        </section>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
