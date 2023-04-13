import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { useToasts } from 'react-toast-notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    width: "80%",
  },
  question: {
    marginBottom: theme.spacing(2),
  },
  answer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    margin: theme.spacing(2, 0),
  },
  radio: {
    marginRight: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
  timer :{
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
    transition: "background-color 0.5s ease-in-out",
    "&.red": {
      backgroundColor: "#f00",
    },

  },
}));

const ExamPage = () => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState(10); 
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Paris", "London", "New York", "Sydney"],
      answer: "Paris",
      selected: "",
    },
    {
      id: 2,
      text: "What is the largest ocean in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
      selected: "",
    },
    // Add more questions as needed
  ]);

  const [, setIsActive] = useState(true);
  const [strikeCount, setStrikeCount] = useState(0);
  const [totalLeaveCount, setTotalLeaveCount] = useState(0);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { addToast } = useToasts();

  const showWarningToast = (message) => {
    addToast(message, {
      appearance: "warning",
      autoDismiss: true,
    });
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(false);
        setTotalLeaveCount(prevCount => prevCount + 1);
        if (strikeCount >= 2) {
          showWarningToast(`You left the tab ${totalLeaveCount} times. You have no more strikes left.`);
          setDisableSubmit(true);
        } else {
          setStrikeCount(prevCount => prevCount + 1);
          showWarningToast(`You left the tab ${totalLeaveCount} times. You have ${2 - strikeCount} strikes left.`);
        }
      } else {
        setIsActive(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [strikeCount, totalLeaveCount]);

  //Mouse tracking functionality

  
  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (event.clientY <= 0 || event.clientY >= window.innerHeight || event.clientX <= 0 || event.clientX >= window.innerWidth) {
        showWarningToast("Mouse left the screen!");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  const [isExamFinished, setIsExamFinished] = useState(false);


  // useEffect hook to start the timer
  const intervalRef = useRef(null); // define intervalRef using useRef

  // useEffect hook to start the timer
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  
  useEffect(() => {
    if (timeLeft === 0) {
      setIsExamFinished(true);
      clearInterval(intervalRef.current); // clear the interval using intervalRef.current
    }
  }, [timeLeft]);
  

  // function to handle option selection
  const handleOptionSelect = (id, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, selected: value } : question
      )
    );
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to check answers and calculate score
    // ...
    // Redirect to score page or show score on this page
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Exam Title {isExamFinished && "- Time Up"}</Typography>
      <Paper elevation={3} className={classes.paper}>
        <Box className = {classes.timer}>
        <Typography variant="h6" color="textSecondary" className={`${classes.timer} ${timeLeft === 0 ? "red" : ""}`}>
              Time Left: {formatTime(timeLeft)}
            </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <Box key={question.id} className={classes.question}>
              <Typography variant="h6">{question.text}</Typography>
              {question.options.map((option, index) => (
                <Box key={index} className={classes.answer}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={question.selected === option}
                    className = {classes.radio}
                    onChange={(e) => handleOptionSelect(question.id, e.target.value)}
                  />
                  <Typography>{option}</Typography>
                </Box>
              ))}
            </Box>
          ))}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isExamFinished || disableSubmit} 
            className={classes.submitButton}
          >
            Submit Exam
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ExamPage;
