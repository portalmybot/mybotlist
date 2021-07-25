import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { blue, grey, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3, 2)
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
  },
  avatar: {
    margin: theme.spacing(0, 0, 1, 0)
  },
  actions: {
    textAlign: 'center',
    display: 'block'
    
  }
}));

export default function MediaCard({id_key, user}) {
  const classes = useStyles();

  return (
    <Card key={id_key} className={classes.root} style={{ borderTop: `2px solid ${user.color}`}}>
      <CardContent>
        <Box className={classes.avatar}>
          <Avatar alt="Remy Sharp" src={user.avatar} className={classes.large} />
        </Box>
        <Typography gutterBottom variant="h6" component="h2">
          {user.username}
        </Typography>
        <Chip label={user.data.rol} size="small" style={{ backgroundColor: user.color }}/>
      </CardContent>
      <CardActions className={classes.actions}>
        <Link href={user.data.social.twitter} variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
          <TwitterIcon style={{ color: blue[500] }} />
        </Link>
        <Link href={user.data.social.github} variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
          <GitHubIcon style={{ color: grey[500] }} />
        </Link>
        <Link href={user.data.social.web} variant="subtitle1" target="_blank" rel="noopener" color="textSecondary">
          <LanguageIcon style={{ color: blueGrey[500] }} />
        </Link>
      </CardActions>
    </Card>
  );
}
