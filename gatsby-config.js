const urljoin = require('url-join');
const config = require('./data/site-config');

function getArticleWithDescription(edge) {
  return `<p>${edge.node.frontmatter.description}</p>` + edge.node.html;
}

function getAuthor(edge) {
  return `${edge.node.frontmatter.author.name} &lt;${edge.node.frontmatter.author.email}&gt;`;
}

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: config.siteImage,
      copyright: config.copyright,
    },
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `authors`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node, object, isArray }) => object.type,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/authors.yaml`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/authors.yaml`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'press',
        path: `${__dirname}/content/press/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
              linkImagesToOriginal: false,
            },
          },

          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: config.googleTagManagerId,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
    },

    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = 'GatsbyJS Advanced Starter';
          return ret;
        },
        query: `
          {
            site {
              siteMetadata {
                rssMetadata {
                  site_url
                  feed_url
                  title
                  description
                  image_url
                  copyright
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map((edge) => ({
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.frontmatter.description,
                url: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': getArticleWithDescription(edge) }, { author: getAuthor(edge) }],
              }));
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000
                  sort: { order: DESC, fields: [fields___date] }
                  filter: { fields: { category: { eq: "blog"} }, frontmatter: { lang: { in: ["cs", null] } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      timeToRead
                      fields {
                        slug
                        date
                        category
                      }
                      frontmatter {
                        title
                        date
                        description
                        tags
                        author {
                          name
                          email
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: config.siteRss,
          },
        ],
      },
    },
  ],
};
