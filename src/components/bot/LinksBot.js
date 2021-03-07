import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: theme.spacing(2)
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button variant="contained" style={{ color: '#fff', backgroundColor: '#7289da' }} href="#contained-buttons" startIcon={<AddIcon />}>
        Agregar Bot
      </Button>
      <Button variant="contained" style={{ backgroundColor: '#FF9800', color: '#fff' }} href="#contained-buttons" startIcon={<SettingsIcon />}>
        Soporte Bot
      </Button>
      <Button variant="contained" style={{ backgroundColor: '#03a9f4', color: '#fff' }} href="#contained-buttons" startIcon={<LanguageIcon />}>
        Sitio Web
      </Button>
    </div>
    
  );
}
