import React from 'react'
import { useQuery } from 'react-query'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { getUser } from '../services/me.service';
import Layout from '../components/Layout';
import AvatarUser from "../components/me/AvatarUser";
import InfoUser from "../components/me/InfoUser";
import LoadingPage from '../components/common/LoadingPage';
import Seo from '../components/common/Seo';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    padding: theme.spacing(4, 0),
    marginTop: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(-1)
  }
}));

const Premium = () => {
  const { isLoading, data: user, error } = useQuery('getuser', getUser);
  const classes = useStyles();

  return (
      <Layout>
        {
          isLoading ? (
            <LoadingPage />
          ) : error ? (
            <h1>Error!</h1>
          ) : (
            <>
              <Seo 
                title={user.social_provider + ' Premium | Discord Bots — MyBOT List'}
                description={'Perfil del usuario '+ user.social_provider} 
                url={'https://portalmybot.com/list/'}
                icon={user.social_avatarUrl}
                image={user.social_avatarUrl} />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>
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
                          <Box display="flex">
                            
                            <Box m="auto">
                              <Typography variant="h5" component="h1" color="inherit" className={classes.title} paragraph>
                                PREMIUM
                              </Typography>
                            </Box>
                          </Box>
                         
                        </Grid>
                    </Grid>
                  </div>
                
              </Container>
            </>
          )
        }
      </Layout>
  )
};

export default Premium;


