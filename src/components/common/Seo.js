import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({title, description, url, icon, image}) => {
  return (
      <Helmet htmlAttributes={{ lang: "es" }} >
        <title>{title || 'Discord Bots — MyBOT List'}</title>

        <meta charset="utf-8" />
        <link rel="icon" href={icon || 'https://portalmybot.com/assets/img/logo/icon-portal.png'} type="image/x-icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="theme-color" content="#5865F2" />

        <meta name="title" content={title || 'Discord Bots — MyBOT List'} />
        <meta name="description" content={description || 'Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || 'https://portalmybot.com/list/'} />
        <meta property="og:title" content={title || 'Discord Bots — MyBOT List'} />
        <meta property="og:description" content={description || 'Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'} />
        <meta property="og:image" content={image || 'https://i.imgur.com/DC0Kp0D.png'} />

        <meta property="twitter:url" content={url || 'https://portalmybot.com/list/'} />
        <meta property="twitter:title" content={title || 'Discord Bots — MyBOT List'} />
        <meta property="twitter:description" content={description || 'Lista de Bots públicos de Discord en español, descubre nuevos Bots desarrollados por los miembros de la comunidad MyBOT Team'} />
        <meta property="twitter:image" content={image || 'https://i.imgur.com/DC0Kp0D.png'} />

      </Helmet>
  );
}

export default SEO;