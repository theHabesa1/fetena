import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  makeStyles,
} from "@material-ui/core";
import Header from "./Header";
import DashboardPage from "./DashboardPage";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "70%",

    paddingLeft: "350px",
  },
}));

const exams = [
  { name: "Exam 1", taken: true },
  { name: "Exam 2", taken: false },
  { name: "Exam 3", taken: false },
  { name: "Exam 4", taken: true },
];

const ExamsPage = () => {
  const navigate = useNavigate();
  const handleTakeExamClick = (examName) => {
    navigate("/exam");
    console.log(`Take ${examName} clicked`);
  };

  const classes = useStyles();

  return (
    <>
      <Header />
      <DashboardPage />
      <div className={classes.root}>
        <TableContainer component={Paper} style={{ margin: "20px" }}>
          <Table aria-label="Exams table">
            <TableHead>
              <TableRow>
                <TableCell>Exam Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.name}>
                  <TableCell component="th" scope="row">
                    {exam.name}
                  </TableCell>
                  <TableCell align="right">
                    {exam.taken ? "Taken" : "Not Taken"}
                  </TableCell>
                  <TableCell align="right">
                    {!exam.taken && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleTakeExamClick(exam.name)}
                      >
                        Take Exam
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ExamsPage;
