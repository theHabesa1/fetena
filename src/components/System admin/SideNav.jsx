import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoneyIcon from '@material-ui/icons/Money';
import AssessmentIcon from '@material-ui/icons/Assessment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HistoryIcon from '@material-ui/icons/History';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nav:{
    paddingTop: theme.spacing(10),
  }
}));

function SideNavigation() {
  const classes = useStyles();
  const [manageAccountsOpen, setManageAccountsOpen] = useState(false);
  const [examOpen, setExamOpen] = useState(false);

  const handleManageAccountsClick = () => {
    setManageAccountsOpen(!manageAccountsOpen);
  };

  const handleExamClick = () => {
    setExamOpen(!examOpen);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List className={classes.nav}>
        <ListItem button onClick={handleManageAccountsClick}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Accounts" />
          {manageAccountsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={manageAccountsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/adminlist">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Admin" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/manageusers">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Manage User" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/subscriptionlist">
          <ListItemIcon>
            <MoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Subscription" />
        </ListItem>
        <ListItem button onClick={handleExamClick}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Exam" />
          {examOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={examOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/examhealth">
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary="View Exam Health" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/examhistory">
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="View Exam History" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default SideNavigation;
