import React from "react";
import Image from "next/image";
import Link from "next/link";
import CircularText from "../components/CircularText";

export const metadata = {
    title: "About Us | The Joy Junction",
    description:
        "Learn about our mission to create fun learning activities that focus on skills beyond academics.",
};

export default function AboutUsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* First section - Let's go beyond academics */}
            <section className="py-16 md:py-24 ">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-square max-w-[550px] mx-auto">
                                <Image
                                    src="/aboutus-pic1.jpg"
                                    alt="Educational toys including alphabet blocks, rocking horse, robot and xylophone"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-6">
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-700">
                                WHAT WE DO
                            </p>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E2A4A] leading-tight">
                                Let&apos;s go beyond academics!!
                            </h1>

                            <p className="text-lg text-gray-700">
                                We&apos;re on a mission to make learning fun and
                                create activities that focus on skills beyond
                                academics, helping children grow during their
                                early formative years.
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="/products"
                                    className="inline-block px-8 py-4 bg-green-500 text-white rounded-full font-medium text-lg hover:bg-green-600 transition-colors"
                                >
                                    Discover Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second section - We help you take care of the kids */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-16">
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative aspect-square max-w-[600px] mx-auto">
                                <Image
                                    src="/aboutus-pic2.jpg"
                                    alt="Educational color matching game and a child playing with wooden toys"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="absolute -top-42 -left-10 hidden md:block">
                                <div className="relative w-28 h-28">
                                    <CircularText
                                        text="ABOUT*US*ABOUT*US*ABOUT*US*"
                                        onHover="speedUp"
                                        spinDuration={20}
                                        className="custom-class"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-6">
                            <p className="text-sm font-medium uppercase tracking-wider text-gray-700">
                                OUR APPROACH
                            </p>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A4A] leading-tight">
                                We help you take care of the kids
                            </h2>

                            <p className="text-lg text-gray-700">
                                Our products are crafted with love and expertise
                                by dedicated teachers who spend every day
                                immersed in the wonderful world of children.
                                They&apos;re the superheroes of understanding
                                and know just what sparks joy and learning in
                                young minds. Dive into our playful learning
                                experiences and watch the magic unfold!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#1E2A4A] mb-6">
                        Join us in making learning fun!
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                        Browse our collection of educational toys and games that
                        encourage creativity, critical thinking, and joy in
                        learning.
                    </p>
                    <Link
                        href="/products"
                        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-colors"
                    >
                        Explore Our Products
                    </Link>
                </div>
            </section>
        </div>
    );
}
