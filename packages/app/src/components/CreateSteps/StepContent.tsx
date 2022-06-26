import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const StepContent: React.FC = (props) => (
  <Box
    mt="24px"
    bg="background.card"
    p={8}
    borderRadius="lg"
    shadow="card"
    align="start"
    spacing={5}
    w={{ sm: "330px", md: "700px", lg: "850px" }}
  >
    {props.children}
  </Box>
);

export function StepHeading(props: { children?: React.ReactNode }) {
  return (
    <Flex
      direction="column"
      textAlign="center"
      mb={{ sm: "25px", md: "45px" }}
      align="center"
      justify="center"
      w="80%"
      mx="auto"
    >
      {props.children}
    </Flex>
  );
}

export namespace StepHeading {
  export const Header: React.FC = (props) => (
    <Text color="gray.700" fontSize="lg" fontWeight="bold" mb="4px">
      {props.children}
    </Text>
  );

  export const SubHeader: React.FC = (props) => (
    <Text color="gray.400" fontWeight="normal" fontSize="sm">
      {props.children}
    </Text>
  );
}
