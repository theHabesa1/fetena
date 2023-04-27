import React, { useEffect, useState } from "react";
import { Box, Button, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["New York", "Paris", "London", "Berlin"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the largest continent?",
    options: ["Europe", "Africa", "Asia", "North America"],
    answer: "Asia",
  },
  {
    id: 3,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Dollar", "Euro", "Yen"],
    answer: "Yen",
  },
  {
    id: 4,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Dollar", "Euro", "Yen"],
    answer: "Yen",
  },
  {
    id: 5,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Dollar", "Euro", "Yen"],
    answer: "Yen",
  },
];

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const ExamPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [time, setTime] = useState(180);

  useEffect(() => {
    if (time === 0) {
      alert("Time's up!");
    } else {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextClick = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevClick = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <ThemeProvider theme={theme}>
      <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: "100%", border:"black" }}>
                <Typography variant="h5" gutterBottom>
                  Time Left: {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
                <Box width="80%" my={2}>
            <LinearProgress
              variant="determinate"
              value={((currentQuestionIndex + 1) / questions.length) * 100}
            />
          </Box>
              </Paper>
            </Grid>
        <Box
          p={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Grid container spacing={2} sx={{ width: "80%" }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="h5" gutterBottom>
                  Question {currentQuestion.id}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {currentQuestion.question}
                </Typography>
                
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="body1" gutterBottom>
                  Which of the following options is the correct answer?
                </Typography>
                {currentQuestion.options.map((option, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      p: 1,
                  
                      cursor: "pointer",
                     
                      bgcolor:
                        selectedOption === index
                          ? "primary.main"
                          : "background.paper",
                      "&:hover": {
                        bgcolor: "grey.200",
                      },
                      
                      flexDirection: "column",
                      
                      justifyContent: "space-between",
                      padding: "20px 32px",
                      margin: "8px",
                      flex: "0 0 auto",
                      textAlign: "center",
                      boxSizing: "border-box",
                      border: "1px solid #ddd",
                      
                      borderRadius: "var(--border-radius)",
                     
                      lineHeight: "1.3",
                      transition: "transform 0.1s, border-color 0.5s, background-color 0.2s"
                    }}
                    onClick={() => handleOptionClick(index)}
                  >
                    
                    <Typography variant="body1">{option}</Typography>
                  </Box>
                ))}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  
                  <Button
                    variant="outlined"
                    sx={{ mr: 2 }}
                    disabled={currentQuestionIndex === 0}
                    onClick={handlePrevClick}
                  >
                    Prev
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleNextClick}
                    disabled={selectedOption === null}
                  >
                    {currentQuestionIndex === questions.length - 1
                      ? "Submit"
                      : "Next"}
                  </Button>
                </Box>
              </Paper>
            </Grid>
            
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ExamPage;
