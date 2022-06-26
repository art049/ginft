import { Image, SimpleGrid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { BigNumber } from "ethers";
import { useUserNFTs } from "src/hooks/useUserNFTs";
import { useWallet } from "src/hooks/useWallet";
import { NFTToWrap } from "src/interfaces";
import { ipfsToUrl } from "src/util";
import { ConnectWalletButton } from "../Button";
import { StepContent, StepHeading } from "./StepContent";

interface PickStepsProps {
  onValidate: (nftToWrap: NFTToWrap) => void;
}

const PickStep = (props: PickStepsProps) => {
  const { isLoaded, tokens } = useUserNFTs();
  const wallet = useWallet();
  return (
    <StepContent>
      <StepHeading>
        <StepHeading.Header>
          Pick the NFT you would like to gift
        </StepHeading.Header>
      </StepHeading>
      {!wallet.isWalletConnected && (
        <VStack pb={6}>
          <ConnectWalletButton />
        </VStack>
      )}
      {wallet.isWalletConnected && (
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
                  onClick={() =>
                    props.onValidate({
                      tokenId: BigNumber.from(token.tokenId),
                      contractAddress: token.contractAddress,
                    })
                  }
                >
                  <Image src={ipfsToUrl(token.metadata.image)} />
                  <VStack>
                    <Text fontWeight="bold" color="gray.700" fontSize="md">
                      {token.metadata.name}
                    </Text>
                    <Text fontWeight="semibold" color="gray.500" fontSize="xs">
                      # {token.tokenId}
                    </Text>
                  </VStack>
                </VStack>
              ))
            : [0, 1, 2, 3].map((i) => (
                <Skeleton height="200px" width="100%" key={i}></Skeleton>
              ))}
        </SimpleGrid>
      )}
    </StepContent>
  );
};

export default PickStep;
