import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  big: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  small: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
  boxMenu: {
    padding: theme.spacing(2, 2, 0, 2)
  }
}));

export default function MenuAuth() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
        <Avatar alt="Remy Sharp" src='https://source.unsplash.com/random' className={classes.small} />


      </IconButton>

      <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >

          <Box display="flex" className={classes.boxMenu}>
            <Box m="auto">
              <Avatar alt="Remy Sharp" src='https://source.unsplash.com/random' className={classes.big}/>

            </Box>
          </Box>
          <Box display="flex">
            <Box m="auto">
              <Typography variant="subtitle1" gutterBottom>
                CraterMaik
              </Typography>

            </Box>
          </Box>
        <Divider />
        <Link underline='none' component={RouterLink} to="/me" color="inherit">
          <MenuItem onClick={handleClose}>
             Perfil
          </MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  );
}
