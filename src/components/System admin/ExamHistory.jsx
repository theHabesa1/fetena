import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideNavigation from "./SideNav";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    maxWidth: 1800,
    margin: "auto",
    marginTop: 50,
    marginRight: 115,
    paddingTop: theme.spacing(25),
    
  },
}));

function ExamHistory() {
  const classes = useStyles();
  const navigate = useNavigate();

  // Sample exam history data
  const examHistory = [
    {
      id: "e1",
      institution: "University of California",
      participants: 120,
      averageScore: 75,
      date: "March 1, 2022",
      time: "9:00 AM",
    },
    {
      id: "e2",
      institution: "Stanford University",
      participants: 80,
      averageScore: 85,
      date: "March 5, 2022",
      time: "2:00 PM",
    },
    {
      id: "e3",
      institution: "Harvard University",
      participants: 150,
      averageScore: 90,
      date: "March 10, 2022",
      time: "10:00 AM",
    },
  ];

  const handleViewDetails = (examId) => {
    navigate(`/examhistory/detail`);
  };

  return (
    <>
    <Header />
    <SideNavigation />
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="exam history table">
        <TableHead>
          <TableRow>
            <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "18px", fontWeight:"bold" }}>Institution</TableCell>
            <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "18px", fontWeight:"bold" }}># Participants</TableCell>
            <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "18px", fontWeight:"bold" }}>Avg Score</TableCell>
            <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "18px", fontWeight:"bold" }}>Date</TableCell>
            <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "18px", fontWeight:"bold" }}>Time</TableCell>
            <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "18px", fontWeight:"bold" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {examHistory.map((exam) => (
            <TableRow key={exam.id}>
              <TableCell component="th" scope="row" style={{ fontFamily: "Verdana, san-serif", fontSize: "16px" }}>
                {exam.institution}
              </TableCell>
              <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "16px" }} >{exam.participants}</TableCell>
              <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "16px" }}>{exam.averageScore}%</TableCell>
              <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "16px" }}>{exam.date}</TableCell>
              <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "16px" }}>{exam.time}</TableCell>
              <TableCell align="center" component="th" scope="row" style={{ fontFamily: "Verdana", fontSize: "16px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleViewDetails(exam.id)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default ExamHistory;
