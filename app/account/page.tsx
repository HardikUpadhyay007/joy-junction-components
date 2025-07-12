"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, User, Phone, ArrowRight } from "lucide-react";

export default function AccountPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    // Toggle between login and signup forms
    const toggleForm = () => setIsLogin(!isLogin);

    // Toggle password visibility
    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div className="min-h-screen py-16 px-4 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto">
                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1e1e3f] mb-3 font-baloo tracking-wide leading-tight">
                        {isLogin
                            ? "Welcome Back! 👋"
                            : "Join The Joy Junction! 🎈"}
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl font-fredoka max-w-2xl mx-auto">
                        {isLogin
                            ? "Sign in to your magical toy box and continue your adventure!"
                            : "Create an account and start your joyful journey into our toy wonderland!"}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            {/* Left side - Decorative Image */}
                            <div className="hidden md:block md:w-1/2 relative bg-gradient-to-br from-[#262b5f] to-[#3a4183]">
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div className="relative z-10">
                                        <h3 className="text-white text-3xl font-bold mb-3 font-baloo tracking-wide leading-tight drop-shadow-md">
                                            {isLogin
                                                ? "Welcome back to our toy wonderland! 🎉"
                                                : "Join our happy playground! 🧸"}
                                        </h3>
                                        <p className="text-blue-100 text-lg leading-relaxed">
                                            {isLogin
                                                ? "Access your wishlist, track orders, and discover perfect toys for your little ones!"
                                                : "Create an account for magical toy suggestions, exclusive offers, and more fun!"}
                                        </p>
                                    </div>

                                    <div className="relative z-10 rounded-xl bg-white/10 backdrop-blur-sm p-5 border border-white/20 shadow-lg">
                                        <p className="italic text-white/95 text-base font-medium leading-relaxed">
                                            &ldquo;Play is the highest form of
                                            research.&rdquo;
                                        </p>
                                        <p className="text-blue-200 text-sm mt-2 font-semibold">
                                            ~ Albert Einstein
                                        </p>
                                    </div>

                                    {/* Decorative toys illustration */}
                                    <div className="absolute bottom-0 right-0 w-72 h-72 opacity-20 animate-float">
                                        <Image
                                            src="/category1.jpg"
                                            alt="Toy illustration"
                                            width={300}
                                            height={300}
                                            className="object-cover rounded-full shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Playful decorative patterns */}
                                <div className="absolute top-5 left-5 w-24 h-24 rounded-full bg-pink-500/15 animate-pulse-slow"></div>
                                <div className="absolute top-1/4 right-10 w-16 h-16 rounded-full bg-yellow-500/20 animate-bounce-slow"></div>
                                <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-blue-500/15 animate-pulse-slow"></div>

                                {/* Playful shapes */}
                                <div className="absolute top-1/3 left-20 w-10 h-10 rounded-md bg-red-400/10 rotate-12 animate-spin-slow"></div>
                                <div className="absolute bottom-32 right-32 w-12 h-12 bg-green-400/10 transform rotate-45 animate-bounce-slow"></div>
                            </div>

                            {/* Right side - Form */}
                            <div className="p-8 md:p-10 md:w-1/2">
                                {/* Tab Selection */}
                                <div className="flex border-b border-gray-200 mb-8">
                                    <button
                                        className={`pb-4 px-4 text-base font-medium transition-colors ${
                                            isLogin
                                                ? "border-b-2 border-[#262b5f] text-[#262b5f]"
                                                : "text-gray-500 hover:text-gray-700"
                                        }`}
                                        onClick={() => setIsLogin(true)}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        className={`pb-4 px-4 text-base font-medium transition-colors ${
                                            !isLogin
                                                ? "border-b-2 border-[#262b5f] text-[#262b5f]"
                                                : "text-gray-500 hover:text-gray-700"
                                        }`}
                                        onClick={() => setIsLogin(false)}
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                {isLogin ? (
                                    /* Login Form */
                                    <form>
                                        <div className="space-y-5">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <Mail size={18} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                        placeholder="yourname@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-1">
                                                    <label
                                                        htmlFor="password"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Password
                                                    </label>
                                                    <Link
                                                        href="/account/reset-password"
                                                        className="text-xs text-[#262b5f] hover:underline"
                                                    >
                                                        Forgot password?
                                                    </Link>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <Lock size={18} />
                                                    </div>
                                                    <input
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        id="password"
                                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                        placeholder="••••••••"
                                                    />
                                                    <div
                                                        className="absolute right-0 inset-y-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600"
                                                        onClick={
                                                            toggleShowPassword
                                                        }
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff size={18} />
                                                        ) : (
                                                            <Eye size={18} />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-[#262b5f] focus:ring-[#262b5f] border-gray-300 rounded"
                                                />
                                                <label
                                                    htmlFor="remember-me"
                                                    className="ml-2 block text-sm text-gray-700"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-[#262b5f] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Sign In <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    /* Sign Up Form */
                                    <form>
                                        <div className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label
                                                        htmlFor="first-name"
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                    >
                                                        First Name
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                            <User size={18} />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="first-name"
                                                            className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                            placeholder="John"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="last-name"
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="last-name"
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="signup-email"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <Mail size={18} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="signup-email"
                                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                        placeholder="yourname@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <Phone size={18} />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                        placeholder="+91 98765 43210"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="signup-password"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Password
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <Lock size={18} />
                                                    </div>
                                                    <input
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        id="signup-password"
                                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#262b5f] focus:border-[#262b5f] outline-none transition-colors"
                                                        placeholder="••••••••"
                                                    />
                                                    <div
                                                        className="absolute right-0 inset-y-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600"
                                                        onClick={
                                                            toggleShowPassword
                                                        }
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff size={18} />
                                                        ) : (
                                                            <Eye size={18} />
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="mt-1 text-xs text-gray-500">
                                                    Must be at least 8
                                                    characters with 1 uppercase,
                                                    1 number, and 1 special
                                                    character.
                                                </p>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    id="terms"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-[#262b5f] focus:ring-[#262b5f] border-gray-300 rounded"
                                                />
                                                <label
                                                    htmlFor="terms"
                                                    className="ml-2 block text-xs text-gray-700"
                                                >
                                                    I agree to The Joy
                                                    Junction&apos;s{" "}
                                                    <Link
                                                        href="/terms"
                                                        className="text-[#262b5f] hover:underline"
                                                    >
                                                        Terms of Service
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link
                                                        href="/privacy"
                                                        className="text-[#262b5f] hover:underline"
                                                    >
                                                        Privacy Policy
                                                    </Link>
                                                    .
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-[#262b5f] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Create Account{" "}
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {/* Social Login Options */}
                                <div className="mt-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="px-4 bg-white text-sm text-gray-500">
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            className="w-full py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#262b5f] flex items-center justify-center gap-2"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                            </svg>
                                            Google
                                        </button>

                                        <button
                                            type="button"
                                            className="w-full py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#262b5f] flex items-center justify-center gap-2"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                            </svg>
                                            Facebook
                                        </button>
                                    </div>
                                </div>

                                {/* Toggle between login and signup */}
                                <div className="mt-8 text-center text-sm">
                                    <p className="text-gray-600">
                                        {isLogin
                                            ? "New to The Joy Junction? "
                                            : "Already have an account? "}
                                        <button
                                            type="button"
                                            onClick={toggleForm}
                                            className="text-[#262b5f] font-medium hover:underline focus:outline-none"
                                        >
                                            {isLogin
                                                ? "Create an account"
                                                : "Sign in"}
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1e1e3f] mb-6 font-baloo tracking-wide">
                        ✨ Magical Benefits of Joining Us ✨
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-50">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 text-[#262b5f] animate-pulse-slow">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 7L12 3L4 7M20 7V17L12 21M20 7L12 11M12 21L4 17V7M12 21V11M4 7L12 11"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="font-bold text-xl text-gray-800 mb-3 font-baloo">
                                Track Your Treasures 🚚
                            </h4>
                            <p className="text-gray-600 font-fredoka">
                                Follow your toy adventures from order to
                                delivery, all in one magical place!
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-pink-50">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-5 text-[#262b5f] animate-bounce-slow">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="font-bold text-xl text-gray-800 mb-3 font-baloo">
                                Save Favorites ❤️
                            </h4>
                            <p className="text-gray-600 font-fredoka">
                                Build magical wishlists and save your little
                                one&apos;s dream toys for special occasions!
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-50">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 text-[#262b5f] animate-float">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="font-bold text-xl text-gray-800 mb-3 font-baloo">
                                Magical Recommendations ✨
                            </h4>
                            <p className="text-gray-600 font-fredoka">
                                Discover perfectly matched toys for your
                                child&apos;s age, interests, and development
                                stage!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
