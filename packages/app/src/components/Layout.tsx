import { Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ConnectWalletButton } from "./Button";
interface LayoutProps {
  noLogout?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ noLogout, children }) => (
  <VStack backgroundColor="background.layout" minHeight="100vh">
    <Flex
      height="80px"
      width="100%"
      padding="0 32px 0 32px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/">
        <a>
          <Text fontWeight="bold" fontSize="2xl" color="ginft.primary">
            GiNFT
          </Text>
        </a>
      </Link>
      {noLogout || (
        <Flex>
          <ConnectWalletButton />
        </Flex>
      )}
    </Flex>
    <VStack
      spacing={8}
      p={8}
      pt={1}
      w={{ base: "100%", md: "75vw", lg: "65vw", xl: "60vw" }}
    >
      {children}
    </VStack>
  </VStack>
);

export default Layout;
