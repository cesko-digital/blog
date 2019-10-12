import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';
import config from '../../../data/site-config';
import '../b16-tomorrow-dark.css';
import './index.css';
import { Col, Row } from 'react-grid-system';
import MainLayout from '../../components/layout';
import PostCard from '../../components/post-card';
import { edgeToPost } from '../../components/post-card/helpers';
import NewsCard from '../../components/news-card';
import { edgeToNews } from '../../components/news-card/helpers';
import Post from '../../components/post';

const PostTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  const otherPosts = data.allMarkdownRemark.edges.map(edgeToPost);
  let news = data.allNews.edges.map(edgeToNews);


  return (
    <MainLayout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Row>
        <Col xs={12} lg={8} style={{ padding: 10, paddingBottom: 30 }}>
          <Post
            langVersion={post.langVersion}
            lang={post.lang}
            description={post.description}
            title={post.title}
            author={post.author}
            cover={post.cover}
            date={data.markdownRemark.fields.date}
            html={postNode.html}
          />
        </Col>
        <Col xs={12} lg={4} style={{ padding: 10, paddingBottom: 30 }}>
          <NewsCard items={news} />
        </Col>
      </Row>
      <Row>
        {otherPosts.map(post => (
          <Col
            md={6}
            lg={4}
            xs={12}
            key={post.title}
            style={{ padding: 10, paddingBottom: 15 }}
          >
            <PostCard
              description={post.description}
              slug={post.slug}
              title={post.title}
              date={post.date}
              author={post.author}
            />
          </Col>
        ))}
      </Row>
    </MainLayout>
  );
};
export default PostTemplate;

// TODO - Filter first article
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        description
        date
        title
        category
        tags
        cover
        lang
        author {
          id
          name
          email
        }
        langVersion {
          en
          cs
        }
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { fields: { slug: { ne: $slug } } }
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

    allNews(
      limit: 3
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          url
          text
        }
      }
    }
  }
`;
