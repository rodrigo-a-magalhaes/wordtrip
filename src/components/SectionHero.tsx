import { Box, Image, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

import { TripContainer } from ".";

const SectionHero: FC = () => {
  return (
    <Box
      as="section"
      bgImage="url(/static/Background.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <TripContainer
        h={{ base: "163px", xl: "335px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w={{ base: "100%", xl: "50%" }}
          alignItems="end"
          justifyContent="end"
        >
          <Box maxW="524px">
            <Text as="h1" color="brand.headings">
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Text>
            <Text as="h5" color="brand.infoLight" mt={{ base: 2, xl: 5 }}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
        </Flex>

        <Box w="50%" mb="-120px" d={{ base: "none", xl: "block" }}>
          <Image m="auto" src="/static/Airplane.svg" alt="Viagem" />
        </Box>
      </TripContainer>
    </Box>
  );
};

export default SectionHero;
