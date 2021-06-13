import React from 'react';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTags from '../layouts/Tag/ContainerTags';

export default function Tags() {
  const { id } = useParams();
  
  return (
    <Layout >
      <HeroTags />
      <ContainerTags tagName={id} />
    </Layout>
  );
}