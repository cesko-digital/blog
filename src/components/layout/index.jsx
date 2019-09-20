import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/site-config';
import './index.css';
import { Col, Container } from 'react-grid-system';
import Footer from './footer';
import { Content, Layout, NavigationBar, ResponsiveCenterCol, ResponsiveCenterRow, ToolbarLink, } from './styles';
import Header from "./header";

const ITEMS = [
  {
    name: 'Blog',
    url: '/',
    bold: false,
    underline: true,
  },
  {
    name: 'Naše vize',
    url: 'https://cesko.digital/#idea',
    bold: false,
    underline: false,
  },
  {
    url: 'https://cesko.digital/#team',
    name: 'Kdo jsme',
    bold: false,
    underline: false,
  },
  {
    url: 'https://cesko.digital/#media',
    name: 'Pro média',
    bold: false,
    underline: false,
  },
  {
    url: 'https://slack.cesko.digital/',
    name: 'Přidej se k Nám',
    bold: true,
    underline: false,
  },
  {
    url: 'https://www.facebook.com/cesko.digital',
    name: 'Facebook',
    bold: true,
    underline: false,
  },
  {
    url: 'https://twitter.com/CeskoDigital',
    name: 'Twitter',
    bold: true,
    underline: false,
  },
  {
    url: 'http://github.com/cesko-digital',
    name: 'Github',
    bold: true,
    underline: false,
  },
];

const MainLayout = props => {
  const {children} = props;
  let navBarItems = ITEMS.slice(0, ITEMS.length - 4);
  return (
      <Layout>
        <Helmet>
          <meta name="description" content={config.siteDescription}/>
        </Helmet>
        <Header items={navBarItems}/>
        <Content>{children}</Content>
        <Footer items={ITEMS}/>
      </Layout>
  );
};
export default MainLayout
