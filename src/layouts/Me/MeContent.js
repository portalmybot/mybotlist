import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import AvatarUser from "../../components/me/AvatarUser";
import InfoUser from "../../components/me/InfoUser";
import BotsUser from "../../components/me/BotsUser";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(-1)
  },
}))

const MeContent = ({ user }) => {
  const classes = useStyles();

  return (
      <>
        <Grid item xs={12} sm={12}>
          <Box display="flex">
            <Box m="auto">
              <AvatarUser user={user} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Box display="flex">
            <Box m="auto">
              <InfoUser user={user} />
            </Box>
          </Box>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12}>
          <BotsUser bots={user.bots}/>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Box display="flex">
            <Box m="auto">
              <Typography variant="h5" component="h1" color="inherit" className={classes.title} paragraph>
                No verificados
             </Typography>
            </Box>
          </Box>
         
          <BotsUser bots={user.bots_verify}/>
        </Grid>
      </>
  )
};

export default MeContent;
