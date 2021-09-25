import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface PageHeaderProps {
  navigation?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ navigation }) => {
  return (
    <Flex as="header" h={{ base: "50px", xl: "100px" }}>
      <Container
        d="flex"
        justifyContent="center"
        alignItems="center"
        pos="relative"
        maxW={{ base: "275px", xl: "1160px" }}
      >
        {navigation && (
          <Link href={navigation}>
            <Box pos="absolute" left="0">
              <Icon as={ChevronLeftIcon} fontSize="32px" cursor="pointer" />
            </Box>
          </Link>
        )}

        <Image
          w={{ base: "81px", xl: "185px" }}
          src="/static/Logo.svg"
          alt="Logo"
        />
      </Container>
    </Flex>
  );
};

export default PageHeader;
