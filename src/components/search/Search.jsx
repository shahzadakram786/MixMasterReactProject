import { Box } from "@mui/material";
// import React, { useState } from "react";
// import { useStyles } from "./style";

const Search = () => {
  const [inputData, setInputData] = useState("");

  const handleClick = (event) => {
    setInputData(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
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
          name="inputName"
          type="text"
        />
        <input
          style={{
            background: "#10B981",
            border: "none",
            color: "white",
            borderRadius: "0px 5px 5px 0",
            padding: "10px",
          }}
          type="button"
          value="search"
          onClick="handleClick(inputName.value)"
        />
      </form>
    </Box>
  );
};

export default Search;
