import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link: React.FC<LinkProps & { href: string }> = ({
  children,
  href,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink variant="unstyled" {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
