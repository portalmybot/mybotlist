/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function NavLinks() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
    
      <Link href="/portal" color="inherit">
        {'Portal '} <CodeIcon />
      </Link>
      <Link href="/codes" color="inherit">
        {'Códigos'}
      </Link>

    </Typography>
  );
}
