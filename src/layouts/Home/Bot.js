import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
/* import CardMedia from '@material-ui/core/CardMedia'; */
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green, /* yellow, */ grey} from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Chip from '@material-ui/core/Chip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
/* import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'; */

import Divider from '@material-ui/core/Divider';

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
    marginRight: theme.spacing(1),
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  title: {
    fontSize: 21,
    marginBottom:0,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  icon: {
    width: theme.spacing(3.8),
    height: theme.spacing(3.8),
  },
  tag: {
    marginRight: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(1, 0),
  },
  section2: {
    margin: theme.spacing(5, 0, 0),
  },
  section3: {
    margin: theme.spacing(1, 0, 0.5),
  }
}));

const CardList = ({ value }) => {
  const classes = useStyles();

  const {
    id_bot,
    shortDesc_bot,
    vote_bot,
    tags
  } = value;
  
  return (
    <Card key={id_bot} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Image title" /* src="https://source.unsplash.com/random" */ variant="square" className={classes.avatar}>
            BOT
          </Avatar>
        }
        action={
          <Chip label={vote_bot} icon={<ImportExportIcon />} variant="outlined"/>
        }

        subheader= {
          <>
            <SettingsIcon style={{ color: grey[500] }} className={classes.icon} />
            <VerifiedUserIcon style={{ color: green[500] }} className={classes.icon}/>

           {/*  <OfflineBoltIcon style={{ color: yellow[500] }} className={classes.icon}/> */}
          </>
        }

      />
      
      <CardContent className={classes.section1}>
        <Typography className={classes.title} color="secondary" gutterBottom>
          MyBOT 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDesc_bot}
        </Typography>

        <Box variant="body2" component="p" className={classes.section2}>
          {tags && 
            tags.map((tag) => {
              return (
                <>
                  <Chip key={'tag-' + tag.name} label={tag.name_tag} variant="outlined" component="a" color="secondary" size="small" className={classes.tag} style={{fontSize: 10}}/>
                </>
              )
            })
          }
          
        </Box>
        
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing className={classes.section3}>
        <IconButton aria-label="add to favorites" href={'/vote/'+id_bot}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link underline='none' component={RouterLink} className={classes.expand} to={'/bot/'+id_bot} color="inherit">
          <Button variant="contained" color="primary">
           Ver
          </Button>
        </Link>
       
      </CardActions>
      
    </Card>
  );
}
export default CardList;