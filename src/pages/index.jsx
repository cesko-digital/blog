import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/post-listing';
import SEO from '../components/seo';
import config from '../../data/site-config';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(postEdge => {
    const node = postEdge.node;
    let author = node.frontmatter.author || { name: null };
    return {
      slug: node.fields.slug,
      tags: node.frontmatter.tags,
      author: author.name,
      cover: node.frontmatter.cover,
      description: node.frontmatter.description,
      title: node.frontmatter.title,
      date: node.fields.date,
      excerpt: node.excerpt,
      timeToRead: node.timeToRead,
    };
  });
  const news = data.allNews.edges.map(news => ({
    text: news.node.text,
    url: news.node.url,
  }));

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
    allMarkdownRemark(
      limit: 13
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            cover
            tags
            date
            author {
              id
              name
            }
          }
        }
      }
    }

    allNews(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          url
          text
        }
      }
    }
  }
`;
