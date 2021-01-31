/* eslint-disable jsx-a11y/anchor-is-valid */
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

export default function LoginLink() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link component={RouterLink} to="/login" color="inherit">
        {'login'}
      </Link>
      <Link component={RouterLink} to="/register" color="inherit">
        {'Registrar'}
      </Link>
    </Typography>
  );
}
