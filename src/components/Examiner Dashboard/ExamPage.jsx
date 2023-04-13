import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
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
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import * as XLSX from "xlsx";
import { Dashboard } from "@material-ui/icons";
import ExaminerDashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
  card: {
    maxWidth: 800,
    margin: "0 auto",
  },
  paper: {
    width: '100%',
    margin: 'auto',
    padding: theme.spacing(3),
  },
  dropzone: {
    minHeight: 100,
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: "2px dashed rgba(0, 0, 0, 0.3)",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const AddExamPage = () => {
  const classes = useStyles();

  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState(new Date());
  const [questions, setQuestions] = useState([]);

  const handleFileUpload = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
      const wb = XLSX.read(fileData, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Convert the data to questions
      const convertedQuestions = data.map((row) => ({
        question: row[0],
        options: row.slice(1, 5),
        answer: row[5],
      }));

      setQuestions(convertedQuestions);
    };

    acceptedFiles.forEach((file) => reader.readAsBinaryString(file));
  };

  const handleOnDrop = (acceptedFiles) => {
    handleFileUpload(acceptedFiles);
  };

  const handleExamNameChange = (event) => {
    setExamName(event.target.value);
  };

  const handleExamDateChange = (event) => {
    setExamDate(event.target.value);
  };

  const handleSaveExam = () => {
    // TODO: save the exam with the name, date, and questions
    console.log(examName, examDate, questions);
  };

  const moveQuestion = (index, direction) => {
    const position = direction === 'up' ? index - 1 : index + 1;
    const newQuestions = [...questions];
    const temp = newQuestions[position];
    newQuestions[position] = newQuestions[index];
    newQuestions[index] = temp;
    setQuestions(newQuestions);
  };


  return (
    <>
      <ExaminerDashboard />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Add Exam
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="Exam Name"
                  value={examName}
                  onChange={handleExamNameChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Exam Date</InputLabel>
                <Select value={examDate} onChange={handleExamDateChange}>
                  <MenuItem value={new Date()}>Today</MenuItem>
                  <MenuItem value={new Date(Date.now() + 86400000)}>
                    Tomorrow
                  </MenuItem>
                  <MenuItem value={new Date(Date.now() + 172800000)}>
                    Day after tomorrow
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <DropzoneArea
                acceptedFiles={[".xlsx", ".csv"]}
                dropzoneClass={classes.dropzone}
                onDrop={handleOnDrop}
                showAlerts={false}
                showPreviewsInDropzone={false}
              />
            </Grid>
            {questions.length > 0 && (
              <Grid item xs={12}>
                <TableContainer component={Paper} className={classes.paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell>Option 1</TableCell>
                        <TableCell>Option 2</TableCell>
                        <TableCell>Option 3</TableCell>
                        <TableCell>Option 4</TableCell>
                        <TableCell>Answer</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {questions.map((question, index) => (
                        <TableRow key={index}>
                          <TableCell>{question.question}</TableCell>
                          <TableCell>{question.options[0]}</TableCell>
                          <TableCell>{question.options[1]}</TableCell>
                          <TableCell>{question.options[2]}</TableCell>
                          <TableCell>{question.options[3]}</TableCell>
                          <TableCell>{question.answer}</TableCell>
                          <TableCell>
                            <Button variant="contained" color="primary" onClick={() => moveQuestion(index, 'up')}>
                              Up
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => moveQuestion(index, 'down')}>
                              Down
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            )}
          </Grid>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSaveExam}
            disabled={examName === "" || questions.length === 0}
          >
            Save Exam
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default AddExamPage;
