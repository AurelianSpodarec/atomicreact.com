/** @type {import('tailwindcss').Config} */ 
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx}", 
        "./src/pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"),],
};