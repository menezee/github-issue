import React from 'react';
import PropTypes from 'prop-types';

export const Option = ({children, disabled}) => (
  <option
    disabled={disabled}
    value={children}
  >
    {children}
  </option>
);


Option.propTypes = {
  children: PropTypes.oneOf(['id', 'state', '---']).isRequired,
  disabled: PropTypes.bool,
};

Option.defaultProps = {
  disabled: false,
};
