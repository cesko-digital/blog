import React from 'react';
import PropTypes from 'prop-types';
import PostCard from "../post-card";
import NewsCard from "../news-card";
import { MainPost, News, Post, Row } from './styles';

const PostListing = ({ posts, news }) => {
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
        <News>
          <NewsCard items={news} />
        </News>

        {otherPosts.map(post => (
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
  news: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostListing;
