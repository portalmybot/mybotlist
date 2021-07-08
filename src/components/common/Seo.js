import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({title}) => {
  return (
      <Helmet>
        <title>{title}</title>
        <meta name='description' content='This is some content' />
      </Helmet>
  );
}

export default SEO;