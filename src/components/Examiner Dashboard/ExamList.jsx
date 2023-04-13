import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import ExaminerDashboard from './Dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    width: "70%",
    paddingLeft: "350px",
  },
  table: {
    minWidth: 650,
  },
}));

const ExamListPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [exams, setExams] = useState([
    {
      name: 'Math Exam',
      scheduledDate: '2023-04-01',
      examinerName: 'John Doe',
      taken: false,
    },
    {
      name: 'English Exam',
      scheduledDate: '2023-04-05',
      examinerName: 'Jane Smith',
      taken: true,
    },
    {
      name: 'Science Exam',
      scheduledDate: '2023-04-10',
      examinerName: 'Bob Johnson',
      taken: false,
    },
  ]);

  const handleExamStart = (exam) => {
    // TODO: start the exam
    console.log('Starting exam:', exam.name);
    navigate('/monitor');
  };

  return (
    <>
    <ExaminerDashboard/>
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="exam table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Scheduled Date</TableCell>
              <TableCell>Examiner Name</TableCell>
              <TableCell>Taken</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.name}>
                <TableCell component="th" scope="row">
                  {exam.name}
                </TableCell>
                <TableCell>{exam.scheduledDate}</TableCell>
                <TableCell>{exam.examinerName}</TableCell>
                <TableCell>{exam.taken ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  {!exam.taken && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleExamStart(exam)}
                    >
                      Start Exam
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

export default ExamListPage;
