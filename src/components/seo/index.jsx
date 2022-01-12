import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import config from '@data/site-config';
import { PostNodePropTypes } from 'pages';

const SEO = ({ postNode, postPath, postSEO }) => {
  let title;
  let description;
  let image;
  let postURL;
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({ title } = postMeta);
    description = postMeta.description ? postMeta.description : postNode.excerpt;
    image = postMeta.cover || config.siteImage;
    postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteImage;
  }

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      }
    );
  }
  return (
    <>
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="https://blog.cesko.digital/rss.xml" />

        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={postSEO ? 'Obrázek článku ' + title : 'Obrázek blogu'} />
        <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.twitter ? config.twitter : ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  );
};

SEO.propTypes = {
  postSEO: PropTypes.bool,
  postPath: PropTypes.string,
  postNode: PostNodePropTypes.isRequired,
};

export default SEO;
