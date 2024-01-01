import { Button, Menu, TextInput } from "@mantine/core";
import {
  ChevronDownIcon,
  PlusIcon,
  SearchIcon,
} from "../../components/Svgs/Svg";
import VerifierTable from "./components/VerifierTable";
import { useEffect, useState } from "react";
import { VerifiersType } from "../../types/verifiers";
import { getVerifiers } from "../../services/user";

const Dashboard = () => {
  const [Verifiers, setVerifier] = useState<VerifiersType[]>([]);

  useEffect(() => {
    handleGetVerifiers();
  }, []);

  const handleGetVerifiers = () => {
    getVerifiers()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <div className="flex gap-5 flex-col sm:flex-row justify-between sm:items-center">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button className="flex items-center justify-between max-w-[212px] w-full p-3 bg-white rounded">
              <div>All</div>
              <ChevronDownIcon />
            </button>
          </Menu.Target>
          <Menu.Dropdown className="font-semibold">
            <Menu.Item>All</Menu.Item>
            <Menu.Item>Active Verifiers</Menu.Item>
            <Menu.Item>Pending Verifiers</Menu.Item>
            <Menu.Item>Deactivated Verifiers</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <div className="flex items-center gap-3">
          <TextInput
            size="md"
            leftSection={<SearchIcon />}
            placeholder="Name/Phone no / Location"
          />
          <Button
            size="md"
            leftSection={<PlusIcon />}
            className="bg-primary text-sm"
          >
            Add New Verifier
          </Button>
        </div>
      </div>

      <div className="mt-10">
        <VerifierTable />
      </div>
    </div>
  );
};

export default Dashboard;
