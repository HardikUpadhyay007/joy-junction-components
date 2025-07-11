"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../data/products";
import SidebarFilter from "../components/SidebarFilter";
import ProductGrid from "../components/ProductGrid";

export default function ProductContent() {
    const searchParams = useSearchParams();
    const age = searchParams.get("age");
    const category = searchParams.get("category");
    const searchTerm = searchParams.get("search");

    const filteredProducts = products.filter((product) => {
        const ageMatch = age ? product.ageGroup === age : true;
        const catMatch = category ? product.category === category : true;
        const searchMatch = searchTerm
            ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        return ageMatch && catMatch && searchMatch;
    });

    return (
        <>
            {(age || category) && (
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {age && (
                            <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center">
                                Age: {age}
                            </div>
                        )}
                        {category && (
                            <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm flex items-center">
                                Category: {category}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-6">
                <SidebarFilter />
                <main className="flex-1">
                    <ProductGrid products={filteredProducts} />
                </main>
            </div>
        </>
    );
}
