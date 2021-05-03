import React from 'react';

import Layout from '../components/Layout';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTags from '../layouts/Home/ContainerTags.js';

export default function Home() {
  return (
    <Layout >
      <HeroTags />
      <ContainerTags />
    </Layout>
  );
}