import {
  Alert,
  AlertDescription,
  AlertTitle,
  Center,
  chakra,
  CloseButton,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { ContractReceipt, ContractTransaction } from "ethers";
import { createContext, useContext } from "react";
import { useWallet } from "./useWallet";

export const TransactionContext = createContext<TransactionContext>({
  track: () => () => {},
});

export const useTransaction = () => useContext(TransactionContext);

export const TransactionProvider: React.FC = ({ children }) => {
  const { checkWallet } = useWallet();
  const toast = useToast({
    position: "bottom-right",
    variant: "subtle",
  });

  const track = async (
    scope: string,
    transaction: Promise<ContractTransaction>
  ) => {
    const toastId = toast({
      duration: null,
      render: (props) => (
        <LoadingToast
          isClosable
          title={scope}
          description="Transaction waiting to be signed"
        />
      ),
    });
    await checkWallet();
    const tx = await transaction;
    toastId && toast.close(toastId);
    toast({
      id: toastId,
      duration: null,
      render: (props) => (
        <LoadingToast
          isClosable
          title={scope}
          description="Transaction waiting to be confirmed"
        />
      ),
    });
    const receipt = await tx.wait();
    toastId && toast.close(toastId);
    toast({
      title: scope,
      description: "Transaction confirmed",
      status: "success",
      isClosable: true,
    });
    return receipt;
  };

  return (
    <TransactionContext.Provider value={{ track }}>
      {children}
    </TransactionContext.Provider>
  );
};

interface TransactionContext {
  track: (
    scope: string,
    transaction: Promise<ContractTransaction>
  ) => ContractReceipt;
}

const LoadingToast: React.FC<any> = (props) => {
  const { status, variant, id, title, isClosable, onClose, description } =
    props;

  const alertTitleId =
    typeof id !== "undefined" ? `toast-${id}-title` : undefined;

  return (
    <Alert
      status={status}
      variant={variant}
      id={id}
      alignItems="start"
      borderRadius="md"
      boxShadow="lg"
      paddingEnd={8}
      textAlign="start"
      width="auto"
      aria-labelledby={alertTitleId}
    >
      <Center mr="12px" mt="2px">
        <Spinner width="18px" height="18px" />
      </Center>
      <chakra.div flex="1" maxWidth="100%">
        {title && <AlertTitle id={alertTitleId}>{title}</AlertTitle>}
        {description && (
          <AlertDescription display="block">{description}</AlertDescription>
        )}
      </chakra.div>
      {isClosable && (
        <CloseButton
          size="sm"
          onClick={onClose}
          position="absolute"
          insetEnd={1}
          top={1}
        />
      )}
    </Alert>
  );
};
