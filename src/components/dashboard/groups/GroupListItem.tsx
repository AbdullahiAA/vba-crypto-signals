import { Avatar, HStack } from "@chakra-ui/react";
import { VBAText } from "components/global";
import { ISignalGroup } from "types/global";

interface Props {
  group: ISignalGroup;
  setActiveGroup: React.Dispatch<React.SetStateAction<ISignalGroup>>;
}

function GroupListItem({ group, setActiveGroup }: Props) {
  return (
    <HStack
      p="18px"
      borderTop="1px solid"
      borderTopColor="gray.600"
      cursor="pointer"
      transition="all 200ms ease-out"
      _hover={{ bgColor: "gray.100" }}
      onClick={() => setActiveGroup(group)}
    >
      <Avatar src={group.avatar} name={group.name} boxSize="30px" />
      <VBAText variant="navbar">{group.name}</VBAText>
    </HStack>
  );
}

export default GroupListItem;
