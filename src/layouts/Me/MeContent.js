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

const MeContent = ({data}) => {
  console.log(data);
  const classes = useStyles();

  return (
    
    <div className={classes.meContent}>
      <Typography component="h1" variant="h3" align="center" color="inherit"  gutterBottom>
        <Avatar alt="Image title" align="center" /* src="https://source.unsplash.com/random" */ className={classes.avatar}>
              BOT
        </Avatar>
        <Box fontWeight="fontWeightBold" m={1}>
          Perfil
        </Box>
      </Typography>
      
      <Typography variant="h6" align="center" color="inherit" className={classes.textContent} paragraph>
        {data[1] ? (
            "Cargando...."
          ): null}

          {!data[1] && data[2] ? (
            "¡Oh, no, algo salió mal!"
          ): null}

          {data[0] ? ( 
            "Hola "+ data[0]

          ): null}
      </Typography>
    </div>

  
  )
};

export default MeContent;
