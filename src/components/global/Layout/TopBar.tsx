import { Flex, IconButton, HStack, Avatar, Image } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { VBAText } from "..";
import profileImg from "assets/images/profile.png";
import logo from "assets/images/logo.png";

interface Props {
  openMobileMenu: () => void;
}

function TopBar({ openMobileMenu }: Props) {
  return (
    <Flex
      gap={4}
      align="center"
      justify="space-between"
      py={{ base: 3, md: 5 }}
      ps={{ base: 4, md: 8 }}
      pe={{ base: 4, md: 8, lg: 20 }}
      bgColor="gray.700"
      borderBottom="1px solid"
      borderBottomColor="gray.600"
    >
      <IconButton
        icon={<HiMenu />}
        variant="outline"
        colorScheme="gray"
        aria-label="menu-icon"
        display={{ base: "flex", lg: "none" }}
        onClick={() => openMobileMenu()}
      />

      <Image src={logo} alt="Logo" maxW={{ base: "65px", md: "85px" }} />

      <HStack>
        <Avatar
          src={profileImg}
          name="Martinez George"
          boxSize={{ base: 8, md: 10 }}
        />
        <VBAText variant="H6" display={{ base: "none", lg: "block" }}>
          Martinez George
        </VBAText>
      </HStack>
    </Flex>
  );
}

export default TopBar;
