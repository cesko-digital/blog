import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
`;

export const Padding = styled.div`
  padding: 10px 40px 40px;
`;

const Title = styled.h1`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
line-height: 150%;
  /* identical to box height, or 36px */

  color: #000000;
  margin: 0;
  opacity: 0.75;
`;

const Description = styled.p`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
line-height: 150%;
/* or 30px */


color: #000000;

opacity: 0.75;
  display: block;
  display: -webkit-box;
  max-width: 100%;
  -webkit-box-orient: vertical;
  /* or 24px */

  margin-top: 10px;

`;




const AuthorDate = styled.div`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  margin-bottom: 10px;
  margin-top: 5px;
  color: #000000;
  width: auto;
  opacity: 0.5;
`;


const Post = ({ path, title, description, author, cover, date, html }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'black' }}>
      <Container>
        {cover && cover.publicURL ? (
          <img
            loading="lazy"
            width={'100%'}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            src={cover.publicURL + '?nf_resize=fit&w=720'}
          />
        ) : null}

        <Padding>
          <AuthorDate>
            {moment(date).format('D. M. Y')} • {author}
          </AuthorDate>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}
            <div className={"content"} dangerouslySetInnerHTML={{ __html: html }} />
        </Padding>
      </Container>
    </Link>
  );
};

export default Post;
