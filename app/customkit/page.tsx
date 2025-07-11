"use client";

import Image from "next/image";

const CustomLearningKits = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Main Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6 text-center">
                    Let&apos;s Make Learning a Blast with Joy Box - JJ&apos;s
                    Custom learning Kits!
                </h1>

                {/* Introduction Text */}
                <p className="text-gray-700 mb-10 text-center max-w-4xl mx-auto">
                    Hey parents! Want to make learning super fun for your
                    kiddos? At The Joy Junction, we create awesome game kits
                    just for your child, based on what they love and what you
                    want to teach them!
                </p>

                {/* Full Width Image */}
                <div className="mb-12">
                    <Image
                        src="/customkit-pic.jpg"
                        alt="Kids excited about receiving a custom learning box"
                        width={900}
                        height={600}
                        className="rounded-lg object-cover w-full max-w-4xl mx-auto h-auto shadow-md"
                    />
                </div>

                {/* Content Below Image */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                        How It Works:
                    </h2>

                    <ol className="space-y-6 mb-8">
                        <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                1
                            </span>
                            <div>
                                <p className="font-semibold text-lg text-gray-800">
                                    Tell Us About Your Kiddo
                                </p>
                                <p className="text-gray-600">
                                    Fill out our questionnaire. Tell us all
                                    about your child&apos;s favorite things and
                                    what they love to learn.
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                2
                            </span>
                            <div>
                                <p className="font-semibold text-lg text-gray-800">
                                    We Create the Perfect Kit
                                </p>
                                <p className="text-gray-600">
                                    Our team of learning wizards lol will put
                                    together a special kit full of games and
                                    activities just for your child. It&apos;s
                                    like magic!
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                3
                            </span>
                            <div>
                                <p className="font-semibold text-lg text-gray-800">
                                    Delivered Right to You
                                </p>
                                <p className="text-gray-600">
                                    Sit back and relax! We&apos;ll send the kit
                                    straight to your door, ready for your child
                                    to dive into learning fun.
                                </p>
                            </div>
                        </li>
                    </ol>

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                        Why Choose Custom Edu-Kits?
                    </h2>

                    <ul className="space-y-3 mb-10">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <p className="text-gray-700">
                                <span className="font-semibold">
                                    Totally Personalized:
                                </span>
                                Each kit is made just for your child, with their
                                favorite things in mind.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <p className="text-gray-700">
                                <span className="font-semibold">
                                    Fun Learning:
                                </span>{" "}
                                Our games make learning super exciting and
                                awesome.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <p className="text-gray-700">
                                <span className="font-semibold">
                                    Easy Peasy:
                                </span>{" "}
                                Simple to order and delivered right to your
                                home.
                            </p>
                        </li>
                    </ul>

                    <p className="text-sm italic text-gray-500 text-justify">
                        NOTE: These boxes take more time than our regular kits.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CustomLearningKits;
