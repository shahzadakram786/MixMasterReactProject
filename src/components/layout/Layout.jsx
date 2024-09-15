import React from "react";
import Header from "../header/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
