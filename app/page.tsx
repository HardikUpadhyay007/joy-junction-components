import AboutSection from "./components/AboutSection";
import CategoriesAndAges from "./components/CategoriesAndAges";
import HeroSlider from "./components/HeroSlider";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/PopularProducts";

export default function Page() {
    return (
        <main className="w-full">
            <Marquee />
            <Navbar />
            <HeroSlider />
            <CategoriesAndAges />
            <AboutSection />
            <PopularProducts />
        </main>
    );
}
