// import Image from "next/image";
// import {
//     Heart,
//     Search,
//     ShoppingCart,
//     User,
//     Menu,
//     ChevronDown,
// } from "lucide-react";

// const Navbar = () => {
//     return (
//         <nav className="bg-[#1E2A4A] text-white p-4 flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <Image
//                     src="/logo.png"
//                     alt="The Joy Junction"
//                     width={100}
//                     height={50}
//                 />
//             </div>

//             {/* Navigation Links */}
//             <div className="hidden md:flex items-center space-x-6">
//                 <a href="#" className="hover:text-gray-300">
//                     Home
//                 </a>
//                 <a href="#" className="hover:text-gray-300 flex items-center">
//                     Shop by Age <ChevronDown size={16} className="ml-1" />
//                 </a>
//                 <a href="#" className="hover:text-gray-300 flex items-center">
//                     Shop by Categories{" "}
//                     <ChevronDown size={16} className="ml-1" />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                     Custom Kit
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                     Contact Us
//                 </a>
//             </div>

//             {/* Icons */}
//             <div className="flex items-center space-x-4">
//                 <div className="relative">
//                     <ShoppingCart size={24} />
//                     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                         0
//                     </span>
//                 </div>
//                 <Heart size={24} />
//                 <Search size={24} />
//                 <User size={24} />
//                 <div className="bg-white text-black rounded-full p-1">
//                     <Menu size={24} />
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
    Menu,
    ChevronDown,
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
    const [showAgeDropdown, setShowAgeDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
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
            <Image src="/logo.png" alt="logo" width={100} height={50} />

            <div className="hidden md:flex items-center space-x-6 relative">
                <Link
                    href="/"
                    className="hover:text-blue-300 transition-colors"
                >
                    Home
                </Link>

                <div
                    className="relative group"
                    onMouseEnter={() => setShowAgeDropdown(true)}
                    onMouseLeave={() => setShowAgeDropdown(false)}
                >
                    <button className="flex items-center gap-1.5 hover:text-blue-300 transition-colors py-2 font-medium">
                        Shop by Age{" "}
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                                showAgeDropdown
                                    ? "rotate-180 text-blue-300"
                                    : ""
                            }`}
                        />
                    </button>
                    <div
                        className={`absolute top-10 left-0 bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl p-0 min-w-[200px] z-50 transform transition-all duration-300 origin-top ${
                            showAgeDropdown
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                        <div className="absolute top-0 left-4 -mt-2 transform rotate-45 w-3 h-3 bg-white border-t border-l border-gray-100"></div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-3 px-4">
                            <h3 className="font-semibold text-white">
                                Shop by Age
                            </h3>
                            <p className="text-xs text-blue-100">
                                Find perfect toys for every age
                            </p>
                        </div>
                        <div className="p-2">
                            {ageGroups.map((age) => (
                                <div
                                    key={age}
                                    onClick={() => {
                                        filterRoute("age", age);
                                        setShowAgeDropdown(false);
                                    }}
                                    className="py-2.5 px-3 cursor-pointer hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-3 group"
                                >
                                    <span className="w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center text-sm font-bold text-blue-600 transition-colors">
                                        {age}
                                    </span>
                                    <span className="group-hover:text-blue-600 font-medium transition-colors">
                                        Ages {age} years
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setShowCategoryDropdown(true)}
                    onMouseLeave={() => setShowCategoryDropdown(false)}
                >
                    <button className="flex items-center gap-1.5 hover:text-blue-300 transition-colors py-2 font-medium">
                        Shop by Categories{" "}
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                                showCategoryDropdown
                                    ? "rotate-180 text-blue-300"
                                    : ""
                            }`}
                        />
                    </button>
                    <div
                        className={`absolute top-10 left-0 bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl p-0 min-w-[240px] z-50 transform transition-all duration-300 origin-top ${
                            showCategoryDropdown
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                        <div className="absolute top-0 left-4 -mt-2 transform rotate-45 w-3 h-3 bg-white border-t border-l border-gray-100"></div>
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 py-3 px-4">
                            <h3 className="font-semibold text-white">
                                Shop by Categories
                            </h3>
                            <p className="text-xs text-green-100">
                                Explore our collection
                            </p>
                        </div>

                        <div className="p-2">
                            {categories.map((cat) => (
                                <div
                                    key={cat}
                                    onClick={() => {
                                        filterRoute("category", cat);
                                        setShowCategoryDropdown(false);
                                    }}
                                    className="py-2.5 px-3 cursor-pointer hover:bg-green-50 rounded-lg transition-colors flex items-center gap-3 group"
                                >
                                    <span className="w-8 h-8 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center text-sm font-medium text-green-600 transition-colors">
                                        {cat[0]}
                                    </span>
                                    <span className="group-hover:text-green-600 font-medium transition-colors">
                                        {cat}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

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
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16 md:pt-24"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setSearchOpen(false);
                        }
                    }}
                >
                    <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 animate-slide-down shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Search Products
                            </h3>
                            <button
                                onClick={() => setSearchOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-gray-600" />
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
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
                    onClick={(e) => {
                        // Close when clicking outside the menu
                        if (e.target === e.currentTarget) {
                            setMobileMenuOpen(false);
                        }
                    }}
                >
                    <div className="bg-white text-gray-800 h-full w-full max-w-xs md:max-w-md p-6 overflow-y-auto animate-slide-left">
                        <div className="flex justify-between items-center mb-8">
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
                        <div className="mb-6">
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
                                    className="w-full py-2.5 px-4 pl-10 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500"
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

                        <div className="space-y-6 mb-8">
                            <Link
                                href="/"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <div className="rounded-xl overflow-hidden border border-blue-100">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-3 px-4">
                                    <h3 className="text-lg font-medium text-white">
                                        Shop by Age
                                    </h3>
                                    <p className="text-xs text-blue-100">
                                        Find perfect toys for every age
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 p-3 bg-white">
                                    {ageGroups.map((age) => (
                                        <div
                                            key={age}
                                            onClick={() =>
                                                filterRoute("age", age)
                                            }
                                            className="py-2.5 px-3 cursor-pointer bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                                        >
                                            <span className="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-sm font-bold text-blue-600">
                                                {age}
                                            </span>
                                            <span className="font-medium">
                                                Ages {age}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden border border-green-100 mt-6">
                                <div className="bg-gradient-to-r from-green-500 to-teal-500 py-3 px-4">
                                    <h3 className="text-lg font-medium text-white">
                                        Shop by Categories
                                    </h3>
                                    <p className="text-xs text-green-100">
                                        Explore our collection
                                    </p>
                                </div>
                                <div className="space-y-2 p-3 bg-white">
                                    {categories.map((cat) => (
                                        <div
                                            key={cat}
                                            onClick={() =>
                                                filterRoute("category", cat)
                                            }
                                            className="py-2.5 px-3 cursor-pointer bg-green-50 hover:bg-green-100 rounded-lg transition-colors flex items-center gap-3 shadow-sm"
                                        >
                                            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-medium text-green-600">
                                                {cat[0]}
                                            </span>
                                            <span className="font-medium">
                                                {cat}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/partnership-program"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Partnership Program
                            </Link>
                            <Link
                                href="/about-us"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/blogs"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Blogs
                            </Link>
                            <Link
                                href="/faq"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                FAQ
                            </Link>

                            <Link
                                href="/contact"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>

                            <Link
                                href="/cart"
                                className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <ShoppingCart size={18} />
                                <span>Cart</span>
                                {cartCount > 0 && (
                                    <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            <Link
                                href="/wishlist"
                                className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Heart size={18} />
                                <span>Wishlist</span>
                                {wishlistCount > 0 && (
                                    <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        <div className="mt-8 space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Get in Touch
                            </h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Phone
                                        size={18}
                                        className="text-blue-600"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Call us at
                                    </p>
                                    <p className="font-medium">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Mail size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email us at
                                    </p>
                                    <p className="font-medium">
                                        hello@thejoyjunction.com
                                    </p>
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
