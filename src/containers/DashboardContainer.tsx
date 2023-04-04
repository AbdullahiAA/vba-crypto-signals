import { Flex, Grid } from "@chakra-ui/react";
import {
  ExchangeRates,
  SignalGroups,
  WalletBalance,
} from "components/dashboard";

function DashboardContainer() {
  return (
    <Flex flexDir="column" gap={6}>
      <Grid gap={6} gridTemplateColumns={{ base: "1fr", md: "4fr 8fr" }}>
        <WalletBalance />
        <ExchangeRates />
      </Grid>

      <SignalGroups />
    </Flex>
  );
}

export default DashboardContainer;
