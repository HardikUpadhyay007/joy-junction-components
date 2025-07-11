import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1e2554] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* Logo */}
                <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                    <Image
                        src="/logo.png"
                        alt="The Joy Junction"
                        width={160}
                        height={60}
                    />
                </div>

                {/* Address */}
                <div>
                    <h4 className="text-white font-semibold mb-2">Address</h4>
                    <p className="text-gray-300">Jaipur, Rajasthan</p>
                </div>

                {/* Useful links */}
                <div>
                    <h4 className="text-white font-semibold mb-2">
                        Useful links
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop/age">Shop by Age →</Link>
                        </li>
                        <li>
                            <Link href="/shop/categories">
                                Shop by Categories →
                            </Link>
                        </li>
                        <li>
                            <Link href="/custom-kit">Custom Kit</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Other links */}
                <div>
                    <h4 className="text-white font-semibold mb-2">
                        Other links
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/returns">
                                Refund and Returns Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms and Condition</Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter & Socials */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold mb-2">
                        Subscribe to our newsletter
                    </h4>
                    <p className="text-gray-300 text-sm leading-5">
                        for learning tips, product news and exclusive offers!
                    </p>

                    {/* Input */}
                    <form className="flex flex-col space-y-4">
                        <div className="relative">
                            <div className="absolute left-0 top-[50%] transform -translate-y-1/2 text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 pl-7 pr-10 focus:outline-none focus:border-white transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-[50%] transform -translate-y-1/2 text-white h-8 w-8 flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        </div>

                        <label className="text-sm text-gray-300 flex items-start gap-2 cursor-pointer">
                            <div className="relative flex items-center mt-1">
                                <input
                                    type="checkbox"
                                    id="privacy-checkbox"
                                    className="appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-transparent checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition-colors"
                                />
                                <svg
                                    className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5 top-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span>
                                I agree to the{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="text-white hover:text-blue-300 underline transition"
                                >
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>
                    </form>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4 mt-4">
                        <Link href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook text-xl" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank">
                            <i className="fab fa-youtube text-xl" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <i className="fab fa-instagram text-xl" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <i className="fab fa-linkedin text-xl" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-12 text-center text-sm text-gray-400">
                © 2024 The Joy Junction | A Venture of VYOM COMMERCE | Made with
                ♥ by:{" "}
                <Link
                    href="https://astrolabs.studio"
                    className="text-pink-400 underline"
                    target="_blank"
                >
                    AstroLabs
                </Link>
            </div>
        </footer>
    );
}
