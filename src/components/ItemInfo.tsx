import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Image,
  ContainerProps,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface ItemInfoProps extends ContainerProps {
  name: string;
  icon: string;
}

const ItemInfo: FC<ItemInfoProps> = ({ icon, name, ...props }) => {
  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  });
  return (
    <Flex alignItems="center" flexDirection={{ xl: "column" }} {...props}>
      {!isMobile ? (
        <Image w="85px" h="85px" src={`/static/${icon}`} alt={name} />
      ) : (
        <Box
          d="block"
          w={2}
          h={2}
          mr={2}
          borderRadius="50%"
          bgColor="brand.highlight"
        ></Box>
      )}

      <Text
        fontWeight={{ base: 500, xl: 600 }}
        fontSize={{ base: "18px", xl: "24px" }}
        lineHeight={{ base: "27px", xl: "36px" }}
        color="brand.headingText"
        mt={{ base: 0, xl: "24px" }}
      >
        {name}
      </Text>
    </Flex>
  );
};

export default ItemInfo;
