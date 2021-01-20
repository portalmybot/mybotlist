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
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function NavLinks() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
    
      <Link href="/portal" color="inherit">
        <CodeIcon  className={classes.icon} />
        Portal
      </Link>
      <Link href="/codes" color="inherit">
        <CodeIcon  className={classes.icon} />
        Códigos
      </Link>

    </Typography>
  );
}
