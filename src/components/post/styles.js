import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  background: #ffffff;
  border: 2px solid rgb(237, 237, 239);
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
  font-family: Cesko Digital, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  /* identical to box height, or 36px */

  color: #000000;
  margin: 0;
`;

export const Description = styled.p`
  font-family: Cesko Digital, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 150%;
  /* or 30px */

  color: #080831;

  opacity: 1;
  display: block;
  display: -webkit-box;
  max-width: 100%;
  -webkit-box-orient: vertical;
  /* or 24px */

  margin-top: 10px;
`;

export const AuthorDate = styled.div`
  font-family: Cesko Digital, sans-serif;
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
  box-sizing: border-box;
  border-radius: 8px;

  font-family: Cesko Digital, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height, or 14px */

  margin-top: 50px;
  text-decoration: none;
  width: 260px;
  display: flex;
  align-items: center;
  text-align: center;

  background-color:#0000ff;
  color: #ffffff;
  padding: 12px 16px 12px 16px;

  transition: all 200ms ease-in-out;
  :hover {
    background-color:#080831;
  }
`;

export const Content = styled.div`
  font-family: Cesko Digital, sans-serif;
  font-style: normal;

  /* or 26px */

  color: #000000;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #080831;
  }

  p,
  li {
    line-height: 26px;
  }

  ul,
  ol {
    padding-left: 1.2em;
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
    border-bottom: 2px solid rgba(0, 0, 255, 0.25);
    color: #0000ff;
    text-decoration: none;

    :hover {
      transition: all 200ms ease-in-out;
      border-bottom: none;
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
