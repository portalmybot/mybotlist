import React from 'react';
import Link from '@material-ui/core/Link';
import { useQuery } from 'react-query'
import { Link as RouterLink } from 'react-router-dom';
import { getUser, getUserPremium } from '../../services/me.service';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import CookieService from "../../services/CookieService";
import { logoutUser } from "../../services/me.service";

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
  const { isLoading, data: user } = useQuery('getuserMenu', getUser);
  const { data: premium } = useQuery('getuserMenuPremium', getUserPremium);

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
    await logoutUser();

    await CookieService.remove("access_token");

    window.location.href = `${process.env.REACT_APP_URL_BASE}`;
    
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
        {isLoading ? (
          <Skeleton variant="circle" width={40} height={40} />
        ) : premium.result ? (
          <Avatar alt={'Menu '+ user.social_provider} style={{border:'2px solid #ffc107'}} src={user.social_avatarUrl} className={classes.small} />
        ) : (
          <Avatar alt={'Menu '+ user.social_provider} src={user.social_avatarUrl} className={classes.small} />
        ) }

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
                {isLoading ? (
                  <Skeleton variant="circle" width={40} height={40} />

                ) : (
                  <>
                    <Avatar alt={'Menu '+ user.social_provider} src={user.social_avatarUrl} className={classes.big}/>
                  </>
                )}
               
            </Box>
          </Box>
          <Box display="flex">
            <Box m="auto">
              {!isLoading && (
                <>
                <Typography variant="subtitle1" gutterBottom>
                  {user.social_provider}
                </Typography>
                </>
              )}
                
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
