import React from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-grid-system"

const Post = ({path, title, description, author}) => {
    return <Link to={path} >
      <h2>
        {title}
      </h2>
      <p>{description}</p>
      <b>{author}</b>
    </Link>
}

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        author: postEdge.node.frontmatter.author.id,
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
    const postList = [...this.getPostList(), ...this.getPostList(), ...this.getPostList(), ...this.getPostList(), ...this.getPostList(), ];
    const firstPost = postList[0]
    const otherPosts = [...postList.slice(1, postList.length)]
    return (
      <Container>
        <Row>
          <Col>
            <Post description={firstPost.description} path={firstPost.path} title={firstPost.title} author={firstPost.author}/>
          </Col>
        </Row>
        <Row>
          {/* Your post list here. */
            otherPosts.map(post => (
              <Col md={6} xs={12} key={post.title}>
                  <Post description={post.description} path={post.path} title={post.title} author={post.author}/>
              </Col>

            ))}
        </Row>

      </Container>
    );
  }
}

export default PostListing;
