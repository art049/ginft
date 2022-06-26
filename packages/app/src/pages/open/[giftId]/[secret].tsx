import { Image, Text, VStack } from "@chakra-ui/react";
import { IERC721Metadata__factory } from "@ginft/contracts/dist/typechain";
import axios from "axios";
import { BigNumber } from "ethers";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrimaryButton } from "src/components/Button";
import { useGiftBox } from "src/hooks/useGiftBox";
import { useGiftMetadata } from "src/hooks/useGiftMetadata";
import { useWallet } from "src/hooks/useWallet";
import { NFTMetadata } from "src/interfaces";
import Layout from "../../../components/Layout";

const RevealPage: NextPage = () => {
  const router = useRouter();
  const wallet = useWallet();
  const { unwrap } = useGiftBox();
  const giftId = router.query.giftId as string | undefined;
  const secret = router.query.secret as string | undefined;
  const { metadata, setGiftKey, loading } = useGiftMetadata();
  const [isUnwrapping, setIsUnwrapping] = useState<boolean>(false);
  const [unwrappedMetadata, setUnwrappedMetadata] = useState<NFTMetadata>();
  useEffect(() => {
    if (secret && giftId)
      setGiftKey({
        secret: secret,
        giftId: giftId,
      });
  }, [giftId, secret]);

  const onUnwrap = async () => {
    if (!giftId || !secret || !wallet.isWalletConnected)
      throw Error("Can't unwrap");
    setIsUnwrapping(true);
    const nft = await unwrap(BigNumber.from(giftId), secret);
    console.log(nft);
    const nftContract = IERC721Metadata__factory.connect(
      nft.contractAddress,
      wallet.signer
    );
    const tokenURI = await nftContract.tokenURI(nft.tokenId);
    const res = await axios.get(
      `https://ipfs.io/ipfs/${tokenURI.slice("ipfs://".length)}`
    );
    setUnwrappedMetadata(res.data);
    setIsUnwrapping(false);
  };
  return (
    <Layout>
      <VStack mt={10}>
        <Text
          color="gray.700"
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          mb="8px"
        >
          You received a gift !
        </Text>
        {metadata && !unwrappedMetadata && (
          <VStack>
            <Image
              src={`https://ipfs.io/ipfs/${metadata.image.slice(
                "ipfs://".length
              )}`}
            />
            <Text fontWeight="bold">{metadata.name}</Text>
            <Text fontStyle="italic">{metadata.description}</Text>
          </VStack>
        )}
        {unwrappedMetadata && (
          <VStack>
            <Image
              src={`https://ipfs.io/ipfs/${unwrappedMetadata.image.slice(
                "ipfs://".length
              )}`}
            />
            <Text fontWeight="bold">{unwrappedMetadata.name}</Text>
            <Text fontStyle="italic">{unwrappedMetadata.description}</Text>
          </VStack>
        )}
        {!unwrappedMetadata && (
          <PrimaryButton
            mt={6}
            isLoading={loading || isUnwrapping}
            disabled={!giftId || !secret || !wallet.isWalletConnected}
            onClick={onUnwrap}
          >
            Open the gift box
          </PrimaryButton>
        )}
      </VStack>
    </Layout>
  );
};

export default RevealPage;
