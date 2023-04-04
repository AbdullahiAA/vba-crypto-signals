import { Flex, Icon } from "@chakra-ui/react";
import { IMenu } from "types/global";
import { VBAText } from "..";

interface Props {
  menu: IMenu;
}

function SideBarItem({ menu }: Props) {
  const isActive = menu.name === "Dashboard";

  return (
    <Flex
      mx={8}
      py={5}
      ps={isActive ? 6 : 3}
      pe={3}
      gap={2}
      borderLeft={isActive ? "3px solid" : "0px solid"}
      borderLeftColor={isActive ? "primary.500" : ""}
      cursor="pointer"
      transition="all 200ms ease-out"
      _hover={{ bgColor: "gray.100" }}
    >
      <Icon
        as={menu.icon}
        w={4}
        h={4}
        color={isActive || menu?.isAutoActive ? "primary.500" : "light.200"}
      />
      <VBAText
        variant="navbar"
        color={isActive || menu?.isAutoActive ? "primary.500" : "light.200"}
      >
        {menu.name}
      </VBAText>
    </Flex>
  );
}

export default SideBarItem;
