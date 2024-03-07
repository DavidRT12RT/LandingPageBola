// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.css", // Agrega tus estilos personalizados aquí
    ],
    theme: {
        extend: {
            colors:{
                primary:"#020617",
                secondary:"#171923",
                button:"#3533CD"
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};