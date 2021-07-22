import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: 'center',
    padding: theme.spacing(3, 2)
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
  },
  avatar: {
    margin: theme.spacing(0, 0, 1, 0)
  },
  actions: {
    textAlign: 'center',
    display: 'block'
    
  }
}));

export default function MediaCard({id_key}) {
  const classes = useStyles();

  return (
    <Card key={id_key} className={classes.root}>
      <CardContent>
        <Box className={classes.avatar}>
          <Avatar alt="Remy Sharp" src="https://i.imgur.com/bLTwcav.png" className={classes.large} />
        </Box>
        <Typography gutterBottom variant="h6" component="h2">
          Manu
        </Typography>
        <Chip label="Admin" size="small" color="primary"/>
      </CardContent>
      <CardActions className={classes.actions}>

        <Button size="small" color="secondary">
          Perfil
        </Button>

      </CardActions>
    </Card>
  );
}
