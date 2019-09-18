import React from 'react';
import Post, { Padding } from './post';
import { Col, Container, Row } from 'react-grid-system';
import styled from "styled-components";
import News from "./news";



const PostListing = props => {
  const getPostList = () => {
    const postList = [];
    props.postEdges.forEach(postEdge => {
      let author = postEdge.node.frontmatter.author || { id: null }; // TODO
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        author: author.id,
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

  const news = [
    {
      text: 'Vláda schválila, že veškerý státní SW bude na GitHubu.',
      url: '/',
    },{
      text: 'Michal Bláha byl hostem podcastu Proti proudu. Poslechněte si jeho názory o e-govermentu.',
      url: '/',
    },
  ];
  const postList = getPostList();
  const firstPost = postList[0];
  const otherPosts = [
    ...postList.slice(1, postList.length),
    ...postList.slice(1, postList.length),
  ];
  return (
      <Container >
        <Row>
          <Col xs={12} md={8} style={{ padding: 10 }}>
            <Post
                description={firstPost.description}
                path={firstPost.path}
                title={firstPost.title}
                author={firstPost.author}
                cover={firstPost.cover}
                date={firstPost.date}
            />
          </Col>
          <Col xs={12} md={4} style={{ padding: 10 }}>
            <News items={news}/>
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
