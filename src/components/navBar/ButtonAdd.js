import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(5)
  },
}));

export default function ButtonAdd() {
  const history = useHistory();
  const navigateTo = () => history.push('/add');
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={navigateTo}
        className={classes.button}
        startIcon={<AddToPhotosIcon />}
      >
        Agregar Bot
      </Button>
      
    </div>
  );
}
