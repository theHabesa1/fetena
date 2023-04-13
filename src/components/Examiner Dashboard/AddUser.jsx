import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import * as XLSX from 'xlsx'
import ExaminerDashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    margin: "0 auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  picture: {
    maxWidth: 150,
  },
  uploadButton: {
    marginLeft: theme.spacing(1),
  },
  bulkImportContainer: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
}));

const RegisterPage = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [institution, setInstitution] = useState("");
  const [picture, setPicture] = useState("");
  const [pictureFile, setPictureFile] = useState(null);
  const [bulkUsers, setBulkUsers] = useState([]);
  const [isBulkImportValid, setIsBulkImportValid] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleInstitutionChange = (event) => {
    setInstitution(event.target.value);
  };

  const handlePictureChange = (event) => {
    setPictureFile(event.target.files[0]);
    setPicture(URL.createObjectURL(event.target.files[0]));
  };

  const handleBulkImportChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const headers = ["firstName", "lastName", "gender", "id", "institution"];
      const users = XLSX.utils.sheet_to_json(worksheet, { header: headers });
      setBulkUsers(users);
      setIsBulkImportValid(true);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleBulkImport = () => {
    console.log(bulkUsers);
    // code to bulk import users goes here
  };

  const handleManualRegister = () => {
    console.log({
      firstName,
      lastName,
      gender,
      id,
      institution,
      pictureFile,
    });
    // code to manually register user goes here
  };

  return (
    <>
    <ExaminerDashboard/>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Register a User
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Manual Registration
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    required
                    className={classes.formControl}
                  >
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      value={gender}
                      onChange={handleGenderChange}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="id"
                    label="ID"
                    value={id}
                    onChange={handleIdChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="institution"
                    label="Institution"
                    value={institution}
                    onChange={handleInstitutionChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="picture"
                    multiple
                    type="file"
                    onChange={handlePictureChange}
                  />
                  <label htmlFor="picture">
                    <Button
                      variant="contained"
                      color="default"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                      className={classes.uploadButton}
                    >
                      Upload Picture
                    </Button>
                  </label>
                  {picture && (
                    <img src={picture} alt="User" className={classes.picture} />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleManualRegister}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Bulk Import
            </Typography>

            <Paper className={classes.bulkImportContainer}>
              <input
                accept=".xlsx, .xls"
                className={classes.input}
                id="bulkImport"
                type="file"
                onChange={handleBulkImportChange}
              />
              <label htmlFor="bulkImport">
                <Button variant="contained" component="span">
                  Upload Excel File
                </Button>
              </label>
              {isBulkImportValid && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBulkImport}
                >
                  Register Bulk
                </Button>
              )}
              {!isBulkImportValid && (
                <FormHelperText>
                  Please upload a valid Excel file with the following columns:
                  firstName, lastName, gender, id, institution.
                </FormHelperText>
              )}
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  );
};

export default RegisterPage;
