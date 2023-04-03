import {
  Avatar,
  Box,
  BoxProps,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "assets/images/logo.png";
import profileImg from "assets/images/profile.png";

function MainLayout({ children }: BoxProps) {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      w="100vw"
      bgColor="gray.800"
      overflow="hidden"
    >
      <Flex
        gap={4}
        align="center"
        justify="space-between"
        py="20px"
        ps="32px"
        pe="80px"
        bgColor="gray.700"
        borderBottom="1px solid"
        borderBottomColor="gray.600"
      >
        <Image src={logo} alt="Logo" maxW="85px" />

        <HStack>
          <Avatar src={profileImg} name="Martinez George" boxSize={10} />
          <Text>Martinez George</Text>
        </HStack>
      </Flex>

      <Flex flex={1} overflow="hidden">
        <Box w="230px" bgColor="gray.700" overflowY="auto">
          Sidebar
        </Box>
        <Box flex={1} minH="full" p={8} overflowY="auto">
          <Box
            flex={1}
            maxW="container.xl"
            minH="full"
            p={6}
            bgColor="gray.700"
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default MainLayout;
