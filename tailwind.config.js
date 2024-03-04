/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    fontSize: {
      xxs: "0.6875rem",
      xs: "0.75rem",
      sm: "0.8125rem",
      base: "0.875rem",
      xl: "1rem",
      "2xl": "1.125rem",
      "3xl": "1.5rem",
    },
    extend: {
      colors: {
        aiGradient: {
          100: "linear-gradient(141deg, rgba(215,249,230,1) 0%, rgba(255,255,255,1) 100%)",
        },
        dwGreen: {
          100: "#63D195",
          200: "#4DCA85",
          300: "#36C476",
          400: "#20BD67",
          500: "#1DAA5D",
          600: "#1A9752",
          700: "#168448",
          800: "#13713E",
          900: "#0B502B",
        },
        dwBlack: {
          100: "#F8F8F8",
          200: "#E1E1E1",
          300: "#CBCBCB",
          400: "#B4B4B4",
          500: "#9E9E9E",
          600: "#878787",
          700: "#717171",
          800: "#5A5A5A",
          900: "#444444",
          1000: "#2D2D2D",
          1100: "#171717",
          1200: "#000000",
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  }
};
