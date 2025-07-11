import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                baloo: ["var(--font-baloo)"],
                fredoka: ["var(--font-fredoka)"],
                quicksand: ["var(--font-quicksand)", "sans-serif"],
                sans: ["var(--font-quicksand)", "ui-sans-serif", "system-ui"],
            },
            animation: {
                "marquee-rtl": "marquee-rtl 25s linear infinite",
                "zoom-slow": "zoom 20s ease-in-out infinite",
                fadeIn: "fadeIn 1s ease-in-out",
                "slide-left": "slide-left 0.3s ease-out",
                "spin-slow": "spin 15s linear infinite",
            },
            keyframes: {
                "marquee-rtl": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                zoom: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                    "100%": { transform: "scale(1)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-left": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
