import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Link from '@material-ui/core/Link';

import LogoHome from './navBar/LogoHome';
import Search from './navBar/Search';
import NavLinks from './navBar/NavLinks';
import LoginLinks from './navBar/LoginLinks';
import ButtonAdd from './navBar/ButtonAdd';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 0,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Configuración</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem>
        <ButtonAdd />
      </MenuItem>
      <MenuItem>
        <Link href="/login" onClick={preventDefault} color="inherit">
          Login
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/register" onClick={preventDefault} color="inherit">
          {'Registrar'}
        </Link>
      </MenuItem>

    </Menu>
  );

  return (
    
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <LogoHome />
          <div className={classes.sectionDesktop}>
            <Search />
          </div>
          <div className={classes.sectionDesktop}>
            <NavLinks />
          </div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ButtonAdd />
          </div>
          <div className={classes.sectionDesktop}>
            <LoginLinks />
          </div>

          <div className={classes.sectionMobile}>
           
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <DehazeIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
