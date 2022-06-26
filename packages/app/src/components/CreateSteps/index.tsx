import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useState } from "react";
import { FaGift, FaHandPointer, FaMagic } from "react-icons/fa";
import { CustomizationData, NFTToWrap } from "src/interfaces";
import CustomizeStep from "./CustomizeStep";
import FinalStep from "./FinalStepContent";
import PickStep from "./PickStep";
import WrapStep from "./WrapStep";
// import FinalStepContent from "./FinalStepContent";

const CreateSteps = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const [nftToWrap, setNFTtoWrap] = useState<NFTToWrap>();
  const validateNFTPick = (nftToWrap: NFTToWrap) => {
    setNFTtoWrap(nftToWrap);
    nextStep();
  };
  const [customizationData, setCustomizationData] =
    useState<CustomizationData>();
  const validateCustomization = (data: CustomizationData) => {
    setCustomizationData(data);
    nextStep();
  };
  const [unwrapUrl, setUnwrapUrl] = useState<string>();
  const validateWrapping = (unwrapUrl: string) => {
    setUnwrapUrl(unwrapUrl);
    nextStep();
  };
  return (
    <>
      <Steps
        activeStep={activeStep}
        width="90%"
        mt="24px"
        colorScheme="purple"
        labelOrientation="vertical"
      >
        <Step icon={FaHandPointer} label="Pick">
          <PickStep onValidate={validateNFTPick} />
        </Step>
        <Step icon={FaMagic} label="Customize">
          <CustomizeStep onValidate={validateCustomization} />
        </Step>
        <Step icon={FaGift} label="Wrap">
          <WrapStep
            onValidate={validateWrapping}
            nftToWrap={nftToWrap}
            customizationData={customizationData}
          />
        </Step>
      </Steps>
      {activeStep === 3 && <FinalStep unwrapUrl={unwrapUrl} />}
    </>
  );
};

export default CreateSteps;
