import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green, yellow} from '@material-ui/core/colors';

import Chip from '@material-ui/core/Chip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
/* import SettingsIcon from '@material-ui/icons/Settings'; */
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

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
    margin: theme.spacing(4, 0, 0),
  },
  section3: {
    margin: theme.spacing(1, .5, .5),
  }
}));

const badges = ['verificado'];
const tags = ['meme', 'musica'];

const BotCard = (bot) => {
  const classes = useStyles();

  return (
    <Card key={'botCard-'+bot} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Image title" src='https://source.unsplash.com/random' variant="square" className={classes.avatar} />
        }
        action={
          <Chip label={'10'} icon={<ImportExportIcon />} variant="outlined"/>
        }
        subheader= {
          <>
            {badges && 
              badges.map((badge) => {
                return (
                  <>  
                    {badge === 'verificado' ? <VerifiedUserIcon style={{ color: green[500] }} className={classes.icon}/> : <OfflineBoltIcon style={{ color: yellow[500] }} className={classes.icon}/>}
                     
                  </>
                )
              })

            }

          </>
        }
      />
      
      <CardContent className={classes.section1}>
        <Typography className={classes.title} color="secondary" gutterBottom>
          MyBOT 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Bot útil para todos.
        </Typography>

        <Box variant="body2" component="p" className={classes.section2}>
          {tags && 
            tags.map((tag) => {
              return (
                <>
                  <Chip key={'tagBot-' + tag} label={tag} variant="outlined" component="a" color="secondary" size="small" className={classes.tag} style={{fontSize: 10}}/>
                </>
              )
            })
          }
          
        </Box>
        
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing className={classes.section3}>
        <Link underline='none' component={RouterLink} to={'/me'} className={classes.tag} color="inherit">
          <Button variant="contained" size={'small'} color="primary">
           Editar
          </Button>
        </Link>

        <Link underline='none' component={RouterLink} to={'/me'} color="inherit">
          <Button variant="contained"  size={'small'} color="secondary">
           Eliminar
          </Button>
          
        </Link>

        <Link underline='none' component={RouterLink} className={classes.expand} to={'/bot/demo'} color="inherit">
          <IconButton aria-label="Bot view" >
            <CallMadeIcon color={'action'} />
          </IconButton>
        </Link>

      </CardActions>
      
    </Card>
  );
}
export default BotCard;