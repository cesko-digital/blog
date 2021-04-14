import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Footer from './footer';
import { Content, Layout } from './styles';
import Header from './header';
import Head from './head';

const ITEMS = [
  {
    url: 'https://cesko.digital/projekty',
    name: 'Projekty',
    bold: false,
    underline: false,
  },
  {
    name: 'Blog',
    url: '/',
    bold: false,
    underline: true,
  },
  {
    url: 'https://www.darujme.cz/projekt/1203553',
    name: 'Přispět',
    bold: false,
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
    url: 'https://www.linkedin.com/company/cesko-digital/',
    name: 'LinkedIn',
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

const MainLayout = (props) => {
  const { children } = props;
  let navBarItems = ITEMS.slice(0, ITEMS.length - 4);
  return (
    <Layout>
      <Head />
      <Header items={navBarItems} />
      <Content>{children}</Content>
      <Footer items={ITEMS} />
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
