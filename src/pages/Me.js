import React from 'react'
import { useQuery } from 'react-query'
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MeContent from '../layouts/Me/MeContent';
import { getUser } from '../services/me.service';
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
  const { isLoading, data: user, error } = useQuery('getuser', getUser);
  const classes = useStyles();

  return (
      <Layout>
        {
          isLoading ? (
            'Cargando..'
          ) : error ? (
            <h1>Error!</h1>
          ) : (
            
            <Container maxWidth={false} className={classes.containerbg}>
              <Container maxWidth={'lg'}>
                <div className={classes.root}>
                  <Grid container spacing={1} justify='center'>

                    <MeContent user={user}/>

                  </Grid>
                </div>
              </Container>
            </Container>
          )
        }
      </Layout>
  )
};

export default Me;


