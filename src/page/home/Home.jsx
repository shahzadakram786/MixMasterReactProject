// import React from "react";

import { Box } from "@mui/material";
import Search from "../../components/search/Search";
import Cards from "../../components/cards/Cards";
import UserData from "../../components/cards/data";

import { useState } from "react";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setFilteredData(inputData);
  };

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const filtered = UserData.filter((value) =>
    value.Name.toLowerCase().includes(filteredData.toLowerCase())
  );

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
        <Search handleChange={handleChange} handleClick={handleClick} />
      </Box>
      <Box sx={{ width: "80%" }}>
        <Cards data={filtered} />
      </Box>
    </Box>
  );
};

export default Home;
