import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
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
                float: "float 6s ease-in-out infinite",
                "bounce-slow": "bounce-slow 3s ease-in-out infinite",
                "pulse-slow": "pulse-slow 4s ease-in-out infinite",
                "float-cloud": "float-cloud 30s linear infinite",
                "twinkle": "twinkle 2s ease-in-out infinite",
                "lightning": "lightning 8s ease-out infinite",
            },
            keyframes: {
                "marquee-rtl": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "bounce-slow": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-slow": {
                    "0%, 100%": { opacity: "0.15" },
                    "50%": { opacity: "0.3" },
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
                "float-cloud": {
                    "0%": { transform: "translateX(-20%) translateY(0)" },
                    "50%": { transform: "translateX(45%) translateY(-15px)" },
                    "100%": { transform: "translateX(110%) translateY(0)" },
                },
                "twinkle": {
                    "0%": { opacity: "0.2", transform: "scale(0.8)" },
                    "50%": { opacity: "1", transform: "scale(1)" },
                    "100%": { opacity: "0.2", transform: "scale(0.8)" },
                },
                "lightning": {
                    "0%, 100%": { opacity: "0" },
                    "3%, 4%": { opacity: "0.8" },
                    "5%, 7%": { opacity: "0" },
                    "8%, 9%": { opacity: "1" },
                    "10%, 100%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
