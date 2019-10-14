import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  padding: 20px 20px 0 20px;
  max-height: 740px;
  height: 100%; 
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

export const TitleIcon = styled.img`
  margin-right: 10px;
  margin-left: 4px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.span`
  display: block;
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  /* or 24px */
  :hover {
    transition: all 200ms ease-in-out;
    opacity: 1;
  }
  :before {
    display: inline-block;
    content: '►';
    font-family: Work Sans, sans-serif;
    transform: rotate(0deg);
    font-size: 0.8em;
    margin-right: 5px;
    vertical-align: top;
    transition: 0.25s transform ease-out;
  }
`;

export const A = styled.a`
  display: block;
  padding: 1rem 20px;
  text-decoration: none;
  color: #2b2b2b;
  margin-left: -20px;
  margin-right: -20px;
  width: calc(100% + 40px);
  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: 100%;
    box-shadow: 0 4px 5px -5px #ffffff;
    transition: 0.25s box-shadow ease-out;
  }

  :hover:before {
    box-shadow: 0 4px 5px -5px #bebebe;
  }

  :hover ${Text}:before {
    transform: rotate(90deg);
  }
`;
