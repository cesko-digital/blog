import React from "react";
import _ from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostTags from "../../components/post-tags";
import SEO from "../../components/seo";
import config from "../../../data/site-config";
import "../b16-tomorrow-dark.css";
import "./index.css";
import { Container } from "react-grid-system"
import MainLayout from "../../components/layout"

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <MainLayout>
        <Container>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <h3>
                {post.author.name}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
          </div>
        </Container>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                cover {
                    publicURL
                }
                date
                category
                tags
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
    }
`;
