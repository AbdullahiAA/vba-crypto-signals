import { Flex, Circle } from "@chakra-ui/react";
import { VBAText } from "components/global";

interface Props {
  color: string;
  coin: string;
  percentage: string;
}

function WalletBalanceItem({ color, coin, percentage }: Props) {
  return (
    <Flex gap="5px" align="center">
      <Circle size="10px" flexShrink="0" bgColor={color} />
      <VBAText variant="H8">
        {coin}{" "}
        <VBAText as="span" variant="H8" color="light.300">
          {percentage}
        </VBAText>
      </VBAText>
    </Flex>
  );
}

export default WalletBalanceItem;
