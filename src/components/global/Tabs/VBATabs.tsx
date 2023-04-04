import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import VBAText from "../Typography/VBAText";

export interface ITab {
  label: string;
  content: React.ReactNode;
  tabSideInfo?: React.ReactNode;
}

interface Props {
  tabs: ITab[];
}

function VBATabs({ tabs }: Props) {
  const [activeTabKey, setActiveTabKey] = useState(0);

  const tabStyles = {
    p: 3,
    borderRadius: "10px",
    color: "light.200",
    me: 2,
  };

  const hoverStyles = {
    bgColor: "light.100",
  };

  const selectedStyles = {
    bgColor: "light.50",
    color: "light.400",
  };

  return (
    <Tabs variant="unstyled">
      <Flex
        gap={8}
        flexDir={{ base: "column", md: "row" }}
        align={{ md: "flex-end" }}
        justify="space-between"
      >
        <TabList overflowX="auto" overflowY="hidden">
          {tabs.map((tab, key) => (
            <Tab
              key={key}
              onClick={() => setActiveTabKey(key)}
              {...tabStyles}
              _hover={hoverStyles}
              _selected={selectedStyles}
            >
              <VBAText variant="H7" color="inherit">
                {tab.label}
              </VBAText>
            </Tab>
          ))}
        </TabList>

        {tabs[activeTabKey]?.tabSideInfo}
      </Flex>

      <TabPanels mt={6}>
        {tabs.map((tab, key) => (
          <TabPanel key={key} p={0}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default VBATabs;
