const {
  hasNodeIncorrectType,
  hasNodeNonCompleteFrontmatter,
  getPostSlug,
  getPostFeatured,
  GET_PRESS_POST_SLUGS_QUERY,
  GET_BLOG_POST_SLUGS_QUERY,
} = require('./src/helpers/node');
const express= require('express');

const path = require('path');
const moment = require('moment');
const siteConfig = require('./data/site-config');

const postNodes = [];

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("static"))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (hasNodeIncorrectType(node) || hasNodeNonCompleteFrontmatter(node)) {
    return;
  }

  const postMoment = moment(node.frontmatter.date, siteConfig.dateFromFormat);
  if (!postMoment.isValid()) {
    return;
  }

  const slug = getPostSlug(node, postMoment);
  const featured = getPostFeatured(node);

  const parent = getNode(node.parent);
  if (parent) {
    createNodeField({
      node,
      name: 'category',
      value: parent.sourceInstanceName,
    });
  }

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
      Promise.all([graphql(GET_BLOG_POST_SLUGS_QUERY), graphql(GET_PRESS_POST_SLUGS_QUERY)]).then((results) => {
        results.forEach((result) => {
          if (result.errors) {
            console.error(result.errors);
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
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@data': path.resolve(__dirname, 'data'),
      },
    },
  });
};
