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
    padding: theme.spacing(3, 2, 4),

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
    marginTop: theme.spacing(2)
  },
  subtags: {
    marginTop: theme.spacing(7)
  },
  tagContent: {
    marginTop: theme.spacing(1)
  },
  tags: {
    marginRight: theme.spacing(1)
  },
}))
const badges = ['verificado', 'premium']

export default function InfoBot({ bot }) {
  const classes = useStyles();
  const { prefix_bot, tags, shortDesc_bot } = bot;

  return (
    <Container maxWidth={'lg'} className={classes.container}>
      <Typography variant="h3" component="h1" className={classes.title}>
        MyBOT
        <Typography>
          {badges.map((bg) => {
                return (
                  <Badge key={bg} value={bg} />
                );
          })}
        </Typography>
      </Typography>
      
      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="outlined" aria-label="outlined button group">
        <Button color="secondary">Prefix</Button>
        <Button>{ prefix_bot }</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="outlined" aria-label="small outlined button group">
        <Button color="default">Estado</Button>
        <Button> <FiberManualRecordIcon style={{ color: green[500] }} /> </Button>
      </ButtonGroup>

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
      <LinksBot />
      
    </Container>
   
  );
}
