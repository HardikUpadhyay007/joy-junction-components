"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, addToCart } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const [addedProducts, setAddedProducts] = useState<Record<number, boolean>>(
        {}
    );

    const handleRemoveItem = (id: number) => {
        removeFromCart(id);
    };

    const applyCoupon = () => {
        if (couponCode.toLowerCase() === "joy10") {
            setCouponApplied(true);
        } else {
            alert("Invalid coupon code");
        }
    };

    // Calculate subtotal (using cartItems directly since we need to show individual prices)
    const subtotal = cartItems.reduce((total, item) => {
        const itemPrice = item.discount
            ? Math.round(item.price * (1 - item.discount / 100))
            : item.price;
        return total + itemPrice * item.quantity;
    }, 0);

    // Calculate shipping
    const shipping = subtotal > 1000 ? 0 : 99;

    // Calculate discount
    const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;

    // Calculate total
    const total = subtotal + shipping - discount;

    // Format price to rupees (₹)
    const formatPrice = (price: number) => {
        return `₹${(price / 100).toFixed(2)}`;
    };

    return (
        <div className="bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e3f] mb-2 font-baloo">
                        Your Shopping Cart
                    </h1>
                    <p className="text-gray-600">
                        Review your items and proceed to checkout
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    /* Empty Cart */
                    <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <ShoppingBag size={80} className="text-gray-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1e1e3f] mb-4">
                            Your cart is empty
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Looks like you haven&apos;t added any toys to your
                            cart yet.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 bg-[#262b5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                        >
                            Browse Products <ArrowRight size={16} />
                        </Link>
                    </div>
                ) : (
                    /* Cart with Items */
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-semibold text-[#1e1e3f]">
                                        Cart Items (
                                        {cartItems.reduce(
                                            (total, item) =>
                                                total + item.quantity,
                                            0
                                        )}
                                        )
                                    </h2>
                                </div>

                                {/* Cart Items */}
                                <div className="divide-y divide-gray-100">
                                    {cartItems.map((item) => {
                                        const itemPrice = item.discount
                                            ? Math.round(
                                                  item.price *
                                                      (1 - item.discount / 100)
                                              )
                                            : item.price;

                                        return (
                                            <div
                                                key={item.id}
                                                className="p-6 flex flex-col sm:flex-row gap-4"
                                            >
                                                {/* Product Image */}
                                                <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={96}
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-grow">
                                                    <div className="flex flex-col sm:flex-row sm:justify-between">
                                                        <div>
                                                            <h3 className="text-lg font-medium text-[#1e1e3f]">
                                                                {item.name}
                                                            </h3>
                                                            <p className="text-sm text-gray-500 mb-2">
                                                                {item.category}
                                                            </p>

                                                            <div className="flex items-center mt-auto">
                                                                <div className="flex items-center border border-gray-200 rounded-md">
                                                                    <button
                                                                        onClick={() =>
                                                                            updateQuantity(
                                                                                item.id,
                                                                                item.quantity -
                                                                                    1
                                                                            )
                                                                        }
                                                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600"
                                                                        aria-label="Decrease quantity"
                                                                    >
                                                                        <Minus
                                                                            size={
                                                                                14
                                                                            }
                                                                        />
                                                                    </button>
                                                                    <span className="px-3 py-1 text-center w-12">
                                                                        {
                                                                            item.quantity
                                                                        }
                                                                    </span>
                                                                    <button
                                                                        onClick={() =>
                                                                            updateQuantity(
                                                                                item.id,
                                                                                item.quantity +
                                                                                    1
                                                                            )
                                                                        }
                                                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600"
                                                                        aria-label="Increase quantity"
                                                                    >
                                                                        <Plus
                                                                            size={
                                                                                14
                                                                            }
                                                                        />
                                                                    </button>
                                                                </div>

                                                                <button
                                                                    onClick={() =>
                                                                        handleRemoveItem(
                                                                            item.id
                                                                        )
                                                                    }
                                                                    className="ml-4 text-red-500 hover:text-red-700"
                                                                    aria-label="Remove item"
                                                                >
                                                                    <Trash2
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 sm:mt-0 text-right">
                                                            {item.discount ? (
                                                                <div>
                                                                    <span className="text-sm text-gray-500 line-through mr-2">
                                                                        {formatPrice(
                                                                            item.price
                                                                        )}
                                                                    </span>
                                                                    <span className="text-xl font-semibold text-[#262b5f]">
                                                                        {formatPrice(
                                                                            itemPrice
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <span className="text-xl font-semibold text-[#262b5f]">
                                                                    {formatPrice(
                                                                        item.price
                                                                    )}
                                                                </span>
                                                            )}
                                                            <p className="text-gray-600 text-sm mt-1">
                                                                Item total:{" "}
                                                                {formatPrice(
                                                                    itemPrice *
                                                                        item.quantity
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                                <h2 className="text-xl font-semibold text-[#1e1e3f] mb-6">
                                    Order Summary
                                </h2>

                                {/* Coupon Code */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="coupon"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Coupon Code
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            id="coupon"
                                            placeholder="Enter coupon code"
                                            value={couponCode}
                                            onChange={(e) =>
                                                setCouponCode(e.target.value)
                                            }
                                            disabled={couponApplied}
                                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#262b5f] focus:border-transparent"
                                        />
                                        <button
                                            onClick={applyCoupon}
                                            disabled={couponApplied}
                                            className={`px-4 py-2 font-medium rounded-r-lg ${
                                                couponApplied
                                                    ? "bg-green-500 text-white"
                                                    : "bg-[#262b5f] text-white hover:bg-opacity-90"
                                            } transition-colors`}
                                        >
                                            {couponApplied
                                                ? "Applied"
                                                : "Apply"}
                                        </button>
                                    </div>
                                    {couponApplied && (
                                        <p className="text-sm text-green-600 mt-1">
                                            Coupon &quot;JOY10&quot; applied
                                            successfully!
                                        </p>
                                    )}
                                </div>

                                {/* Price Breakdown */}
                                <div className="space-y-3 border-t border-gray-100 pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Subtotal
                                        </span>
                                        <span className="font-medium">
                                            {formatPrice(subtotal)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Shipping
                                        </span>
                                        {shipping === 0 ? (
                                            <span className="text-green-600 font-medium">
                                                Free
                                            </span>
                                        ) : (
                                            <span className="font-medium">
                                                {formatPrice(shipping)}
                                            </span>
                                        )}
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                Discount
                                            </span>
                                            <span className="text-green-600 font-medium">
                                                -{formatPrice(discount)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex justify-between border-t border-gray-100 pt-3">
                                        <span className="font-semibold text-[#1e1e3f]">
                                            Total
                                        </span>
                                        <span className="font-semibold text-xl text-[#262b5f]">
                                            {formatPrice(total)}
                                        </span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="w-full mt-8 bg-[#262b5f] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors">
                                    Proceed to Checkout <ArrowRight size={16} />
                                </button>

                                {/* Continue Shopping */}
                                <Link
                                    href="/products"
                                    className="w-full mt-4 border border-[#262b5f] text-[#262b5f] px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                                >
                                    Continue Shopping
                                </Link>

                                {/* Shipping Note */}
                                <p className="text-sm text-gray-500 mt-6">
                                    {shipping === 0 ? (
                                        <span>✓ Free shipping applied</span>
                                    ) : (
                                        <span>
                                            Free shipping on orders over ₹1,000
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Recommended Products - only show if there are items in the cart */}
                {cartItems.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-[#1e1e3f] mb-6 font-baloo">
                            You Might Also Like
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    id: 4,
                                    name: "Alphabet Flash Cards",
                                    price: 349,
                                    image: "/age-2-4.jpg",
                                    category: "Flashcard Fun",
                                    discount: 0,
                                },
                                {
                                    id: 5,
                                    name: "Math Learning Game",
                                    price: 599,
                                    image: "/age-4-6.jpg",
                                    category: "Kid's Development Games",
                                    discount: 10,
                                },
                                {
                                    id: 6,
                                    name: "Wooden Train Set",
                                    price: 1499,
                                    image: "/age-6-8.jpg",
                                    category: "Wooden Wonders",
                                    discount: 0,
                                },
                                {
                                    id: 7,
                                    name: "Science Experiment Kit",
                                    price: 899,
                                    image: "/age-8-plus.jpg",
                                    category: "Kid's Development Games",
                                    discount: 5,
                                },
                            ].map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() =>
                                        (window.location.href = `/products/${product.id}`)
                                    }
                                >
                                    <div className="h-48 relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-[#1e1e3f]">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-2">
                                            {product.category}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                {product.discount > 0 ? (
                                                    <div>
                                                        <span className="text-sm text-gray-500 line-through mr-2">
                                                            {formatPrice(
                                                                product.price
                                                            )}
                                                        </span>
                                                        <span className="font-semibold text-[#262b5f]">
                                                            {formatPrice(
                                                                Math.round(
                                                                    product.price *
                                                                        (1 -
                                                                            product.discount /
                                                                                100)
                                                                )
                                                            )}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="font-semibold text-[#262b5f]">
                                                        {formatPrice(
                                                            product.price
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent navigating to product page
                                                    const productToAdd = {
                                                        id: product.id,
                                                        name: product.name,
                                                        price: product.price,
                                                        image: product.image,
                                                        category:
                                                            product.category,
                                                        discount:
                                                            product.discount,
                                                        ageGroup:
                                                            product.category ===
                                                            "Flashcard Fun"
                                                                ? "2-4"
                                                                : product.category ===
                                                                  "Kid's Development Games"
                                                                ? "4-6"
                                                                : product.category ===
                                                                  "Wooden Wonders"
                                                                ? "6-8"
                                                                : "8+",
                                                    };
                                                    addToCart(productToAdd);

                                                    // Show visual feedback
                                                    setAddedProducts(
                                                        (prev) => ({
                                                            ...prev,
                                                            [product.id]: true,
                                                        })
                                                    );

                                                    // Reset after 2 seconds
                                                    setTimeout(() => {
                                                        setAddedProducts(
                                                            (prev) => ({
                                                                ...prev,
                                                                [product.id]:
                                                                    false,
                                                            })
                                                        );
                                                    }, 2000);
                                                }}
                                                className={`text-xs ${
                                                    addedProducts[product.id]
                                                        ? "bg-green-500"
                                                        : "bg-[#262b5f]"
                                                } text-white px-3 py-1 rounded hover:bg-opacity-90 transition-colors`}
                                            >
                                                {addedProducts[product.id]
                                                    ? "Added!"
                                                    : "Add to Cart"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
