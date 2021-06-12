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
import { red, green, grey, yellow} from '@material-ui/core/colors';

import Chip from '@material-ui/core/Chip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';
import BlockIcon from '@material-ui/icons/Block';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
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

const ButtonAction = ({ botAction }) => {
  const classes = useStyles();
  const {
    id_bot,
    status_bot
  } = botAction;

  if (status_bot > 0) {
    return (
      <>
        <Link underline='none' component={RouterLink} to={'/bot/'+id_bot+'/edit'} className={classes.tag} color="inherit">
          <Button variant="contained" size={'small'} color="primary">
            Editar
          </Button>
        </Link>

        <Link underline='none' component={RouterLink} to={'/bot/'+id_bot+'/delete/'} color="inherit">
          <Button variant="contained"  size={'small'} color="secondary">
            Eliminar
          </Button>
        </Link>
        <Link underline='none' component={RouterLink} className={classes.expand} to={'/bot/'+id_bot} color="inherit">
          <IconButton aria-label="Bot view" >
            <CallMadeIcon color={'action'} />
          </IconButton>
        </Link>
      </>
    )
  } else {
    return (
       <BlockIcon className={classes.expand} color="disabled" />
    
    )
  }
}

const BotCard = ({ bot }) => {
  const classes = useStyles();

  const {
    id_bot,
    username_bot,
    shortDesc_bot,
    avatarUrl_bot,
    vote_bot,
    tags,
    badges,
    status_bot
  } = bot;
  
  return (
    <Card key={'botCard-'+id_bot} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Image title" src={avatarUrl_bot} variant="square" className={classes.avatar} />
        }
        action={
          <Chip label={vote_bot} icon={<ImportExportIcon />} variant="outlined"/>
        }
        subheader= {
          <>
            {badges && 
              badges.map((badge) => {
                return (
                  <>  
                    {
                      badge.name_badge === 'verificado' ? <VerifiedUserIcon style={{ color: green[500] }} className = {classes.icon}
                      /> : badge.name_badge === 'desarrollo' ? <SettingsIcon style={{ color: grey[500] }} className={classes.icon} 
                      /> : badge.name_badge === 'premium' ? <OfflineBoltIcon style={{ color: yellow[500]}} className={classes.icon} /> : null
                    }
                  </>
                )
              })
            }

          </>
        }
      />
      
      <CardContent className={classes.section1}>
        <Typography className={classes.title} color="secondary" gutterBottom>
          {username_bot ? username_bot : 'No Verificado'} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDesc_bot ? shortDesc_bot : 'No Verificado'}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {status_bot < 1 ? 'ID: '+ id_bot : null}
        </Typography>

        <Box variant="body2" component="p" className={classes.section2}>
          {tags && 
            tags.map((tag) => {
              return (
                <>
                  <Chip key={'tagBot-' + tag.name} label={tag.name_tag} variant="outlined" component="a" color="secondary" size="small" className={classes.tag} style={{fontSize: 10}}/>
                </>
              )
            })
          }
          
        </Box>
        
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing className={classes.section3}>
       <ButtonAction botAction={bot} />
      </CardActions>
      
    </Card>
  );
}
export default BotCard;