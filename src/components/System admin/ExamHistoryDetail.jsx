import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    marginBottom: 10,
  },
  divider: {
    marginBottom: 20,
  },
  table: {
    minWidth: 650,
  },
  avatar: {
    marginRight: 10,
  },
});

function DetailExam() {
  const classes = useStyles();
  const location = useLocation();

  // Sample data for the detail exam page
  const examData = {
    id: "e1",
    institution: "University of California",
    conductedBy: [
      {
        id: "ex1",
        name: "John Doe",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
        score: 75,
      },
      {
        id: "ex2",
        name: "Jane Doe",
        avatarUrl: "https://i.pravatar.cc/150?img=2",
        score: 80,
      },
      {
        id: "ex3",
        name: "Bob Smith",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
        score: 90,
      },
    ],
    errors: {
      syntax: 10,
      runtime: 5,
      logic: 3,
    },
    subscription: "Gold",
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Exam Details
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6">Institution: {examData.institution}</Typography>
      <Typography variant="subtitle1">
        Subscription: {examData.subscription}
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6">Exam Conducted By: Yared Abera</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="exam conducted by table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Examinee</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">ID No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {examData.conductedBy.map((examiner) => (
              <TableRow key={examiner.id}>
                <TableCell component="th" scope="row">
                  <Avatar
                    alt={examiner.name}
                    src={examiner.avatarUrl}
                    className={classes.avatar}
                  />
                  {examiner.name}
                </TableCell>
                <TableCell align="center">{examiner.score}%</TableCell>
                <TableCell align="center">{examiner.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider className={classes.divider} />
      <Typography variant="h6">Errors:</Typography>
      <Typography variant="subtitle1">
        Syntax: {examData.errors.syntax}%, Runtime: {examData.errors.runtime}%,
        Logic: {examData.errors.logic}%
      </Typography>
    </div>
  );
}

export default DetailExam;
