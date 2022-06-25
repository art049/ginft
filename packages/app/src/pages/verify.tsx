import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import VerifySteps from "../components/VerifySteps";

const Verify: NextPage = () => {
  return (
    <Layout noLogout>
      <Flex
        flexDir="column"
        minH="100%"
        w="100%"
        align="center"
        // pt={{ sm: "70px", lg: "45px" }}
      >
        <Flex
          direction="column"
          textAlign="center"
          mb={{ sm: "25px", md: "45px" }}
        >
          <Text
            color="gray.700"
            fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            mb="8px"
          >
            Validate your account
          </Text>
          <Text
            color="gray.400"
            fontWeight="normal"
            fontSize={{ sm: "sm", md: "lg" }}
          >
            This information will let you invest safely on Demos.
          </Text>
        </Flex>
        <VerifySteps />
      </Flex>
    </Layout>
  );
};

export default Verify;
