"use client";

import Image from "next/image";

const products = [
    {
        title: "Dino Color Match Game",
        image: "/category1.jpg", // Using existing images from public directory
        originalPrice: 799,
        salePrice: 499,
        discount: 38,
    },
    {
        title: "Wooden Mosaic Puzzle",
        image: "/category2.jpg",
        originalPrice: 899,
        salePrice: 649,
        discount: 28,
    },
    {
        title: "Balancing Rabbit",
        image: "/category3.jpg",
        originalPrice: 599,
        salePrice: 399,
        discount: 33,
    },
    {
        title: "Wooden Beads Game",
        image: "/category4.png",
        originalPrice: 1399,
        salePrice: 899,
        discount: 36,
    },
    {
        title: "Stacking Tray Puzzle",
        image: "/age-2-4.jpg",
        originalPrice: 599,
        salePrice: 399,
        discount: 33,
    },
    {
        title: "Wooden Intelligence Russian Blocks",
        image: "/age-4-6.jpg",
        originalPrice: 299,
        salePrice: 199,
        discount: 33,
    },
    {
        title: "Wooden Nut Truck: A DIY Adventure!",
        image: "/age-6-8.jpg",
        originalPrice: 1999,
        salePrice: 1499,
        discount: 25,
    },
    {
        title: "Bead & Count Adventure",
        image: "/age-8-plus.jpg",
        originalPrice: 999,
        salePrice: 549,
        discount: 45,
    },
];

export default function PopularProducts() {
    return (
        <section className="min-h-screen py-16 px-4 w-full flex flex-col justify-center overflow-hidden bg-[#f8f9fa]">
            {/* Decorative star background elements */}
            <div className="absolute top-10 left-10 w-16 h-16 text-yellow-200 opacity-20">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            </div>
            <div className="absolute top-1/2 right-12 w-8 h-8 text-blue-300 opacity-20">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 text-green-300 opacity-20">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto w-full relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#111827] mb-4 font-baloo tracking-tight">
                    Popular in Store
                </h2>
                <p className="text-lg md:text-xl text-center text-gray-600 mb-12 font-fredoka max-w-2xl mx-auto">
                    Discover our most loved toys that bring smiles to children
                    of all ages
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className="relative group animate-fadeIn cursor-pointer"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Discount badge - in top right */}
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded-full z-10 font-fredoka">
                                -{product.discount}%
                            </div>

                            {/* Image container with overflow hidden for zoom effect */}
                            <div className="overflow-hidden mb-4 rounded-xl relative">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Hover overlay with icons - no background */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-white shadow-lg text-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110 border border-blue-200">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white shadow-lg text-gray-700 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform hover:scale-110 border border-red-200">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white shadow-lg text-gray-700 flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110 border border-gray-200">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 12H19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 5L19 12L12 19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 font-baloo line-clamp-2 text-center">
                                {product.title}
                            </h3>

                            {/* Price information - stacked and centered */}
                            <div className="text-center">
                                <div className="text-xs md:text-sm text-gray-500 line-through font-fredoka">
                                    ₹{product.originalPrice}.00
                                </div>
                                <div className="text-red-600 font-bold text-sm md:text-lg font-baloo">
                                    ₹{product.salePrice}.00
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
