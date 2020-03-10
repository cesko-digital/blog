import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
`;

export const Padding = styled.div`
  padding: 10px 40px 40px;

  @media (max-width: 768px) {
    padding: 10px 20px 20px;
  }
`;

export const Author = styled.a`
  text-decoration: none;
  color: #000000;
`;

export const Title = styled.h1`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  /* identical to box height, or 36px */

  color: #000000;
  margin: 0;
`;

export const Description = styled.p`
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

export const AuthorDate = styled.div`
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

export const Button = styled(Link)`
  background: #ffffff;
  border: 2px solid #d3d3d2;
  box-sizing: border-box;
  border-radius: 26px;

  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  margin-top: 50px;
  text-decoration: none;
  width: 240px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  padding: 12px 16px 12px 16px;

  transition: all 200ms ease-in-out;
  :hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Content = styled.div`
  font-family: Work Sans, sans-serif;
  font-style: normal;

  /* or 26px */

  color: #000000;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */

    color: #000000;
  }

  img {
    border-radius: 10px;
    max-width: 100%;
  }

  .picture-note {
    margin-top: -15px;
    margin-left: 5px;
    font-size: 16px;
    line-height: 150%;

    opacity: 0.5;
  }

  a {
    border-bottom: 1px solid rgba(37, 110, 102, 0.25);
    color: #256e66;
    text-decoration: none;

    :hover {
      transition: all 200ms ease-in-out;
      color: #226259;
    }

    :visited {
      color: #808080;
      border-bottom: 1px solid #808080;
    }
  }

  h2 {
    margin-top: 50px;
  }
  
  .volunteers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .volunteer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    width: 170px;
    text-align: center;
    
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      object-fit: cover;
    }
    
    .name {
    margin-top: 10px;
    margin-bottom: 5px;
    }
    
    .note {
      font-size: 14px;
      opacity: 0.5;
      
    }
   
  }
`;

export const Arrow = styled.img`
  margin-right: 10px;
`;
