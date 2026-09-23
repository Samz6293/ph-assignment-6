import type { Metadata } from "next";
import {Oswald, Inter} from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
        <html lang="en" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>

            <body className="min-h-full flex flex-col bg-black text-white">
                <Nav />
                {children}
                <Footer />
            </body>

        </html>
  );
}
