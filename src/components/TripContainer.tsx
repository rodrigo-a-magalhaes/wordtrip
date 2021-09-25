import { Box, Container, ContainerProps } from "@chakra-ui/layout";
import React, { FC } from "react";

const TripContainer: FC<ContainerProps> = ({ children, ...props }) => (
  <Container
    centerContent
    maxW={{ base: "calc(100% - 32px)", xl: "calc(100% - 280px)" }}
    p="0"
  >
    <Box w="100%" {...props}>
      {children}
    </Box>
  </Container>
);
export default TripContainer;
