import React, {useContext} from 'react';
import {Link} from "@reach/router"
import {IssuesContext} from "../../context";
import {Issue, List} from '../../components';

export const Favorites = () => {
  const {favorites} = useContext(IssuesContext);

  return (
    <div className='container'>

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
