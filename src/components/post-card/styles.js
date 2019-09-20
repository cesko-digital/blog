import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  height: 100%;
`;

export const Padding = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
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

export const Description = styled.p`
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

  margin-top: 10px;
  color: #000000;

  opacity: 0.75;
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
