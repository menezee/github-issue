import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ButtonPrimary, StateLabel, Label} from '@primer/components';
import styles from './issue.module.scss';

export const Issue = ({title, id, state, onClick}) => (
    <div className='Box-row d-flex flex-items-center'>
      <div className={classnames(styles['issue__info-container'])}>

        {/* TITLE */}
        <Label mr={2} className='Label--gray'>{id}</Label>
        <strong>- {title}</strong>
        <div className='text-small text-gray-light d-flex flex-items-center'>

          {/* STATE */}
          <StateLabel status={state === 'open' ? 'issueOpened' : 'issueClosed'} my={2} mr={1} />
          {state}
        </div>
      </div>

      {/* ADD TO FAVORITES */}
      <ButtonPrimary onClick={onClick} size='sm' className={styles.issue__button}>Add</ButtonPrimary>
    </div>
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
