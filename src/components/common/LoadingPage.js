import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function LoadingPage() {

  return (
    <>
      <Grid item xs={12} sm={12}>
        <Box display="flex" style={{ height: '100vh' }}>
          <Box m="auto">
            <CircularProgress color="primary" size={60} thickness={4} />
          </Box>
        </Box>
      </Grid>
    </>
  );
}
