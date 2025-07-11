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
} from "lucide-react";
import Image from "next/image";

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

    const filterRoute = (type: string, value: string) => {
        router.push(`/products?${type}=${value}`);
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
                    href="#"
                    className="hover:text-blue-300 transition-colors"
                >
                    Custom Kit
                </Link>
                <Link
                    href="#"
                    className="hover:text-blue-300 transition-colors"
                >
                    Contact Us
                </Link>
            </div>

            <div className="flex items-center space-x-5">
                <div className="relative cursor-pointer hover:text-blue-300 transition-colors">
                    <ShoppingCart size={22} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        0
                    </span>
                </div>
                <div className="cursor-pointer hover:text-blue-300 transition-colors">
                    <Heart size={22} />
                </div>
                <div className="cursor-pointer hover:text-blue-300 transition-colors">
                    <Search size={22} />
                </div>
                <div className="cursor-pointer hover:text-blue-300 transition-colors">
                    <User size={22} />
                </div>
                <div className="bg-white text-[#1E2A4A] rounded-full p-1.5 cursor-pointer hover:bg-blue-300 transition-colors">
                    <Menu size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
