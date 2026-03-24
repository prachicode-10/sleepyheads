/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    light: '#FFFDF5',
                    DEFAULT: '#F5F2E8',
                    dark: '#E8E1D0',
                },
                chocolate: {
                    light: '#8D6E63',
                    DEFAULT: '#5D4037',
                    dark: '#3E2723',
                },
                strawberry: {
                    light: '#FFEBEE',
                    DEFAULT: '#FFCDD2',
                    dark: '#EF9A9A',
                },
                mint: {
                    light: '#E8F5E9',
                    DEFAULT: '#C8E6C9',
                    dark: '#A5D6A7',
                },
                lavender: {
                    light: '#F3E5F5',
                    DEFAULT: '#E1BEE7',
                    dark: '#CE93D8',
                }
            },
            fontFamily: {
                rounded: ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'subtle-float': 'subtle-float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'subtle-float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
