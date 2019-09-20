import styled from "styled-components";
import { Col, Container, Row } from "react-grid-system";

export const Logo = styled.a`
  display: inline-block;
  width: 134px;
  height: 27px;
  background: url('/logos/logo.svg');
  padding: 0 !important;
color: #1a2c29;
  &__inner {
    display: none;
  }
  
  &:hover {
    transition: all 200ms ease-in-out;
    opacity: 0.6;
  }
`;

export const ToolbarLink = styled.a`
  vertical-align: middle;
  color: #24211d;
  margin: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: min-content;
  
  
  ${props => props.underline ? 'border-bottom: solid 1px rgba(0,0,0,0.5);' : ''}
  
  &:hover {
    transition: all 200ms ease-in-out;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    margin: 0 25px 10px 0;
  }
`;

export const NavigationBar = styled(Row)`
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const ResponsiveCenterCol = styled(Col)`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

 export const ResponsiveCenterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: normal;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: flex-start;
    border-bottom: #1d1f21 solid 1px;
  }
`;

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Content = styled(Container)`
  flex: 1;
  max-width: 100%;
`;

export const StyledFooter = styled.footer`
  margin-top: 20px;
  background: #202d33;
  padding: 30px;
`;

export const FooterLink = styled.a`
  vertical-align: middle;

  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  white-space: nowrap;
  width: min-content;
  &:hover {
    transition: all 200ms ease-in-out;
    opacity: 0.6;
  }

  ${props => (props.bold ? 'font-weight: bold;' : '')}
`;

export const ToolbarItem = styled.div`
  padding: 20px;
`;
