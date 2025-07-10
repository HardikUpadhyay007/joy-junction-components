"use client";

import Image from "next/image";

const features = [
    {
        title: "Crafted by teachers",
        image: "/ficon1.jpg",
    },
    {
        title: "Premium Quality",
        image: "/ficon2.jpg",
    },
    {
        title: "Engaging play",
        image: "/ficon3.jpg",
    },
    {
        title: "Future Support",
        image: "/ficon4.jpg",
    },
];

export default function FeatureStrip() {
    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-8 py-10 hover:shadow-xl transition"
                    >
                        <div className="w-48 h-48 mb-6">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={1200}
                                height={1200}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#1e1e3f]">
                            {feature.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
