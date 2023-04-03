import * as React from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { MainLayout } from "components/global";
import customTheme from "utils/customTheme";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <MainLayout>
      <Text>Dashboard</Text>
    </MainLayout>
  </ChakraProvider>
);
