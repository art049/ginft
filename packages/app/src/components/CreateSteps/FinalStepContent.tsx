import { Center, Text } from "@chakra-ui/react";
import { StepContent, StepHeading } from "./StepContent";

interface FinalStepProps {
  unwrapUrl?: string;
}

const FinalStep = (props: FinalStepProps) => {
  return (
    <StepContent>
      <StepHeading>
        <StepHeading.Header>Congratulation !</StepHeading.Header>
        <StepHeading.SubHeader>
          Your gift is retained in our northpole warehouse until the recipient
          opens it with the following link:
        </StepHeading.SubHeader>
      </StepHeading>

      <Center mt="30px">
        <Text fontSize="xs">{props.unwrapUrl}</Text>
      </Center>
    </StepContent>
  );
};

export default FinalStep;
