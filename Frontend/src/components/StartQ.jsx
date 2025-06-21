import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  Divider,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpIcon from "@mui/icons-material/Help";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const StartQ = ({ quiz }) => {
  return (
    <div className="mt-13">
      <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", py: 6 }}>
        <Box sx={{ maxWidth: 800, mx: "auto", px: 3 }}>
          <Link
            to="/quizzes"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              color: "#2e7d32",
              marginBottom: 16,
            }}
          >
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Quizzes
          </Link>

          <Card elevation={3}>
            <CardContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {quiz.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {quiz.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Box textAlign="center">
                    <HelpIcon color="success" fontSize="large" />
                    <Typography variant="h5" fontWeight="bold">
                      10 {/* You can make this dynamic */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Questions
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box textAlign="center">
                    <AccessTimeIcon color="success" fontSize="large" />
                    <Typography variant="h5" fontWeight="bold">
                      15 min {/* Also make dynamic if needed */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box textAlign="center">
                    <TrackChangesIcon color="success" fontSize="large" />
                    <Typography variant="h5" fontWeight="bold">
                      {quiz.difficulty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Difficulty
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Alert severity="warning" sx={{ mt: 4 }}>
                <Typography fontWeight="bold">Instructions:</Typography>
                <ul style={{ marginTop: 8, marginLeft: 16 }}>
                  <li>• Read each question carefully before selecting your answer.</li>
                  <li>• You can navigate between questions.</li>
                  <li>• Submit before time runs out.</li>
                  <li>• Review and update answers before submission.</li>
                </ul>
              </Alert>

              <Box mt={5} textAlign="center">
                <Button variant="contained" size="large" color="success">
                  Start Quiz
                </Button>
                <Typography variant="body2" color="text.secondary" mt={2}>
                  Good luck! Remember to manage your time wisely.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default StartQ;
