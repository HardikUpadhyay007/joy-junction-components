"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    toggleOpen: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = false,
    toggleOpen,
}) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
                onClick={toggleOpen}
            >
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2A4A]">
                    {title}
                </h3>
                <span className="flex-shrink-0 ml-2">
                    {isOpen ? (
                        <Minus className="h-6 w-6" />
                    ) : (
                        <Plus className="h-6 w-6" />
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
            >
                <div className="text-gray-700">{children}</div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: {
        id: string;
        title: string;
        content: React.ReactNode;
    }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const toggleItem = (itemId: string) => {
        setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
    };

    return (
        <div className="divide-y divide-gray-200">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    title={item.title}
                    isOpen={openItemId === item.id}
                    toggleOpen={() => toggleItem(item.id)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
