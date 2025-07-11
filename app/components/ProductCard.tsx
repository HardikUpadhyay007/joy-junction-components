"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "../data/products";

const ProductCard = ({ product }: { product: Product }) => (
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
                    <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                        <Heart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
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
            <div className="flex items-center">
                <div className="text-red-600 font-bold">₹{product.price}</div>
                <div className="text-sm text-gray-400 line-through ml-2">
                    ₹{Math.round(product.price * (1 + product.discount / 100))}
                </div>
            </div>
        </div>
    </div>
);

export default ProductCard;
