import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useQuery } from 'react-query'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green, yellow, grey} from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import LoupeIcon from '@material-ui/icons/Loupe';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import Divider from '@material-ui/core/Divider';
import { getBackgroundBot } from '../../services/bot.service';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid',
    borderColor: theme.palette.background.paper,
     '@media (min-width: 960px)': {
       root: {
         maxWidth: 345,
       },
     },
     '&:hover': {
       boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 21%), 0px 3px 4px 0px rgb(0 0 0 / 31%), 0px 1px 8px 0px rgb(0 0 0 / 56%)',
       transform: 'translateY(-3px)',
       cursor: 'pointer',
     }
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
  heightDesc: {
    lineHeight: 1.5,
    height: theme.spacing(5.5),
    overflow: 'hidden',

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
    margin: theme.spacing(3, 0, 0),
  },
  section3: {
    margin: theme.spacing(1, 0, 0.5),
  },

  
}));

const CardList = ({ value }) => {
  const classes = useStyles();
  const {
    id_bot,
    username_bot,
    avatarUrl_bot,
    shortDesc_bot,
    vote_bot,
    tags,
    badges,
    premium_bot,
    type_bot
  } = value;

  const { isLoading, data: urlPremium = {}} = useQuery(['getBotBGCard', {id: id_bot}], getBackgroundBot)
  const { background_card } = urlPremium;

  const bgPremium = premium_bot && !isLoading ? `linear-gradient(to right, rgba(34, 36, 38, 0.68), rgba(34, 36, 38, 0.68)), url(${background_card}) center top / cover no-repeat` : type_bot > 0 && !isLoading ? `linear-gradient(to right, rgba(34, 36, 38, 0.68), rgba(34, 36, 38, 0.68)), url(${background_card}) center top / cover no-repeat` : null;

  return (
    <Card key={id_bot} className={classes.root} style={{background: `${bgPremium}`}} >
      <CardHeader
        avatar={
          <Avatar alt="Image title" src={avatarUrl_bot} variant="square" className={classes.avatar} />
        }
        action={
          <Chip label={vote_bot} icon={<ImportExportIcon />} variant="outlined"/>
        }

        subheader= {
          badges && 
            badges.map((badge) => {
              return (
                <>
                  {
                    badge.name_badge === 'verificado' ? < VerifiedUserIcon style = {
                      {
                        color: green[500]
                      }
                    }
                    className = {
                      classes.icon
                    }
                    /> : badge.name_badge === 'desarrollo' ? <SettingsIcon style={
                      { 
                        color: grey[500] 
                      }
                    } 
                    className={
                      classes.icon
                    } 
                    /> : badge.name_badge === 'premium' ? <OfflineBoltIcon style={ 
                      {
                        color: yellow[500]
                      }
                    }
                    className = {
                      classes.icon
                    }
                    /> : null

                  }
                </>
              )
            })
        }

      />

      <CardContent className={classes.section1}>
        <Typography className={classes.title} color="secondary" gutterBottom>
          {username_bot} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.heightDesc}>
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
        
        <Link underline='none' component={RouterLink} to={'/bot/'+id_bot+'/vote'} className={classes.tag} color="inherit">
          <Tooltip title="Asignar una reputación">
            <IconButton aria-label="add reputation">
              <LoupeIcon color="secondary" style={{ fontSize: 30 }}/>
            </IconButton>
          </Tooltip>
        </Link>
        
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