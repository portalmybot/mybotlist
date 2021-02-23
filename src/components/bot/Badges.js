import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" size="small" color={green[500]} className={classes.margin} startIcon={<VerifiedUserIcon style={{ color: 'white' }}/>}>
        Verificado
      </Button>
    </div>
  );
}
