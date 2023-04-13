import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText,Collapse,ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  
  Route,
  Link,
  
} from "react-router-dom";

import { ExpandLess, ExpandMore, AccountCircle, Add, Description } from "@material-ui/icons";
import Header from "./Header";
import SideNav from "./SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '64px',
  },

  drawer: {
    width: 240,
    flexShrink: 0,
    color : "white",
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "#333840",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: 'calc(100% - 240px)',
    marginLeft: 240,
    overflow: 'auto'
  },
  main: {
    color: "white"
  },
  logo: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#333840",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: 'white'
  },
  listItemText: {
    color: 'white'
  },
  sideNav: {
    paddingTop: theme.spacing(8),
  },
}));



const DashboardPage = () => {
  const [tasksOpen, setTasksOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);

const handleTasksClick = () => {
    setTasksOpen(!tasksOpen);
    
};

const handleUsersClick = () => {
    setUsersOpen(!usersOpen);
};

  const classes = useStyles();
  return (
    <><Header />
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.logo}>Logo</div>
        <List className={classes.sideNav}>
          <ListItem button onClick={handleTasksClick}>
            <ListItemIcon className={classes.listItemText}>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Exams" className={classes.main} />
            {tasksOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={tasksOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/exams">
                <ListItemText primary="Exam List" className={classes.nested} />
              </ListItem>
              <ListItem button component={Link} to="/report">
                <ListItemText primary="Exam report" className={classes.nested} />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleUsersClick}>
            <ListItemIcon className={classes.listItemText}>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Users" className={classes.main} />
            {usersOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={usersOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/accountinfo">
                <ListItemText primary="Account detail" className={classes.nested} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
      
    </div></>
    
    );
    };
    
    export default DashboardPage;
