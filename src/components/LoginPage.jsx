import React from 'react';
import { Card, CardContent, Typography, TextField, Button, makeStyles, Divider, IconButton } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import  { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: 400,
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.25)',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  socialButton: {
    marginRight: theme.spacing(1),
  },
}));

function LoginPage() {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleClick  = () =>   {
        navigate('/exdashboard');
  }
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={handleClick}>
            Login
          </Button>
          <Divider className={classes.divider} />
          <Typography variant="body2" component="p">
            Or login with
          </Typography>
          <IconButton className={classes.socialButton} color="primary">
            <Facebook />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
