"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        title: "CARD-TASTIC FUN",
        image: "/category1.jpg",
    },
    {
        title: "Flashcard Fun",
        image: "/category2.jpg",
    },
    {
        title: "Kid's Development Games",
        image: "/category3.jpg",
    },
    {
        title: "Wooden Wonders",
        image: "/category4.png",
    },
];

const shopByAge = [
    {
        age: "2 - 4",
        image: "/age-2-4.jpg",
    },
    {
        age: "4 - 6",
        image: "/age-4-6.jpg",
    },
    {
        age: "6 - 8",
        image: "/age-6-8.jpg",
    },
    {
        age: "8 +",
        image: "/age-8-plus.jpg",
    },
];

export default function CategoriesAndAges() {
    return (
        <div className="bg-[#f6f7fa] min-h-screen w-full py-12 px-4">
            {/* CATEGORIES */}
            <div className="text-center mb-10">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    Categories
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mt-2">
                    We design toys not just for kids
                    <br />
                    but <span className="text-indigo-600">with kids</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                width={400}
                                height={300}
                                className="w-full h-60 object-cover group-hover:brightness-75 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/30">
                            <div className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                                Show Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                        {/* Label */}
                    </div>
                ))}
            </div>

            {/* SHOP BY AGE */}
            <div className="text-center mt-20 mb-6">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    JJ Toys & Games
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mt-2">
                    Shop By Age
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {shopByAge.map((item, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition relative group"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.age}
                                width={300}
                                height={200}
                                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                            />
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/30">
                            <div className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                                Shop Now <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                        {/* Age Label */}
                    </div>
                ))}
            </div>
        </div>
    );
}
