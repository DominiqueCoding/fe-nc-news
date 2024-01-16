/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
      },
    },
    daisyui: {
      themes: [
        "light", 
        "dark", 
        "cupcake",
        {
          nclight: {
            "primary": "#a991f7",
            "secondary": "#f6d860",
            "accent": "#37cdbe",
            "neutral": "#3d4451",
            "base-100": "#ffffff",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}

