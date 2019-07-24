import React, {useContext} from 'react';
import {Link} from '@reach/router'
import classnames from 'classnames';
import {IssuesContext} from "../../context";
import {Issue, List} from '../../components';
import commonContainerStyles from '../container.module.scss';

export const Favorites = () => {
  const {favorites} = useContext(IssuesContext);

  return (
    <div className={classnames('container', commonContainerStyles['issue-container'])}>

      {/* TITLE */}
      <h1>
        Favorites
      </h1>

      {/* LINK */}
      <nav>
        <Link to='/'>Issue List</Link>
      </nav>

      {/* LIST OF FAVORITES */}
      <List>
        {
          favorites.map((fav, index) => (
            <Issue
              key={`favorite-${fav.id}-${index}`}
              title={fav.title}
              id={fav.id}
              state={fav.state}
            />
          ))
        }
      </List>
    </div>
  );
};
