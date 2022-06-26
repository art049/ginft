import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";
import { CustomizationData } from "src/interfaces";
import { PrimaryButton } from "../Button";
import { StepContent, StepHeading } from "./StepContent";

interface CustomizeStepProps {
  onValidate: (data: CustomizationData) => void;
}

const CustomizeStep = (props: CustomizeStepProps) => {
  const { register, handleSubmit, formState, setValue, setError } =
    useForm<CustomizationData>();
  return (
    <StepContent>
      <StepHeading>
        <StepHeading.Header>What should the box look like ?</StepHeading.Header>
      </StepHeading>
      <form onSubmit={handleSubmit(props.onValidate)}>
        <VStack spacing={4}>
          <FormControl isRequired isInvalid={!!formState.errors.recipient}>
            <FormLabel>Gift recipient</FormLabel>
            <Input
              placeholder="0xF23B06F32685a907CEefc1..."
              {...register("recipient", {
                required: true,
                validate: (s: string) => {
                  return ethers.utils.isAddress(s);
                },
              })}
            />

            {formState.errors.recipient && (
              <FormErrorMessage>Invalid recipient address</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Gift name</FormLabel>
            <Input
              placeholder="Super Birthday Present"
              {...register("name", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Gift message</FormLabel>
            <Textarea
              placeholder="A public message to the recipient..."
              {...register("message")}
            />
          </FormControl>
          <PrimaryButton isLoading={formState.isSubmitting} type="submit">
            Continue
          </PrimaryButton>
        </VStack>
      </form>
    </StepContent>
  );
};

export default CustomizeStep;
