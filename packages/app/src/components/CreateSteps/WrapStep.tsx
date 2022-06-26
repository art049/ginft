import { Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { staticConfig } from "src/config";
import { useGiftBox } from "src/hooks/useGiftBox";
import { CustomizationData, NFTToWrap } from "src/interfaces";
import { uploadObjectToIpfs } from "src/util";
import { PrimaryButton } from "../Button";
import { StepContent, StepHeading } from "./StepContent";

interface PickStepsProps {
  onValidate: (unwrapUrl: string) => void;
  nftToWrap?: NFTToWrap;
  customizationData?: CustomizationData;
}

const WrapStep = (props: PickStepsProps) => {
  const { wrap } = useGiftBox();
  const [isWrapping, setIsWrapping] = useState<boolean>(false);
  const onWrap = async () => {
    if (isWrapping) return;
    setIsWrapping(true);
    const metadataCid = await uploadObjectToIpfs({
      name: props.customizationData?.name,
      description:
        props.customizationData?.message ?? "" + "\nA gift built with GiNFT.",
      external_url: staticConfig.frontBaseUrl,
      image:
        "ipfs://bafkreicdeqoh3lrhdj35m6svdfmbonhdx22grupie5vxkzhsdyncimo6bq",
    });
    if (props.nftToWrap && props.customizationData) {
      const unwrapUrl = await wrap(
        props.customizationData.recipient,
        props.nftToWrap.contractAddress,
        props.nftToWrap.tokenId,
        metadataCid
      );
      setIsWrapping(false);
      props.onValidate(unwrapUrl);
    }
  };
  return (
    <StepContent>
      <StepHeading>
        <StepHeading.Header>Wrap it up !</StepHeading.Header>
      </StepHeading>
      <VStack>
        <VStack alignItems="left" w="100%" p={10}>
          <Text>
            <Text fontWeight="bold">Recipient:</Text>{" "}
            {props.customizationData?.recipient}
          </Text>
          <Text>
            <Text fontWeight="bold">Gift name:</Text>{" "}
            {props.customizationData?.name}
          </Text>
          <Text>
            <Text fontWeight="bold">Gift message:</Text>{" "}
            {props.customizationData?.message}
          </Text>
        </VStack>
        <PrimaryButton onClick={onWrap} isLoading={isWrapping}>
          Send the wrapped gift
        </PrimaryButton>
      </VStack>
    </StepContent>
  );
};

export default WrapStep;
