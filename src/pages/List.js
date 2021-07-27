import React from 'react';
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import Seo from '../components/common/Seo';
import HeroTags from '../layouts/Home/HeroTags';
import ContainerTops from '../layouts/List/ContainerTops';
import ContainerVerified from '../layouts/List/ContainerVerified';
import ContainerNew from '../layouts/List/ContainerNew';
import ContainerPremium from '../layouts/List/ContainerPremium';

export default function List() {
  const { id } = useParams();
 
  let ContainerType;
  let linkText;
  let titleText;
  let descText;

  if (id === 'top') {
    ContainerType = <ContainerTops />
    linkText = 'bots/top'
    titleText = 'Discord Bots con más reputaciones'
    descText = 'Lista de los Bots Discord con más reputaciones'

  } else if(id === 'verified') {
    ContainerType = <ContainerVerified />
    linkText = 'bots/new'
    titleText = 'Discord Bots verificados'
    descText = 'Lista de los Bots Discord verificados'

  } else if(id === 'new') {
    ContainerType = <ContainerNew />
    linkText = 'bots/verified'
    titleText = 'Discord Bots agregados recientemente'
    descText = 'Lista de los Bots Discord agregados recientemente'

  } else if(id === 'premium') {
    ContainerType = <ContainerPremium />
    linkText = 'bots/premium'
    titleText = 'Discord Bots premium'
    descText = 'Lista de los Bots Discord premiums'

  }

  return (
    <Layout>
      <Seo 
        title={titleText + ' | Discord Bots — MyBOT List'}
        description={descText + ' en MyBOT List'} 
        url={'https://portalmybot.com/list/'+linkText}
        image={'https://i.imgur.com/DC0Kp0D.png'} />
      <HeroTags />
      {ContainerType}
    </Layout>
  );
}