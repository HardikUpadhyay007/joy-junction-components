"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../data/blogs";

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    // Extract unique categories
    const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

    // Filter blogs by category if selected
    const filteredBlogs = selectedCategory
        ? blogs.filter((blog) => blog.category === selectedCategory)
        : blogs;

    return (
        <div className="bg-[#f9f9f9] min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#262b5f] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6 font-baloo">
                        Our Blog
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto opacity-90">
                        Discover insights and ideas to make playtime more
                        educational and fun for your children
                    </p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="py-6 bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                selectedCategory === null
                                    ? "bg-[#262b5f] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            All Posts
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                    selectedCategory === category
                                        ? "bg-[#262b5f] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog) => (
                        <Link href={`/blogs/${blog.id}`} key={blog.id}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-xs font-semibold text-[#262b5f]">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-xs text-gray-500 mb-2 flex items-center">
                                        <span className="inline-block w-4 h-[2px] bg-[#262b5f] mr-2"></span>
                                        {blog.date}
                                    </p>
                                    <h3 className="text-xl font-bold text-[#1e1e3f] leading-snug group-hover:text-[#262b5f] transition-colors mb-3">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {blog.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-xs font-medium text-[#262b5f]">
                                            Read more
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-[#f2f2f7] flex items-center justify-center group-hover:bg-[#262b5f] transition-colors">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-[#262b5f] group-hover:text-white transition-colors"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#262b5f] text-white py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 font-baloo">
                        Stay Updated
                    </h2>
                    <p className="text-white/80 mb-8">
                        Subscribe to our newsletter for the latest toy trends,
                        parenting tips, and exclusive offers
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-3 rounded-lg flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <button className="px-6 py-3 bg-white text-[#262b5f] rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
