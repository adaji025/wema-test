import { Table } from "@mantine/core";
import { useState } from "react";
import { OptionIcon } from "../../../components/Svgs/Svg";
import { VerifiersType } from "../../../types/verifiers";



type IProps = {
  verifiers: VerifiersType[]
}

const VerifierTable = ({verifiers}: IProps) => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const isAllRowsSelected =
    verifiers.length > 0 && selectedRowIds.length === verifiers.length;

  const handleRowCheckboxChange = (id: string) => {
    setSelectedRowIds((prevId) =>
      prevId.includes(id)
        ? prevId.filter((rowId) => rowId !== id)
        : [...prevId, id]
    );
  };

  const handleSelectAllRows = () => {
    if (isAllRowsSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(verifiers.map((row: any) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);
  return (
    <div>
      <Table.ScrollContainer minWidth={700} className="bg-white">
        <Table verticalSpacing={10} className="!rounded-xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="!rounded-tl-[15px]">
                <input
                  type="checkbox"
                  checked={isAllRowsSelected}
                  onChange={handleSelectAllRows}
                />
              </Table.Th>

              <Table.Th>First name</Table.Th>
              <Table.Th>Last name</Table.Th>
              <Table.Th>Phone number</Table.Th>
              <Table.Th>Partner</Table.Th>
              <Table.Th>Location</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {verifiers.map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <input
                    type="checkbox"
                    checked={isRowSelected("item._id")}
                    onChange={() => handleRowCheckboxChange("item._id")}
                  />
                </Table.Td>
                <Table.Td>{item.firstName}</Table.Td>
                <Table.Td>{item.lastName}</Table.Td>
                <Table.Td>{item.phone}</Table.Td>
                <Table.Td>{item.partner}</Table.Td>
                <Table.Td>{item.location}</Table.Td>
                <Table.Td>{item.status}</Table.Td>
                <Table.Td>
                  <OptionIcon />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
};

export default VerifierTable;
