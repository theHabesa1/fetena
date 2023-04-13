import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#f2f2f2',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random/400x400"
                title="Service 1"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Service 1
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros at augue
                  fermentum ullamcorper nec eu odio. Nulla nec ipsum id urna lacinia facilisis vel
                  sit amet sapien.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random/400x400"
                title="Service 2"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Service 2
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros at augue
                  fermentum ullamcorper nec eu odio. Nulla nec ipsum id urna lacinia facilisis vel
                  sit amet sapien.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random/400x400"
                title="Service 3"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Service 3
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros at augue
                  fermentum ullamcorper nec eu odio. Nulla nec ipsum id urna lacinia facilisis vel
                  sit amet sapien.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
