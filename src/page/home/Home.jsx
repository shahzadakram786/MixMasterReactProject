// import React from "react";

import { Box } from "@mui/material";
import Search from "../../components/search/Search";
import Cards from "../../components/cards/Cards";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: 2,
        background: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <Search />
      </Box>
      <Box sx={{ width: "80%" }}>
        <Cards />
      </Box>
    </Box>
  );
};

export default Home;
