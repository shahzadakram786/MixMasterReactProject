// import React from "react";

import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          background: "#F8FAFC",
          display: "flex",
          justifyContent: "center",
          padding: "40px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            gap: "2rem",
            padding: "30px",
          }}
        >
          <Typography variant="h4" sx={{}}>
            About Us
          </Typography>
          <Typography
            variant="p"
            sx={{ lineHeight: "2", fontSize: "18px", color: "#64748b" }}
          >
            Introducing "MixMaster," the ultimate party sidekick app that
            fetches cocktails from the hilarious Cocktails DB API. With a flick
            of your finger, you'll unlock a treasure trove of enchanting drink
            recipes that'll make your taste buds dance and your friends jump
            with joy. Get ready to shake up your mixology game, one fantastical
            mocktail at a time, and let the laughter and giggles flow!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
