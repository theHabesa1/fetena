import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    margin: "auto",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    marginRight: 10,
  },
});

function ExamDetails() {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timerID, setTimerID] = useState(null);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formatTime = (time) => {
      if (time < 60) {
        return `${time} sec`;
      } else if (time >= 60 && time < 3600) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes} min ${seconds} sec`;
      } else {
        const hours = Math.floor(time / 3600);
        const remainingTime = time % 3600;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${hours} hr ${minutes} min ${seconds} sec`;
      }
    };

  const classes = useStyles();
  const { examId } = useParams();

  // Sample exam data
  const exam = {
    id: examId,
    name: "Physics Exam",
    institution: "University of California",
    examiners: ["John Doe", "Jane Smith"],
    startTime: "2022-04-01 10:00:00",
    reports: [
      {
        id: "r1",
        name: "Report 1",
        status: "Completed",
      },
      {
        id: "r2",
        name: "Report 2",
        status: "In Progress",
      },
    ],
    errors: [
      {
        id: "e1",
        description: "Question 3 has incorrect answer",
        reportedBy: "Yared Abera"
      },
    ],
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary">
          {exam.name}
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Institution: {exam.institution}
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Examiner: {exam.examiners}
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Start Time: {exam.startTime}
        </Typography>
        <Typography variant="body2" className={classes.subtitle} color="textSecondary">
          Time Elapsed: {formatTime(timeElapsed)}
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Reports: {exam.reports.length}
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Errors: {exam.errors.length}
        </Typography>

        {exam.errors.length > 0 && (
          <div className={classes.content}>
            <Typography variant="h6" color="textPrimary">
              Errors:
            </Typography>
            {exam.errors.map((error) => (
              <div key={error.id}>
                <Typography variant="body1" color="textSecondary">
                  {error.description} (Reported by: {error.reportedBy})
                </Typography>
              </div>
            ))}
          </div>
        )}
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => console.log("Exam paused")}
          >
            Pause Exam
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => console.log("Exam cancelled")}
          >
            Cancel Exam
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExamDetails;
