import type { Metadata } from "next";
import {Oswald, Inter} from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
});

const inter = Inter({
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "FITLOG",
  description: "A dark, no-nonsense gym companion",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
