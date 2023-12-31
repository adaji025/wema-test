import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/notifications/styles.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Auth/Login";
import LoggedInContainer from "./components/LoggedIn";
import Register from "./pages/Auth/Register";

export default function App() {
  const [token] = useState(false);
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={token ? <LoggedInContainer /> : <Login />} />
      </Routes>
    </MantineProvider>
  );
}
