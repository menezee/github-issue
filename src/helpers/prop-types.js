import PropTypes from 'prop-types';

const elementOf = Type => PropTypes.shape({
  type: PropTypes.oneOf([Type])
});

export default {
  elementOf,
};
