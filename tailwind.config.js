module.exports = {
  "[data-theme=dark]": {
    primary: "#793ef9",
    "primary-focus": "#570df8",
    "primary-content": "#ffffff",
    secondary: "#f000b8",
    "secondary-focus": "#bd0091",
    "secondary-content": "#ffffff",
    accent: "#37cdbe",
    "accent-focus": "#2aa79b",
    "accent-content": "#ffffff",
    neutral: "#2a2e37",
    "neutral-focus": "#16181d",
    "neutral-content": "#ffffff",
    "base-100": "#3d4451",
    "base-200": "#2a2e37",
    "base-300": "#16181d",
    "base-content": "#ebecf0",
    info: "#66c6ff",
    success: "#87d039",
    warning: "#e2d562",
    error: "#ff6f6f",
    "--border-color": "var(--b3)",
    "--rounded-box": "1rem",
    "--rounded-btn": "0.5rem",
    "--rounded-badge": "1.9rem",
    "--animation-btn": "0.25s",
    "--animation-input": ".2s",
    "--btn-text-case": "uppercase",
    "--btn-focus-scale": "0.95",
    "--navbar-padding": ".5rem",
    "--border-btn": "1px",
    "--tab-border": "1px",
    "--tab-radius": "0.5rem",
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
