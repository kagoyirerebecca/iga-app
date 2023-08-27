/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: "#d9d9d9",
        aqua: "#42f5ff",
        salmon: {
          "100": "#f06a6a",
          "200": "rgba(240, 106, 106, 0.66)",
        },
        white: "#fff",
        black: "#000",
        lightgray: {
          "100": "#cccbcb",
          "200": "rgba(203, 203, 203, 0.46)",
        },
        gray: {
          "100": "#040100",
          "200": "rgba(0, 0, 0, 0.69)",
        },
        lightcoral: "#ff8c8c",
        silver: "#c3c3c3",
        whitesmoke: "#f9f9f9",
        mediumseagreen: "#00af66",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "6xs": "7px",
        "21xl": "40px",
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      mini: "15px",
      "17xl": "36px",
      "13xl": "32px",
      base: "16px",
      "29xl": "48px",
      sm: "14px",
      "2xs": "11px",
      xs: "12px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
