const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("../../data/site-config");

exports.hasNodeIncorrectType = function(node) {
  return (
    !node ||
    !node.internal ||
    !node.internal.type ||
    node.internal.type !== "MarkdownRemark"
  );
};

exports.getPostSlug = function(node, postMoment) {
  let slug;
  if (!node.frontmatter.slug) {
    slug = node.frontmatter.title;
  } else {
    slug = node.frontmatter.slug;
  }
  return `/${postMoment.format("Y")}/${postMoment.format("MM")}/${_.kebabCase(`${slug}`)}`;
};

exports.hasNodeNonCompleteFrontmatter = function (node) {
    return (
        !node.frontmatter ||
        !node.frontmatter.title ||
        !node.frontmatter.date ||
        !node.frontmatter.author
    );
}

exports.GET_ALL_POST_SLUGS_QUERY = `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `

exports.compareByDate = function ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }){
    const dateA = moment(date1, siteConfig.dateFromFormat);
    const dateB = moment(date2, siteConfig.dateFromFormat);

    if (dateA.isBefore(dateB)) return 1;

    if (dateB.isBefore(dateA)) return -1;

    return 0;
};