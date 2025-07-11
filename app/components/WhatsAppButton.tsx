"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber = "919321791644", // Default phone number with country code (India)
    message = "Hello! I'm interested in your educational toys.",
}) => {
    const [showBubble, setShowBubble] = useState(false);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    // Show the chat bubble after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBubble(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col items-end">
                {/* Chat bubble */}
                {showBubble && (
                    <div className="mb-3 bg-white rounded-2xl shadow-lg p-4 max-w-xs relative">
                        <div className="flex items-start justify-between">
                            <h3 className="font-medium text-green-500 pb-1">
                                The Joy Junction
                            </h3>
                            <button
                                onClick={() => setShowBubble(false)}
                                className="text-gray-500 hover:text-gray-700 rounded-full bg-gray-100 p-1"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <div className="space-y-1">
                            <p className="text-gray-700">Hello ????</p>
                            <p className="text-gray-600">Can we help you?</p>
                        </div>
                        <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white transform rotate-45"></div>
                    </div>
                )}

                {/* WhatsApp button */}
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-full shadow-lg transition-all duration-300"
                    onClick={() => setShowBubble(false)}
                >
                    <span className="font-medium">Chat With Me</span>
                    <div className="relative w-6 h-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-6 h-6 transform -rotate-12"
                        >
                            <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a8 8 0 0 0-8 8c0 1.42.37 2.79 1.08 4l-1.08 4 4.13-1.08A7.72 7.72 0 0 0 12 20a8 8 0 0 0 8-8c0-2.12-.84-4.16-2.4-5.68zM12 18.5c-1.29 0-2.55-.34-3.65-.98l-.26-.16-2.71.71.72-2.64-.16-.28A6.5 6.5 0 0 1 5.5 12a6.5 6.5 0 0 1 6.5-6.5 6.33 6.33 0 0 1 4.55 1.88 6.41 6.41 0 0 1 1.95 4.62A6.5 6.5 0 0 1 12 18.5zm3.57-4.88c-.19-.1-1.15-.57-1.33-.63s-.31-.1-.44.1-.5.63-.61.76-.23.14-.42.05a5.32 5.32 0 0 1-1.56-.96 5.78 5.78 0 0 1-1.08-1.35c-.11-.19-.01-.3.08-.39s.19-.23.28-.34.13-.19.19-.32.03-.29-.01-.4-.44-1.06-.61-1.44c-.16-.38-.32-.32-.44-.32s-.24-.02-.37-.02-.34.05-.52.25-.68.67-.68 1.63c0 .96.7 1.9.8 2.03s1.37 2.1 3.32 2.94c.47.2.83.32 1.11.41.47.15.89.13 1.23.08.38-.06 1.15-.47 1.31-.92s.16-.84.11-.92-.17-.13-.36-.23z" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default WhatsAppButton;
