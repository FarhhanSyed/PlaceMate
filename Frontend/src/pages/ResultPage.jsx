import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid, Paper, Divider } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    totalQuestions = 0,
    correctAnswers = 0,
    incorrectAnswers = 0,
    quizType = "quiz",
    timeSpent = 2500,
  } = location.state || {};

  useEffect(() => {
    // console.log("SCORE:",);
    console.log("correct:", location.state);
  }, [location.state]);

  const minutesSpent = Math.floor(timeSpent / 60);
  const accuracyRate = totalQuestions
    ? Math.round((correctAnswers / totalQuestions) * 100)
    : 0;
  const timeEfficiency = Math.round((1 - timeSpent / 3600) * 100);
  const questionsPerMinute = (totalQuestions / (timeSpent / 60)).toFixed(1);

  return (
    <>
      <Box
        sx={{
          mt: 8,
          minHeight: "100vh",
          bgcolor: "#f9fafb",
          py: 6,
          px: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box maxWidth="md" width="100%">
          <Box
            component={Paper}
            elevation={3}
            sx={{ p: 4, textAlign: "center", borderRadius: 3 }}
          >
            <EmojiEventsIcon
              sx={{
                fontSize: 50,
                color: "#059669",
                bgcolor: "#A7F3D0",
                borderRadius: "50%",
                p: 0.5,
              }}
            />
            <Typography variant="h5" fontWeight="bold" mt={2}>
              Quiz Completed!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {quizType}
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={score >= 60 ? "green" : "error"}
              mt={1}
            >
              {score}%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {score >= 60 ? "Great job!" : "Keep Practicing!"}
            </Typography>

            <Grid container spacing={4} mt={4}>
              <Grid item xs={6} sm={3} sx={{ height: "20px", width: "180px" }}>
                <Paper sx={{ py: 2, bgcolor: "#ECFDF5 " }} elevation={0}>
                  <CheckCircleIcon
                    sx={{ color: "#059669", fontSize: "28px" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#059669", fontSize: "22px", fontWeight: 500 }}
                  >
                    {correctAnswers}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Correct
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3} sx={{ height: "20px", width: "180px" }}>
                <Paper sx={{ py: 2, bgcolor: "#fdecea" }} elevation={0}>
                  <CancelIcon
                    color="error"
                    sx={{ color: "#DC2626", fontSize: "28px" }}
                  />
                  <Typography variant="h6" sx={{ color: "#DC2626" }}>
                    {incorrectAnswers}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Incorrect
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3} sx={{ height: "20px", width: "180px" }}>
                <Paper sx={{ py: 2, bgcolor: "#e3f2fd" }} elevation={0}>
                  <AccessTimeIcon
                    color="primary"
                    sx={{ color: "#2563EB", fontSize: "28px" }}
                  />
                  <Typography variant="h6" sx={{ color: "#2563EB" }}>
                    {minutesSpent}m
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Time Spent
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3} sx={{ width: "180px" }}>
                <Paper sx={{ py: 2, bgcolor: "#FAF5FF" }} elevation={0}>
                  <TrackChangesIcon
                    color="secondary"
                    sx={{ color: "#9333EA", fontSize: "28px" }}
                  />
                  <Typography variant="h6" sx={{ color: "#9333EA" }}>
                    {totalQuestions}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Total Questions
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Box
              mt={5}
              textAlign="left"
              sx={{ bgcolor: "#F3F4F6", borderRadius: "6px", padding: "15px" }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Performance Analysis
              </Typography>
              <Box mt={2} pl={1}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 15, color: "gray", mb: "2px" }}
                >
                  <strong>Accuracy Rate : </strong> {accuracyRate}%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 15, color: "gray", mb: "2px" }}
                >
                  <strong>Time Efficiency : </strong> {timeEfficiency}%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 15, color: "gray", mb: "2px" }}
                >
                  <strong>Questions per Minute : </strong> {questionsPerMinute}
                </Typography>
              </Box>
            </Box>

            <Box mt={5} display="flex" justifyContent="center" gap={2}>
              <Button
                variant="outlined"
                startIcon={<ReplayIcon />}
                onClick={() => navigate(-1)}
                sx={{
                  borderColor: "gray",
                  fontSize: 12,
                  color: "black",
                  fontWeight: 600,
                }}
              >
                Retake Quiz
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/quizzes")}
                sx={{
                  bgcolor: "#059669",
                  color: "#fff",
                  "&hover": { bgcolor: "#047857" },
                  fontSize: 12,
                }}
              >
                Back to Quizzes
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResultPage;
