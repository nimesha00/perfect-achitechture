import { error } from "console";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        customLg: "1180px",
      },
      fontFamily: {
        glorify: ["var(--font-glorify)", "sans-serif"],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        clashGrotesk: ["var(--font-clashGrotesk)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primaryGold: {
          DEFAULT: "hsl(var(--primary-gold))",
          foreground: "hsl(var(--primary-gold-foreground))",
        },
        primaryPink: {
          DEFAULT: "hsl(var(--primary-pink))",
          foreground: "hsl(var(--primary-pink-foreground))",
        },

        primaryMintGreen: {
          DEFAULT: "hsl(var(--primary-mint-green))",
          foreground: "hsl(var(--primary-mint-green-foreground))",
        },

        successGreen: {
          DEFAULT: "hsl(var(--primary-success))",
        },
        successGreenBackground: {
          DEFAULT: "hsl(var(--primary-success-background))",
        },
        errorButton: {
          DEFAULT: "hsl(var(--primary-error-button))",
        },
        errorButtonBackground: {
          DEFAULT: "hsl(var(--primary-error-button-background))",
        },
        primaryYellow: {
          DEFAULT: "hsl(var(--primary-yellow))",
        },
        primaryYellowBackground: {
          DEFAULT: "hsl(var(--primary-yellow-background))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        secondaryGray: {
          DEFAULT: "hsl(var(--secondary-gray))",
          foreground: "hsl(var(--secondary-gray-foreground))",
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
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        bestDeals: {
          DEFAULT: "hsl(var(--best-deals))",
          foreground: "hsl(var(--best-deals-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        featuredGray: {
          DEFAULT: "hsl(var(--featured-gray))",
          foreground: "hsl(var(--featured-gray-foreground))",
        },
        textGray: {
          DEFAULT: "hsl(var(--text-gray))",
          foreground: "hsl(var(--text-gray-forground))",
        },
        lineGray: {
          DEFAULT: "hsl(var(--line-gray))",
          foreground: "hsl(var(--line-gray-foreground))",
        },
        lightBlue: {
          DEFAULT: "hsl(var(--light-blue))",
          foreground: "hsl(var(--light-blue-foreground))",
        },
        lightPurple: {
          DEFAULT: "hsl(var(--light-purple))",
          foreground: "hsl(var(--light-purple-foreground))",
        },
        lightOrange: {
          DEFAULT: "hsl(var(--light-orange))",
          foreground: "hsl(var(--light-orange-foreground))",
        },
        lightYellow: {
          DEFAULT: "hsl(var(--light-yellow))",
          foreground: "hsl(var(--light-yellow-foreground))",
        },
        PrimaryOpacityGray: {
          DEFAULT: "hsl(var(--primary-dark-opacity-gray))",
          foreground: "hsl(var(--light-yellow-foreground))",
        },
        backgroundGray: {
          DEFAULT: "hsl(var(--background-gray))",
          foreground: "hsl(var(--background-gray-foreground))",
        },
        itemGray: {
          DEFAULT: "hsl(var(--item-gray))",
          foreground: "hsl(var(--item-gray-foreground))",
        },
        itemRed: {
          DEFAULT: "hsl(var(--item-red))",
          foreground: "hsl(var(--item-red-foreground))",
        },
        crimsonRed: {
          DEFAULT: "hsl(var(--crimson-red))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "best-deals-shop": "url('/assets/images/shop/best-deals-img.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
