import { Select, Table } from "@mantine/core";
import { useState } from "react";
import { OptionIcon } from "../../../components/Svgs/Svg";
import { VerifiersType } from "../../../types/verifiers";

type IProps = {
  verifiers: VerifiersType[];
};

const VerifierTable = ({ verifiers }: IProps) => {
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
    <div className="shadow-md">
      <Table.ScrollContainer minWidth={700} className="bg-white ">
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
                    checked={isRowSelected(item._id)}
                    onChange={() => handleRowCheckboxChange(item._id)}
                  />
                </Table.Td>
                <Table.Td>{item.firstName}</Table.Td>
                <Table.Td>{item.lastName}</Table.Td>
                <Table.Td>{item.phone}</Table.Td>
                <Table.Td>{item.partner}</Table.Td>
                <Table.Td>{item.location}</Table.Td>
                <Table.Td>
                  <div
                    className={`px-4 py-2 inline-block text-center ${
                      item.status === "active"
                        ? "bg-secondary rounded text-[#27A713]"
                        : "bg-[#FF99001A] text-[#FF9900]"
                    }`}
                  >
                    {item.status}
                  </div>
                </Table.Td>
                <Table.Td>
                  <OptionIcon />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <div className="px-2 py-5 border-t bg-white overflow-hidden flex gap-5 flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 max-w-[200px]">
          <div className="text-sm text-[#808080]">Rows per page</div>
          <Select
            className="w-[100px]"
            data={[
              { label: "10", value: "10" },
              { label: "20", value: "20" },
            ]}
            defaultValue="10"
          />{" "}
        </div>
        <div className="flex gap-2 items-center text-[#808080] pr-2">
          <div>Previous</div>
          <div className="text-primary">1</div>
          <div>2</div>
          <div className="text-primary">Next</div>
        </div>
      </div>
    </div>
  );
};

export default VerifierTable;
