import CategoriesAndAges from "./components/CategoriesAndAges";
import HeroSlider from "./components/HeroSlider";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

export default function Page() {
    return (
        <main className="w-full">
            <Marquee />
            <Navbar />
            <HeroSlider />
            <CategoriesAndAges />
        </main>
    );
}
