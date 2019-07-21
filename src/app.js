import React from 'react';
import {Router} from '@reach/router'
import {Favorites, IssueList} from './containers';
import {Header} from './components';
import {IssuesContextProvider} from './context';

const App = () => {
  return (
    <>
      <Header/>
      <IssuesContextProvider>
        <Router>
          <IssueList path='/' repo='facebook/react'/>
          <Favorites path='/favorites'/>
        </Router>
      </IssuesContextProvider>
    </>
  );
};

export default App;
