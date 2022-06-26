import { useGiftBox } from "src/hooks/useGiftBox";
import { CustomizationData, NFTToWrap } from "src/interfaces";
import { PrimaryButton } from "../Button";
import { StepContent, StepHeading } from "./StepContent";

interface PickStepsProps {
  onValidate: (unwrapUrl: string) => void;
  nftToWrap?: NFTToWrap;
  customizationData?: CustomizationData;
}

const WrapStep = (props: PickStepsProps) => {
  const { wrap } = useGiftBox();
  const onWrap = async () => {
    if (props.nftToWrap && props.customizationData) {
      const unwrapUrl = await wrap(
        props.customizationData.recipient,
        props.nftToWrap.contractAddress,
        props.nftToWrap.tokenId
      );
      props.onValidate(unwrapUrl);
    }
  };
  return (
    <StepContent>
      <StepHeading>
        <StepHeading.Header>Wrap it up !</StepHeading.Header>
      </StepHeading>
      <PrimaryButton onClick={onWrap}>Send the wrapped gift</PrimaryButton>
    </StepContent>
  );
};

export default WrapStep;
