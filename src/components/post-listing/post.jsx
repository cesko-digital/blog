import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  height: 100%;
`;

export const Padding = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
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
  font-size: 16px;
  line-height: 24px;
  height: 48px;
  -webkit-line-clamp: 2;
  display: block;
  display: -webkit-box;
  max-width: 100%;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* or 24px */

  margin: 13px 0 0;
  color: #000000;

  opacity: 0.75;
`;

const Button = styled.button`
  background: #ffffff;
  border: 2px solid #d3d3d2;
  box-sizing: border-box;
  border-radius: 23px;

  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px 16px 12px 16px;
`;

const Arrow = styled.img`
  margin-left: 7px;
  margin-right: 2px;
`;

const AuthorDate = styled.span`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

margin-bottom: 5px;
margin-top: 5px;
  text-align: right;
  color: #000000;
width: auto;
  opacity: 0.5;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
`;
const Post = ({ path, title, description, author, cover }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'black' }}>
      <Container>
        {cover && cover.publicURL ? (
          <img
            loading="lazy"
            width={'100%'}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            src={cover.publicURL}
          />
        ) : null}

        <Padding>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}

          <Row>
            <Button>
              Celý článek <Arrow src={'/icons/arrow.svg'}></Arrow>
            </Button>
            <AuthorDate>9. 8. 2019 • Petr Novak</AuthorDate>
          </Row>
        </Padding>
      </Container>
    </Link>
  );
};

export default Post;
