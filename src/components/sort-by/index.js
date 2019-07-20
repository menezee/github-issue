import React from 'react';
import PropTypes from 'prop-types';
import {Option} from './option';
import PropTypesHelper from '../../helpers/prop-types';

export const SortBy = ({children, onChange}) => (
  <select
    onChange={onChange}
    defaultValue='---'
  >
    <Option disabled>---</Option>
    {children}
  </select>
);


SortBy.Option = Option;

SortBy.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypesHelper.elementOf(Option)),
    PropTypesHelper.elementOf(Option),
  ]).isRequired,
};
