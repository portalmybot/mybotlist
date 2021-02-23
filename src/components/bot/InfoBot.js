import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Badges from './Badges';

export default function InfoBot() {
  return (
    <Typography component="div">
      <Box textAlign="justify" m={1}>
        MyBOT
          
        <Badges />
      </Box>
    </Typography>
  );
}
