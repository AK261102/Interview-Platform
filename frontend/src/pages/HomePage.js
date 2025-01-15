import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Welcome to Interview Platform
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Our platform allows users to share and view interview experiences
              to help others prepare for their interviews. Submit your
              interview details, review others’ submissions, and enhance your
              preparation for the next big opportunity.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Create an account to contribute and access a growing database of
              interview experiences from top companies worldwide.
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate("/login")}
                sx={{ mr: 2 }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          </Grid>
          {/* Right Section: Illustration or Image */}
          <Grid item xs={12} md={6}>
            <img
              src="https://files.oaiusercontent.com/file-FJscLd1EnKQpsLKdZDXTpQ?se=2025-01-15T21%3A23%3A26Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8d7f6f4e-3820-4995-81d1-4d1ed51c4228.webp&sig=6F/f7W3NQG/1bWTXvgRltIny5YGN7Ov0ia9jNNFiO/Q%3D"
              alt="Interview Platform Illustration"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
