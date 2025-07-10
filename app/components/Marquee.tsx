"use client";

import React, { useEffect, useRef } from "react";

export default function TopMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (marquee) {
            let position = -100;
            const move = () => {
                if (position >= 100) position = -100;
                position += 0.05;
                marquee.style.transform = `translateX(${position}%)`;
                requestAnimationFrame(move);
            };
            move();
        }
    }, []);

    return (
        <div className="relative w-full border-t border-none bg-blue-400 overflow-hidden">
            <div className="whitespace-nowrap text-sm text-gray-700 font-medium py-1">
                <div ref={marqueeRef} className="inline-block">
                    <span className="mx-8">
                        🎉 Flat 20% off on all summer toys!
                    </span>
                    <span className="mx-8">
                        🚚 Free shipping on orders over $50!
                    </span>
                    <span className="mx-8">
                        🎁 New arrivals: Check out our latest educational toys!
                    </span>
                    <span className="mx-8">
                        ✨ Special offer: Buy 2, get 1 free on selected items!
                    </span>
                    <span className="mx-8">
                        🎉 Flat 20% off on all summer toys!
                    </span>
                    <span className="mx-8">
                        🚚 Free shipping on orders over $50!
                    </span>
                    <span className="mx-8">
                        🎁 New arrivals: Check out our latest educational toys!
                    </span>
                    <span className="mx-8">
                        ✨ Special offer: Buy 2, get 1 free on selected items!
                    </span>
                </div>
            </div>
        </div>
    );
}
