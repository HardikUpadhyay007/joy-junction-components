"use client";

import { Product } from "../data/products";
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
} from "react";

// Define the shape of our context
interface WishlistContextType {
    wishlistItems: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
    wishlistCount: number;
    clearWishlist: () => void;
}

// Create the context with a default value
const WishlistContext = createContext<WishlistContextType>({
    wishlistItems: [],
    addToWishlist: () => {},
    removeFromWishlist: () => {},
    isInWishlist: () => false,
    wishlistCount: 0,
    clearWishlist: () => {},
});

// Custom hook to use the wishlist context
export const useWishlist = () => useContext(WishlistContext);

// Provider component
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    // State to hold the wishlist items
    const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

    // Total number of items in wishlist
    const wishlistCount = wishlistItems.length;

    // Check if product is in wishlist
    const isInWishlist = (productId: number) => {
        return wishlistItems.some((item) => item.id === productId);
    };

    // Load wishlist from localStorage on component mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedWishlist = localStorage.getItem("wishlist");
            if (savedWishlist) {
                setWishlistItems(JSON.parse(savedWishlist));
            }
        }
    }, []);

    // Update localStorage when wishlist changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
        }
    }, [wishlistItems]);

    // Add a product to the wishlist
    const addToWishlist = (product: Product) => {
        setWishlistItems((prev) => {
            // Check if the product is already in the wishlist
            if (prev.some((item) => item.id === product.id)) {
                return prev; // Don't add duplicates
            } else {
                // Add the new product
                return [...prev, product];
            }
        });
    };

    // Remove an item from the wishlist
    const removeFromWishlist = (productId: number) => {
        setWishlistItems((prev) =>
            prev.filter((item) => item.id !== productId)
        );
    };

    // Clear the entire wishlist
    const clearWishlist = () => {
        setWishlistItems([]);
    };

    // Provide the wishlist context
    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                wishlistCount,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
