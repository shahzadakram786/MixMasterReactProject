import React from "react";
import { Box, Button, Typography } from "@mui/material";
import UserData from "./data";

const Cards = () => {
  return (
    // {UserData.filter((value)=>{
    //    value.Name.toUpperCase().include()
    // })}

    <Box
      width="100%"
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gap={2}
      p={2}
    >
      {UserData.map((item) => (
        <Box
          key={item.id}
          textAlign="center"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.2)"
        >
          <Box sx={{ borderRadius: "5px" }}>
            <img
              style={{ borderRadius: "0px" }}
              src={item.Image}
              alt={item.Name}
              width="100%"
              height="100%"
            />
          </Box>
          <Box sx={{ textAlign: "left", padding: "0 20px" }}>
            <Typography variant="h6" mt={1}>
              {item.Name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.Glassname}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.Type}
            </Typography>
            <Box>
              <Button
                style={{
                  background: "#10B981",
                  margin: "10px 0",
                  color: "white",
                }}
              >
                Details
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
