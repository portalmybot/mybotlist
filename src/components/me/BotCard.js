import React, { useEffect, useState } from 'react';
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
import { useMutation } from "react-query";
import Chip from '@material-ui/core/Chip';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import BlockIcon from '@material-ui/icons/Block';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import CircularProgress from '@material-ui/core/CircularProgress';

import Divider from '@material-ui/core/Divider';

import { deleteBot, getBackgroundBot } from '../../services/bot.service';

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
  const timer = React.useRef();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearTimeout(timer.current);
    
  }, []);

  const {
    id_bot,
    status_bot,
    tag_bot
  } = botAction;

  const mutateDeleteBot = useMutation(deleteBot);

  const handleDeleteClick = () => {
    setLoading(true);
    timer.current = window.setTimeout(() => {
      mutateDeleteBot.mutate({ id_bot: id_bot })
      enqueueSnackbar('Has eliminado el bot', {
       variant: 'success'
      })
      setLoading(false);
    }, 2000)
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);

  }
  const handleClose = () => {
    setOpen(false);

  };


  if (status_bot > 0) {
    return (
      <>
        {!loading ? (
          <>
            <Link underline='none' component={RouterLink} to={'/bot/'+id_bot+'/edit'} className={classes.tag} color="inherit">
              <Button variant="contained" size={'small'} color="primary">
                Editar
              </Button>
            </Link>

            <Button variant="contained"  size={'small'} color="secondary" onClick={handleClickOpen}>
              Eliminar
            </Button>

            <Link underline='none' component={RouterLink} className={classes.expand} to={'/bot/'+id_bot} color="secondary">
              <IconButton aria-label="Bot view" >
                <OpenInNewIcon color={'secondary'} />
              </IconButton>
            </Link>
          </>
          ) : (
            <CircularProgress color="secondary" />
          )
        }

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Esta seguro de eliminar tu bot {tag_bot}?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Estas por eliminar tu bot {tag_bot} y sus estadisticas asignadas.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleDeleteClick} color="primary" autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
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
    status_bot,
    premium_bot
  } = bot;
  
  const { isLoading, data: urlPremium = {}} = useQuery(['getBotBGCard', {id: id_bot}], getBackgroundBot)

  const { background_card } = urlPremium;

  const bgPremium = premium_bot && !isLoading ? `linear-gradient(to right, rgba(34, 36, 38, 0.68), rgba(34, 36, 38, 0.68)), url(${background_card}) center top / cover no-repeat` : null;

  return (
    <Card key={'botCard-'+id_bot} className={classes.root} style={{background: `${bgPremium}`}}>
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