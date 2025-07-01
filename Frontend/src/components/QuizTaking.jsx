import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuizTaking = () => {
  const location = useLocation();
  const defaultTime = location.state?.timeLimit || 1600;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [quiz_id, setQuiz_id] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const navigate = useNavigate();

  const { quizType } = useParams();

  const getQuestions = async () => {
    try {
      let data = await axios.get(`/api/quizzes/startquiz/${quizType}`);
      // console.log(data.data);
      setQuiz_id(data.data.quiz_id);
      setQuestions(data.data.questions);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const confirmationMessage =
        "You cannot leave the quiz until you submit. Please finish or submit the quiz.";
      alert(confirmationMessage);
      window.history.pushState(null, "", window.location.pathname);
    };
    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

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
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000);
    let attempted = 0;
    let notAttempted = 0;

    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswerIndex) correct++;
      if (answers[i] === undefined) {
        notAttempted++;
      } else {
        attempted++;
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    navigate(`/quizzes/${quizType}/result`, {
      state: {
        score,
        quiz_id: quiz_id,
        totalQuestions: questions.length,
        correctAnswers: correct,
        incorrectAnswers: attempted - correct,
        quizType: quizType,
        responses: Object.values(answers),
        timeSpent: timeSpent,
        attempted,
        notAttempted,
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
    <>
      <nav className="fixed top-0 w-full border-b backdrop-blur-sm border-gray-200 flex justify-between">
        <div className="flex space-x-5 px-4 py-4 ml-12 justify-between items-center">
          <h1 className="text-2xl font-bold ">{quizType}</h1>
          <span className="text-sm">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div>
          <div className="flex justify-center items-center space-x-4 mt-3 mb-2 py-1 mr-20">
            <div className="flex items-center bg-red-50 px-3 py-2 rounded-lg space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-red-600" />
              <span className="text-red-600 font-mono font-semibold">
                {formatTime(timeLeft)}
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className=" w-25 h-9 rounded-lg bg-emerald-600 text-white text-sm hover:cursor-pointer"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </nav>
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
                        bgcolor:
                          currentQuestion === index ? "#059669" : bgColor,
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
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default QuizTaking;
