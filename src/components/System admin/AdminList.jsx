import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import AddAdmin from "./AddAdmin";
import Header from "./Header";
import SideNavigation from "./SideNav";

const useStyles = makeStyles((theme) => ({
    paper:{
        paddingTop: theme.spacing(10),
        padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    width: "70%",
    paddingLeft: "350px",

    },
  table: {
    minWidth: 650,
  },
  addButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function createData(firstName, lastName, institution, subscriptionType) {
  return { firstName, lastName, institution, subscriptionType };
}

const rows = [
  createData("John", "Doe", "Example University", "Premium"),
  createData("Jane", "Smith", "Another University", "Standard"),
  createData("Bob", "Johnson", "Yet Another University", "Basic"),
];

for (let i = 0; i < 7; i++) {
  rows.push(
    createData(
      `FirstName${i}`,
      `LastName${i}`,
      `Institution${i}`,
      `Subscription${i}`
    )
  );
}

function AdminList() {
  const classes = useStyles();
  const [admins, setAdmins] = useState(rows);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (index) => {
    const updatedAdmins = [...admins];
    updatedAdmins.splice(index, 1);
    setAdmins(updatedAdmins);
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setShowAddForm(false);
  };

  return (
    <>
    <Header/>
    <SideNavigation/>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="manage admin table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((admin, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {admin.firstName}
                </TableCell>
                <TableCell>{admin.lastName}</TableCell>
                <TableCell>{admin.institution}</TableCell>
                <TableCell>{admin.subscriptionType}</TableCell>
                <TableCell>
                  <EditIcon />
                  <DeleteIcon onClick={() => handleDelete(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!showAddForm && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.addButton}
          onClick={handleAdd}
          title="Add Admin"
        >
          Add Admin
        </Button>
      )}
      {showAddForm && (
        <AddAdmin/>
      )}
    </>
  );
}

export default AdminList;
