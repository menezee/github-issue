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
  children: PropTypes.oneOf(['asc', 'desc', '---']).isRequired,
  disabled: PropTypes.bool,
};

Option.defaultProps = {
  disabled: false,
};
