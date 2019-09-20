import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostListing from "../components/post-listing";
import SEO from "../components/seo";
import config from "../../data/site-config";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const news = this.props.data.allNews.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} news={news} />
        </div>
      </Layout>
    );
  }
}

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
