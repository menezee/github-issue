import React from 'react';
import PropTypes from 'prop-types';

export const Issue = ({title, id, state, onClick}) => (
  <li>
    <button onClick={onClick}>
      {id}
    </button> - {title} - {state}
  </li>
);

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Issue.defaultProps = {
  onClick: () => {},
};
