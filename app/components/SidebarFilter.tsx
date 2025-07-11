"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X } from "lucide-react";
import { useState, useEffect } from "react";

const SidebarFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
        null
    );

    const currentCategory = searchParams.get("category") || "";
    const currentAge = searchParams.get("age") || "";
    const currentSearch = searchParams.get("search") || "";

    // Initialize searchTerm with URL param on mount and when URL changes
    useEffect(() => {
        if (!searchTerm && currentSearch) {
            setSearchTerm(currentSearch);
        }
    }, [currentSearch, searchTerm]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const params = new URLSearchParams(searchParams.toString());

            if (searchTerm.trim()) {
                params.set("search", searchTerm.trim());
            } else {
                params.delete("search");
            }

            const newUrl = `/products?${params.toString()}`;
            router.push(newUrl);

            // Wait for the navigation before clearing the searchTerm
            setTimeout(() => {
                setSearchTerm("");
            }, 100); // Slight delay to avoid race
        }
    };

    const setFilter = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (params.get(type) === value) {
            // If clicking the same filter, remove it (toggle behavior)
            params.delete(type);
        } else {
            params.set(type, value);
        }

        router.push(`/products?${params.toString()}`);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Set the local state immediately for UI responsiveness
        setSearchTerm(value);

        // Clear any existing timeout
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set a new timeout for debounce
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (value.trim()) {
                params.set("search", value.trim());
            } else {
                params.delete("search");
            }

            router.push(`/products?${params.toString()}`);
        }, 500); // 500ms debounce

        setTypingTimeout(timeout);
    };

    const clearFilters = () => {
        setSearchTerm("");
        router.push("/products");
    };

    const categories = [
        "Card-Tastic Fun",
        "Flashcard Fun",
        "Kid's Development Games",
        "Wooden Wonders",
    ];

    const ageGroups = ["2-4", "4-6", "6-8", "8+"];

    return (
        <>
            {/* Mobile filter dialog button */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    <Filter size={18} />
                    <span>Filters</span>
                </button>
            </div>

            {/* Mobile filter sidebar */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-xs bg-white shadow-xl p-4 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Filters</h2>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="p-1 rounded-full hover:bg-gray-100"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        {/* Search input for mobile */}
                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search toys..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onKeyDown={handleKeyDown}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line
                                            x1="21"
                                            y1="21"
                                            x2="16.65"
                                            y2="16.65"
                                        ></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Filter content */}
                        <FilterContent
                            categories={categories}
                            ageGroups={ageGroups}
                            currentCategory={currentCategory}
                            currentAge={currentAge}
                            setFilter={setFilter}
                        />
                    </div>
                </div>
            )}

            {/* Desktop sidebar filter */}
            <aside className="hidden lg:block w-full max-w-xs bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                    {(currentCategory || currentAge || currentSearch) && (
                        <button
                            onClick={clearFilters}
                            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                            <X size={14} />
                            Clear all
                        </button>
                    )}
                </div>

                {/* Desktop search input */}
                <div className="mb-6">
                    <label
                        htmlFor="desktop-search"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Search Products
                    </label>
                    <div className="relative">
                        <input
                            id="desktop-search"
                            type="text"
                            placeholder="Search toys by name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                    x1="21"
                                    y1="21"
                                    x2="16.65"
                                    y2="16.65"
                                ></line>
                            </svg>
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    const params = new URLSearchParams(
                                        searchParams.toString()
                                    );
                                    params.delete("search");
                                    router.push(
                                        `/products?${params.toString()}`
                                    );
                                }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                aria-label="Clear search"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                <FilterContent
                    categories={categories}
                    ageGroups={ageGroups}
                    currentCategory={currentCategory}
                    currentAge={currentAge}
                    setFilter={setFilter}
                />
            </aside>
        </>
    );
};

interface FilterContentProps {
    categories: string[];
    ageGroups: string[];
    currentCategory: string;
    currentAge: string;
    setFilter: (type: string, value: string) => void;
    clearFilters?: () => void; // Made optional since it's not used
}

const FilterContent = ({
    categories,
    ageGroups,
    currentCategory,
    currentAge,
    setFilter,
}: FilterContentProps) => (
    <>
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Categories
            </h3>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            className={`w-full text-left py-2 px-3 rounded-md transition ${
                                currentCategory === category
                                    ? "bg-blue-100 text-blue-800 font-medium"
                                    : "hover:bg-gray-100"
                            }`}
                            onClick={() => setFilter("category", category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

        <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Age Groups
            </h3>
            <div className="grid grid-cols-2 gap-2">
                {ageGroups.map((age) => (
                    <button
                        key={age}
                        className={`py-2 px-3 border rounded-md transition ${
                            currentAge === age
                                ? "bg-blue-100 text-blue-800 border-blue-300 font-medium"
                                : "border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() => setFilter("age", age)}
                    >
                        {age}
                    </button>
                ))}
            </div>
        </div>
    </>
);

export default SidebarFilter;
