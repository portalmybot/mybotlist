import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  meContent: {
    padding: theme.spacing(5, 5, 20, 5),
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    
  },
  textContent: {
    maxWidth: 900,
    margin: theme.spacing(0, 'auto'),
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
 })
)

const MeContent = ({ user }) => {
  const classes = useStyles();

  return (
    
    <div className={classes.meContent}>
      <Typography component="h1" variant="h3" align="center" color="inherit"  gutterBottom>
        <Avatar alt="Image title" align="center" className={classes.avatar}>
              BOT
        </Avatar>
        <Box fontWeight="fontWeightBold" m={1}>
          Perfil
        </Box>
      </Typography>
      
      <Typography variant="h6" align="center" color="inherit" className={classes.textContent} paragraph>
         {"Hola " + user.social_provider}
      </Typography>
    </div>

  
  )
};

export default MeContent;
