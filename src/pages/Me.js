import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MeContent from '../layouts/Me/MeContent';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    padding: theme.spacing(4, 0),
    marginTop: theme.spacing(2),
  },
}));

const Me = () => {
  const classes = useStyles();

  return (
      <Layout>
            <Container maxWidth={false} className={classes.containerbg}>
              <Container maxWidth={'lg'}>
                <div className={classes.root}>
                  <Grid container spacing={1} justify='center'>

                    <MeContent />

                  </Grid>
                </div>
              </Container>
            </Container>
        
      </Layout>
  )
};

export default Me;


