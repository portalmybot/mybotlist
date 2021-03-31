/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MenuAuth from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const LoginLink = () => {
  
  const classes = useStyles();

  return (
      
    <Typography className={classes.root}>
      <MenuAuth />
    </Typography>
    
  )

}

export default LoginLink;