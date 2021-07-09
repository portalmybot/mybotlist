import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import HeroContent from '../layouts/Home/HeroContent.js';
import ContainerBots from '../layouts/Home/ContainerBots.js';

export default function Home() {
  return (
    <Layout>
      <Seo
        title='Discord Bots — MyBOT List'
        description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team' 
        url='https://portalmybot.com/list/'
        image='https://i.imgur.com/DC0Kp0D.png'
      />
      <HeroContent />
      <ContainerBots />
    </Layout>
  );
}