
import React from 'react';
import AdbIcon from '@material-ui/icons/Adb';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <IconButton edge="start" className={classes.icon} color="inherit">
      <AdbIcon />
      {/* <img src={tile.img} alt={tile.title} /> */}
    </IconButton>
  );
}
