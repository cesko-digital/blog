import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import GatsbyImage from "gatsby-image";

const Container = styled.div``;

const Post = ({ path, title, description, author, cover }) => {
  return (
    <Container>
      <Link to={path}>
          {cover && cover.childImageSharp ?  <GatsbyImage sizes={cover.childImageSharp.sizes}/> : null}
        <h2>{title}</h2>
        <p>{description}</p>
        <b>{author}</b>
      </Link>
    </Container>
  );
};

export default Post;
