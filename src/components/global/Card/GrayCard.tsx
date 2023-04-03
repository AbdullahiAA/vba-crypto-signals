import { Box, BoxProps } from "@chakra-ui/react";

function GrayCard({ children, ...rest }: BoxProps) {
  return (
    <Box bgColor="gray.100" p={6} borderRadius={10} {...rest}>
      {children}
    </Box>
  );
}

export default GrayCard;
