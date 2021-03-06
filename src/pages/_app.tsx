import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "../services/mirage";
import theme from "../styles/theme";
makeServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
