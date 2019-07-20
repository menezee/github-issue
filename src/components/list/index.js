import React from 'react';
import PropTypes from 'prop-types';
import {Issue} from '../';
import PropTypesHelper from "../../helpers/prop-types";

export const List = ({children}) => (
  <ul>
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypesHelper.elementOf(Issue)),
    PropTypesHelper.elementOf(Issue),
  ]),
};