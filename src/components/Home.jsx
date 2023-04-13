import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  image: {
    flex: 1,
    marginRight: 50,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 30,
    },
  },
  textContainer: {
    flex: 1,
    textAlign: 'justify',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    marginBottom: 20,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://via.placeholder.com/400x400.png?text=Image"
        alt="Home"
        className={classes.image}
      />
      <div className={classes.textContainer}>
        <h1 className={classes.heading}>Welcome to our website!</h1>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut mauris quis enim
          molestie scelerisque. Quisque vestibulum lorem et sapien ullamcorper malesuada. Nam sed
          lacus vel nisi malesuada bibendum. Nunc laoreet, lectus sit amet bibendum elementum, elit
          eros sodales sapien, nec lobortis est orci in dolor.
        </p>
        <p className={classes.description}>
          Donec imperdiet arcu sit amet orci interdum, a pretium nibh semper. Vestibulum cursus
          orci sit amet dui pharetra facilisis. Nulla eget sem lorem. Nulla vestibulum tortor eu
          magna consequat consequat.
        </p>
      </div>
    </div>
  );
};

export default Home;
