import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
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
  const { quizType } = useParams();

  if (!quiz) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h4" color="error">
          Quiz data not available!
        </Typography>
        <Link to="/quizzes">
          <Button variant="outlined" color="error" sx={{ mt: 2 }}>
            Go Back to Quizzes
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <div className="mt-13">
      <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", py: 6 }}>
        <Box sx={{ maxWidth: 850, mx: "auto", px: 3 }}>
          <Link
            to="/quizzes"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              color: "#059669",
              marginBottom: 24,
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Quizzes
          </Link>

          <Card elevation={2} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                gutterBottom
              >
                {quiz.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign="center"
              >
                {quiz.description}
              </Typography>

              <Divider sx={{ my: 4 }} />

              <Grid container spacing={4} columns={12} justifyContent="center">
                <Grid
                  sx={{
                    gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
                  }}
                >
                  <Box
                    textAlign="center"
                    bgcolor="#f9fafb"
                    borderRadius={2}
                    py={3}
                    px={10}
                  >
                    <HelpIcon sx={{ color: "#059669", fontSize: 30 }} />
                    <Typography variant="h5" fontWeight="bold" mt={1}>
                      {quiz.questions || 350}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Questions
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  sx={{
                    gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
                  }}
                >
                  <Box
                    textAlign="center"
                    bgcolor="#f9fafb"
                    borderRadius={2}
                    py={3}
                    px={10}
                  >
                    <AccessTimeIcon sx={{ color: "#059669", fontSize: 30 }} />
                    <Typography variant="h5" fontWeight="bold" mt={1}>
                      {quiz.duration || 55}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Minutes
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  sx={{
                    gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
                  }}
                >
                  <Box
                    textAlign="center"
                    bgcolor="#f9fafb"
                    borderRadius={2}
                    py={3}
                    px={10}
                  >
                    <TrackChangesIcon sx={{ color: "#059669", fontSize: 30 }} />
                    <Typography variant="h5" fontWeight="bold" mt={1}>
                      {quiz.difficulty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Difficulty
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Alert
                severity="warning"
                sx={{
                  mt: 5,
                  backgroundColor: "#fffde7",
                  borderRadius: 2,
                  mx: 3,
                }}
              >
                <Typography fontWeight="bold" mb={1}>
                  Instructions:
                </Typography>
                <ul style={{ paddingLeft: 10, margin: 0 }}>
                  <li>
                    * Read each question carefully before selecting your answer
                  </li>
                  <li style={{ paddingTop: 5 }}>
                    * You can navigate between questions using the navigation
                    panel
                  </li>
                  <li style={{ paddingTop: 5 }}>
                    * Make sure to submit your quiz before the timer runs out
                  </li>
                  <li style={{ paddingTop: 5 }}>
                    * You can review and change your answers before final
                    submission
                  </li>
                </ul>
              </Alert>
              <Box mt={5} textAlign="center">
                <Link to={`/quizzes/startquiz/${quizType}/take`}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#059669",
                      ":hover": { backgroundColor: "#047857" },
                      px: 5,
                      py: 1,
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                  >
                    Start Quiz
                  </Button>
                </Link>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                  fontSize="14px"
                >
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
