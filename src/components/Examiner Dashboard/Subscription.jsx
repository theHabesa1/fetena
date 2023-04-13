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
import { PayPalButton } from "react-paypal-button-v2";
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
}));

const SubscriptionPage = () => {
  const classes = useStyles();

  const [subscriptionType, setSubscriptionType] = useState("Meda subscription");
  const [subscriptionExpiration, setSubscriptionExpiration] = useState("12/03/23");
  const [renewalAmount, setRenewalAmount] = useState(0);

  const handleSubscriptionTypeChange = (event) => {
    setSubscriptionType(event.target.value);
  };

  const handleSubscriptionExpirationChange = (event) => {
    setSubscriptionExpiration(event.target.value);
  };

  const handleRenewalAmountChange = (event) => {
    setRenewalAmount(event.target.value);
  };

  const handlePayPalSuccess = (details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);

    // code to update subscription expiration date goes here

    // clear renewal amount
    setRenewalAmount(0);
  };

  const handlePayPalError = (error) => {
    console.error(error);
  };

  return (
    <>
    <ExaminerDashboard/>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Subscription Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Current Subscription Plan:
            </Typography>
            <Typography variant="h4">{subscriptionType}</Typography>
            <Typography variant="body2">{`Expiration Date: ${subscriptionExpiration}`}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Renew Subscription</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="subscription-type-label">
                Subscription Type
              </InputLabel>
              <Select
                labelId="subscription-type-label"
                id="subscription-type-select"
                value={subscriptionType}
                onChange={handleSubscriptionTypeChange}
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
              <TextField
                id="subscription-expiration"
                label="Expiration Date"
                type="date"
                value={subscriptionExpiration}
                onChange={handleSubscriptionExpirationChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Pay with:</Typography>
          </Grid>


          <Grid item xs={4}>
            <IconButton>
              <img
                src="https://developers.google.com/pay/api/images/google-pay-logo.png"
                alt="google pay"
              />
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <IconButton>
              <img
                src="https://www.chappay.com/assets/images/chappay_logo.png"
                alt="chappa"
              />
            </IconButton>
          </Grid>

          <Grid item xs={12}>
            <PayPalButton
              amount={renewalAmount}
              onSuccess={handlePayPalSuccess}
              onError={handlePayPalError}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  );
};

export default SubscriptionPage;
