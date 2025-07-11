import React from "react";
import { Accordion } from "../components/Accordion";

export const metadata = {
    title: "Frequently Asked Questions | The Joy Junction",
    description:
        "Find answers to common questions about our products, shipping, returns, and more.",
};

export default function FAQPage() {
    const faqItems = [
        {
            id: "shipping",
            title: "What are my shipping options?",
            content: (
                <div className="space-y-2">
                    <p>We offer several shipping options to meet your needs:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <span className="font-medium">
                                Standard Shipping
                            </span>
                            : 3-5 business days (Free on orders over ₹1,000)
                        </li>
                        <li>
                            <span className="font-medium">
                                Express Shipping
                            </span>
                            : 1-2 business days (₹250)
                        </li>
                        <li>
                            <span className="font-medium">
                                Same Day Delivery
                            </span>
                            : Available in select cities for orders placed
                            before 12 PM
                        </li>
                    </ul>
                    <p>
                        Please note that delivery times may vary during peak
                        seasons and holidays. International shipping is
                        available to select countries.
                    </p>
                </div>
            ),
        },
        {
            id: "age-groups",
            title: "Can I filter toys by different age groups?",
            content: (
                <div>
                    <p>
                        Yes! We&apos;ve organized our entire toy collection by
                        age groups to help you find the perfect toys for your
                        child&apos;s developmental stage. You can shop by these
                        age categories:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                            2-4 years: Early developmental toys focusing on
                            basic motor skills and sensory play
                        </li>
                        <li>
                            4-6 years: Creative toys that encourage imagination
                            and beginning problem-solving
                        </li>
                        <li>
                            6-8 years: More advanced games and toys for
                            developing academic and social skills
                        </li>
                        <li>
                            8+ years: Complex toys and games that challenge
                            older children
                        </li>
                    </ul>
                    <p className="mt-2">
                        Each product page also clearly displays the recommended
                        age range to help with your selection.
                    </p>
                </div>
            ),
        },
        {
            id: "custom-kits",
            title: "Do you offer customizable learning kits?",
            content: (
                <div>
                    <p>
                        Yes! Our Custom Learning Kits allow you to create
                        personalized educational toy packages tailored to your
                        child&apos;s interests, learning style, and
                        developmental needs.
                    </p>
                    <p className="mt-2">
                        You can select from our range of flashcards, wooden
                        toys, puzzles, and educational games to build a kit that
                        perfectly matches your child&apos;s learning journey. We
                        also offer pre-designed kits focused on specific skills
                        like language development, mathematics, creativity, and
                        more.
                    </p>
                    <p className="mt-2">
                        For preschools and educational institutions, we offer
                        bulk customization with special pricing. Visit our{" "}
                        <a
                            href="/customkit"
                            className="text-blue-600 hover:underline"
                        >
                            Custom Kit page
                        </a>{" "}
                        to get started!
                    </p>
                </div>
            ),
        },
        {
            id: "refunds",
            title: "What is your return and refund policy?",
            content: (
                <div>
                    <p>
                        We want you to be completely satisfied with your
                        purchase from The Joy Junction. If you&apos;re not
                        entirely happy with your order, we offer a simple return
                        and refund process:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Returns accepted within 30 days of delivery</li>
                        <li>
                            Items must be unused, undamaged, and in original
                            packaging
                        </li>
                        <li>Include your order number and reason for return</li>
                        <li>
                            Refunds are processed within 5-7 business days after
                            we receive the returned items
                        </li>
                        <li>
                            Shipping costs for returns are the responsibility of
                            the customer, except in cases of defective products
                        </li>
                    </ul>
                    <p className="mt-2">
                        For damaged or defective items, please contact our
                        customer service team within 48 hours of receiving your
                        order, and we&apos;ll arrange a replacement or refund.
                    </p>
                </div>
            ),
        },
        {
            id: "safety",
            title: "How safe are your toys?",
            content: (
                <div>
                    <p>
                        Safety is our top priority at The Joy Junction. All our
                        toys meet or exceed the highest safety standards:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                            Rigorous testing for durability, safety, and quality
                        </li>
                        <li>Non-toxic materials and child-safe paints</li>
                        <li>
                            Age-appropriate designs to minimize choking hazards
                        </li>
                        <li>
                            Compliance with international safety regulations
                        </li>
                    </ul>
                    <p className="mt-2">
                        We carefully select manufacturers who share our
                        commitment to creating safe, high-quality educational
                        toys. Each product undergoes multiple quality checks
                        before reaching your doorstep.
                    </p>
                </div>
            ),
        },
        {
            id: "partnership",
            title: "Do you offer special pricing for preschools?",
            content: (
                <div>
                    <p>
                        Yes! Our Preschool Partnership Program is designed
                        specifically for educational institutions. We understand
                        the importance of providing high-quality, educational
                        activities to young learners, which is why we offer:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Significant discounts on bulk orders</li>
                        <li>
                            Customizable orders to suit your curriculum needs
                        </li>
                        <li>Free shipping on orders over a certain amount</li>
                        <li>Priority access to new educational products</li>
                        <li>
                            Special promotions exclusively for partner
                            institutions
                        </li>
                    </ul>
                    <p className="mt-2">
                        Visit our{" "}
                        <a
                            href="/partnership-program"
                            className="text-blue-600 hover:underline"
                        >
                            Preschool Partnership Program
                        </a>{" "}
                        page to learn more or contact us for a custom quote
                        tailored to your needs.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A4A] mb-8 text-center">
                        Frequently Asked Questions
                    </h1>

                    <p className="text-lg text-gray-700 mb-12 text-center">
                        Find answers to common questions about our educational
                        toys, shipping options, custom learning kits, and return
                        policies. If you can&apos;t find what you&apos;re
                        looking for, please reach out to our friendly team.
                    </p>

                    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                        <Accordion items={faqItems} />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700 mb-6">
                            Still have questions? We&apos;re here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
