module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFA6",
        mainText: "#212121",
        accentText: "#EB5757",
        background: "#f2f2f2",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
    screens: {
      sm: "640px", // 모바일
      md: "1024px", //pc,
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".btn-primary": {
          backgroundColor: "#00BFA6",
          color: "#fff",
          fontSize: "0.9375rem",
          fontWeight: "600",
          padding: "0.625rem 1.25rem",
          borderRadius: "0.375rem",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#009D89",
          },
          "&:disabled": {
            backgroundColor: "#a3dcd6",
            cursor: "not-allowed",
          },
        },
        ".btn-gray": {
          backgroundColor: "#F5F5F5",
          color: "#000",
          fontSize: "0.9375rem",
          fontWeight: "400",
          padding: "0.625rem 1.25rem",
          borderRadius: "0.375rem",
          transition: "all 0.2s ease-in-out",

          "&:disabled": {
            backgroundColor: "#a3dcd6",
            cursor: "not-allowed",
          },
        },
        ".text-body": {
          fontSize: "1rem",
          lineHeight: "1.75rem",
          color: "#212121",
          fontWeight: "400",
        },
        ".text-strong": {
          color: "#00BFA6",
          fontWeight: "700",
        },
        ".btn-outline": {
          /* CSS 변수로 색상을 받도록 변경 */
          border: "2px solid var(--btn-color)",
          color: "var(--btn-color)",
          /* 나머지 스타일 동일 */
          fontSize: "0.9375rem",
          fontWeight: "600",
          padding: "0.625rem 1.25rem",
          borderRadius: "0.375rem",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "var(--btn-color)",
            color: "var(--btn-text-color, #fff)", // fallback white if --btn-text-color is not provided
          },
          "&:disabled": {
            backgroundColor: theme("colors.background"),
            cursor: "not-allowed",
          },
        },
      });
    },
  ],
};
