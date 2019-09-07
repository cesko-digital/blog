import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-grid-system';
import styled from 'styled-components';
import { ResponsiveCenterRow } from './index';

const StyledFooter = styled.footer`
  margin-top: 20px;
  background: #202d33;
  padding: 30px;
`;

const ToolbarLink = styled.a`
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

const ToolbarItem = styled.div`
  padding: 20px;
`;

const Footer = ({items}) => {


  return (
    <StyledFooter>
      <Container>
        <Row justify={"center"}>
          {items.map((item, index) => {
            return (
              <ToolbarItem key={index}>
                {' '}
                <ToolbarLink bold={item.bold} href={item.url}>
                  {item.name}
                </ToolbarLink>
              </ToolbarItem>
            );
          })}
        </Row>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
