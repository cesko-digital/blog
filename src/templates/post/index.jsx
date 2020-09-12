import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SEO from 'components/seo';
import config from '@data/site-config';
import MainLayout from 'components/layout';
import PostCard from 'components/post-card';
import { edgeToPost } from 'components/post-card/helpers';
import PressCard from 'components/press-card';
import Post from 'components/post';
import { MainPost, Post as PostContainer, Press, Row } from 'components/post-listing/styles';
import { PostNodePropTypes } from 'pages';

const PostTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  const otherPosts = data.allMarkdownRemark.edges.map(edgeToPost);
  const press = data.press.edges.map(edgeToPost);

  return (
    <MainLayout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Row>
        <MainPost>
          <Post
            langVersion={post.langVersion}
            lang={post.lang}
            description={post.description}
            title={post.title}
            author={post.author}
            cover={post.cover}
            date={data.markdownRemark.fields.date}
            html={postNode.html}
            category={post.category}
          />
        </MainPost>
        <Press>
          <PressCard items={press} />
        </Press>
        {otherPosts.map((post) => (
          <PostContainer key={post.slug}>
            <PostCard
              description={post.description}
              slug={post.slug}
              title={post.title}
              date={post.date}
              author={post.author}
              category={post.category}
            />
          </PostContainer>
        ))}
      </Row>
    </MainLayout>
  );
};

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
  data: PostNodePropTypes.isRequired,
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
        slug
        date
        category
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { fields: { slug: { ne: $slug }, category: { eq: "blog" } }, frontmatter: { lang: { in: ["cs", null] } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          ...PostCardData
        }
      }
    }

    press: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] } }
        fields: { featured: { in: [false, null] }, category: { eq: "press" } }
      }
    ) {
      edges {
        node {
          ...PostCardData
        }
      }
    }
  }
`;
