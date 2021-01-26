import React from 'react';

import NavBar from '../components/navBar.js';
import FooterHome from '../layouts/Home/FooterHome.js';

const Layout = ({ children, backUrl, title,}) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        {children}
      </main>
      <FooterHome />
    </React.Fragment>
  );
}
export default Layout;