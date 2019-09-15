import React from "react";
import Post from './post'
import { Col, Container, Row } from "react-grid-system"



class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      let author = postEdge.node.frontmatter.author || {name: null}; // TODO
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        author: author.name,
        cover: postEdge.node.frontmatter.cover,
        description: postEdge.node.frontmatter.description,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    const firstPost = postList[0]
    const otherPosts = [...postList.slice(1, postList.length)]
    return (
      <Container>
        <Row>
          <Col>
            <Post description={firstPost.description} path={firstPost.path} title={firstPost.title} author={firstPost.author} cover={firstPost.cover}/>
          </Col>
        </Row>
        <Row>
          {/* Your post list here. */
            otherPosts.map(post => (
              <Col md={6} xs={12} key={post.title}>
                  <Post description={post.description} path={post.path} title={post.title} author={post.author} cover={post.cover}/>
              </Col>

            ))}
        </Row>

      </Container>
    );
  }
}

export default PostListing;
