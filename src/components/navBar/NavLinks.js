/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
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
    <Typography className={classes.root} >

        <Link href="https://portalmybot.com" target="_blank" rel="noopener" color="inherit" className={classes.link}>
          <AmpStoriesIcon className={classes.icon} />
          Portal
        </Link>
        <Link href="https://portalmybot.com/codes" target="_blank" rel="noopener" color="inherit" className={classes.link}>
          <CodeIcon  className={classes.icon} />
          Códigos
        </Link>

    </Typography>
  );
}
