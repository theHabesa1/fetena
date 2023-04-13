import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Poppins, sans-serif',
  },
  logo: {
    height: 50,
    cursor: 'pointer',
  },
  avatar: {
    backgroundColor: '#E50914',
    marginRight: theme.spacing(1),
  },
  headerBtn: {
    marginLeft: theme.spacing(2),
    fontFamily: 'Verdana, sans-serif',
  },
  appBar: {
    borderRadius: 20,
    backgroundColor:"#BA422D",
    margin: "15px -5px" // Add this to set the border radius of the header
  },
}));

function Header() {
  const classes = useStyles();

  const handleLogoClick = () => {
    console.log('Logo clicked!');
  };

  const navigate = useNavigate();
  const handleAvatarClick = () => {
    // add your code for avatar click event here
    console.log('Avatar clicked!');
    navigate('/login');
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src="/logo.png" alt="Logo" className={classes.logo} onClick={handleLogoClick} />
          <Typography variant="h6" className={classes.title}>
            {/* Empty space */}Fetena.Com
          </Typography>
          <Button color="inherit" className={classes.headerBtn}>Home</Button>
          <Button color="inherit" className={classes.headerBtn}>Services</Button>
          <Button color="inherit" className={classes.headerBtn}>Stats</Button>
          <IconButton color="inherit">
            <Avatar className={classes.avatar} onClick = {handleAvatarClick}>N</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
