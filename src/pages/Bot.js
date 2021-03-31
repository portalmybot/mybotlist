import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import AvatarBot from "../components/bot/AvatarBot";
import InfoBot from "../components/bot/InfoBot";
import ActionBot from "../components/bot/ActionBot";
import DescriptionBot from "../components/bot/DescriptionBot";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    padding: theme.spacing(4, 0),
  },
  action: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  devsContent: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  descriptionContent: {
    marginTop: theme.spacing(1),
    '& img': {
      maxWidth: '90%',
      borderRadius: '5px',
    },
    '& a': {
      color: '#7289da',
    },
    '& pre': {
      padding: theme.spacing(1),
      borderRadius: '5px',
      backgroundColor: '#2c2c2c',
      fontSize: '15px',
    }
  },
  devUser: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(.5),
  }
}))


export default function Bot() {

  const classes = useStyles();
  
  return (
    <Layout>
      {  
        <Container maxWidth={false} className={classes.containerbg} >

          <Container maxWidth={'lg'}>

            <div className={classes.root}>
              <Grid container spacing={1} justify='center'>
                <Grid item xs={12} sm={6}>
                  <Box display="flex">
                    <Box m="auto">
                      <AvatarBot />
                    </Box>
                  </Box>
                  <Box className={classes.action}>
                    <ActionBot />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <InfoBot />
                </Grid>
                
                <Grid item xs={12}>
                  <Divider style={{ marginBottom: 20, marginTop: 30 }}/>
                  <Box className={classes.devsContent}>
                    Desarrollado por:
                    <Box>
                       
                        <Chip
                          className={classes.devUser}
                          avatar={<Avatar alt={'Avatar demo'} src={'https://source.unsplash.com/random'} />}
                          label={'CraterMaik'}
                          component="a" href={'#'} clickable
                        />

                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Divider style={{ marginBottom: 20 }}/>
                  <Box className={classes.descriptionContent}>
                    <DescriptionBot />
                   
                  </Box>
                </Grid>
              </Grid>
            </div>
          
          </Container>

        </Container>

      }
    </Layout>
  );
}