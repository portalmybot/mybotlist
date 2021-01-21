import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const tags = ['Anime', 'Economía', 'Juegos', 'Música', 'Social', 'Utilidad', 'Moderación'];

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: theme.spacing(3),
  },
}));

export default function Chips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tags.map((tag) => (
      <Chip label={tag} component="a" color="default" style={{backgroundColor: stringToColor(tag), fontSize: 15}} href={'tag/'+tag} clickable/>
      ))}
    </div>
  );
}
