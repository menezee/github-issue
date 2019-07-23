import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Issue} from '../';
import PropTypesHelper from "../../helpers/prop-types";

export const List = ({children}) => (
  <div className={classnames('Box', 'mt-6')}>
    {children}
  </div>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypesHelper.elementOf(Issue)),
    PropTypesHelper.elementOf(Issue),
  ]),
};
