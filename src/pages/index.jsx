import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/post-listing';
import SEO from '../components/seo';
import config from '../../data/site-config';
import { edgeToPost } from '../components/post-card/helpers';
import { edgeToNews } from '../components/news-card/helpers';

const Index = ({ data }) => {
  const posts = [
    ...(data.featuredPosts || { edges: [] }).edges,
    ...data.otherPosts.edges,
  ]
    .slice(0, 13)
    .map(edgeToPost);

  const news = data.news.edges.map(edgeToNews);

  return (
    <Layout>
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        <PostListing posts={posts} news={news} />
      </div>
    </Layout>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    featuredPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] } }
        fields: { featured: { eq: true } }
      }
    ) {
      ...PostEdges
    }
    otherPosts: allMarkdownRemark(
      limit: 12
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] } }
        fields: { featured: { in: [false, null] } }
      }
    ) {
      ...PostEdges
    }

    news: allNews(limit: 3, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          url
          text
        }
      }
    }
  }
`;
