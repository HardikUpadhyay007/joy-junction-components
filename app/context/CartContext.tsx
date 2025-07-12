"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { Product } from "../data/products";

// Define the cart item type
export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
    discount?: number;
};

// Define the cart context type
type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
};

// Create the cart context with default values
const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

// Export the hook for using the cart context
export const useCart = () => useContext(CartContext);

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Initialize cart from localStorage if available
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    // Calculate cart count and total
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce((total, item) => {
        const itemPrice = item.discount
            ? Math.round(item.price * (1 - item.discount / 100))
            : item.price;
        return total + itemPrice * item.quantity;
    }, 0);

    // Update localStorage whenever cart changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    // Add a product to the cart
    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            // Check if the product is already in the cart
            const existingItemIndex = prevItems.findIndex(
                (item) => item.id === product.id
            );

            if (existingItemIndex > -1) {
                // If the product is already in the cart, increase its quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                return updatedItems;
            } else {
                // If the product is not in the cart, add it with quantity 1
                return [
                    ...prevItems,
                    {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.image,
                        category: product.category,
                        discount: product.discount,
                    },
                ];
            }
        });
    };

    // Remove an item from the cart
    const removeFromCart = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Update the quantity of an item in the cart
    const updateQuantity = (id: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Clear the entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Provide the cart context
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
