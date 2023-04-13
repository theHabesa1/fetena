import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'Verdana',
    height:"80px"
  },
  menuButton: {
    paddingTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    color : "#BA422D"
  },
  grow: {
    flexGrow: 1,
  },
  text :{
    fontFamily: "Verdana, sans-serif",
    fontWeight: "600",
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(75),
    color : "#BA422D"
  }
}));

function Header({ onMenuClick }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.text}>Welcome system admin </Typography>
        <div className={classes.grow} />
        <IconButton 
        color="inherit"
        className={classes.menuButton}
         >
          <NotificationsIcon />
        </IconButton>
        <IconButton
         color="inherit"
         className={classes.menuButton}
         >
          <SettingsIcon />
        </IconButton>
        <IconButton
         color="inherit"
         className={classes.menuButton}
         >
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
