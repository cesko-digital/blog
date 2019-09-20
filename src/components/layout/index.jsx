import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import config from '../../../data/site-config';
import './index.css';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Footer from './footer';

const Logo = styled.a`
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

const ToolbarLink = styled.a`
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

const NavigationBar = styled(Row)`
  padding-top: 10px;
  margin-bottom: 20px;
`;

const ResponsiveCenterCol = styled(Col)`
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

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled(Container)`
  flex: 1;
  max-width: 100%;
`;

const ITEMS = [
  {
    name: 'Blog',
    url: '/',
    bold: false,
    underline: true
  },
  {
    name: 'Naše vize',
    url: 'https://cesko.digital/#idea',
    bold: false,
    underline: false
  },
  {
    url: 'https://cesko.digital/#team',
    name: 'Kdo jsme',
    bold: false,
    underline: false
  },
  {
    url: 'https://cesko.digital/#media',
    name: 'Pro média',
    bold: false,
    underline: false
  },
  {
    url: 'https://slack.cesko.digital/',
    name: 'Přidej se k Nám',
    bold: true,
    underline: false
  },
  {
    url: 'https://www.facebook.com/cesko.digital',
    name: 'Facebook',
    bold: true,
    underline: false
  },
  {
    url: 'https://twitter.com/CeskoDigital',
    name: 'Twitter',
    bold: true,
    underline: false
  },
  {
    url: 'http://github.com/cesko-digital',
    name: 'Github',
    bold: true,
    underline: false
  },
];

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    let navBarItems = ITEMS.slice(0, ITEMS.length - 4);
    return (
      <Layout>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <header>
          <Container >
            <NavigationBar
              align={'center'}
              style={{ marginLeft: 0, marginRight: 0 }}
            >
              <ResponsiveCenterCol xs={12} md={3} style={{ padding: 0 }}>
                <Logo href={'https://cesko.digital'} />
              </ResponsiveCenterCol>
              <Col xs={12} md={9} style={{padding: 0}}>
                <ResponsiveCenterRow>
                  {navBarItems.map((item, index) => {
                    return (
                      <ToolbarLink underline={item.underline} key={index} href={item.url}>
                        {item.name}
                      </ToolbarLink>
                    );
                  })}
                </ResponsiveCenterRow>
              </Col>
            </NavigationBar>
          </Container>
        </header>
        <Content>{children}</Content>
        <Footer items={ITEMS} />
      </Layout>
    );
  }
}
