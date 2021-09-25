import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ItemInfo } from ".";

const SectionStyles: FC = () => {
  return (
    <Box as="section" p={{ base: "36px 0", xl: "100px 0 80px 0" }}>
      <Box maxW={{ base: "275px", xl: "1160px" }} m="auto">
        <Box
          d="grid"
          gridTemplateColumns={{ base: "1fr 1fr", xl: "repeat(5, 1fr)" }}
        >
          <ItemInfo
            name="vida noturna"
            icon="cocktail.svg"
            justifyContent={{ xl: "start" }}
            mb={{ base: "25px", xl: "0" }}
          />
          <ItemInfo
            name="praia"
            icon="surf.svg"
            justifyContent={{ base: "end", xl: "center" }}
            mb={{ base: "25px", xl: "0" }}
          />
          <ItemInfo
            name="moderno"
            icon="building.svg"
            justifyContent={{ base: "start", xl: "center" }}
            mb={{ base: "25px", xl: "0" }}
          />
          <ItemInfo
            name="clássico"
            icon="museum.svg"
            justifyContent={{ base: "end", xl: "center" }}
            mb={{ base: "25px", xl: "0" }}
          />
          <ItemInfo
            name="e mais..."
            icon="earth.svg"
            gridColumn={{ base: "1/3", xl: "auto" }}
            d="flex"
            justifyContent={{ base: "center", xl: "end" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionStyles;
