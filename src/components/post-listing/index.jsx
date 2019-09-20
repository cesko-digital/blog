import React from 'react';
import Post, { Padding } from './post';
import { Col, Container, Row } from 'react-grid-system';
import styled from "styled-components";
import News from "./news";



const PostListing = props => {
  const getPostList = () => {
    const postList = [];
    props.postEdges.forEach(postEdge => {
      let author = postEdge.node.frontmatter.author || { name: null }; // TODO
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        author: author.name,
        cover: postEdge.node.frontmatter.cover,
        description: postEdge.node.frontmatter.description,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  const getNewsList = () => {
    const newsList = [];
    props.news.forEach(postEdge => {
      newsList.push({
        text: postEdge.node.text,
        url: postEdge.node.url,
      });
    });
    return newsList
  }


  const postList = getPostList();
  const newsList = getNewsList();
  const firstPost = postList[0];
  const otherPosts = [
    ...postList.slice(1, postList.length),
  ];
  return (
      <Container >
        <Row>
          <Col xs={12} lg={8} style={{ padding: 10 }}>
            <Post
                description={firstPost.description}
                path={firstPost.path}
                title={firstPost.title}
                author={firstPost.author}
                cover={firstPost.cover}
                date={firstPost.date}
            />
          </Col>
          <Col xs={12} lg={4} style={{ padding: 10 }}>
            <News items={newsList}/>
          </Col>

          {/* Your post list here. */
            otherPosts.map(post => (
                <Col md={6} lg={4} xs={12} key={post.title} style={{ padding: 10 }}>
                  <Post
                      description={post.description}
                      path={post.path}
                      title={post.title}
                      date={post.date}
                      author={post.author}
                  />
                </Col>
            ))}
        </Row>
      </Container>
  );
};

export default PostListing;
