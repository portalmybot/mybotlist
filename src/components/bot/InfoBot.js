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
const badges = ['verificado'];
const tags = ['memes', 'musica'];
export default function InfoBot() {
  const classes = useStyles();

  return (
    <Container maxWidth={'lg'} className={classes.container}>
      <Typography variant="h3" component="h1" className={classes.title}>
        MyBOT
        <Typography variant="subtitle1" style={{ marginTop: '-2px' }} color={'textSecondary'} gutterBottom>
           @MyBOT#2021
        </Typography>
       
        <Typography>
          {badges.map((badge, index) => {
                return (
                  <Badge key={index + '-badge'} value={badge} />
                );
          })}
        </Typography>
      </Typography>
      
      <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="outlined" aria-label="outlined button group">
        <Button color="secondary">Prefix</Button>
        <Button>{'-'}</Button>
      </ButtonGroup>
       <ButtonGroup style={{ marginRight: '5px'}} size="small" variant="outlined" aria-label="small outlined button group">
          <Button color="default">Estado</Button>
          <Button> <FiberManualRecordIcon style={{ color: green[500] }} /> </Button>
        </ButtonGroup>

      <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
        Bot útil para todos.
      </Typography>

      <Typography variant="caption" display="block" className={classes.subtags} gutterBottom>
        Tags:
      </Typography>
      <Box component="span" m={0} className={classes.tagContent}>
        {
          tags.map((tag, index) => {
            return (
              <Chip key={index} label={tag} className={classes.tags} component="a" clickable variant="outlined" />
            )
          })
        }
      </Box>
      <LinksBot/>
      
    </Container>
   
  );
}
