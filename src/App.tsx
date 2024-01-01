import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoggedInContainer from "./components/LoggedIn";
import Unauthenticated from "./components/Unauthenticated/Unauthenticated";

export default function App() {
  const token = localStorage.getItem("xpress_token") ?? "";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/verifiers");
    }
  }, []);

  return (
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Routes>
        <Route
          path="/*"
          element={token ? <LoggedInContainer /> : <Unauthenticated />}
        />
      </Routes>
    </MantineProvider>
  );
}
