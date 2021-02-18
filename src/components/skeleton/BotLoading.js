import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    '@media (min-width: 960px)': {
      root: {
        maxWidth: 345,
      },
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    marginLeft: 'auto',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  title: {
    fontSize: 21,
    marginBottom: 0,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const BotLoading = () => {
  const classes = useStyles();
  return (
     <Card className={classes.root}>
      <CardHeader
        avatar={
            <Skeleton variant="circle" width={80} height={80} className={classes.avatar}/>
        }

        title={
        <Typography className={classes.title} color="secondary" gutterBottom>
           <Skeleton variant="text" />
        </Typography>
        }
        subheader= {
          <Skeleton variant="text" />
        }
      />
      
      <Skeleton variant="rect" width={276} height={168} />
    </Card>
  );
}
export default BotLoading;