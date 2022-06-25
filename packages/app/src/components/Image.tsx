import { Box, BoxProps, chakra, Skeleton } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";
import * as React from "react";

type ImageBox = Omit<BoxProps, "as"> & ImageProps;

export const ImageBox: React.FC<ImageBox> = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Skeleton isLoaded={true}>
      <Box position="relative" overflow="hidden" {...props}>
        <NextImage
          objectFit="cover"
          layout="fill"
          src={src}
          alt={alt}
          onLoad={(toto) => setIsLoaded(true)}
        />
      </Box>
    </Skeleton>
  );
};

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});
