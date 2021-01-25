import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navBar.js';

import HeroContent from '../layouts/Home/HeroContent.js';
import ContainerList from '../layouts/Home/ContainerList.js';
import FooterHome from '../layouts/Home/FooterHome.js';

export default function Home() {
  return (
    <React.Fragment>
      
      <CssBaseline />
      <NavBar />
      <main>
        
        <HeroContent />
       
        <ContainerList />
        
      </main>
      <FooterHome />
    </React.Fragment>
  );
}