import { Flex } from "@chakra-ui/react";
import { BorderCard, VBAText } from "components/global";
import { ISignalGroup } from "types/global";
import { GroupListItem } from "..";

interface Props {
  groups: ISignalGroup[];
  setActiveGroup: React.Dispatch<React.SetStateAction<ISignalGroup>>;
  title?: string;
}

function GroupsList({ groups, setActiveGroup, title }: Props) {
  return (
    <BorderCard p={0} as={Flex} flexDir="column">
      <VBAText variant="H6" p="18px">
        {title || "Signal Groups You Belong To"}
      </VBAText>

      {groups.map((group, key) => (
        <GroupListItem
          key={key}
          group={group}
          setActiveGroup={setActiveGroup}
        />
      ))}
    </BorderCard>
  );
}

export default GroupsList;
