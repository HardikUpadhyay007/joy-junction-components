import React from "react";
import Image from "next/image";
import { ShoppingBag, Pencil, Clock, Megaphone } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Preschool Partnership Program | The Joy Junction",
    description:
        "Special pricing and exclusive benefits for preschools and educational institutions",
};

export default function PartnershipProgramPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero section */}
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/partner-pic.jpg"
                            alt="Children doing creative activities"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Preschool Partnership Program
                        </h1>

                        <p className="text-lg text-gray-700">
                            Welcome to our Preschool Partnership Program! We
                            understand the importance of providing high-quality,
                            educational activities to young learners.
                            That&apos;s why we offer{" "}
                            <span className="font-medium">special pricing</span>{" "}
                            and{" "}
                            <span className="font-medium">
                                exclusive benefits
                            </span>{" "}
                            to preschools.
                        </p>

                        <div className="pt-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Special Pricing
                            </h2>
                            <p className="text-gray-700">
                                – As a valued partner, preschools receive
                                significant discounts on bulk orders. Our
                                pricing is designed to make it affordable for
                                educational institutions to provide the best
                                toys for their students. Contact us for a custom
                                quote tailored to your needs.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Exclusive Products
                            </h2>
                            <p className="text-gray-700">
                                – We offer a range of toys specifically selected
                                for educational purposes. We specialize in flash
                                card-based learning.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Benefits
                            </h2>
                            <p className="text-gray-700">
                                – Partnering with us comes with numerous
                                benefits:
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="p-3 bg-blue-50 rounded-full mb-4">
                            <ShoppingBag className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Free shipping on orders over a certain amount
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="p-3 bg-blue-50 rounded-full mb-4">
                            <Pencil className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Customizable orders to suit your curriculum needs
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="p-3 bg-blue-50 rounded-full mb-4">
                            <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Priority access to new products
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="p-3 bg-blue-50 rounded-full mb-4">
                            <Megaphone className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Special promotions
                        </h3>
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to Join Our Partnership Program?
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Contact us today to learn more about how your preschool
                        can benefit from our partnership program.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
