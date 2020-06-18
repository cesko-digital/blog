const {
  hasNodeIncorrectType,
  hasNodeNonCompleteFrontmatter,
  getPostSlug,
  getPostFeatured,
  GET_ALL_POST_SLUGS_QUERY,
} = require('./src/helpers/node');

const path = require('path');
const moment = require('moment');
const siteConfig = require('./data/site-config');

const postNodes = [];

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (hasNodeIncorrectType(node) || hasNodeNonCompleteFrontmatter(node)) {
    return;
  }

  let postMoment = moment(node.frontmatter.date, siteConfig.dateFromFormat);
  if (!postMoment.isValid()) {
    return;
  }

  let slug = getPostSlug(node, postMoment);
  let featured = getPostFeatured(node);

  createNodeField({
    node,
    name: 'date',
    value: postMoment.toISOString(),
  });
  createNodeField({ node, name: 'slug', value: slug });
  createNodeField({ node, name: 'featured', value: featured });
  postNodes.push(node);
};
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post/index.jsx');
    resolve(
      graphql(GET_ALL_POST_SLUGS_QUERY).then((result) => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach((edge) => {
          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });
      })
    );
  });
};
