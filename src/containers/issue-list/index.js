import React, {useState, useEffect, useContext} from 'react';
import { Link } from "@reach/router"
import styles from './issue-list.module.scss';
import {List, Issue, SortBy} from '../../components';
import {IssuesContext} from "../../context";
import getSortByFunctionFor from '../../helpers/sort';

export const IssueList = () => {
  const {favorites, setFavorites, issues, setIssues} = useContext(IssuesContext);
  const [sortBy, setSortBy] = useState(undefined);

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

      {/* TITLE */}
      <header>
        <h1>
          List of issues
        </h1>
      </header>

      <div className={styles.buttons__container}>

        {/* SORT BY */}
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

        {/* LINK */}
        <nav>
          <Link to="favorites">Favorites</Link>
        </nav>
      </div>

      {/* LIST OF ISSUES */}
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
    </>
  );
};
