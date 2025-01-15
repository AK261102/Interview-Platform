import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
} from "@mui/material";

const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:8080/api/submissions",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSubmissions(data);
        setFilteredSubmissions(data); // Initialize filtered submissions
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, []);

  // Handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter submissions based on the company name
    const filtered = submissions.filter((submission) =>
      submission.company.toLowerCase().includes(query)
    );
    setFilteredSubmissions(filtered);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Submissions
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search by Company"
        variant="outlined"
        fullWidth
        sx={{ mb: 4 }}
        value={searchQuery}
        onChange={handleSearch}
      />

      <Grid container spacing={3}>
        {filteredSubmissions.map((submission) => (
          <Grid item xs={12} sm={6} md={4} key={submission._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{submission.name}</Typography>
                <Typography variant="body2">
                  Country: {submission.country}
                </Typography>
                <Typography variant="body2">
                  Company: {submission.company}
                </Typography>
                <Typography variant="body2">
                  User: {submission.userId.email}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  Questions:
                </Typography>
                <ul>
                  {submission.questions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
