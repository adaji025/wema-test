import { Button, Menu, TextInput, LoadingOverlay } from "@mantine/core";
import {
  ChevronDownIcon,
  PlusIcon,
  SearchIcon,
} from "../../components/Svgs/Svg";
import VerifierTable from "./components/VerifierTable";
import { Fragment, useEffect, useState } from "react";
import { VerifiersType } from "../../types/verifiers";
import { getVerifiers } from "../../services/user";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [verifiers, setVerifier] = useState<VerifiersType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<VerifiersType[]>(verifiers);

  console.log(filteredData)
  useEffect(() => {
    handleGetVerifiers();
  }, []);
  

  const handleGetVerifiers = () => {
    setLoading(true);
    getVerifiers()
      .then((res: any) => {
        setVerifier(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredData = verifiers.filter((item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchTerm.toLowerCase())||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(verifiers);
    } else {
      setFilteredData(filteredData);
    }
  }, [searchTerm, verifiers]);

  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
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
            value={searchTerm}
          onChange={handleSearch}
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
        <VerifierTable verifiers={filteredData} />
      </div>
    </Fragment>
  );
};

export default Dashboard;
