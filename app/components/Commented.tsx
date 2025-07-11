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
