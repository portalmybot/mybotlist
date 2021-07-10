import React from 'react';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTags from '../layouts/Tag/ContainerTags';

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



export default function Tags() {
  const { id } = useParams();
  
  return (
    <Layout >
      <Seo
        title={capitalizarPrimeraLetra(id) +' Discord Bots — MyBOT List'}
        description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team' 
        url={'https://portalmybot.com/list/tag/'+id}
        image='https://i.imgur.com/DC0Kp0D.png'
      />
      <HeroTags />
      <ContainerTags tagName={id} />
    </Layout>
  );
}