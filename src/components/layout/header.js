import { Content, Logo, NavigationBar, Links, ToolbarLink } from './styles';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ items }) => (
  <Content>
    <NavigationBar>
      <div>
        <Logo href={'https://cesko.digital'} />
      </div>
      <div>
        <Links>
          {items.map((item, index) => (
            <ToolbarLink underline={item.underline} key={index} href={item.url}>
              {item.name}
            </ToolbarLink>
          ))}
        </Links>
      </div>
    </NavigationBar>
  </Content>
);

Header.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bold: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired,
      underline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

Header.defaultProps = {};

export default Header;
