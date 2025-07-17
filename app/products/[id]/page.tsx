"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    ShoppingCart,
    Heart,
    Share2,
    Star,
    StarHalf,
    Check,
    MinusCircle,
    PlusCircle,
} from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export default function ProductDetailPage() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    // Find the product with matching id
    const product = products.find((p) => p.id === Number(id));

    // If product not found, show a message
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-6">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
                    <h1 className="text-3xl font-bold text-[#1e1e3f] mb-4">
                        Product Not Found
                    </h1>
                    <p className="text-gray-600 mb-6">
                        The product you&apos;re looking for doesn&apos;t exist
                        or has been removed.
                    </p>
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#262b5f] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    // Check if product is in wishlist
    const isLiked = isInWishlist(product.id);

    // Handle wishlist toggle
    const handleToggleWishlist = () => {
        if (isLiked) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    // Calculate the discounted price
    const originalPrice = product.price;
    const discountedPrice =
        product.discount > 0
            ? Math.round(originalPrice * (1 - product.discount / 100))
            : originalPrice;

    // Format price to rupees (₹)
    const formatPrice = (price: number) => {
        return `₹${(price / 100).toFixed(2)}`;
    };

    // Handle adding to cart
    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }

        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    // Handle quantity change
    const increaseQuantity = () => setQuantity((q) => q + 1);
    const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    // Mock additional product images
    const productImages = [
        product.image,
        "/age-2-4.jpg",
        "/age-4-6.jpg",
        "/age-6-8.jpg",
    ];

    // Similar products - products in the same category
    const similarProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-[#f9f9f9] min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#262b5f]">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/products" className="hover:text-[#262b5f]">
                            Products
                        </Link>
                        <span className="mx-2">/</span>
                        <Link
                            href={`/products?category=${product.category}`}
                            className="hover:text-[#262b5f]"
                        >
                            {product.category}
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">
                            {product.name}
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        {/* Product Images */}
                        <div className="md:w-1/2 p-6 md:p-8">
                            <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={productImages[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                {product.discount > 0 && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                                        {product.discount}% OFF
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails */}
                            <div className="flex space-x-3">
                                {productImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative w-20 h-20 rounded-md overflow-hidden border-2 cursor-pointer ${
                                            selectedImage === idx
                                                ? "border-[#262b5f]"
                                                : "border-transparent"
                                        }`}
                                        onClick={() => setSelectedImage(idx)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} view ${
                                                idx + 1
                                            }`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="md:w-1/2 p-6 md:p-8 bg-white">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                    {product.ageGroup}
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-baloo">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400 mr-2">
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <StarHalf size={18} fill="currentColor" />
                                </div>
                                <span className="text-sm text-gray-600">
                                    4.5 (24 reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                {product.discount > 0 ? (
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {formatPrice(discountedPrice)}
                                        </span>
                                        <span className="ml-2 text-xl line-through font-medium text-gray-500">
                                            {formatPrice(originalPrice)}
                                        </span>
                                        <span className="ml-2 text-sm text-red-600 font-medium">
                                            Save {product.discount}%
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-3xl font-bold text-gray-900">
                                        {formatPrice(originalPrice)}
                                    </span>
                                )}

                                <p className="text-sm text-green-600 mt-1">
                                    ✓ In stock and ready to ship
                                </p>
                            </div>

                            {/* Product Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    Description
                                </h3>
                                <p className="text-gray-600">
                                    The {product.name} is a perfect toy for
                                    children aged {product.ageGroup}. This
                                    high-quality toy helps develop fine motor
                                    skills, problem-solving abilities, and
                                    creative thinking. Made from safe, durable
                                    materials, it provides hours of fun and
                                    educational play.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    Features
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <Check
                                            size={16}
                                            className="mr-2 text-green-600"
                                        />
                                        Age-appropriate for {product.ageGroup}{" "}
                                        years
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Check
                                            size={16}
                                            className="mr-2 text-green-600"
                                        />
                                        Helps develop fine motor skills
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Check
                                            size={16}
                                            className="mr-2 text-green-600"
                                        />
                                        Safe, non-toxic materials
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Check
                                            size={16}
                                            className="mr-2 text-green-600"
                                        />
                                        Durable construction for long-lasting
                                        play
                                    </li>
                                </ul>
                            </div>

                            {/* Quantity */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    Quantity
                                </h3>
                                <div className="flex items-center">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="text-gray-500 hover:text-gray-600"
                                        aria-label="Decrease quantity"
                                    >
                                        <MinusCircle size={24} />
                                    </button>
                                    <span className="mx-4 text-xl w-8 text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="text-gray-500 hover:text-gray-600"
                                        aria-label="Increase quantity"
                                    >
                                        <PlusCircle size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className={`flex-grow py-3 px-8 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all ${
                                        addedToCart
                                            ? "bg-green-600 hover:bg-green-700"
                                            : "bg-[#262b5f] hover:bg-opacity-90"
                                    }`}
                                >
                                    <ShoppingCart size={18} />
                                    {addedToCart
                                        ? "Added to Cart"
                                        : "Add to Cart"}
                                </button>
                                <button
                                    onClick={handleToggleWishlist}
                                    className={`py-3 px-4 rounded-lg border flex items-center justify-center transition-colors ${
                                        isLiked
                                            ? "bg-red-500 text-white border-red-500"
                                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                    }`}
                                    aria-label={
                                        isLiked
                                            ? "Remove from wishlist"
                                            : "Add to wishlist"
                                    }
                                >
                                    <Heart
                                        size={18}
                                        fill={isLiked ? "currentColor" : "none"}
                                    />
                                </button>
                                <button
                                    className="py-3 px-4 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50"
                                    aria-label="Share product"
                                >
                                    <Share2 size={18} />
                                </button>
                            </div>

                            {/* Free shipping notice */}
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-blue-800 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-4h4a1 1 0 001-1v-4a1 1 0 00-.293-.707L14 3.293A1 1 0 0013.707 3H4a1 1 0 00-1 1z" />
                                    </svg>
                                    Free shipping on orders over ₹1,000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                {similarProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6 font-baloo">
                            You May Also Like
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {similarProducts.map((prod) => {
                                const isProdLiked = isInWishlist(prod.id);

                                const handleSimilarProductWishlist = (
                                    e: React.MouseEvent
                                ) => {
                                    e.preventDefault(); // Prevent navigation
                                    if (isProdLiked) {
                                        removeFromWishlist(prod.id);
                                    } else {
                                        addToWishlist(prod);
                                    }
                                };

                                const handleSimilarProductAddToCart = (
                                    e: React.MouseEvent
                                ) => {
                                    e.preventDefault(); // Prevent navigation
                                    addToCart(prod);
                                };

                                return (
                                    <div
                                        key={prod.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group relative"
                                    >
                                        <Link href={`/products/${prod.id}`}>
                                            <div className="h-48 relative">
                                                <Image
                                                    src={prod.image}
                                                    alt={prod.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {prod.discount > 0 && (
                                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                        {prod.discount}% OFF
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm bg-white/0 group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={
                                                                handleSimilarProductAddToCart
                                                            }
                                                            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                                                            aria-label="Add to cart"
                                                        >
                                                            <ShoppingCart
                                                                size={18}
                                                            />
                                                        </button>
                                                        <button
                                                            onClick={
                                                                handleSimilarProductWishlist
                                                            }
                                                            className={`${
                                                                isProdLiked
                                                                    ? "bg-red-500 text-white"
                                                                    : "bg-white hover:bg-red-500 hover:text-white"
                                                            } p-2 rounded-full transition-colors`}
                                                            aria-label={
                                                                isProdLiked
                                                                    ? "Remove from wishlist"
                                                                    : "Add to wishlist"
                                                            }
                                                        >
                                                            <Heart
                                                                size={18}
                                                                fill={
                                                                    isProdLiked
                                                                        ? "currentColor"
                                                                        : "none"
                                                                }
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-medium text-[#1e1e3f] line-clamp-1">
                                                    {prod.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 mb-2">
                                                    {prod.category}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        {prod.discount > 0 ? (
                                                            <div className="flex items-baseline">
                                                                <span className="font-semibold text-[#262b5f]">
                                                                    {formatPrice(
                                                                        Math.round(
                                                                            prod.price *
                                                                                (1 -
                                                                                    prod.discount /
                                                                                        100)
                                                                        )
                                                                    )}
                                                                </span>
                                                                <span className="text-xs text-gray-500 line-through ml-1">
                                                                    {formatPrice(
                                                                        prod.price
                                                                    )}
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <span className="font-semibold text-[#262b5f]">
                                                                {formatPrice(
                                                                    prod.price
                                                                )}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
