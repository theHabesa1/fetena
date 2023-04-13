import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
}));

function AddUserDialog({ open, handleClose, handleAddUser, usersData }) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [institution, setInstitution] = useState("");
  const [age, setAge] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // create new user object
    const newUser = {
      firstName,
      lastName,
      username,
      institution,
      age,
    };
    handleAddUser(newUser);
    // TODO: Add logic to save new user to database
    console.log("New User:", newUser);
    // close dialog
    handleClose();
    // clear form fields
    setFirstName("");
    setLastName("");
    setUsername("");
    setInstitution("");
    setAge("");
  };


  
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={lastName}
            onChange={handleLastNameChange}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
          />
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="institution-label">Institution</InputLabel>
            <Select
              labelId="institution-label"
              id="institution"
              value={institution}
              onChange={handleInstitutionChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Example University">Example University</MenuItem>
              <MenuItem value="Another University">Another University</MenuItem>
              {/* add more institutions here */}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            value={age}
            onChange={handleAgeChange}
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
} 

export default AddUserDialog;
