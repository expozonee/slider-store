import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/header/Header";

const roboto = Roboto({ weight: ["400"] });

export const metadata: Metadata = {
  title: "Slider Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
