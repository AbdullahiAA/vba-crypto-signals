import { Button, Flex } from "@chakra-ui/react";
import { BorderCard, VBAHeading, VBAText } from "components/global";
import { ISignalGroup } from "types/global";

interface Props {
  group: ISignalGroup;
}

function GroupMemberships({ group }: Props) {
  return (
    <BorderCard p={0} as={Flex} gap={2} flexDir="column">
      <Flex gap={6} flexDir="column" px={4} pt={4}>
        <VBAText variant="H6">Memberships</VBAText>

        <Flex>
          <Button colorScheme="primary" variant="outline">
            <VBAText variant="H8" color="inherit">
              Invite Members
            </VBAText>
          </Button>
        </Flex>

        <Flex gap={4} justify="space-between">
          <Flex gap={4} flexDir="column">
            <VBAText variant="H7" color="light.400">
              Members
            </VBAText>
            <VBAHeading>{group.totalMembers}</VBAHeading>
          </Flex>

          <Flex gap={4} flexDir="column">
            <VBAText variant="H7" color="light.400">
              Connection Request
            </VBAText>
            <VBAHeading>{group.connectionRequest}</VBAHeading>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir="column">
        <VBAText variant="H6" p={4}>
          Active Member Emails
        </VBAText>
        {group.activeEmails.map((email, index) => (
          <VBAText
            key={index}
            variant="H7"
            p={4}
            borderTop="1px solid"
            borderTopColor="gray.600"
          >
            {email}
          </VBAText>
        ))}
      </Flex>
    </BorderCard>
  );
}

export default GroupMemberships;
