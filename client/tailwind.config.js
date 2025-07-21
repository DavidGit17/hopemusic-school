/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cta-btn-bg': '#D9183B',
                'main-backg': '#f5f5f5',
            },
            // fontFamily: {
            //     inter: ['Inter', 'sans-serif'],
            //     edu: ['Edu VIC WA NT Beginner', 'cursive'],
            //     playfairdisplay: ['Playfair Display', 'serif'], // <-- must have space!
            // },
        },
    },
    plugins: [],
}
