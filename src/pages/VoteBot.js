import React, {
  useEffect, useState
} from 'react';

import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';

import { useQuery } from "react-query";

import Layout from '../components/Layout';
import LoadingPage from '../components/common/LoadingPage';
import { getBot } from '../services/bot.service';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(5)
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),

  },
  submit: {
    margin: theme.spacing(3, 1, 2, 0),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    padding: theme.spacing(4),
    backgroundColor: '#000000f0',
    
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginTop: -12,
    marginLeft: -20,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: '2%',
    marginBottom: theme.spacing(2)

  },
  title: {
    fontWeight: 700,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}));



export default function EditBot() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [btnsuccess, setBtnSuccess] = useState(true);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const { id } = useParams();

  const {isLoading, error, data: botQuery = {}} = useQuery(['getBotVote', {id: id}], getBot)
  const { avatarUrl_bot, tag_bot} = botQuery;


  useEffect(() => {
    setData({
      id_bot: id
    })
    clearTimeout(timer.current);

  }, [id]);
  

//  const mutateUpdateBot = useMutation(updateBot);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setBtnSuccess(false)
      }, 2000);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
  
  }
  return (
    <Layout>
      {
          isLoading ? (
            <LoadingPage />
          ) : error ? (
            <h1>Error!</h1>
          ) : (
          <Container component="main" maxWidth="md" style={{ height: '60vh' }}>
            <div className={classes.paper}>
              
              <Typography component="h1" variant="h4"  className={classes.title}>
                {tag_bot}
              </Typography>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
              
                <Grid item xs={12} sm={12}>
                  <Box display="flex">
                    <Box m="auto" >
                      <Avatar variant="square" src={avatarUrl_bot} className={classes.large} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box display="flex">
                    <Box m="auto">
                        {btnsuccess ? 
                          <>
                            <Button
                              variant="contained"
                              color="primary"
                              className={buttonClassname}
                              disabled={loading}
                              onClick={handleButtonClick}
                              size="large"
                            >
                              VOTAR
                            </Button>
                            
                            {loading && <CircularProgress size={45} className={classes.buttonProgress} />}
                          </>

                         : <CheckIcon style={{ color: green[500], fontSize: 50 }} />}
                      </Box>

                  </Box>
                </Grid>
              </form>
            </div>
          </Container>

        )
      }
    </Layout>
    
  );
}
