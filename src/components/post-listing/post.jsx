import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Post = ({ path, title, description, author, cover }) => {
  return (
    <Container>
      <Link to={path}>
        {cover && cover.publicURL ?  <img src={cover.publicURL}/> : null}
        <h2>{title}</h2>
        <p>{description}</p>
        <b>{author}</b>
      </Link>
    </Container>
  );
};

export default Post;
