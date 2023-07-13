const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        pokemon: {
          normal: "#fad390",
          fire: "#f8c291",
          water: "#c7ecee",
          grass: "#b8e994",
          electric: "#f6e58d",
          ice: "#dff9fb",
          fighting: "#ea8685",
          poison: "#a29bfe",
          ground: "#eccc68",
          flying: "#9c88ff",
          psychic: "#ffcccc",
          bug: "#78e08f",
          rock: "#ccae62",
          ghost: "#686de0",
          dark: "#C4A484",
          dragon: "#7d5fff",
          steel: "#c8d6e5",
          fairy: "#f8a5c2",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pastel: {
          green: {
            100: "#E9FFC2",
            200: "#DDFFBB",
            300: "#C7E9B0",
            400: "#B3C99C",
          },
          pink: {
            100: "#F9F5F6",
            200: "#F8E8EE",
            300: "#FEDEFF",
            400: "#FDCEDF",
            500: "#F2BED1",
          },
          purple: {
            100: "#F4EEFF",
            200: "#DCD6F7",
            300: "#A6B1E1",
            400: "#424874",
          },
          yellow: {
            100: "#FFFBC1",
            200: "#FDFDBD",
            300: "#FDFFAE",
            400: "#FCFFA6",
            500: "#F7FDB1",
            700: "#EEF3AD",
          },
          blue: {
            300: "#B8E8FC",
          },
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
