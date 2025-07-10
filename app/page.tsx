import AboutSection from "./components/AboutSection";
import BlogCarousel from "./components/BlogSection";
import CategoriesAndAges from "./components/CategoriesAndAges";
import FeatureStrip from "./components/FeatureStrip";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/PopularProducts";
import Testimonials from "./components/TestimonialSection";

export default function Page() {
    return (
        <main className="w-full">
            <Marquee />
            <Navbar />
            <HeroSlider />
            <CategoriesAndAges />
            <AboutSection />
            <PopularProducts />
            <FeatureStrip />
            <Testimonials />
            <BlogCarousel />
            <Footer />
        </main>
    );
}
