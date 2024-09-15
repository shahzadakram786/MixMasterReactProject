import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cardslayout = ({ id, Image, Name, Glassname, Type, index }) => {
  const navigate = useNavigate();

  const handleClickDetails = () => {
    navigate(`/${index}`);
  };

  return (
    <Box
      key={id}
      textAlign="center"
      boxShadow="2px 2px 10px rgba(0, 0, 0, 0.2)"
    >
      <Box sx={{ borderRadius: "5px" }}>
        <img
          style={{ borderRadius: "0px" }}
          src={Image}
          alt={Name}
          width="100%"
          height="100%"
        />
      </Box>
      <Box sx={{ textAlign: "left", padding: "0 20px" }}>
        <Typography variant="h6" mt={1}>
          {Name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {Glassname}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {Type}
        </Typography>
        <Box>
          <Button
            style={{
              background: "#10B981",
              margin: "10px 0",
              color: "white",
            }}
            onClick={handleClickDetails}
          >
            Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cardslayout;
