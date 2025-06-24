import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Grid,
  CardContent,
  CardHeader,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Flag, CheckCircle } from "lucide-react";

const QuizTaking = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(3600);
  const navigate = useNavigate();

  const { quizType } = useParams();

  const getQuestions = async () => {
    try {
      let data = await axios.get(`/api/quizzes/startquiz/${quizType}`);
      //   console.log(data.data.questions);
      setQuestions(data.data.questions);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleAnswerChange = (event) => {
    setAnswers({ ...answers, [currentQuestion]: parseInt(event.target.value) });
  };

  const toggleFlag = () => {
    const updatedFlags = new Set(flaggedQuestions);
    if (updatedFlags.has(currentQuestion)) {
      updatedFlags.delete(currentQuestion);
    } else {
      updatedFlags.add(currentQuestion);
    }
    setFlaggedQuestions(updatedFlags);
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswerIndex) correct++;
    });

    const score = Math.round((correct / questions.length) * 100);
    navigate("/result", {
      state: {
        score,
        totalQuestions: questions.length,
        correctAnswers: correct,
        incorrectAnswers: questions.length - correct,
        quizType: quizType,
      },
    });
  };
  if (questions.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6">Loading questions...</Typography>
      </Box>
    );
  }
  return (
    <Box display="flex" minHeight="100vh" p={4} mt={10}>
      <Box width="20%">
        <Card variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
          <Typography fontWeight={600} mb={2}>
            Questions
          </Typography>
          <Grid container spacing={1}>
            {questions.map((_, index) => {
              let bgColor = "white";
              if (answers[index] !== undefined) bgColor = "#dcfce7"; // green
              else if (flaggedQuestions.has(index)) bgColor = "#fef9c3"; // yellow

              return (
                <Grid item key={index}>
                  <Button
                    onClick={() => setCurrentQuestion(index)}
                    sx={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      bgcolor: currentQuestion === index ? "#059669" : bgColor,
                      color: currentQuestion === index ? "white" : "black",
                      border: "1px solid #e5e7eb",
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    {index + 1}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Box mt={3}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Box
                width={14}
                height={14}
                bgcolor="#dcfce7"
                borderRadius={0.5}
              />
              <Typography fontSize={12}>Answered</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Box
                width={14}
                height={14}
                bgcolor="#fef9c3"
                borderRadius={0.5}
              />
              <Typography fontSize={12}>Flagged</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                width={14}
                height={14}
                bgcolor="white"
                borderRadius={0.5}
                border="1px solid #e5e7eb"
              />
              <Typography fontSize={12}>Not Visited</Typography>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box width="80%" px={6}>
        <Card variant="outlined" sx={{ p: 4, borderRadius: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography fontWeight={600} fontSize={18}>
              Question : {currentQuestion + 1}
            </Typography>
            <Button
              variant="outlined"
              onClick={toggleFlag}
              startIcon={<Flag size={16} />}
              sx={{
                textTransform: "none",
                color: "black",
                borderColor: "gray",
                bgcolor: flaggedQuestions.has(currentQuestion)
                  ? "#FFF9B1"
                  : null,
              }}
            >
              {flaggedQuestions.has(currentQuestion) ? "Flagged" : "Flag"}
            </Button>
          </Box>

          {questions.length > 0 && (
            <Typography fontSize={16} mb={3}>
              {questions[currentQuestion].question}
            </Typography>
          )}

          <FormControl>
            <RadioGroup
              value={answers[currentQuestion]?.toString() || ""}
              onChange={handleAnswerChange}
            >
              {questions[currentQuestion].options.map((option, idx) => (
                <Box
                  key={idx}
                  sx={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 2,
                    mb: 2,
                    p: 1.5,
                    "&:hover": { bgcolor: "#f9fafb" },
                  }}
                >
                  <FormControlLabel
                    value={idx.toString()}
                    control={<Radio />}
                    label={
                      <Typography fontSize={14}>
                        {" "}
                        {String.fromCharCode(65 + idx)}. {option}{" "}
                      </Typography>
                    }
                  />
                </Box>
              ))}
            </RadioGroup>
          </FormControl>

          <Box mt={4} display="flex" justifyContent="space-between">
            <Button
              startIcon={<ChevronLeft size={16} />}
              onClick={() =>
                setCurrentQuestion((prev) => Math.max(0, prev - 1))
              }
              disabled={currentQuestion === 0}
              variant="outlined"
            >
              Previous
            </Button>
            <Button
              endIcon={<ChevronRight size={16} />}
              onClick={() => setCurrentQuestion((prev) => prev + 1)}
              disabled={currentQuestion === questions.length - 1}
              variant="outlined"
            >
              Save & Next
            </Button>
            <Link to={`/quizzes/${quizType}/result`}>
              {currentQuestion === questions.length - 1 && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                  startIcon={<CheckCircle />}
                  sx={{ bgcolor: "#00966A" }}
                >
                  Submit Quiz
                </Button>
              )}
            </Link>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default QuizTaking;
