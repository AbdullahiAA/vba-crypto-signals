import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  TableProps,
  Center,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";
import VBAText from "../Typography/VBAText";

interface Props extends TableProps {
  header: ITableHeader[];
  body: IBody[];
}

export interface ITableHeader {
  label: string;
  dataIndex: string;
  render?: (value: any, record: any, index: number) => React.ReactNode;
}

interface IBody {
  [dataIndex: string]: any;
}

function VBATable({ header, body }: Props) {
  return (
    <TableContainer whiteSpace="break-spaces">
      <Grid overflowX={"auto"}>
        <Table variant="simple" overflow="hidden">
          <Thead>
            <Tr borderBottom="1px solid" borderBottomColor="gray.600">
              {header.map((item, key) => (
                <Th
                  key={key}
                  textTransform="initial"
                  p={{ base: 4, md: 8 }}
                  borderBottom={0}
                >
                  <VBAText variant="H7">{item.label}</VBAText>
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {body.length !== 0 ? (
              body.map((row, rowKey) => (
                <Tr
                  key={rowKey}
                  borderBottom="1px solid"
                  borderBottomColor="gray.600"
                  _last={{ borderBottom: "none" }}
                >
                  {header.map(({ dataIndex, render }, columnKey) => (
                    <Td key={columnKey} p={{ base: 4, md: 8 }} borderBottom={0}>
                      <VBAText variant="H6">{row[dataIndex]}</VBAText>
                    </Td>
                  ))}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td
                  p={{ base: 4, md: 8 }}
                  fontSize="sm"
                  colSpan={header.length}
                  textAlign="center"
                >
                  <Center flexDir="column" gap={1}>
                    <Icon as={FiPackage} w={10} h={10} color="dark.200" />
                    No data found
                  </Center>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Grid>
    </TableContainer>
  );
}

export default VBATable;
