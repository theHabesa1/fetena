import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import ExaminerDashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 900,
    margin: "0 auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  picture: {
    maxWidth: 150,
  },
  matched: {
    color: "green",
    fontWeight: "bold",
  },
  unmatched: {
    color: "red",
    fontWeight: "bold",
  },
  timeElapsed: {
    position: "absolute",
    top: theme.spacing(10),
    right: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
  },
}));

const MonitoringPage = () => {
  const classes = useStyles();
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

  const [examinees, setExaminees] = useState([
    {
      id: "001",
      firstName: "John",
      lastName: "Doe",
      time: "12:01 est",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&usqp=CAU",
      match: true,
    },
    {
      id: "002",
      firstName: "Jane",
      lastName: "Doe",
      time: "12:00 est",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&usqp=CAU",
      match: false,
    },
    {
      id: "003",
      firstName: "Bob",
      lastName: "Smith",
      time: "12:05 est",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&usqp=CAU",
      match: true,
    },
    {
      id: "004",
      firstName: "Peter",
      lastName: "Griffen",
      time: "12:11 est",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&usqp=CAU",
      match: false,
    },
  ]);

  const handleEvictExaminee = (id) => {
    const newExaminees = examinees.filter((examinee) => examinee.id !== id);
    setExaminees(newExaminees);
  };

  return (
    <>
      <ExaminerDashboard/>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monitoring Page
          </Typography>
          <div className={classes.timeElapsed}>
            <Typography variant="body2"> Time Elapsed: {formatTime(timeElapsed)}</Typography>
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Examinee table">
              <TableHead>
                <TableRow>
                  <TableCell>Examinee ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Joined time</TableCell>
                  <TableCell>Picture</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {examinees.map((examinee) => (
                  <TableRow key={examinee.id}>
                    <TableCell>{examinee.id}</TableCell>
                    <TableCell>{examinee.firstName}</TableCell>
                    <TableCell>{examinee.lastName}</TableCell>
                    <TableCell>{examinee.time}</TableCell>
                    <TableCell>
                      <img
                        className={classes.picture}
                        src={examinee.picture}
                        alt={`${examinee.firstName} ${examinee.lastName}`}
                      />
                    </TableCell>
                    <TableCell
                      className={
                        examinee.match ? classes.matched : classes.unmatched
                      }
                    >
                      {examinee.match ? "Match" : "Unmatched"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleEvictExaminee(examinee.id)}
                      >
                        Evict
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};
export default MonitoringPage;
