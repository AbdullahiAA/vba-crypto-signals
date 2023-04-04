import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "components/global";
import customTheme from "utils/customTheme";
import {
  AnalyticsContainer,
  DashboardContainer,
  PositionsContainer,
  NotificationsContainer,
  BotsContainer,
  SignalGroupsContainer,
} from "containers";
import { Routes, Route } from "react-router-dom";
import { AllRoutes } from "utils/routes";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <MainLayout>
      <Routes>
        <Route path={AllRoutes.dashboard} element={<DashboardContainer />} />
        <Route path={AllRoutes.analytics} element={<AnalyticsContainer />} />
        <Route path={AllRoutes.positions} element={<PositionsContainer />} />
        <Route
          path={AllRoutes.notifications}
          element={<NotificationsContainer />}
        />
        <Route path={AllRoutes.bots} element={<BotsContainer />} />
        <Route
          path={AllRoutes.signalGroups}
          element={<SignalGroupsContainer />}
        />
      </Routes>
    </MainLayout>
  </ChakraProvider>
);
