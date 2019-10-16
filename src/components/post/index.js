import React from 'react';
import moment from 'moment';
import {
  Arrow,
  Author,
  AuthorDate,
  Button,
  Container,
  Description,
  Padding,
  Title,
} from './styles';
import PropTypes from 'prop-types';
import PostCard from '../post-card';
import { DATE_FORMAT } from '../post-card/helpers';
import config from '../../../data/site-config';
import LangVersions from './lang-versions';

const Post = ({
  title,
  description,
  author,
  cover,
  date,
  html,
  langVersion,
  lang,
}) => (
  <Container lang={lang || config.siteDefaultLanguage}>
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
        {moment(date).format(DATE_FORMAT)} •{' '}
        <Author href={`mailto:${author.email}`}>{author.name}</Author>{' '}
        <LangVersions versions={langVersion} />
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

PostCard.propTypes = {
  description: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  langVersion: PropTypes.shape({
    en: PropTypes.string,
    cs: PropTypes.string,
  }),
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default Post;
