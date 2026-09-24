import type { Metadata } from "next";
import {Oswald, Inter} from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ExerciseContext from "./context/ExerciseContext";

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
        <html lang="en" className={`${oswald.variable} ${inter.variable} antialiased`}>

            <body className=" bg-black text-white font-inter">
                <ExerciseContext>
                  <Nav />
                  {children}
                  <Footer />
                </ExerciseContext>
            </body>

        </html>
  );
}
