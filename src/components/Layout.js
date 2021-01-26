import React from 'react';
import NavBar from '../components/navBar.js';

import HeroContent from '../layouts/Home/HeroContent.js';
import ContainerList from '../layouts/Home/ContainerList.js';
import FooterHome from '../layouts/Home/FooterHome.js';

const Layout = ({ children, backUrl, title,}) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        
        <HeroContent />
       
        <ContainerList />
        
      </main>
      <FooterHome />
    </React.Fragment>
  );
}
export default Layout;