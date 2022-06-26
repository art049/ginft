import { Center, Text, VStack } from "@chakra-ui/react";
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
          Your gift is retained in our northpole warehouse...
        </StepHeading.SubHeader>
      </StepHeading>

      <VStack>
        <Text color="gray.500" fontSize="sm">
          Give this link to the recipient when they have to open the box
        </Text>
        <Center
          p={4}
          bg="gray.100"
          border="solid"
          borderColor="gray.300"
          borderRadius="8px"
        >
          <Text fontSize="xs">{props.unwrapUrl}</Text>
        </Center>
      </VStack>
    </StepContent>
  );
};

export default FinalStep;
