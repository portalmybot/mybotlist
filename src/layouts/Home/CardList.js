import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green  } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Chip from '@material-ui/core/Chip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid',
    borderColor: theme.palette.background.paper,
     '@media (min-width: 960px)': {
       root: {
         maxWidth: 345,
       },
     },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  title: {
    fontSize: 21,
    marginBottom:0,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const CardList = ({ value }) => {
  const classes = useStyles();
  const {
    shotDesc_bot
  } = value;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Bot MyBOT"
        height="120"
        image="https://portalmybot.com/assets/img/bg/bgportal.png"
        title="Bot MyBOT"
      />
      <CardHeader
        avatar={
          <Avatar alt="Image title" /* src="https://source.unsplash.com/random" */ className={classes.avatar}>
            BOT
          </Avatar>
        }
        action={
          <Chip label="99" icon={<ImportExportIcon />} component="a" href="/vote" clickable variant="outlined"/>
      
        }
        title={
        <Typography className={classes.title} color="secondary" gutterBottom>
          MyBOT 
        </Typography>
        }
        subheader= {
          <CheckCircleIcon style={{ color: green[500] }}/>
        }
        style={{
            marginTop: '-120px',
            marginBottom: '20px',
        }}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {shotDesc_bot}
        </Typography>

        <Box variant="body2" component="p">
          <Chip label='Social' component="a" color="secondary" size="small" style={{fontSize: 10}}/>
        </Box>
        
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
export default CardList;