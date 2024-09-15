import React from "react";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        className="container"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Box
          sx={{
            width: "90%",
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{ fontSize: "3rem", fontWeight: "bolder", color: "#10B981" }}
            >
              MixMaster
            </Typography>

            {/* <img src="" alt="LOGO" /> */}
          </Box>

          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Typography
              sx={{ color: "#10B981", cursor: "pointer" }}
              component={Link}
            >
              Home
            </Typography>
            <Typography sx={{ cursor: "pointer" }} component={Link} to="about">
              About
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              component={Link}
              to="ourNews"
            >
              OurNewsletter
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
