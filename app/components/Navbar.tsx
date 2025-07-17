
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
    Menu,
    ShoppingCart,
    Heart,
    Search,
    User,
    X,
    Phone,
    Mail,
    ArrowRight,
    
} from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ageGroups = ["2-4", "4-6", "6-8", "8+"];
const categories = [
    "Card-Tastic Fun",
    "Flashcard Fun",
    "Kid's Development Games",
    "Wooden Wonders",
];

const Navbar = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();

    const filterRoute = (type: string, value: string) => {
        router.push(`/products?${type}=${value}`);
        setMobileMenuOpen(false); // Close mobile menu when navigating
    };

    const handleSearch = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (searchTerm.trim()) {
            router.push(
                `/products?search=${encodeURIComponent(searchTerm.trim())}`
            );
            setSearchOpen(false);
            setSearchTerm("");
        }
    };

    // Focus search input when search modal opens
    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchOpen]);

    // Close search modal when user clicks escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && searchOpen) {
                setSearchOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [searchOpen]);

    return (
        <nav className="bg-[#1E2A4A] text-white p-4 flex items-center justify-between">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={50} />
            </Link> 

            <div className="hidden md:flex items-center space-x-6 relative ">
                <Link
                    href="/"
                    className="hover:text-blue-300 transition-colors"
                >
                    Home
                </Link>

                <Link
                    href="/products"
                    className="hover:text-blue-300 transition-colors"
                >
                    Products
                </Link>

                <Link
                    href="/customkit"
                    className="hover:text-blue-300 transition-colors"
                >
                    Custom Kit
                </Link>

                <Link
                    href="/contact"
                    className="hover:text-blue-300 transition-colors"
                >
                    Contact Us
                </Link>
            </div>

            <div className="flex items-center space-x-5">
                <Link
                    href="/cart"
                    className="hidden sm:block relative cursor-pointer hover:text-blue-300 transition-colors"
                >
                    <ShoppingCart size={22} />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </Link>
                <Link
                    href="/wishlist"
                    className="hidden sm:block relative cursor-pointer hover:text-blue-300 transition-colors"
                >
                    <Heart size={22} />
                    {wishlistCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {wishlistCount}
                        </span>
                    )}
                </Link>
                <div
                    className="cursor-pointer hover:text-blue-300 transition-colors"
                    onClick={() => setSearchOpen(true)}
                >
                    <Search size={22} />
                </div>
                <Link href="/account">
                    <div className="hidden sm:block cursor-pointer hover:text-blue-300 transition-colors">
                        <User size={22} />
                    </div>
                </Link>

                <div
                    className="bg-white text-[#1E2A4A] rounded-full p-1.5 cursor-pointer hover:bg-blue-300 transition-colors"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu size={20} />
                </div>
            </div>

            {/* Search Overlay */}
            {searchOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-md text-black bg-white/30 z-50 flex items-start justify-center pt-16 md:pt-24"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setSearchOpen(false);
                        }
                    }}
                >
                    <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 animate-slide-down shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-black">
                                Search Products
                            </h3>
                            <button
                                onClick={() => setSearchOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-black" />
                            </button>
                        </div>

                        <form onSubmit={handleSearch} className="flex gap-2">
                            <div className="relative flex-1">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="Search for toys, games, flashcards..."
                                    className="w-full py-3 px-5 pr-12 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                                />
                                <Search
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-3 bg-[#262b5f] hover:bg-[#1e2248] text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                            >
                                Search <ArrowRight size={16} />
                            </button>
                        </form>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <p className="text-sm text-gray-500 mr-2">
                                Popular searches:
                            </p>
                            {ageGroups.map((age) => (
                                <span
                                    key={age}
                                    onClick={() => {
                                        filterRoute("age", age);
                                        setSearchOpen(false);
                                    }}
                                    className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 transition-colors"
                                >
                                    Ages {age}
                                </span>
                            ))}
                            {categories.map((cat) => (
                                <span
                                    key={cat}
                                    onClick={() => {
                                        filterRoute("category", cat);
                                        setSearchOpen(false);
                                    }}
                                    className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-full cursor-pointer hover:bg-green-100 transition-colors"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex justify-end transition-all duration-300"

                    onClick={(e) => {
                        // Close when clicking outside the menu
                        if (e.target === e.currentTarget) {
                            setMobileMenuOpen(false);
                        }
                    }}
                >
                    <div className="bg-white text-gray-800 h-full w-full max-w-xs md:max-w-md p-4 flex flex-col animate-slide-left">
                        {/* Header with Logo and Close button */}
                        <div className="flex justify-between items-center mb-4">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={100}
                                height={50}
                            />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={24} className="text-gray-700" />
                            </button>
                        </div>

                        {/* Mobile Search Input */}
                        <div className="mb-4">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (searchTerm.trim()) {
                                        router.push(
                                            `/products?search=${encodeURIComponent(
                                                searchTerm.trim()
                                            )}`
                                        );
                                        setMobileMenuOpen(false);
                                        setSearchTerm("");
                                    }
                                }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="Search products..."
                                    className="w-full py-2 px-4 pl-10 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={18}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#262b5f] text-white p-1.5 rounded-md"
                                >
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        </div>

                        {/* Navigation links - in a scrollable container */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="space-y-4">
                                <Link
                                    href="/"
                                    className="block text-base font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/products"
                                    className="block text-base font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Products
                                </Link>

                                <div className="flex flex-wrap gap-x-4">
                                    <Link
                                        href="/customkit"
                                        className="text-base font-medium hover:text-blue-600 transition-colors py-2 w-[45%]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Custom Kit
                                    </Link>
                                    <Link
                                        href="/partnership-program"
                                        className="text-base font-medium hover:text-blue-600 transition-colors py-2 w-[45%]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Partnership
                                    </Link>
                                    <Link
                                        href="/about-us"
                                        className="text-base font-medium hover:text-blue-600 transition-colors py-2 w-[45%]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/blogs"
                                        className="text-base font-medium hover:text-blue-600 transition-colors py-2 w-[45%]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Blogs
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className="text-base font-medium hover:text-blue-600 transition-colors py-2 w-[45%]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-base font-medium hover:text-blue-600 transition-colors py-2 w-[45%]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </div>

                                <div className="flex justify-between pt-2">
                                    <Link
                                        href="/cart"
                                        className="flex items-center gap-1 text-base font-medium hover:text-blue-600 transition-colors py-1"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <ShoppingCart size={16} />
                                        <span>Cart</span>
                                        {cartCount > 0 && (
                                            <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                {cartCount}
                                            </span>
                                        )}
                                    </Link>

                                    <Link
                                        href="/wishlist"
                                        className="flex items-center gap-1 text-base font-medium hover:text-blue-600 transition-colors py-1"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Heart size={16} />
                                        <span>Wishlist</span>
                                        {wishlistCount > 0 && (
                                            <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                {wishlistCount}
                                            </span>
                                        )}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact info in the footer - always visible */}
                        <div className="mt-4 pt-2 border-t border-gray-100">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Phone size={14} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Call us</p>
                                        <p className="text-sm font-medium">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Mail size={14} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="text-sm font-medium">hello@thejoyjunction.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;