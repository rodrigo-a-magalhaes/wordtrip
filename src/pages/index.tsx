import { Box, Divider } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import {
  PageHeader,
  SectionHero,
  SectionSlider,
  SectionStyles,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Word Trip</title>
      </Head>
      <Box as="main">
        <PageHeader />
        <SectionHero />
        <SectionStyles />
        <Divider
          m="auto"
          w={{ base: "60px", xl: "90px" }}
          borderColor="brand.headingText"
        />
        <SectionSlider />
      </Box>
    </>
  );
}
