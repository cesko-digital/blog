import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import PostListing from 'components/post-listing';
import SEO from 'components/seo';
import config from '@data/site-config';
import { edgeToPost } from 'components/post-card/helpers';

const Index = ({ data }) => {
  const posts = [...(data.featuredPosts || { edges: [] }).edges, ...data.otherPosts.edges].slice(0, 13).map(edgeToPost);

  const press = data.press.edges.map(edgeToPost);

  return (
    <Layout>
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        <PostListing posts={posts} press={press} />
      </div>
    </Layout>
  );
};

export const PostNodePropTypes = PropTypes.shape({
  frontmatter: PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
  fields: PropTypes.shape({
    slug: PropTypes.string,
    date: PropTypes.string,
  }),
});

const MarkdownRemarkPropTypes = PropTypes.shape({
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PostNodePropTypes.isRequired,
    }).isRequired
  ),
});

Index.propTypes = {
  data: PropTypes.shape({
    press: MarkdownRemarkPropTypes.isRequired,
    otherPosts: MarkdownRemarkPropTypes.isRequired,
    featuredPosts: MarkdownRemarkPropTypes,
  }).isRequired,
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    featuredPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] }, category: { eq: "blog" } }
        fields: { featured: { eq: true } }
      }
    ) {
      ...PostEdges
    }
    otherPosts: allMarkdownRemark(
      limit: 12
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] }, category: { eq: "blog" } }
        fields: { featured: { in: [false, null] } }
      }
    ) {
      ...PostEdges
    }

    press: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] }, category: { eq: "press" } }
        fields: { featured: { in: [false, null] } }
      }
    ) {
      ...PostEdges
    }
  }
`;
