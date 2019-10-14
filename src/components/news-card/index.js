import React from 'react';
import PropTypes from 'prop-types';
import {
  A,
  Card,
  Divider,
  Row,
  Text,
  Title,
  TitleIcon,
} from './styles';

const NewsCard = ({ items }) => (
  <Card>
    <Row>
      <TitleIcon src={'/icons/news.svg'} />
      <Title>Krátké aktuality</Title>
    </Row>
    {items.map((item, index) => {
      return (
        <>
          <Divider />
          <A href={item.url} key={index}>
            <Text>{item.text}</Text>
          </A>
        </>
      );
    })}
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
