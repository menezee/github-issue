import React from 'react';
import PropTypes from 'prop-types';
import {Option} from './option';
import PropTypesHelper from '../../helpers/prop-types';

export const Dropdown = ({children, onChange, label}) => (
  <>
    <label htmlFor={label}>
      {label}
    </label>
    <select
      id={label}
      onChange={onChange}
      defaultValue='---'
    >
      <Option disabled>---</Option>
      {children}
    </select>
  </>
);


Dropdown.Option = Option;

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypesHelper.elementOf(Option)),
    PropTypesHelper.elementOf(Option),
  ]).isRequired,
  label: PropTypes.string.isRequired,
};
