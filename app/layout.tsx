import type { Metadata } from "next";
import { Baloo_2, Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopMarquee from "./components/Marquee";

const baloo = Baloo_2({
    subsets: ["latin"],
    variable: "--font-baloo",
    display: "swap",
});

const fredoka = Fredoka({
    subsets: ["latin"],
    variable: "--font-fredoka",
    display: "swap",
});

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "The Joy Junction - Educational Toys For Children",
    description:
        "Discover playful educational toys and custom learning kits for children at The Joy Junction. Making learning fun through play!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${baloo.variable} ${fredoka.variable} ${quicksand.variable} font-quicksand antialiased m-0 p-0 overflow-x-hidden`}
            >
                <TopMarquee />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
