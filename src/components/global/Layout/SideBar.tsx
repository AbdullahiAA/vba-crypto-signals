import { Box, BoxProps, Flex, Icon, IconButton } from "@chakra-ui/react";
import { CgCloseO } from "react-icons/cg";
import { SideBarItem } from "..";
import { menuList } from "./menus";

interface Props extends BoxProps {
  isOverlay?: boolean;
  closeMobileMenu?: () => void;
}

function SideBar({ isOverlay, closeMobileMenu, ...rest }: Props) {
  return (
    <Box
      bgColor="gray.700"
      overflowY="auto"
      flex={1}
      flexShrink={0}
      transition="300ms ease"
      zIndex={10}
      {...rest}
    >
      {/* Close Button (MOBILE) */}
      {isOverlay && (
        <Flex justify="flex-end" p={3}>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="close-icon"
            icon={<Icon as={CgCloseO} w={6} h={6} />}
            onClick={() => closeMobileMenu && closeMobileMenu()}
          />
        </Flex>
      )}

      <Flex flexDir="column" gap={2} my={8}>
        {menuList.map((menu, index) =>
          menu === "divider" ? (
            <Box
              key={index}
              borderBottom="0.5px solid"
              borderBottomColor="gray.600"
            />
          ) : (
            <SideBarItem
              menu={menu}
              key={index}
              closeMobileMenu={closeMobileMenu}
            />
          )
        )}
      </Flex>
    </Box>
  );
}

export default SideBar;
