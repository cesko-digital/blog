import React from 'react';
import PropTypes from 'prop-types';
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
line-height: 160%;
/* or 24px */

border-bottom: 1px solid rgba(37, 110, 102, 0.25);
 padding-bottom: 3px;
color: #256E66;

`;

const TextContainer = styled.div`
margin-bottom: 5px;
margin-top: 5px;
`

const A =styled.a`
text-decoration: none;
`
const News = ({ items }) => (
  <Card>
    <Row>
      <TitleIcon src={'/icons/news.svg'} />
      <Title>Krátké aktuality</Title>
    </Row>
      <Scrollable>
          {items.map((item, index) => {
              return (
                  <A href={item.url} key={index}>
                      <Divider />
                      <Row2>
                          <ItemIcon src={'/icons/item_arrow.svg'} />
                          <TextContainer>

                              <Text>
                                  {item.text}
                              </Text>
                          </TextContainer>
                      </Row2>
                  </A>
              );
          })}
      </Scrollable>

  </Card>
);

News.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),),
};

News.defaultProps = {
    items: []
};

export default News;
