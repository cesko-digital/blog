import React from 'react';
import PropTypes from 'prop-types';
import PostCard from 'components/post-card';
import PressCard from 'components/press-card';
import { MainPost, Post, Press, Row } from './styles';

const PostListing = ({ posts, press }) => {
  const firstPost = posts[0];
  const otherPosts = [...posts.slice(1, posts.length)];

  return (
    <>
      <Row>
        <MainPost>
          <PostCard
            description={firstPost.description}
            slug={firstPost.slug}
            title={firstPost.title}
            author={firstPost.author}
            cover={firstPost.cover}
            date={firstPost.date}
          />
        </MainPost>

        <Press>
          <PressCard items={press} />
        </Press>

        {otherPosts.map((post) => (
          <Post key={post.slug}>
            <PostCard
              description={post.description}
              slug={post.slug}
              title={post.title}
              date={post.date}
              author={post.author}
            />
          </Post>
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
  press: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      slug: PropTypes.string.isRequired,
      author: PropTypes.string,
      cover: PropTypes.string,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostListing;
