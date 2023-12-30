import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/notifications/styles.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Auth/Login";
import LoggedInContainer from "./components/LoggedIn";

export default function App() {
  const [token] = useState(true);
  return (
    <MantineProvider theme={theme}>
      <div className="underline">
        <Routes>
          <Route
            path="/*"
            element={token ? <LoggedInContainer /> : <Login />}
          />
        </Routes>
      </div>
    </MantineProvider>
  );
}
