import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Badge from './Badges';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import { green } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LinksBot from './LinksBot';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(4, 2, 5),

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(3)
  },
  subtitle: {
    marginTop: theme.spacing(1)
  },
  subtags: {
    marginTop: theme.spacing(4)
  },
  tagContent: {
    marginTop: theme.spacing(1)
  },
  tags: {
    marginRight: theme.spacing(1)
  },
}))

//const badges = ['verificado']

export default function InfoBot({ bot }) {
  const classes = useStyles();
  const { username_bot, tag_bot, prefix_bot, tags, active_bot, shortDesc_bot, badges } = bot;

  return (
    <Container maxWidth={'lg'} className={classes.container}>
      <Typography variant="h3" component="h1" className={classes.title}>
        {username_bot}
        <Typography variant="subtitle1" style={{ marginTop: '-7px' }} color={'textSecondary'} gutterBottom>
           @{tag_bot}
        </Typography>
       
        <Typography>
          {badges.map((badge, index) => {
                return (
                  <Badge key={index + 'badge'} value={badge.name_badge} />
                );
          })}
        </Typography>
      </Typography>
      
      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="outlined" aria-label="outlined button group">
        <Button color="secondary">Prefix</Button>
        <Button>{ prefix_bot }</Button>
      </ButtonGroup>
      {active_bot && (
        
        <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="outlined" aria-label="small outlined button group">
          <Button color="default">Estado</Button>
          <Button> <FiberManualRecordIcon style={{ color: green[500] }} /> </Button>
        </ButtonGroup>

      )}

      <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
        {shortDesc_bot}
      </Typography>

      <Typography variant="caption" display="block" className={classes.subtags} gutterBottom>
        Tags:
      </Typography>
      <Box component="span" m={0} className={classes.tagContent}>
        {
          tags.map((tag, index) => {
            return (
              <Chip key={index} label={tag.name_tag} className={classes.tags} component="a" href={'../tag/'+tag.name_tag} clickable variant="outlined" />
            )
          })

        }
      </Box>
      <LinksBot bot={bot}/>
      
    </Container>
   
  );
}
