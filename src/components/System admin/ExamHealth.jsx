import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideNavigation from "./SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(25),
    
    display: "flex",
    justifyContent: "center",
    width: "80%",
    paddingLeft: "350px",
  },
  title: {
    position: "fixed",
    top: theme.spacing(15),
    fontFamily: "Verdana, sans-serif",
    fontWeight: "600",
  },
  tableRow: {
    cursor: "pointer",
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: theme.spacing(1),
    animation: "$blink 1s infinite",
  },
  "@keyframes blink": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
}));

function ExamListPageSys() {
  const classes = useStyles();

  const [exams, setExams] = useState([
    {
      id: 1,
      name: "Exam 1",
      locked: true,
      current: true,
      reports: "1"
    },
    {
      id: 2,
      name: "Exam 2",
      locked: false,
      current: false,
      reports: "0"
    },
    {
      id: 3,
      name: "Exam 3",
      locked: true,
      current: false,
      reports: "0"
    },
    {
      id: 4,
      name: "Exam 4",
      locked: false,
      current: false,
      reports: "0"
    },
  ]);

  const navigate = useNavigate();

  const handleRowClick = (exam) => {
    // TODO: navigate to exam detail page
    console.log("Clicked on exam:", exam.name);
    navigate("/examdetail");
  };

  return (
    <>
    <Header />
    <SideNavigation />
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Exam List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Locked</TableCell>
            <TableCell>Current</TableCell>
            <TableCell>No of Reports</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {exams.map((exam) => (
            <TableRow
              key={exam.id}
              hover
              className={classes.tableRow}
              onClick={() => handleRowClick(exam)}
            >
              <TableCell>
                {exam.current && <span className={classes.redDot}></span>}
                {exam.name}
              </TableCell>
              <TableCell>
                {exam.locked ? <LockIcon /> : <LockOpenIcon />}
              </TableCell>
              <TableCell>{exam.current ? "Yes" : "No"}</TableCell>
              <TableCell>
                {exam.reports}
              </TableCell>
              <TableCell>
                <Tooltip title="View Detail">
                  <IconButton onClick={() => handleRowClick(exam)}>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  );
}

export default ExamListPageSys;
