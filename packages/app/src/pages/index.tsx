import { Box, Input, SimpleGrid, Skeleton, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PrimaryButton } from "src/components/Button";
import { useUserNFTs } from "src/hooks/useUserNFTs";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { isLoaded, tokens } = useUserNFTs();
  return (
    <Layout>
      <VStack>
        <SimpleGrid columns={2} spacing={10}>
          {isLoaded
            ? tokens.map((token) => (
                <Box
                  bg="tomato"
                  height="100px"
                  width="100px"
                  key={token.tokenId.toNumber()}
                >
                  {token.tokenId}
                </Box>
              ))
            : [
                <Skeleton height="100px" width="100px"></Skeleton>,
                <Skeleton height="100px" width="100px"></Skeleton>,
                <Skeleton height="100px" width="100px"></Skeleton>,
              ]}
        </SimpleGrid>

        <Input placeholder="Giftee address" />
        <PrimaryButton>Mint Gift</PrimaryButton>
      </VStack>
    </Layout>
  );
};

export default Home;
