import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Cards from "../cards/Cards";
import UserData from "../cards/data";

const Search = ({ handleChange, handleClick }) => {
  //   const filterData = (searchTerm) => {

  // setFilteredData(filtered);
  //   };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
        boxShadow: "1px 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "30px",
        borderRadius: "5px",
      }}
    >
      <form style={{ display: "flex", width: "80%" }}>
        <input
          style={{
            width: "100%",
            padding: "6px",
            background: "#F8FAFC",
            border: "none",
            borderRadius: "5px",
          }}
          onChange={handleChange}
          type="text"
          //   value={inputData}
        />
        <Button
          style={{
            background: "#10B981",
            border: "none",
            color: "white",
            borderRadius: "0px 5px 5px 0",
            padding: "10px",
          }}
          onClick={handleClick}
        >
          Search
        </Button>
      </form>
      {/* <Cards data={filtered} /> */}
    </Box>
  );
};

export default Search;
