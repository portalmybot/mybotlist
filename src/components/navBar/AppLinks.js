import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const AppLink = () => {
  const classes = useStyles();

  return (
      
    <Typography className={classes.root}>
      <Link component={RouterLink} to="/premium" color="inherit">
        Premium 
      </Link>
    </Typography>
    
  )

}

export default AppLink;