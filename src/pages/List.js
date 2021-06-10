import React from 'react';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTops from '../layouts/List/ContainerTops';
import ContainerVerified from '../layouts/List/ContainerVerified';
import ContainerNew from '../layouts/List/ContainerNew';

export default function List() {
  const { id } = useParams();
 
  let ContainerType;
  if (id === 'top') {
    ContainerType = <ContainerTops />;
  } else if(id === 'verified') {
    ContainerType = <ContainerVerified />
  } else if(id === 'new') {
    ContainerType = <ContainerNew />
  }

  return (
    <Layout >
      <HeroTags />
      {ContainerType}
    </Layout>
  );
}