import { Flex, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import CreateSteps from "src/components/CreateSteps";
import { useUserNFTs } from "src/hooks/useUserNFTs";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  const { isLoaded, tokens } = useUserNFTs();
  console.log(isLoaded, tokens);
  return (
    <Layout>
      <VStack>
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
            mb={{ sm: "15px", md: "25px" }}
          >
            <Text
              color="gray.700"
              fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              mb="8px"
            >
              Create a new GiNFT
            </Text>
            <Text
              color="gray.400"
              fontWeight="normal"
              fontSize={{ sm: "sm", md: "lg" }}
            >
              Gift ...
            </Text>
          </Flex>
          <CreateSteps />
        </Flex>
      </VStack>
    </Layout>
  );
};

export default Home;
