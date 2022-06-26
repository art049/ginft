import { Box, SimpleGrid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { useUserNFTs } from "src/hooks/useUserNFTs";
import { NFTToWrap } from "src/interfaces";
import { StepContent, StepHeading } from "./StepContent";

interface PickStepsProps {
  onValidate: (nftToWrap: NFTToWrap) => void;
}

const PickStep = (props: PickStepsProps) => {
  const { isLoaded, tokens } = useUserNFTs();
  return (
    <StepContent>
      <StepHeading>
        <StepHeading.Header>
          Pick the NFT you would like to gift
        </StepHeading.Header>
      </StepHeading>
      <SimpleGrid columns={4} spacing={10}>
        {isLoaded
          ? tokens.map((token) => (
              <VStack
                key={`${token.contractAddress}-${token.tokenId}`}
                align="left"
                bg="white"
                w="100%"
                rounded={6}
                spacing={4}
                shadow="md"
                cursor="pointer"
                _hover={{
                  shadow: "lg",
                  border: "outline",
                }}
                overflow="hidden"
                pb={6}
                onClick={() => props.onValidate(token)}
              >
                <Box bg="tomato" width="100%" height="100px">
                  {token.tokenId}
                </Box>
                <VStack>
                  <Text fontWeight="bold" color="gray.700" fontSize="md">
                    NFT name
                  </Text>
                  <Text fontWeight="semibold" color="gray.500" fontSize="xs">
                    Collection name
                  </Text>
                </VStack>
              </VStack>
            ))
          : [0, 1, 2, 3].map((i) => (
              <Skeleton height="200px" width="100%" key={i}></Skeleton>
            ))}
      </SimpleGrid>
    </StepContent>
  );
};

export default PickStep;
