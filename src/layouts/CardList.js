import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';

import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
  /*     maxWidth: 345, */
    border: '1px solid',
    borderColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  title: {
    fontSize: 21,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Image title" src="https://source.unsplash.com/random" className={classes.avatar}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
        <Typography className={classes.title} color="secondary" gutterBottom>
          MyBOT 
        </Typography>
        }
        subheader={
          <Chip label='Social' component="a" color="secondary" size="small" style={{fontSize: 10}}/>
        }
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StarIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained" className={classes.expand} color="primary" href="/bot/#">
          Ver
        </Button>
       
      </CardActions>
      
    </Card>
  );
}
