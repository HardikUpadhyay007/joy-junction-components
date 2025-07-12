"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function WishlistPage() {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const [addedProducts, setAddedProducts] = React.useState<
        Record<number, boolean>
    >({});

    // Format price to rupees (₹)
    const formatPrice = (price: number) => {
        return `₹${(price / 100).toFixed(2)}`;
    };

    const handleAddToCart = (productId: number) => {
        const product = wishlistItems.find((item) => item.id === productId);
        if (product) {
            addToCart(product);

            // Show visual feedback
            setAddedProducts((prev) => ({
                ...prev,
                [productId]: true,
            }));

            // Reset after 2 seconds
            setTimeout(() => {
                setAddedProducts((prev) => ({
                    ...prev,
                    [productId]: false,
                }));
            }, 2000);
        }
    };

    return (
        <div className="bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e3f] mb-2 font-baloo">
                        My Wishlist
                    </h1>
                    <p className="text-gray-600">
                        Items you&apos;ve saved for later
                    </p>
                </div>

                {wishlistItems.length === 0 ? (
                    /* Empty Wishlist */
                    <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-20 w-20 text-gray-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-[#1e1e3f] mb-4">
                            Your wishlist is empty
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Found something you like? Add it to your wishlist by
                            clicking the heart icon.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 bg-[#262b5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                        >
                            Explore Products <ArrowRight size={16} />
                        </Link>
                    </div>
                ) : (
                    /* Wishlist with Items */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <Link href={`/products/${item.id}`}>
                                    <div className="h-48 relative">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                        {item.discount > 0 && (
                                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                                                {item.discount}% OFF
                                            </div>
                                        )}
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <h3 className="font-medium text-[#1e1e3f] mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {item.category}
                                    </p>
                                    <div className="flex flex-wrap justify-between items-center mt-3">
                                        <div>
                                            {item.discount > 0 ? (
                                                <div>
                                                    <span className="text-sm text-gray-500 line-through mr-2">
                                                        {formatPrice(
                                                            item.price
                                                        )}
                                                    </span>
                                                    <span className="text-lg font-semibold text-[#262b5f]">
                                                        {formatPrice(
                                                            Math.round(
                                                                item.price *
                                                                    (1 -
                                                                        item.discount /
                                                                            100)
                                                            )
                                                        )}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-lg font-semibold text-[#262b5f]">
                                                    {formatPrice(item.price)}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex mt-3 sm:mt-0">
                                            <button
                                                onClick={() =>
                                                    handleAddToCart(item.id)
                                                }
                                                className={`mr-2 text-xs py-1.5 px-3 rounded flex items-center ${
                                                    addedProducts[item.id]
                                                        ? "bg-green-500 text-white"
                                                        : "bg-[#262b5f] text-white hover:bg-opacity-90"
                                                } transition-colors`}
                                                aria-label="Add to cart"
                                            >
                                                {addedProducts[item.id] ? (
                                                    "Added!"
                                                ) : (
                                                    <>
                                                        <ShoppingCart
                                                            size={14}
                                                            className="mr-1"
                                                        />
                                                        Add
                                                    </>
                                                )}
                                            </button>

                                            <button
                                                onClick={() =>
                                                    removeFromWishlist(item.id)
                                                }
                                                className="text-gray-400 hover:text-red-500"
                                                aria-label="Remove from wishlist"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
