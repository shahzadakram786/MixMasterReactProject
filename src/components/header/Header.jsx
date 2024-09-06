import React from "react";

import { Box, Typography } from "@mui/material";

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
            <Typography sx={{ color: "#10B981", cursor: "pointer" }}>
              Home
            </Typography>
            <Typography sx={{ cursor: "pointer" }}>About</Typography>
            <Typography sx={{ cursor: "pointer" }}>OurNewsletter</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
