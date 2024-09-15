import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import UserData from "../cards/data";
import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";

const Singleproduct = () => {
  const { id } = useParams();
  const data = UserData[id];

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {/* Back Home Button */}
      <Button
        variant="contained"
        color="success"
        sx={{ mb: 3 }}
        component={Link}
        to="/"
        // Navigate back to home on button click
      >
        Back Home
      </Button>

      {/* Product Name */}
      <Typography variant="h3" gutterBottom>
        {data.Name} {/* Dynamic name from data */}
      </Typography>

      {/* Product Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Product Image */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={data.Name}
            height="300"
            image={data.Image}
          />
        </Card>

        {/* Product Information */}
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="body1">
            <strong>Name:</strong> {data.Name}
          </Typography>
          <Typography variant="body1">
            <strong>Category:</strong> {data.Category}
          </Typography>
          <Typography variant="body1">
            <strong>Info:</strong> {data.Type}
          </Typography>
          <Typography variant="body1">
            <strong>Glass:</strong> {data.Glassname}
          </Typography>
          <Typography variant="body1">
            <strong>Ingredients:</strong>
            {data.Ingredients}
            {/* Array of ingredients */}
          </Typography>
          <Typography variant="body1">
            <strong>Instructions:</strong> {data.Instructions}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Singleproduct;
