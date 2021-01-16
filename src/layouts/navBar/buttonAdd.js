import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddToPhotosIcon />}
      >
        Agregar Bot
      </Button>
      
    </div>
  );
}
