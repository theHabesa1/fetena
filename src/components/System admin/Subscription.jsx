import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import SideNavigation from "./SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: 150,
    marginBottom: 50,
    padding: 20,
    borderRadius: 20,
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
  },
  subscriptionList: {
    marginTop: 20,
  },
  subscriptionItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderRadius: 20,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

function SubscriptionPageSys() {
  const classes = useStyles();
  const [subscriptionType, setSubscriptionType] = useState("media"); // default subscription type is "media"

  // Sample data for the subscription list
  const subscriptionList = [
    {
      id: 1,
      name: "University of California",
      subscription: "Media",
      expiryDate: "2023-05-31",
    },
    {
      id: 2,
      name: "Stanford University",
      subscription: "Plus",
      expiryDate: "2023-07-15",
    },
    {
      id: 3,
      name: "Harvard University",
      subscription: "Enterprise",
      expiryDate: "2024-01-01",
    },
    {
        id: 4,
        name: "ASTU University",
        subscription: "Media",
        expiryDate: "2024-01-01",
      },
  ];

  // Filter the subscription list by subscription type
  const filteredSubscriptionList = subscriptionList.filter(
    (item) => item.subscription.toLowerCase() === subscriptionType
  );

  // Handler for changing the subscription type
  const handleSubscriptionTypeChange = (type) => {
    setSubscriptionType(type);
  };

  // Handler for removing a subscription item
  const handleRemoveSubscription = (id) => {
    const updatedList = subscriptionList.filter((item) => item.id !== id);
    // Update the subscription list in the state
    // This is just a sample implementation, in a real app you would typically use some kind of backend API to update the data
  };

  return (
    <>
    <Header />
    <SideNavigation />
    <Paper className={classes.root}>
      <div className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubscriptionTypeChange("media")}
        >
          Media
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubscriptionTypeChange("plus")}
        >
          Plus
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleSubscriptionTypeChange("enterprise")}
        >
          Enterprise
        </Button>
      </div>
      <div className={classes.subscriptionList}>
        {filteredSubscriptionList.map((item) => (
          <div key={item.id} className={classes.subscriptionItem}>
            <div>
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body1">
                {item.subscription} Subscription
              </Typography>
              <Typography variant="caption">
                Expires on {item.expiryDate}
              </Typography>
            </div>
            <Button
              variant="contained"
              className={`${classes.button} ${classes.removeButton}`}
              onClick={() => handleRemoveSubscription(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </Paper>
    </>
  );
}

export default SubscriptionPageSys;
