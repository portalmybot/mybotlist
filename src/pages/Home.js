import React from 'react';

import Layout from '../components/Layout';
import HeroContent from '../layouts/Home/HeroContent.js';
import ContainerList from '../layouts/Home/ContainerList.js';

export default function Home() {
  return (
    <Layout >
      <HeroContent />
      <ContainerList />
    </Layout>
  );
}