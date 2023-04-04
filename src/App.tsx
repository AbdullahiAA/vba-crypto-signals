import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "components/global";
import customTheme from "utils/customTheme";
import { DashboardContainer } from "containers";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <MainLayout>
      <DashboardContainer />
    </MainLayout>
  </ChakraProvider>
);
