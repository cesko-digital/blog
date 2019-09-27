import Helmet from 'react-helmet';
import config from '../../../data/site-config';
import React from 'react';

const Head = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:400,700"
        rel="stylesheet"
      />
      <meta name="description" content={config.siteDescription} />
    </Helmet>
  </>
);

export default Head;
