import React from 'react';
import PropTypes from 'prop-types';
import {
  A,
  Card,
  Divider,
  ItemIcon,
  Row,
  Row2,
  Scrollable,
  Text,
  TextContainer,
  Title,
  TitleIcon,
} from './styles';

const NewsCard = ({ items }) => (
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
                <Text>{item.text}</Text>
              </TextContainer>
            </Row2>
          </A>
        );
      })}
    </Scrollable>
  </Card>
);

NewsCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

NewsCard.defaultProps = {
  items: [],
};

export default NewsCard;
