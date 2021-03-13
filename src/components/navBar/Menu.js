import React from 'react';
import Link from '@material-ui/core/Link';
import { useQuery } from 'react-query'
import { Link as RouterLink } from 'react-router-dom';
import { getUser } from '../../services/me.service';
import Skeleton from '@material-ui/lab/Skeleton';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  }
}));

export default function MenuAuth() {
  const { isLoading, data: user } = useQuery('getuserMenu', getUser);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
        {isLoading ? (
          <Skeleton variant="circle" width={40} height={40} />
        ) : (
          <Avatar alt="Remy Sharp" src={user.social_avatarUrl} className={classes.small} />
        )}

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
          <Link underline='none' component={RouterLink} to="/me" color="inherit">
            <MenuItem onClick={handleClose}>
                Perfil
            </MenuItem>
          </Link>
        <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  );
}
