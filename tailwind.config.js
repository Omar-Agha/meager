import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "xyz0090",

    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                "arabic-cairo": ["Cairo", "sans-serif"],
                "arabic-noto-kufi": ["Noto Kufi Arabic", "sans-serif"]
            },
            colors: {
                app: {
                    primary: {
                        DEFAULT: "#372d3d",
                        50: "#6e5866",
                        100: "#5c4758",
                        200: "#4a3c49",
                        300: "#402a3b",
                        400: "#372d3d",
                        500: "#2e2128",
                        600: "#261a22",
                        700: "#1e141a",
                        800: "#170d13",
                        900: "#120a0d"
                    },
                    secondary: {
                        DEFAULT: "#dab67d",
                        50: "#f3e1b0",
                        100: "#e7cc8a",
                        200: "#ddbf64",
                        300: "#d3b03d",
                        400: "#dab67d",
                        500: "#c69b5b",
                        600: "#b28642",
                        700: "#9d7734",
                        800: "#8c6930",
                        900: "#7a5b2a"
                    }


                },
            },
        },
    },

    plugins: [forms, typography],
};
