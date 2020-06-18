import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';
import config from '../../../data/site-config';
import MainLayout from '../../components/layout';
import PostCard from '../../components/post-card';
import { edgeToPost } from '../../components/post-card/helpers';
import NewsCard from '../../components/news-card';
import PressCard from '../../components/press-card';
import { edgeToNews } from '../../components/news-card/helpers';
import Post from '../../components/post';
import { MainPost, News, Press, Row, Post as PostContainer } from '../../components/post-listing/styles';

const PostTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  const otherPosts = data.allMarkdownRemark.edges.map(edgeToPost);
  let news = data.allNews.edges.map(edgeToNews);
  const press = data.press.edges.map(edgeToPost);

  const panel = press.length ? (<Press><PressCard items={press} /></Press>) : (<News><NewsCard items={news} /></News>);
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
        {panel}
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
        slug
        date
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: { fields: { slug: { ne: $slug } }, frontmatter: { lang: { in: ["cs", null] } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          ...PostCardData
        }
      }
    }

    press: allMarkdownRemark(
      limit: 15
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { lang: { in: ["cs", null] }, category: { eq: "press" } }
        fields: { featured: { in: [false, null] } }
      }
    ) {
      edges {
        node {
          ...PostCardData
        }
      }
    }

    allNews(limit: 3, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          url
          text
        }
      }
    }
  }
`;
