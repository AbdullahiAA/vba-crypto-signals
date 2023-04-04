import { SimpleGrid } from "@chakra-ui/react";
import { myGroups } from "helpers/data";
import { useState } from "react";
import { GroupMemberships, GroupOverview, GroupsList } from "..";

function MyGroups() {
  const [activeGroup, setActiveGroup] = useState(myGroups[0]);

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
      <GroupsList groups={myGroups} setActiveGroup={setActiveGroup} />
      <GroupOverview group={activeGroup} />
      <GroupMemberships group={activeGroup} />
    </SimpleGrid>
  );
}

export default MyGroups;
