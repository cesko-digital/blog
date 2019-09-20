import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';
import config from '../../../data/site-config';
import '../b16-tomorrow-dark.css';
import './index.css';
import { Col, Row } from 'react-grid-system';
import MainLayout from '../../components/layout';
import Post from './post';
import News from '../../components/post-listing/news';
import PostCard from '../../components/post-card';
import { edgeToPost } from '../../components/post-card/helpers';

const PostTemplate = props => {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }

  const otherPosts = props.data.allMarkdownRemark.edges.map(edgeToPost);
  return (
    <MainLayout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Row>
        <Col xs={12} lg={8} style={{ padding: 10, paddingBottom: 30 }}>
          <Post
            description={post.description}
            path={post.path}
            title={post.title}
            author={post.author.name}
            cover={post.cover}
            date={props.data.markdownRemark.fields.date}
            html={postNode.html}
          />
        </Col>
        <Col xs={12} lg={4} style={{ padding: 10, paddingBottom: 30 }}>
          <News
            items={props.data.allNews.edges.map(postEdge => {
              return {
                text: postEdge.node.text,
                url: postEdge.node.url,
              };
            })}
          />
        </Col>
      </Row>
      <Row>
        {/* Your post list here. */
        otherPosts.map(post => (
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
        author {
          id
          name
          bio
          twitter
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
