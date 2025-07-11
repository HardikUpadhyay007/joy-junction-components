import { Suspense } from "react";
// import { products } from "../data/products";
import ProductContent from "./ProductContent";

// Server component
export default function ProductPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Our Toys Collection
            </h1>

            {/* Wrap the client components in Suspense */}
            <Suspense
                fallback={
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
                            <div className="h-64 w-full max-w-4xl bg-gray-200 rounded"></div>
                        </div>
                    </div>
                }
            >
                <ProductContent />
            </Suspense>
        </div>
    );
}
