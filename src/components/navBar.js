import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Box from '@material-ui/core/Box';

import LogoHome from './navBar/LogoHome';
import Search from './navBar/Search';
import NavLinks from './navBar/NavLinks';
import LoginLinks from './navBar/LoginLinks';
import ButtonAdd from './navBar/ButtonAdd';
import LoginLinksMobile from './navBar/LoginLinksMobile';

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

export default function NavBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
       <Box display="flex" className={classes.boxMenu}>
          <Box m="auto">
            <LoginLinksMobile />
          </ Box>
        </ Box >
      
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
      
    </div>
  );
}
