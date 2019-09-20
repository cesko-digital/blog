import React from 'react';
import Post  from './post';
import { Col, Row } from 'react-grid-system';
import News from './news';
import PropTypes from 'prop-types';

const PostListing = ({ posts, news }) => {
  const firstPost = posts[0];
  const otherPosts = [...posts.slice(1, posts.length)];
  return (
    <>
      <Row>
        <Col xs={12} lg={8} style={{ padding: 10 }}>
          <Post
            description={firstPost.description}
            slug={firstPost.slug}
            title={firstPost.title}
            author={firstPost.author}
            cover={firstPost.cover}
            date={firstPost.date}
          />
        </Col>
        <Col xs={12} lg={4} style={{ padding: 10 }}>
          <News items={news} />
        </Col>

        {otherPosts.map(post => (
          <Col md={6} lg={4} xs={12} key={post.title} style={{ padding: 10 }}>
            <Post
              description={post.description}
              slug={post.slug}
              title={post.title}
              date={post.date}
              author={post.author}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

PostListing.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostListing;
