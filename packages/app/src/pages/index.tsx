import { Box, Input, SimpleGrid, Skeleton, VStack } from "@chakra-ui/react";
import { BigNumber } from "ethers";
import type { NextPage } from "next";
import { PrimaryButton } from "src/components/Button";
import { useGiftBox } from "src/hooks/useGiftBox";
import { useUserNFTs } from "src/hooks/useUserNFTs";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { isLoaded, tokens } = useUserNFTs();
  const { wrap } = useGiftBox();
  console.log(isLoaded, tokens);
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
                  key={token.tokenId}
                >
                  {token.tokenId}
                </Box>
              ))
            : [
                <Skeleton height="100px" width="100px" key={1}></Skeleton>,
                <Skeleton height="100px" width="100px" key={2}></Skeleton>,
                <Skeleton height="100px" width="100px" key={3}></Skeleton>,
              ]}
        </SimpleGrid>

        <Input placeholder="Giftee address" />
        <PrimaryButton
          onClick={() =>
            wrap(
              "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
              tokens[0].contractAddress,
              BigNumber.from(tokens[0].tokenId)
            )
          }
        >
          Mint Gift
        </PrimaryButton>
      </VStack>
    </Layout>
  );
};

export default Home;
