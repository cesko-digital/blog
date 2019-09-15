const {
  hasNodeIncorrectType,
  hasNodeNonCompleteFrontmatter,
  getPostSlug,
  GET_ALL_POST_SLUGS_QUERY,
  compareByDate
} = require("./src/helpers/node");

const path = require("path");
const moment = require("moment");
const siteConfig = require("./data/site-config");

const postNodes = [];

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (hasNodeIncorrectType(node) || hasNodeNonCompleteFrontmatter(node)) {
    return;
  }

  let postMoment = moment(node.frontmatter.date, siteConfig.dateFromFormat);
  if (!postMoment.isValid()) {
    return;
  }
  let slug = getPostSlug(node, postMoment);

  createNodeField({
    node,
    name: "date",
    value: postMoment.toISOString()
  });
  createNodeField({ node, name: "slug", value: slug });
  postNodes.push(node);
};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name !== "MarkdownRemark") {
    return;
  }

  const sortedNodes = postNodes.sort(compareByDate);
  for (let i = 0; i < sortedNodes.length; i += 1) {
    const nextID = i + 1 < sortedNodes.length ? i + 1 : 0;
    const prevID = i - 1 >= 0 ? i - 1 : sortedNodes.length - 1;
    const currNode = sortedNodes[i];
    const nextNode = sortedNodes[nextID];
    const prevNode = sortedNodes[prevID];
    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post/index.jsx");
    resolve(
      graphql(GET_ALL_POST_SLUGS_QUERY).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });
      })
    );
  });
};
