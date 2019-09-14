import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(10, 10, 10, 0.07);
  border-radius: 14px;
  padding: 20px;
  max-height: 685px;
  
`;

const Scrollable = styled.div`
overflow: scroll;
max-height: 600px;
`

const Title = styled.h2`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */

  color: #000000;
  margin: 0;
  opacity: 0.75;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin-bottom: 15px;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const TitleIcon = styled.img`
  margin-right: 10px;
`;

const ItemIcon = styled.img`
  margin-right: 10px;
  margin-top: 11px;
  
  margin-left: 10px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;

const Text = styled.span`
font-family: Work Sans, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;
/* or 24px */

text-decoration-line: underline;

color: #256E66;
margin-bottom: 5px;
margin-top: 5px;
width: auto;
`;
const News = ({ items }) => (
  <Card>
    <Row>
      <TitleIcon src={'/icons/news.svg'} />
      <Title>Krátké aktuality</Title>
    </Row>
      <Scrollable>
          {items.map((item, index) => {
              return (
                  <Link to={item.url} key={index}>
                      <Divider />
                      <Row2>
                          <ItemIcon src={'/icons/item_arrow.svg'} />
                          <Text>
                              {item.text}
                          </Text>
                      </Row2>
                  </Link>
              );
          })}
      </Scrollable>

  </Card>
);

News.propTypes = {};

News.defaultProps = {};

export default News;
