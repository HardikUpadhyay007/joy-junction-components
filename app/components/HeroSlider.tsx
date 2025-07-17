"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const slides = ["/juno-slide1.jpg", "/juno-slide2.jpg", "/juno-slide3.jpg"];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => resetTimeout();
    }, [current]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-[65vh] md:h-[75vh] lg:h-[88.18vh] overflow-hidden">
            <div className="relative h-full w-full">
                {slides.map((src, index) => (
                    <div
                        key={index}
                        className={clsx(
                            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                            index === current
                                ? "opacity-100 z-20"
                                : "opacity-0 z-10"
                        )}
                    >
                        {/* Ken Burns Zoom Effect */}
                        <div className="w-full h-full scale-[1.05] animate-zoom-slow">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                sizes="100vw"
                                className="brightness-[0.9] object-cover"
                                priority={index === 0}
                            />
                        </div>

                        {/* Optional overlay fade animation */}
                        <div className="absolute inset-0 bg-black/40 animate-fadeIn z-30" />
                    </div>
                ))}

                {/* Left / Right buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 z-40 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
                >
                    <ChevronLeft className="text-white w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 z-40 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
                >
                    <ChevronRight className="text-white w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

