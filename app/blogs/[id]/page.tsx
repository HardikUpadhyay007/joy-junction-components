"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "../../data/blogs";

export default function BlogDetailPage() {
    const { id } = useParams();

    // Find the blog post with the matching id
    const blog = blogs.find((blog) => blog.id === id);

    // If blog not found, show a message
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-6">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
                    <h1 className="text-3xl font-bold text-[#1e1e3f] mb-4">
                        Blog Not Found
                    </h1>
                    <p className="text-gray-600 mb-6">
                        The blog post you&apos;re looking for doesn&apos;t exist
                        or has been removed.
                    </p>
                    <Link
                        href="/blogs"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#262b5f] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    // Get related blog posts (same category, excluding current)
    const relatedBlogs = blogs
        .filter((b) => b.category === blog.category && b.id !== blog.id)
        .slice(0, 3);

    return (
        <div className="bg-[#f9f9f9] min-h-screen">
            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#262b5f] opacity-70"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-24 text-white text-center z-10">
                    <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
                        <span className="text-sm font-semibold text-[#262b5f]">
                            {blog.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-baloo max-w-4xl mx-auto">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-sm opacity-90">{blog.date}</span>
                        <span className="w-1 h-1 bg-white rounded-full opacity-60"></span>
                        <span className="text-sm opacity-90">
                            By {blog.author}
                        </span>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-white rounded-xl overflow-hidden shadow-md mb-12">
                    <div className="relative h-[400px] md:h-[500px]">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-6 md:p-10">
                        <div
                            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1e1e3f] prose-p:text-gray-700"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />{" "}
                        {/* Author Section */}
                        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                                <Image
                                    src={blog.authorImage}
                                    alt={blog.author}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-[#262b5f] font-medium">
                                    {blog.author}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Toy Education Specialist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Section */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-12">
                    <h3 className="text-lg font-bold text-[#1e1e3f] mb-4">
                        Share This Article
                    </h3>
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-[#1e1e3f] mb-8 font-baloo">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedBlogs.map((relatedBlog) => (
                                <Link
                                    href={`/blogs/${relatedBlog.id}`}
                                    key={relatedBlog.id}
                                >
                                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                        <div className="relative overflow-hidden h-48">
                                            <Image
                                                src={relatedBlog.image}
                                                alt={relatedBlog.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <p className="text-xs text-gray-500 mb-2">
                                                {relatedBlog.date}
                                            </p>
                                            <h3 className="text-lg font-bold text-[#1e1e3f] leading-snug group-hover:text-[#262b5f] transition-colors line-clamp-2 mb-3">
                                                {relatedBlog.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {relatedBlog.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center justify-center px-6 py-3 border border-[#262b5f] text-[#262b5f] rounded-lg hover:bg-[#262b5f] hover:text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back to All Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
}
