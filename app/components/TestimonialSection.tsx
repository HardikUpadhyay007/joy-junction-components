"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Use the Unsplash image URL for all avatars

const testimonials = [
    {
        name: "Lalita",
        avatar: "/avatar.jpg",
        role: "Mother of a 6 year old",
        title: "Different concept",
        content:
            "The cards games are not just flashcards but a fun activity for children. Plus the writing tasks add more to games.",
        size: "normal", // Normal size card
    },
    {
        name: "Sapna",
        avatar: "/avatar.jpg",
        role: "Mother of 2 and 6 year old",
        title: "Happy with the purchase...",
        content:
            "I was surprised at how my kids are being so engaged with the products. I will definitely repurchase form JJ.",
        size: "large", // Large size card
    },
    {
        name: "Michael",
        avatar: "/avatar.jpg",
        role: "Father of a 5 year old",
        title: "Great educational toys!",
        content:
            "These toys have been a fantastic learning tool for my daughter. She loves playing with them and is learning so much!",
        size: "small", // Small size card
    },
    {
        name: "Priya",
        avatar: "/avatar.jpg",
        role: "Teacher and mother",
        title: "Wonderful learning tools",
        content:
            "I use these in my classroom and with my own kids. The versatility and quality are outstanding. Highly recommend!",
        size: "normal",
    },
];

// Helper function to get size classes based on card size
const getSizeClasses = (size: string) => {
    switch (size) {
        case "small":
            return "p-4 min-h-[180px]";
        case "large":
            return "p-6 min-h-[240px]";
        default: // normal
            return "p-5 min-h-[200px]";
    }
};

export default function Testimonials() {
    // Set up Embla Carousel with autoplay
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 2 },
            },
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    // Track the current slide for the dots indicator
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        // Update slide count
        setSlideCount(Math.ceil(testimonials.length / 2));

        // Subscribe to carousel events
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="w-full">
            {/* Testimonial Hero Image */}
            <div className="relative w-full h-[38vh] md:h-[45vh] lg:h-[50vh] overflow-hidden">
                <Image
                    src={"/testimonial-picture.jpg"}
                    alt="Happy children playing with toys"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262b5f] via-[#262b5f]/60 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 font-baloo">
                            Our Happy Customers
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl">
                            See what our customers have to say about our
                            products and services
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#262b5f] py-12 px-6 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
                        {/* Left Title Block */}
                        <div className="md:col-span-1">
                            <p className="uppercase text-sm tracking-widest text-gray-300 font-semibold mb-2 font-fredoka">
                                Testimonials
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight font-baloo">
                                What Our Clients Say About Us
                            </h2>
                            <p className="text-gray-300 text-md">
                                We appreciate your kind and honest feedback and
                                invite you to our amazing store.
                            </p>
                        </div>

                        {/* Carousel Navigation */}
                        <div className="md:col-span-2 flex items-center justify-end gap-4">
                            <button
                                onClick={() => emblaApi?.scrollPrev()}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                                aria-label="Previous testimonials"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => emblaApi?.scrollNext()}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                                aria-label="Next testimonials"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>{" "}
                    {/* End of grid div */}
                    {/* Embla Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] px-2"
                                >
                                    <div
                                        className={`bg-white text-[#1e1e3f] rounded-xl shadow-md flex flex-col gap-3 
                                    transition-all duration-300 hover:bg-green-800 hover:shadow-xl group
                                    ${getSizeClasses(item.size)}`}
                                    >
                                        <span className="text-green-600 text-3xl leading-none group-hover:text-white transition-colors">
                                            ❝
                                        </span>
                                        <h3 className="font-semibold text-lg group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-700 group-hover:text-white transition-colors flex-grow line-clamp-3 md:line-clamp-none">
                                            {item.content}
                                        </p>

                                        <div className="flex items-center gap-3 mt-auto pt-3">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-full ring-2 ring-transparent group-hover:ring-white transition-all"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm group-hover:text-white transition-colors">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs text-gray-500 group-hover:text-gray-200 transition-colors">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: slideCount }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    index === selectedIndex
                                        ? "bg-cyan-400 scale-110"
                                        : "bg-white/40 hover:bg-white/60"
                                }`}
                                onClick={() => emblaApi?.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
