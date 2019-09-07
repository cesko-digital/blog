import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../../data/site-config";
import "./index.css";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

const Logo = styled.img`
  width: 134px;
  height: 27px;
`;

const ToolbarLink = styled.a`
  vertical-align: middle;
  color: #24211d;
  padding: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: min-content;
  &:hover {
    transition: all 200ms ease-in-out;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    padding: 0 25px 10px 0;
  }
`;

const NavigationBar = styled(Row)`
  padding-top: 10px;
`;

const ResponsiveCenterCol = styled(Col)`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const ResponsiveCenterRow = styled.div`
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

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <NavigationBar align={"center"}>
          <ResponsiveCenterCol xs={12} md={3}>
            <Link to={"/"}>
              <Logo src={"/logos/logo.svg"} alt={"Česko.Digital Logo"} />
            </Link>
          </ResponsiveCenterCol>
          <Col xs={12} md={9}>
            <ResponsiveCenterRow>
              <ToolbarLink href="/">Blog</ToolbarLink>
              <ToolbarLink href="https://cesko.digital/#idea">
                Naše Vize
              </ToolbarLink>
              <ToolbarLink href="https://cesko.digital/#team">
                Kdo jsme
              </ToolbarLink>
              <ToolbarLink href="https://cesko.digital/#media">
                Pro média
              </ToolbarLink>
              <ToolbarLink href="https://cesko.digital/en.html">
                English
              </ToolbarLink>
            </ResponsiveCenterRow>
          </Col>
        </NavigationBar>

        {children}
      </Container>
    );
  }
}
