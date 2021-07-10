import React from 'react';

import Layout from '../components/Layout';
import ContainerRegister from '../layouts/Register/ContainerRegister';
import Seo from '../components/common/Seo';

export default function Registers() {
  return (
    <Layout >
      <Seo
        title='Registrar | Discord Bots — MyBOT List'
        description='Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team' 
        url='https://portalmybot.com/register'
        image='https://i.imgur.com/DC0Kp0D.png'
      />
      <ContainerRegister/>
    </Layout>
  );
}