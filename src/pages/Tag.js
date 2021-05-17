import React from 'react';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTags from '../layouts/Home/ContainerTags.js';

export default function Home() {
  const { id } = useParams();
  
  return (
    <Layout >
      <HeroTags />
      <ContainerTags tagName={id} />
    </Layout>
  );
}