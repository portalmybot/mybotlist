import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './layouts/navBar.js';

import HeroContent from './layouts/HeroContent.js';
import ContainerList from './layouts/ContainerList.js';
import FooterHome from './layouts/FooterHome.js';
import ParticlesModel from './layouts/ParticlesModel.js';
export default function Album() {
  return (
    <React.Fragment>
      
      <CssBaseline />
      <NavBar />
      <main>
        <ParticlesModel / >
        <HeroContent />
       
        <ContainerList />
        
      </main>
      <FooterHome />
    </React.Fragment>
  );
}