import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import SEO from "../../components/seo";
import config from "../../../data/site-config";
import "../b16-tomorrow-dark.css";
import "./index.css";
import { Col, Container, Row } from "react-grid-system"
import MainLayout from "../../components/layout"
import Post from "./post";
import Post2 from "../../components/post-listing/post";
import News from "../../components/post-listing/news";

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
    console.log(postNode.html);
    return (
      <MainLayout>
        <Container>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Container >
            <Row>
              <Col xs={12} md={8} style={{ padding: 10 }}>
                <Post
                    description={post.description}
                    path={post.path}
                    title={post.title}
                    author={post.author.name}
                    cover={post.cover}
                    date={this.props.data.markdownRemark.fields.date}
                    html={postNode.html}

                />
              </Col>
              <Col xs={12} md={4} style={{ padding: 10 }}>
                <News items={this.props.data.allNews.edges.map((postEdge) => {
                    return {
                        text: postEdge.node.text,
                        url: postEdge.node.url,
                    } 
                })}/>
              </Col>

              {/* Your post list here. */
                this.props.data.allMarkdownRemark.edges.map(postEdge => {
                    let author = postEdge.node.frontmatter.author || { name: null }; // TODO
                    const post = {
                        path: postEdge.node.fields.slug,
                        tags: postEdge.node.frontmatter.tags,
                        author: author.name,
                        cover: postEdge.node.frontmatter.cover,
                        description: postEdge.node.frontmatter.description,
                        title: postEdge.node.frontmatter.title,
                        date: postEdge.node.fields.date,
                        excerpt: postEdge.node.excerpt,
                        timeToRead: postEdge.node.timeToRead,
                    }
                    return (
                        <Col md={6} lg={4} xs={12} key={post.title} style={{padding: 10}}>
                            <Post2
                                description={post.description}
                                path={post.path}
                                title={post.title}
                                date={post.date}
                                author={post.author}
                            />
                        </Col>
                    );
                })}
            </Row>
          </Container>
        </Container>
      </MainLayout>
    );
  }
}

// TODO - Filter first article
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
              description
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
        allMarkdownRemark(
            limit: 3
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
                        cover {
                            publicURL
                        }
                        date
                        author {
                            id
                            name
                        }
                    }
                }
            }
        }

        allNews(sort:{ fields: [date], order: DESC} ) {
            edges {
                node {
                    url
                    text
                }
            }
        }
    }
`;
