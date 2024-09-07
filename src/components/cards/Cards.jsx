import React from "react";
import { Box, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import Cardslayout from "../cardsLayout/Cardslayout";

const Cards = ({ data }) => {
  return (
    <Box
      width="100%"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gap={2}
      p={2}
    >
      {data && data.length > 0 ? (
        data.map((item, index) => {
          return <Cardslayout {...item} index={index} />;
        })
      ) : (
        <Typography variant="h6">No results found</Typography>
      )}
    </Box>
  );
};

export default Cards;
