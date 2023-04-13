import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button, Avatar } from "@material-ui/core";
import Header from "./Dashoard/Header";
import DashboardPage from "./Dashoard/DashboardPage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AccountInfoPage = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 25,
    institution: "Example University",
    score: 90,
    profilePicUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  });

  const handleEditClick = () => {
    // Implement edit logic here
  };

  const handleDeleteClick = () => {
    // Implement delete logic here
  };

  return (
    <>
    <Header/>
    <DashboardPage/>
    <Card className={classes.root}>
      <Avatar alt="Profile picture" src={userInfo.profilePicUrl} className={classes.avatar} />
      <Typography variant="h5" component="h2">
        {userInfo.firstName} {userInfo.lastName}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Age: {userInfo.age}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Institution: {userInfo.institution}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Overall Score: {userInfo.score}%
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleEditClick}>
        Edit Account
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={handleDeleteClick}>
        Delete Account
      </Button>
    </Card>
    </>
  );
};

export default AccountInfoPage;
