import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { useToasts } from "react-toast-notifications";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Dashoard/Header";
import DashboardPage from "./Dashoard/DashboardPage";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    width: "70%",
    paddingLeft: "350px",
  },
  tableContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  tableHeaderCell: {
    fontWeight: "bold",
  },
  Button:{
    display: "flex",
    position: 'absolute',
    bottom: 650,
    right: theme.spacing(2),
    
  }
}));

const ExamReportPage = () => {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [results, setResults] = useState([
    {
      date: "2022-01-01",
      score: 80,
      improvementAreas: ["Mathematics", "Physics"],
    },
    {
      date: "2022-02-01",
      score: 85,
      improvementAreas: ["Biology", "Chemistry"],
    },
    { date: "2022-03-01", score: 90, improvementAreas: ["English", "History"] },
  ]);

  const handleDownloadPDF = () => {
    const data = (
      <Document>
        <Page>
          <Text style={styles.header}>Exam Results</Text>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.tableHeaderCell}>Date</TableCell>
                <TableCell style={styles.tableHeaderCell}>Score</TableCell>
                <TableCell style={styles.tableHeaderCell}>
                  Improvement Areas
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.date}>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>{result.score}</TableCell>
                  <TableCell>{result.improvementAreas.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Page>
      </Document>
    );

    const blob = new Blob([data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "exam_results.pdf";
    link.click();
  };

  return (
    <>
    <Header/>
    <DashboardPage/>
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Date</TableCell>
              <TableCell className={classes.tableHeaderCell}>Score</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Improvement Areas
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.date}>
                <TableCell>{result.date}</TableCell>
                <TableCell>{result.score}</TableCell>
                <TableCell>{result.improvementAreas.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="secondary" className={classes.Button} onClick={handleDownloadPDF}>
        Download PDF
      </Button>
      <PDFDownloadLink
        document={
          <Document>
            <Page>
              <Text style={styles.header}>Exam Results</Text>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={styles.tableHeaderCell}>Date</TableCell>
                    <TableCell style={styles.tableHeaderCell}>Score</TableCell>
                    <TableCell style={styles.tableHeaderCell}>
                      Improvement Areas
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.date}>
                      <TableCell>{result.date}</TableCell>
                      <TableCell>{result.score}</TableCell>
                      <TableCell>
                        {result.improvementAreas.join(", ")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Page>
          </Document>
        }
        fileName="exam_results.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  tableHeaderCell: {
    backgroundColor: "#808080",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ExamReportPage;
