import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-grid-system';
import { CookiesNote, FooterLink, StyledFooter, ToolbarItem } from './styles';

const Footer = ({ items }) => {
  return (
    <StyledFooter>
      <Container>
        <Row justify={'center'}>
          {items.map((item, index) => (
            <ToolbarItem key={index}>
              <FooterLink bold={item.bold} href={item.url}>
                {item.name}
              </FooterLink>
            </ToolbarItem>
          ))}
        </Row>
        <Row justify={'center'}>
          <CookiesNote>
            Tento web používá k poskytování služeb a analýze návštěvnosti
            soubory cookie. Používáním tohoto webu s tím souhlasíte.
          </CookiesNote>
        </Row>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bold: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired,
      underline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

Footer.defaultProps = {};

export default Footer;
