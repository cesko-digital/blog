const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/site-config");

const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
      ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
        const dateA = moment(date1, siteConfig.dateFromFormat);
        const dateB = moment(date2, siteConfig.dateFromFormat);

        if (dateA.isBefore(dateB)) return 1;

        if (dateB.isBefore(dateA)) return -1;

        return 0;
      }
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 >= 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
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
}

function getPostSlug(node, date) {
  let slug;
  if (!node.frontmatter.slug) {
    slug = node.frontmatter.title;
  } else {
    slug = node.frontmatter.slug;
  }
  return `/${date.format("Y")}/${date.format("MM")}/${_.kebabCase(`${slug}`)}`;
}

function hasNodeIncorrectType(node) {
  return (
      !node ||
      !node.internal ||
      !node.internal.type ||
      node.internal.type !== "MarkdownRemark"
  );
}

function hasNodeNonCompleteFrontmatter(node) {
  return (
      !node.frontmatter ||
      !node.frontmatter.title ||
      !node.frontmatter.date ||
      !node.frontmatter.author
  );
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (hasNodeIncorrectType(node) || hasNodeNonCompleteFrontmatter(node)) {
    return;
  }

  let postDate = moment(node.frontmatter.date, siteConfig.dateFromFormat);
  if (!postDate.isValid()) {
    return;
  }
  let slug = getPostSlug(node, postDate);

  createNodeField({
    node,
    name: "date",
    value: postDate.toISOString()
  });
  createNodeField({ node, name: "slug", value: slug });
  postNodes.push(node);

};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === "MarkdownRemark") {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post/index.jsx");
    resolve(
        graphql(
            `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                    category
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
        ).then(result => {
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
