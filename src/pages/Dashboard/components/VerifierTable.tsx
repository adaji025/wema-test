import { Table } from "@mantine/core";
import { useState } from "react";
import { OptionIcon } from "../../../components/Svgs/Svg";

const tableData = [
  {
    fname: "mukhtar",
    lname: "adaji",
    pnumb: "09011223344",
    partner: "the place",
    location: "festac",
    status: "active",
  },
];

const VerifierTable = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const isAllRowsSelected =
    tableData.length > 0 && selectedRowIds.length === tableData.length;

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
      setSelectedRowIds(tableData.map((row: any) => row._id));
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
            {tableData.map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <input
                    type="checkbox"
                    checked={isRowSelected("item._id")}
                    onChange={() => handleRowCheckboxChange("item._id")}
                  />
                </Table.Td>
                <Table.Td>{item.fname}</Table.Td>
                <Table.Td>{item.lname}</Table.Td>
                <Table.Td>{item.pnumb}</Table.Td>
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
