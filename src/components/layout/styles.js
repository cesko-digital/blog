import styled from 'styled-components';
import media from './media-queries';

export const Logo = styled.a`
  display: inline-block;
  width: 183px;
  height: 36px;
  background: url('/logos/logo.svg');
  background-size: contain;
  padding: 0 !important;
  color: #1a2c29;
  margin: 32px 20px 28px 0;
  &__inner {
    display: none;
  }

  ${media.tablet} {
    margin-left: 20px;
  }
`;

export const ToolbarLink = styled.a`
  vertical-align: middle;
  color: #080831;
  margin: 20px;
  font-size: 15px;
  text-decoration: underline;
  font-weight: 500;
  line-height: 1.3;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: min-content;
  ${(props) => (props.underline ? '' : '')}

  &:hover {
    transition: all 200ms ease-in-out;
    text-decoration: none;
  }

  ${media.tablet} {
    margin: 0 25px 10px 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-right: 20px;
  margin-left: 20px;
  ${media.tablet} {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: normal;
  justify-content: flex-end;
  ${media.tablet} {
    justify-content: flex-start;
    border-bottom: #1d1f21 solid 1px;
  }
`;

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 1200px;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
`;

export const StyledFooter = styled.footer`
  margin-top: 20px;
  background: #080831;
  padding: 30px;
  width: 100%;
  margin-left: -20px;
  margin-right: -20px;
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

  ${(props) => (props.bold ? 'font-weight: bold;' : '')}
`;

export const ToolbarItem = styled.div`
  padding: 20px;
`;

export const CookiesNote = styled.div`
  color: white;
  font-weight: 400;
  line-height: 1.4;
  font-size: 14px;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
