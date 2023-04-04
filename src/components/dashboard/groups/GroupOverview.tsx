import { Avatar, Box, Button, Flex, HStack } from "@chakra-ui/react";
import { BorderCard, VBAHeading, VBAText } from "components/global";
import { ISignalGroup } from "types/global";

interface Props {
  group: ISignalGroup;
}

function GroupOverview({ group }: Props) {
  return (
    <BorderCard as={Flex} flexDir="column" gap={6}>
      <Flex gap={4} align="center" justify="space-between">
        <Box>
          <HStack mb={1}>
            <Avatar src={group.avatar} name={group.name} boxSize="30px" />
            <VBAText variant="navbar">{group.name}</VBAText>
          </HStack>

          <VBAText variant="H8" color="light.400">
            {group.groupType} Group
          </VBAText>
        </Box>

        <Button colorScheme="primary" variant="ghost">
          <VBAText variant="H8" color="inherit">
            Edit Signal Group
          </VBAText>
        </Button>
      </Flex>

      <Flex flexDir="column" gap={1}>
        <VBAText variant="H6" color="light.300">
          Minimum Allocation
        </VBAText>
        <VBAHeading variant="H4">{group.minAllocation} USDT</VBAHeading>
      </Flex>

      <Flex flexDir="column" gap={1}>
        <VBAText variant="H6" color="light.300">
          Maximum Allocation
        </VBAText>
        <VBAHeading variant="H4">{group.maxAllocation} USDT</VBAHeading>
      </Flex>

      <Flex gap={2} align="center">
        <VBAText variant="H6">Subscription</VBAText>
        <VBAText variant="H6" color="primary.500">
          {group.subscriptionType}
        </VBAText>
      </Flex>

      <Flex gap={4} flexDir="column">
        <VBAText variant="H6">Total Revenue Generated</VBAText>

        <Flex gap={4} align="center" justify="space-between">
          <VBAText variant="H7" color="light.400">
            This Month
          </VBAText>
          <VBAHeading variant="H4">
            ${group.revenue.month.toFixed(2)}
          </VBAHeading>
        </Flex>
      </Flex>

      <Flex>
        <Button colorScheme="primary" variant="outline">
          <VBAText variant="H8" color="inherit">
            View Signal Group
          </VBAText>
        </Button>
      </Flex>
    </BorderCard>
  );
}

export default GroupOverview;
