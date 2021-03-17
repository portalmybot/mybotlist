import React from 'react';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import AvatarUser from "../../components/me/AvatarUser";
import InfoUser from "../../components/me/InfoUser";
import BotsUser from "../../components/me/BotsUser";

const MeContent = ({ user }) => {

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

        <Grid item xs={12} sm={12} lg={6}>
          <BotsUser bots={user.bots}/>
        </Grid>
      </>

  )
};

export default MeContent;
