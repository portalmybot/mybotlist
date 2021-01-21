import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const tags = ['Anime', 'Economía', 'Juegos', 'Música', 'Social', 'Utilidad', 'Moderación'];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: theme.spacing(3)
  },
}));

export default function Chips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tags.map((tag) => (
      <Chip label={tag} component="a" color="secondary" href={'tag/'+tag} clickable/>
      ))}
    </div>
  );
}
