import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopMarquee from "./components/Marquee";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

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
                className={`${quicksand.className} font-quicksand antialiased m-0 p-0 overflow-x-hidden`}
            >
                <CartProvider>
                    <WishlistProvider>
                        <TopMarquee />
                        <Navbar />
                        {children}
                        <Footer />
                    </WishlistProvider>
                </CartProvider>
            </body>
        </html>
    );
}
