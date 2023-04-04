import { Box, BoxProps } from "@chakra-ui/react";

function BorderCard({ children, ...rest }: BoxProps) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.600"
      p={4}
      borderRadius={10}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default BorderCard;
