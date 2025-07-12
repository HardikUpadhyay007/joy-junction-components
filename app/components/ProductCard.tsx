"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductCard = ({
    product,
    isAdded,
}: {
    product: Product;
    isAdded?: boolean;
}) => {
    const { addToCart } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);

    // Combine internal state with external prop
    const isAddedToCart = isAdded || addedToCart;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering parent click handler
        addToCart(product);
        setAddedToCart(true);

        // Reset the "Added" state after 2 seconds
        setTimeout(() => {
            setAddedToCart(false);
        }, 2000);
    };

    return (
        <div className="group shadow-lg rounded-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                        {product.discount}% OFF
                    </span>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                        <button
                            onClick={handleAddToCart}
                            className={`${
                                isAddedToCart
                                    ? "bg-green-500 text-white"
                                    : "bg-white hover:bg-blue-500 hover:text-white"
                            } p-2 rounded-full transition-colors`}
                            aria-label="Add to cart"
                        >
                            <ShoppingCart size={18} />
                        </button>
                        <button
                            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                            aria-label="Add to wishlist"
                        >
                            <Heart size={18} />
                        </button>
                        <button
                            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                            aria-label="Quick view"
                        >
                            <Eye size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-center mb-1">
                    <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5">
                        {product.ageGroup}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5 ml-2">
                        {product.category}
                    </span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1 hover:text-blue-500 cursor-pointer">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-red-600 font-bold">
                            ₹{(product.price / 100).toFixed(2)}
                        </div>
                        {product.discount > 0 && (
                            <div className="text-sm text-gray-400 line-through ml-2">
                                ₹
                                {(
                                    (product.price *
                                        (1 + product.discount / 100)) /
                                    100
                                ).toFixed(2)}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className={`text-xs py-1 px-2 rounded ${
                            isAddedToCart
                                ? "bg-green-500 text-white"
                                : "bg-[#262b5f] text-white hover:bg-opacity-90"
                        } transition-colors flex items-center gap-1`}
                    >
                        {isAddedToCart ? "Added" : "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
