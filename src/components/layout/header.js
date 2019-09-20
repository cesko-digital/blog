import { Col, Container } from "react-grid-system";
import { Logo, NavigationBar, ResponsiveCenterCol, ResponsiveCenterRow, ToolbarLink } from "./styles";
import React from "react";
import PropTypes from "prop-types";
const Header = ({items}) => <header>
    <Container>
        <NavigationBar
            align={'center'}
            style={{marginLeft: 0, marginRight: 0}}
        >
            <ResponsiveCenterCol xs={12} md={3} style={{padding: 0}}>
                <Logo href={'https://cesko.digital'}/>
            </ResponsiveCenterCol>
            <Col xs={12} md={9} style={{padding: 0}}>
                <ResponsiveCenterRow>
                    {items.map((item, index) => (
                        <ToolbarLink
                            underline={item.underline}
                            key={index}
                            href={item.url}
                        >
                            {item.name}
                        </ToolbarLink>
                    ))}
                </ResponsiveCenterRow>
            </Col>
        </NavigationBar>
    </Container>
</header>

Header.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        bold: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired,
        underline: PropTypes.bool.isRequired,
    }),).isRequired,
};

Header.defaultProps = {

};

export default Header