

"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart, updateQuantity, cartItems } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const liked = isInWishlist(product.id);

    const cartItem = cartItems.find((item) => item.id === product.id);
    const quantityInCart = cartItem?.quantity || 0;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(product);
    };


    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (liked) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="shadow-lg rounded-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative w-full h-56 overflow-hidden group">
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

                <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm bg-white/0 group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                        <button
                            onClick={handleAddToCart}
                            className={`${
                                quantityInCart > 0
                                    ? "bg-green-500 text-white"
                                    : "bg-white hover:bg-blue-500 hover:text-white"
                            } p-2 rounded-full transition-colors`}
                            aria-label="Add to cart"
                        >
                            <ShoppingCart size={18} />
                        </button>
                        <button
                            onClick={handleToggleWishlist}
                            className={`${
                                liked
                                    ? "bg-red-500 text-white"
                                    : "bg-white hover:bg-red-500 hover:text-white"
                            } p-2 rounded-full transition-colors`}
                            aria-label={
                                liked
                                    ? "Remove from wishlist"
                                    : "Add to wishlist"
                            }
                        >
                            <Heart
                                size={18}
                                fill={liked ? "currentColor" : "none"}
                            />
                        </button>
                        <Link
                            href={`/products/${product.id}`}
                            className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                            aria-label="Quick view"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Eye size={18} />
                        </Link>
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

                    {/* Quantity logic starts here */}
                    {quantityInCart === 0 ? (
  <button
    onClick={handleAddToCart}
    className="text-xs py-1 px-2 rounded bg-[#262b5f] text-white hover:bg-opacity-90 transition-colors flex items-center gap-1"
  >
    Add to cart
  </button>
) : (
  <div className="flex items-center gap-2">
    <button
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(product.id, quantityInCart - 1);
      }}
      className="bg-gray-200 px-2 py-0.5 rounded text-sm hover:bg-gray-300"
    >
      -
    </button>
    <span className="text-sm font-semibold">{quantityInCart}</span>
    <button
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(product.id, quantityInCart + 1);
      }}
      className="bg-gray-200 px-2 py-0.5 rounded text-sm hover:bg-gray-300"
    >
      +
    </button>
  </div>
)}

                </div>
            </div>
        </div>
    );
};

export default ProductCard;