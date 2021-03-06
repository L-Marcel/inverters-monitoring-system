import { extendTheme } from "@chakra-ui/react";
import colors from "./colors.json";

const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      ":root": {
        "--primary": colors.primary[500],
        "--primary-500": colors.primary[500],
        "--primary-400": colors.primary[400],
        "--primary-300": colors.primary[300],
        "--secondary-500": colors.secondary[500],
        "--secondary-400": colors.secondary[400],
        "--secondary-300": colors.secondary[300],
        "--whitesmoke": colors.whitesmoke,
        "--white": colors.white
      },
      "*": {
        userSelect: "none",
        transition: "filter .2s linear !important",
      },
      "::-webkit-scrollbar": {
        w: 2,
        mr: -2
      },
      "::-webkit-scrollbar-track": {
        background: colors.primary[300]
      },
      "::-webkit-scrollbar-thumb": {
        background: colors.primary[400],
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: colors.primary[500],
      },
      img: {
        userDrag: "none",
        pointerEvents: "none"
      },
      body: {
        bg: colors.white,
        h: "100vh",
        w: "100vw",
        overflow: "hidden"
      },
      "button:hover": {
        filter: "brightness(0.95)"
      },
      "*:focus": {
        boxShadow: "none !important"
      },
      "input:focus": {
        boxShadow: "none !important"
      },
      ".chakra-checkbox__control:not([data-checked])": {
        color: "var(--primary) !important",
        bgColor: "primary.100"
      }
    }
  }
});

export default theme;