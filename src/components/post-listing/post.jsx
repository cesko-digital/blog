import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
background: white;
    border-radius: 10px;
    height: 97%;
    
`;

const Padding = styled.div`
padding: 20px;
`

const Post = ({ path, title, description, author, cover }) => {
  return (
      <Link to={path} style={{textDecoration: "none", color: "black"}}>
    <Container>
        {cover && cover.publicURL ?  <img width={'100%'} style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}} src={cover.publicURL}/> : null}

        <Padding>
            <h2>{title}</h2>
            <b>{author}</b>
            <p>{description}</p>
        </Padding>

    </Container>
      </Link>
  );
};

export default Post;
