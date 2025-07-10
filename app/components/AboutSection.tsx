"use client";

import Image from "next/image";
import CircularText from "./CircularText";

export default function AboutSection() {
    return (
        <section className="bg-white min-h-screen w-full px-6 md:px-12 py-16 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full flex-1">
                {/* Left Side - Images */}
                <div className="relative w-full h-[450px]">
                    {/* Main Image - Hand holding cards */}
                    <div className="relative mt-[-16rem] w-full h-full">
                        <Image
                            src="/feature.jpg"
                            alt="Character Flashcards"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Circle Stamp - positioned at right and slightly above */}
                    <div className="absolute right-0 top-1/3 transform -translate-y-1/2 -translate-x-8 w-32 h-32">
                        <CircularText
                            text="ABOUT*US*ABOUT*US*ABOUT*US*"
                            onHover="speedUp"
                            spinDuration={20}
                            className="custom-class"
                        />
                    </div>
                </div>

                {/* Right Side - Text */}
                <div>
                    <p className="uppercase text-sm tracking-widest text-black font-semibold mb-2 font-fredoka">
                        OUR APPROACH
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight font-baloo">
                        We help you take care
                        <br />
                        of the kids
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-md mb-12 max-w-lg">
                        Our products are crafted with love and expertise by
                        dedicated teachers who spend every day immersed in the
                        wonderful world of children. They&apos;re the
                        superheroes of understanding and know just what sparks
                        joy and learning in young minds. Dive into our playful
                        learning experiences and watch the magic unfold!
                    </p>

                    {/* Second image below text */}
                    <div className="mt-28">
                        <Image
                            src="/feature2.jpg"
                            alt="Colorful Flashcards"
                            width={600}
                            height={250}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
