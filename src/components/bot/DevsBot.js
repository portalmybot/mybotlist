import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(.5),
  },
}));

export default function DevsBot({ bot }) {
  const classes = useStyles();
  const { devs } = bot;
  
  return (
      <>
        {
          devs.filter(x => x.user != null).map((dev) => {
            return (
              <Chip
                className={classes.root}
                avatar={<Avatar alt={'Avatar de '+dev.user.social_provider} src={dev.user.social_avatarUrl} />}
                label={dev.user.social_provider}
                component="a" href={'https://portalmybot.com/u/'+dev.id_user} clickable
              />

            );
          })

        }
      </>
    );
}
