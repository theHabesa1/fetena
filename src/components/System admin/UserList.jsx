import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddUserDialog from "./AddUser";
import { IconButton } from "@material-ui/core";
import Header from "./Header";
import SideNavigation from "./SideNav";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(25),
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    width: "80%",
    paddingLeft: "350px",
    
  },
  table: {
    minWidth: 650,
    fontFamily: "Verdana, sans-serif",
  },
  searchContainer: {
    marginBottom: theme.spacing(2),
  },
  searchInput: {
    marginRight: theme.spacing(2),
  },
  filterFormControl: {
    minWidth: 150,
    marginRight: theme.spacing(2),
  },
  filterSelect: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  addButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  h2:{
    position: "fixed",
    top: theme.spacing(15),
    fontFamily: "Verdana, sans-serif",
    fontWeight: "600",
  },
}));

const usersData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    username: "johndoe",
    institution: "Example University",
    examsTaken: 5,
    picture: "https://picsum.photos/50",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    username: "janedoe",
    institution: "Another University",
    examsTaken: 2,
    picture: "https://picsum.photos/50",
  },
  // add more users here
];

function ManageUsers() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [users, setUsers] = useState(usersData);

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredUsers = usersData
    .filter((user) =>
      user.institution.toLowerCase().includes(filterValue.toLowerCase())
    )
    .filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.username.toLowerCase().includes(searchValue.toLowerCase())
    );

  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const handleAddUserClick = () => {
    setIsAddUserOpen(true);
  };

  const handleAddUserClose = () => {
    setIsAddUserOpen(false);
  };

  const handleAddUser = (newUser) => {
    const newId = usersData.length + 1;
    const newUserObj = {
      id: newId,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      username: newUser.username,
      institution: newUser.institution,
      age: newUser.age,
      examsTaken: 0,
      picture: "https://picsum.photos/50",
    };
    setUsers([...usersData, newUserObj]);
    setIsAddUserOpen(false);
  };

  return (
    <>
      <Header />
      <SideNavigation />
      <div className={classes.paper}>
        <h2 className={classes.h2}>Manage Users</h2>
        <div className={classes.searchContainer}>
          <TextField
            className={classes.searchInput}
            label="Search"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <FormControl className={classes.filterFormControl}>
            <Select
              className={classes.filterSelect}
              value={filterValue}
              onChange={handleFilterChange}
              displayEmpty
              inputProps={{ "aria-label": "Filter by institution" }}
            >
              <MenuItem value="" enabled>
                Filter by institution
              </MenuItem>
              <MenuItem value="Example University">Example University</MenuItem>
              <MenuItem value="Another University">Another University</MenuItem>
              {/* add more institutions here */}
            </Select>
          </FormControl>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="users table" fontFamily = "Verdana, sans-serif">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Institution</TableCell>
                <TableCell>Exams Taken</TableCell>
                <TableCell>Picture</TableCell>
                <TableCell>Edit/Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.institution}</TableCell>
                  <TableCell>{user.examsTaken}</TableCell>
                  <TableCell>
                    <img
                      src={user.picture}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
            variant="contained"
            color="primary"
            onClick={handleAddUserClick}
            className={classes.addButton}
          >
            Add User
          </Button>
        <AddUserDialog
          open={isAddUserOpen}
          handleClose={handleAddUserClose}
          handleAddUser={handleAddUser}
          usersData={usersData}
        />
      </div>
      
    </>
  );
}
export default ManageUsers;
