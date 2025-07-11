"use client";

import { Product } from "../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="text-6xl mb-4">🧸</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    No products found
                </h3>
                <p className="text-gray-600 mb-4">
                    We couldn&apos;t find any toys matching your current
                    filters.
                </p>
                <p className="text-gray-500">
                    Try adjusting your search or filter criteria to see more
                    results.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
