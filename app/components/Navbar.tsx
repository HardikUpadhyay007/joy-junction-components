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
import { useState } from "react";
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
} from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

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
    const { cartCount } = useCart();

    const filterRoute = (type: string, value: string) => {
        router.push(`/products?${type}=${value}`);
        setMobileMenuOpen(false); // Close mobile menu when navigating
    };

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
                    <button className="flex items-center gap-1 hover:text-blue-300 transition-colors py-2">
                        Shop by Age{" "}
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                                showAgeDropdown ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <div
                        className={`absolute top-10 left-0 bg-white text-gray-800 rounded-md shadow-lg p-3 min-w-[160px] z-50 transform transition-all duration-200 origin-top ${
                            showAgeDropdown
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                        <div className="absolute top-0 left-4 -mt-2 transform rotate-45 w-3 h-3 bg-white"></div>
                        <h3 className="font-semibold text-blue-600 border-b pb-1 mb-2">
                            Age Groups
                        </h3>
                        {ageGroups.map((age) => (
                            <div
                                key={age}
                                onClick={() => {
                                    filterRoute("age", age);
                                    setShowAgeDropdown(false);
                                }}
                                className="py-2 px-2 cursor-pointer hover:bg-blue-50 rounded-md transition-colors flex items-center gap-2"
                            >
                                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-medium text-blue-600">
                                    {}
                                </span>
                                {age}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="relative group"
                    onMouseEnter={() => setShowCategoryDropdown(true)}
                    onMouseLeave={() => setShowCategoryDropdown(false)}
                >
                    <button className="flex items-center gap-1 hover:text-blue-300 transition-colors py-2">
                        Shop by Categories{" "}
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                                showCategoryDropdown ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    <div
                        className={`absolute top-10 left-0 bg-white text-gray-800 rounded-md shadow-lg p-3 min-w-[220px] z-50 transform transition-all duration-200 origin-top ${
                            showCategoryDropdown
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                        <div className="absolute top-0 left-4 -mt-2 transform rotate-45 w-3 h-3 bg-white"></div>

                        <h3 className="font-semibold text-blue-600 border-b pb-1 mb-2">
                            Categories
                        </h3>
                        {categories.map((cat) => (
                            <div
                                key={cat}
                                onClick={() => {
                                    filterRoute("category", cat);
                                    setShowCategoryDropdown(false);
                                }}
                                className="py-2 px-2 cursor-pointer hover:bg-blue-50 rounded-md transition-colors flex items-center gap-2"
                            >
                                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-medium text-green-600">
                                    {}
                                </span>
                                {cat}
                            </div>
                        ))}
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
                <div className="hidden sm:block cursor-pointer hover:text-blue-300 transition-colors">
                    <Heart size={22} />
                </div>
                <div className="cursor-pointer hover:text-blue-300 transition-colors">
                    <Search size={22} />
                </div>
                <div className="hidden sm:block cursor-pointer hover:text-blue-300 transition-colors">
                    <User size={22} />
                </div>
                <div
                    className="bg-white text-[#1E2A4A] rounded-full p-1.5 cursor-pointer hover:bg-blue-300 transition-colors"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu size={20} />
                </div>
            </div>

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

                        <div className="space-y-6 mb-8">
                            <Link
                                href="/"
                                className="block text-lg font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <div>
                                <h3 className="text-lg font-medium mb-3">
                                    Shop by Age
                                </h3>
                                <div className="grid grid-cols-2 gap-3 pl-2">
                                    {ageGroups.map((age) => (
                                        <div
                                            key={age}
                                            onClick={() =>
                                                filterRoute("age", age)
                                            }
                                            className="py-2 px-3 cursor-pointer bg-blue-50 rounded-md hover:bg-blue-100 transition-colors flex items-center gap-2"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                                                {}
                                            </span>
                                            {age}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">
                                    Shop by Categories
                                </h3>
                                <div className="space-y-2 pl-2">
                                    {categories.map((cat) => (
                                        <div
                                            key={cat}
                                            onClick={() =>
                                                filterRoute("category", cat)
                                            }
                                            className="py-2 px-3 cursor-pointer bg-blue-50 rounded-md hover:bg-blue-100 transition-colors flex items-center gap-2"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-green-600">
                                                {}
                                            </span>
                                            <span className="text-sm md:text-base">
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
