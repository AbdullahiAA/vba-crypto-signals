import { SimpleGrid } from "@chakra-ui/react";
import { otherGroups } from "helpers/data";
import { useState } from "react";
import { GroupMemberships, GroupOverview, GroupsList } from "..";

function OtherGroups() {
  const [activeGroup, setActiveGroup] = useState(otherGroups[0]);

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
      <GroupsList groups={otherGroups} setActiveGroup={setActiveGroup} />
      <GroupOverview group={activeGroup} />
      <GroupMemberships group={activeGroup} />
    </SimpleGrid>
  );
}

export default OtherGroups;
