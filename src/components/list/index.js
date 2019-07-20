import React from 'react';
import PropTypes from 'prop-types';
import {Issue} from '../';

export const List = ({children}) => (
  <ul>
    {
      children
    }
  </ul>
);

List.propTypes = {
  children: PropTypes.arrayOf(Issue),
};
