import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  AccountCircle,
  ChevronLeft,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  Money,
  Notifications,
} from "@material-ui/icons";
import { Badge, Collapse } from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#333840",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    paddingTop: theme.spacing(8),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 64,
  },
  notificationBell: {
    color: "white",
  },
  avatar: {
    color: "white",
  },
  logout: {
    color: "white",
  },
}));

const ExaminerDashboard = () => {
  const [examOpen, setExamOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleExamsClick = () => {
    setExamOpen(!examOpen);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

 
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome Examiner
          </Typography>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <Notifications className={classes.notificationBell} />
            </Badge>
          </IconButton>
          <IconButton aria-label="account of current user" color="inherit">
            <AccountCircle className={classes.avatar} />
          </IconButton>
          <IconButton aria-label="logout" color="inherit">
            <ExitToApp className={classes.logout} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button onClick={handleExamsClick}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Exams" />
              {examOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={examOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/addexam">
                  <ListItemText primary="Add Exam" className={classes.nested} />
                </ListItem>
                <ListItem button component={Link} to="/examlist">
                  <ListItemText
                    primary="Report Exams"
                    className={classes.nested}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleSettingsClick}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
              {settingsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/adduser">
                  <ListItemText primary="Add User" className={classes.nested} />
                </ListItem>
                <ListItem button component={Link} to="/userlist">
                  <ListItemText
                    primary="User List"
                    className={classes.nested}
                  />
                </ListItem>
              </List>
            </Collapse>

            <ListItem component={Link} to="/subscription">
              <ListItemIcon>
                <Money />
              </ListItemIcon>
              <ListItemText primary="Subscription" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>

  );
};
export default ExaminerDashboard;
