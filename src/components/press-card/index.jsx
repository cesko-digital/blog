import React from 'react';
import moment from 'moment';
import { DATE_FORMAT } from 'components/post-card/helpers';
import PropTypes from 'prop-types';
import { A, Card, Divider, Row, Text, Title, TitleIcon } from './styles';

const PressCard = ({ items }) => (
  <Card>
    <Row>
      <TitleIcon src={'/icons/press-releases.svg'} />
      <Title>Tiskové zprávy</Title>
    </Row>
    {items.map((item, index) => (
      <div key={index}>
        <Divider />
        <A href={item.slug}>
          <Text>
            {moment(item.date).format(DATE_FORMAT)} • {item.title}
          </Text>
        </A>
      </div>
    ))}
  </Card>
);

PressCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

PressCard.defaultProps = {
  items: [],
};

export default PressCard;
