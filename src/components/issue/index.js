import React from 'react';
import PropTypes from 'prop-types';

export const Issue = ({title, id, state}) => (
  <li>
    {id} - {title} - {state}
  </li>
);

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};
