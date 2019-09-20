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
  border-radius: 23px;

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
`;

export const Arrow = styled.img`
  margin-right: 10px;
`;
