/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      pre: ["Pretendard", "sans-serif"]
    },
    extend: {
      screens: {
        xs: "360px",
        sm: "640px", // Default Tailwind breakpoint
        md: "768px", // Default Tailwind breakpoint
        lg: "1024px" // Default Tailwind breakpoint
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        scroll: "scroll 20s linear infinite"
      }
    }
  },

  plugins: [require("tailwind-scrollbar")]
};
