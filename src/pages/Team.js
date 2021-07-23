import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardListStyle from '../components/common/CardListStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbg: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
  title: {
    fontWeight: 700,
    marginTop: theme.spacing(1),
    
  },
  heroContent: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  liContent: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    marginBottom: theme.spacing(1),
  },
  appBar: {
    position: 'relative',
  },
  titleDialog: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

}));

const userList = [
  {
    username: 'CraterMaik',
    avatar: 'https://i.imgur.com/DC0Kp0D.png',
    main: true,
    data: {
      rol: 'Admin',
      social: {
        twitter: 'https://twitter.com/cratermaik',
        github: 'https://github.com/cratermaik',
        web: 'https://portalmybot.com'
      }
    }
  },
  {
    username: 'Jenny',
    avatar: 'https://i.imgur.com/DC0Kp0D.png',
    main: true,
    data: {
      rol: 'Admin',
      social: {
        twitter: 'https://twitter.com/cratermaik',
        github: 'https://github.com/cratermaik',
        web: 'https://portalmybot.com'
      }
    }
  },
  {
    username: 'AndreMor',
    avatar: 'https://i.imgur.com/DC0Kp0D.png',
    main: false,
    data: {
      rol: 'Gestor',
      social: {
        twitter: 'https://twitter.com/cratermaik',
        github: 'https://github.com/cratermaik',
        web: 'https://portalmybot.com'
      }
    }
  },
]
const TeamPage = () => {

  const classes = useStyles();
  return (
      <Layout>
        {
            <>
              <Seo 
                title='Team —  MyBOT List'
                description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'
                url='https://portalmybot.com/list/'
                image='https://i.imgur.com/DC0Kp0D.png' />

              <Container maxWidth={'lg'} className={classes.containerbg}>
                
                  <div className={classes.root}>
                    <Grid container spacing={1} justify='center'>

                        <Container maxWidth="lg" component="main" className={classes.heroContent}>
                          <Typography  variant="h4" component="h1" className={classes.title} align="center" color="textPrimary" gutterBottom>
                            Team MyBOT List
                          </Typography>
                          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            Información sobre MyBOT List y los increíbles gestores y colaboradores que hacen posible la plataforma
                          </Typography>
                        </Container>

                        <Container maxWidth="md" component="main">
                          <Grid container spacing={2}>

                            {userList.map((user) => {

                              const cardId = `card-id-${user.username}`;
                              return (
                                <Grid item lg={3} xs={6} >
                                 <CardListStyle user={user} id_key={cardId} />
                                </Grid>
                              );
                              
                            })}

                          </Grid>
                        </Container>
                      </Grid>
                  </div>
                 
              </Container>
            </>
          
        }
      </Layout>
  )
};

export default TeamPage;


