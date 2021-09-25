import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      headings: "#F5F8FA",
      white: "#FFFFFF",
      highlight: "#FFBA08",
      highlight50: "rgba(255, 186, 8, 0.5)",
      headingText: "#47585B",
      info: "#999999",
      infoLight: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#F5F8FA",
        color: "#47585B",
      },
      h1: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: { base: "20px", xl: "36px" },
        lineHeight: { base: "30px", xl: "54px" },
      },
      h2: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: { base: "24px", xl: "36px" },
        lineHeight: { base: "36px", xl: "54px" },
      },
      h3: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: { base: "14px", xl: "36px" },
        lineHeight: { base: "21px", xl: "54px" },
      },
      h5: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: { base: "14px", xl: "20px" },
        lineHeight: { base: "21px", xl: "30px" },
      },
    },
  },
});

export default theme;
