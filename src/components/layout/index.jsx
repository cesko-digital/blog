import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../../data/site-config";
import "./index.css";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";


const Logo = styled.img`
padding: 10px;
height: 50px;
`;

const ToolbarLink = styled.a`
vertical-align: middle
`
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Row>
            <Col>

          <Link to={"/"}>
            <Logo src={"/logos/logo.svg"} alt={'Česko.Digital Logo'}/>
          </Link>
            </Col>
            <Col>

            <ToolbarLink href="https://cesko.digital">Kdo jsme?</ToolbarLink>
            </Col>
        </Row>

        {children}
      </Container>
    );
  }
}
