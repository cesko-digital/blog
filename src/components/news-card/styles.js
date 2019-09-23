import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  padding: 20px;
  max-height: 740px;
`;

export const Scrollable = styled.div`
  overflow: scroll;
  max-height: 630px;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin-bottom: 15px;
`;

export const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const TitleIcon = styled.img`
  margin-right: 10px;
  margin-left: 4px;
`;

export const ItemIcon = styled.img`
  margin-right: 10px;
  margin-top: 7px;

  margin-left: 3px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.span`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  /* or 24px */

  border-bottom: 1px solid rgba(37, 110, 102, 0.25);
  padding-bottom: 3px;
  color: #256e66;
  :hover {
    transition: all 200ms ease-in-out;
    opacity: 0.8;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const A = styled.a`
  text-decoration: none;
`;