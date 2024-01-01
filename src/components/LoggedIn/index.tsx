import { useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Transactions from "../../pages/Transactions/Transactions";
import Deals from "../../pages/Deals/Deals";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = useState(false);
  const [loading] = useState(false);

  return (
    <>
      <MobileSidebar {...{ mobileNav, openMobileNav }} />
      <LoadingOverlay visible={loading} />
      <div className="flex w-full items-start bg-[#F5F6F8] min-h-screen">
        <div className="fixed h-screen hidden lg:flex lg:w-[250px]  bg-darkBlue">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header openMobileNav={openMobileNav} />
          <main className="w-full pt-[50px] lg:ml-[250px] lg:w-[calc(100vw-250px)] px-4 lg:px-10 mb-10 mt-[60px] ">
            <Routes>
              <Route path="/verifiers" element={<Dashboard />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoggedInContainer;
