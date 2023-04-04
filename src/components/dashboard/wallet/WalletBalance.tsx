import { Circle, Flex } from "@chakra-ui/react";
import { GrayCard, VBAHeading } from "components/global";
import { WalletBalanceItem } from "..";

function WalletBalance() {
  return (
    <GrayCard p="18px" as={Flex} flexDir="column" gap={8}>
      <VBAHeading variant="H5">My Wallet</VBAHeading>

      <Flex
        gap={8}
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={{ lg: "flex-end" }}
        justify="space-between"
        flex={1}
      >
        <Flex
          gap="15px"
          flexDir={{ md: "column" }}
          mx={{ base: "auto", md: "initial" }}
        >
          <WalletBalanceItem
            color="accent.orange"
            coin="BTC"
            percentage="36.77%"
          />
          <WalletBalanceItem
            color="accent.blue"
            coin="USDT"
            percentage="36.77%"
          />
          <WalletBalanceItem
            color="accent.pink"
            coin="Others"
            percentage="36.77%"
          />
          <WalletBalanceItem
            color="primary.500"
            coin="BNB"
            percentage="36.77%"
          />
        </Flex>

        <Circle
          size="170px"
          border="3px solid rgba(0, 182, 255, 0.2)"
          mx={{ base: "auto", md: "initial" }}
        ></Circle>
      </Flex>
    </GrayCard>
  );
}

export default WalletBalance;
