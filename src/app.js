import React, {useState, useEffect} from 'react';
import {useIssues} from './hooks';
import {List, Issue, SortBy} from './components';
import getSortByFunctionFor from './helpers/sort';
import styles from './app.module.scss';

const REPO = 'vmg/redcarpet';

const App = () => {
  const [sortBy, setSortBy] = useState();
  const [favorites, setFavorites] = useState([]);
  const [issues, setIssues] = useIssues(REPO);

  const addToFavorites = id => () => {
    const favoriteIssue = issues.find(issue => issue.id === id);
    setFavorites([...favorites, favoriteIssue]);
  };

  useEffect(() => {
    if (sortBy) {
      const sortFunction = getSortByFunctionFor[sortBy];
      setIssues(sortFunction(issues));
    }
  }, [sortBy, issues, setIssues]);

  return (
    <>
      <div className={styles.container__split}>
        <div className={styles.container__column}>
          <SortBy onChange={e => {
            setSortBy(e.target.value)
          }}>
            <SortBy.Option>
              id
            </SortBy.Option>
            <SortBy.Option>
              state
            </SortBy.Option>
          </SortBy>
          <List>
            {
              issues.map((issue, index) => (
                <Issue
                  key={`${issue.title}-${index}`}
                  title={issue.title}
                  id={issue.id}
                  state={issue.state}
                  onClick={addToFavorites(issue.id)}
                />
              ))
            }
          </List>
        </div>
        <div className={styles.container__column}>
          <h2>Favorites</h2>
          {
            favorites.map((issue, index) => (
              <Issue
                key={`favorite-${issue.title}-${index}`}
                title={issue.title}
                id={issue.id}
                state={issue.state}
                onClick={() => {
                }}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default App;
