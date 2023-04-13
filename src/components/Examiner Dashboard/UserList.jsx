import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExaminerDashboard from './Dashboard';
import { useToasts } from 'react-toast-notifications';

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


const UserListPage = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      institution: 'University of XYZ',
      exams: ['Mathematics', 'Physics', 'Chemistry'],
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      institution: 'University of ABC',
      exams: ['Biology', 'History'],
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Smith',
      institution: 'University of QRS',
      exams: ['Mathematics'],
    },
  ]);

  const { addToast } = useToasts();

  const showWarningToast = (message) => {
    addToast(message, {
      appearance: "warning",
      autoDismiss: true,
    });
  };

  const handleDeleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
    showWarningToast("You have removed a user!")

  };

  return (
    <>
    <ExaminerDashboard/>
    <div className={classes.root}>
    <TableContainer component={Paper} >
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Institution</TableCell>
            <TableCell>Exams Taken</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.institution}</TableCell>
              <TableCell>{user.exams.join(', ')}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
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

export default UserListPage;
