import { Button, Flex } from "@chakra-ui/react";
import { GrayCard, VBAHeading, VBATabs, VBAText } from "components/global";
import { MyGroups, OtherGroups } from "..";

function SignalGroups() {
  return (
    <GrayCard as={Flex} flexDir="column" gap={6}>
      <VBAHeading variant="H5">Signal Groups</VBAHeading>

      <VBATabs
        tabs={[
          {
            label: "Groups You Manage",
            content: <MyGroups />,
            tabSideInfo: (
              <Button
                colorScheme="primary"
                color="primary.500"
                variant="link"
                w="fit-content"
              >
                <VBAText variant="H7" color="inherit">
                  Create New Signal Group
                </VBAText>
              </Button>
            ),
          },
          { label: "Other Signal Groups", content: <OtherGroups /> },
        ]}
      />
    </GrayCard>
  );
}

export default SignalGroups;
