import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";
import { Suspense } from "react";
import Providers from "@/lib/provider";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const glorify = localFont({
  src: "./fonts/Glorifydemo-BW3J3.woff",
  variable: "--font-glorify",
  weight: "100 900",
});

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff",
  variable: "--font-clashGrotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${glorify.variable} ${clashGrotesk.variable} antialiased`}
      >
        <Providers>
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-1">
              <Suspense fallback={<div>Loading....</div>}>{children}</Suspense>
            </div>
          </main>
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
