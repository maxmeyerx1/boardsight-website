import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Design-Tokens: Die Werte stehen als RGB-Kanäle in src/app/globals.css (:root),
 * damit Tailwind-Opazitäten wie `bg-brand-900/80` funktionieren.
 */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        brand: {
          900: token("brand-900"),
          700: token("brand-700"),
          500: token("brand-500"),
        },
        accent: {
          400: token("accent-400"),
        },
        neutral: {
          50: token("neutral-50"),
          600: token("neutral-600"),
          900: token("neutral-900"),
        },
        // shadcn/ui-Aliase
        background: token("neutral-50"),
        foreground: token("neutral-900"),
        primary: { DEFAULT: token("brand-700"), foreground: "rgb(255 255 255 / <alpha-value>)" },
        muted: { DEFAULT: token("neutral-100"), foreground: token("neutral-600") },
        border: token("neutral-200"),
        input: token("neutral-300"),
        ring: token("brand-500"),
        destructive: { DEFAULT: token("danger-600"), foreground: "rgb(255 255 255 / <alpha-value>)" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -3%) scale(1.06)" },
        },
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
        marquee: "marquee 40s linear infinite",
        float: "float 14s ease-in-out infinite",
        "float-slow": "float 22s ease-in-out infinite reverse",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};

export default config;
