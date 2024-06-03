import React from "react";

import { Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Shell() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fafafa",
      }}
    >
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography>Candy App</Typography>
        </Toolbar>
      </AppBar>
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </main>
    </div>
  );
}
