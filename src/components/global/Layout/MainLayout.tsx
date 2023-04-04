import {
  Box,
  BoxProps,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { SideBar, TopBar } from "..";

function MainLayout({ children }: BoxProps) {
  const mobileSidebarDisclosure = useDisclosure();
  const isSidebarOverlay = useMediaQuery("(max-width: 991.5px)", {
    ssr: true,
    fallback: false,
  })[0];

  console.log(isSidebarOverlay);

  return (
    <Flex
      flexDir="column"
      h="100vh"
      w="100vw"
      bgColor="gray.800"
      overflow="hidden"
    >
      <TopBar openMobileMenu={mobileSidebarDisclosure.onOpen} />

      <Flex flex={1} overflow="hidden">
        {/* DESKTOP Sidebar */}
        <SideBar display={{ base: "none", lg: "block" }} maxW="230px" />

        {/* MOBILE Sidebar */}
        {isSidebarOverlay && (
          <Drawer
            autoFocus={false}
            isOpen={mobileSidebarDisclosure.isOpen}
            placement="left"
            onClose={mobileSidebarDisclosure.onClose}
            returnFocusOnClose={false}
            onOverlayClick={mobileSidebarDisclosure.onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <SideBar
                isOverlay
                closeMobileMenu={mobileSidebarDisclosure.onClose}
              />
            </DrawerContent>
          </Drawer>
        )}

        <Box flex={1} minH="full" p={{ base: 4, md: 8 }} overflowY="auto">
          <Box
            flex={1}
            maxW="container.xl"
            minH="full"
            p={{ base: 3, md: 6 }}
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
