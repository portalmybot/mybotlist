import React from 'react';

import Layout from '../components/Layout';
import HeroContent from '../layouts/Home/HeroContent.js';
import ContainerBots from '../layouts/Home/ContainerBots.js';

export default function Home() {
  return (
    <Layout >
      <HeroContent />
      {/* <ContainerBots /> */}
    </Layout>
  );
}