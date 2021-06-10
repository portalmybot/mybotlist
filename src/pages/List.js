import React from 'react';
import Layout from '../components/Layout';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTops from '../layouts/List/ContainerTops';

export default function List() {

  return (
    <Layout >
      <HeroTags />
      <ContainerTops />
    </Layout>
  );
}