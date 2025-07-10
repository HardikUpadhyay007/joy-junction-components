"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
    {
        title: "What's the Ideal screen time for children",
        date: "May 20, 2024",
        category: "Toddlers",
        image: "/blogpic.jpg",
    },
    {
        title: "The Awesome Benefits of Hanging Out with Buddies!",
        date: "May 20, 2024",
        category: "Toddlers",
        image: "/blogpic.jpg",
    },
    {
        title: "Teacher recommended educational and learning toys for a 4-year-old",
        date: "May 20, 2024",
        category: "Toddlers",
        image: "/blogpic.jpg",
    },
    {
        title: "5 Toys That Build Motor Skills Fast",
        date: "May 20, 2024",
        category: "Toddlers",
        image: "/blogpic.jpg",
    },
    {
        title: "How Play Enhances Cognitive Growth",
        date: "May 20, 2024",
        category: "Toddlers",
        image: "/blogpic.jpg",
    },
];

export default function BlogCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 3,
                spacing: 24,
            },
            breakpoints: {
                "(max-width: 1024px)": {
                    slides: { perView: 2, spacing: 20 },
                },
                "(max-width: 640px)": {
                    slides: { perView: 1, spacing: 16 },
                },
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;

                function clearNextTimeout() {
                    clearTimeout(timeout);
                }

                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }

                slider.on("created", () => {
                    nextTimeout();
                });

                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);

                slider.on("slideChanged", () => {
                    setCurrentSlide(slider.track.details.rel);
                });

                // Add mouse events to pause autoplay on hover
                const sliderContainer = slider.container;
                sliderContainer.addEventListener("mouseover", () => {
                    mouseOver = true;
                    clearNextTimeout();
                });
                sliderContainer.addEventListener("mouseout", () => {
                    mouseOver = false;
                    nextTimeout();
                });
            },
        ]
    );

    return (
        <section className="bg-[#f9f9f9] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <p className="uppercase text-sm tracking-widest text-[#262b5f] font-semibold mb-2 text-center font-fredoka">
                    Our Blog
                </p>
                <h2 className="text-4xl font-bold text-center text-[#1e1e3f] mb-6 font-baloo">
                    Latest Updates
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Discover insights and ideas to make playtime more
                    educational and fun for your children
                </p>

                <div ref={sliderRef} className="keen-slider">
                    {blogPosts.map((post, i) => (
                        <div key={i} className="keen-slider__slide">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-[400px] flex flex-col">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-xs font-semibold text-[#262b5f]">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-xs text-gray-500 mb-2 flex items-center">
                                        <span className="inline-block w-4 h-[2px] bg-[#262b5f] mr-2"></span>
                                        {post.date}
                                    </p>
                                    <h3 className="text-lg font-bold text-[#1e1e3f] leading-snug group-hover:text-[#262b5f] transition-colors line-clamp-2 min-h-[3.5rem]">
                                        {post.title}
                                    </h3>
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
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center mt-10 gap-6">
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="w-10 h-10 rounded-full border border-[#262b5f] flex items-center justify-center text-[#262b5f] hover:bg-[#262b5f] hover:text-white transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {[...Array(Math.min(5, blogPosts.length))].map(
                            (_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() =>
                                        instanceRef.current?.moveToIdx(idx)
                                    }
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                                        currentSlide === idx
                                            ? "bg-[#262b5f] w-8"
                                            : "bg-[#cfcfcf] hover:bg-[#262b5f]/50"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            )
                        )}
                    </div>

                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="w-10 h-10 rounded-full border border-[#262b5f] flex items-center justify-center text-[#262b5f] hover:bg-[#262b5f] hover:text-white transition-colors"
                        aria-label="Next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
