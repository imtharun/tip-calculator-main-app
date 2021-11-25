module.exports = {
  purge:{
    enabled: true,
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        vdarkGrayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        vlightGrayishCyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",

        tight: "-.025em",
        normal: "0",

        wide: ".025em",
        wider: ".05em",

        widest: ".1em",

        widest: ".25em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
