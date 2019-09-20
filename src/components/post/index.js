import React from 'react';
import moment from 'moment';
import {
    Arrow, Author,
    AuthorDate,
    Button,
    Container,
    Description,
    Padding,
    Title,
} from './styles';
import PropTypes from "prop-types";
import PostCard from "../post-card";
import { DATE_FORMAT } from "../post-card/helpers";

const Post = ({ title, description, author, cover, date, html }) => {
  return (
    <Container>
      {cover ? (
        <img
          alt={`Cover článku ${title}`}
          loading="lazy"
          width={'100%'}
          style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          src={cover}
        />
      ) : null}

      <Padding>
        <AuthorDate>
            {moment(date).format(DATE_FORMAT)} • <Author href={`mailto:${author.email}`}>{author.name}</Author>
        </AuthorDate>
        <Title>{title}</Title>
        {description ? <Description>{description}</Description> : null}
        <div className={'content'} dangerouslySetInnerHTML={{ __html: html }} />
        <Button to={'/'}>
          <Arrow src={'/icons/arrow.svg'}></Arrow>
          Zpět na všechny články
        </Button>
      </Padding>
    </Container>
  );
};

PostCard.propTypes = {
    description: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}


export default Post;
