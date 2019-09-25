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
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        data-cfasync="false"
      ></script>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div
      dangerouslySetInnerHTML={{
        __html: `
            <script>
              window.cookieconsent.initialise({
                "palette": {
                  "popup": {
                    "background": "#ffffff"
                  },
                  "button": {
                    "background": "#000000"
                  }
                },
                "theme": "classic",
                "position": "bottom-right"
              });
            </script>
        `,
      }}
    />
  </>
);

export default Head;
