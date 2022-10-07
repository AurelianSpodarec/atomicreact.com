/** @type {import('tailwindcss').Config} */ 
module.exports = {
    mode: 'jit',
    content: [
        './src/components/**/*.{js,ts,jsx,tsx}', 
        './src/pages/**/*.{js,ts,jsx,tsx}'
    ],
    purge: {
        enabled: true,
        content: [
            "./src/components/**/*.{js,ts,jsx,tsx}", 
            "./src/pages/**/*.{js,ts,jsx,tsx}",
        ]
    },
    theme: {
        extend: {},
    },
    plugins: [],
}