import React, {createContext, useState, useEffect} from 'react';
import {useIssues} from '../hooks';

const INITIAL_MODEL = {
  issues: [],
  favorites: [],
  repo: 'facebook/react',
};

export const IssuesContext = createContext(INITIAL_MODEL);

export const IssuesContextProvider = ({children}) => {
  const [issues, setIssues] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [repo, setRepo] = useState('facebook/react');
  const issuesPayload = useIssues(repo);

  useEffect(() => {
    if(issuesPayload.length > 0) {
      setIssues(issuesPayload);
    }
  }, [issuesPayload]);

  return (
    <IssuesContext.Provider value={{
      issues, setIssues,
      favorites, setFavorites,
      repo, setRepo,
    }}>
      {children}
    </IssuesContext.Provider>
  );
};
