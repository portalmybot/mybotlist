/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import CodeIcon from '@material-ui/icons/Code';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';

import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/guia/mybot/" {...props} />
));

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
       <Router>
        <Link component={LinkBehavior} color="inherit" className={classes.link}>
          <AmpStoriesIcon className={classes.icon} />
          Portal
        </Link>
        <Link href="/codes" color="inherit" className={classes.link}>
          <CodeIcon  className={classes.icon} />
          Códigos
        </Link>
      </Router>

    </Typography>
  );
}
