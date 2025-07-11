"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X } from "lucide-react";
import { useState } from "react";

const SidebarFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const currentCategory = searchParams.get("category") || "";
    const currentAge = searchParams.get("age") || "";

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

    const clearFilters = () => {
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
                        {/* Filter content (same as desktop) */}
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
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                    {(currentCategory || currentAge) && (
                        <button
                            onClick={clearFilters}
                            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                            <X size={14} />
                            Clear all
                        </button>
                    )}
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
