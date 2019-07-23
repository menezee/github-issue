import React from 'react';
import classnames from 'classnames';
import styles from './header.module.scss';

export const Header = () => (
  <div className={classnames('text-center', 'py-3', styles.header)}>
    <h2 className='f3'>
      Git Issues
    </h2>
  </div>
);
