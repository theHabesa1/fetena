import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import emailjs from '@emailjs/browser';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function generatePassword() {
  const passwordLength = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function AddAdmin() {
    const form = useRef();
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    setPassword(generatePassword());
  };

  const handleSubmit = (e) => {
    // Send username and password to the specified email
    e.preventDefault();

    emailjs.sendForm('service_rayuhnh', 'template_srh9udf', form.current, 'r7fi37txaUP4kMpst')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // Reset form fields
    setFirstName("");
    setLastName("");
    setInstitution("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <h2>Add Admin</h2>
        <form ref={form} onSubmit={handleSubmit}>  
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              name="firstname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              name="lastname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              required
              name="instition"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              name="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
              InputProps={{
                endAdornment: (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleGeneratePassword}
                  >
                    Generate
                  </Button>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Register
        </Button>
        </form>
      </CardContent>
    </Card>
  );
}
export default AddAdmin;
