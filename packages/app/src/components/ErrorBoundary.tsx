import { Center, Code, Heading, useToast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const ErrorCatcher: React.FC = ({ children }) => {
  const toast = useToast({ position: "bottom-right", variant: "subtle" });

  useEffect(() => {
    window.onunhandledrejection = (error) => {
      if (!toast.isActive(error.reason.code)) {
        toast.closeAll();
        toast({
          id: error.reason.code,
          title: error.reason.message,
          status: "error",
          isClosable: true,
        });
      }
    };
  }, [toast]);

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => {
        return (
          <Center h="100vh" bg="demos.gradient.default">
            <VStack spacing={3} maxW="80%" p={8} bg="white" borderRadius={8}>
              <Heading size="md">Something Went Wrong</Heading>
              <Code textAlign="center" w="100%" colorScheme="red">
                {error.message}
              </Code>
              <Code w="100%" maxH="300px" overflowY="scroll">
                {error.stack}
              </Code>
            </VStack>
          </Center>
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
