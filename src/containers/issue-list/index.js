import React, {useState, useEffect, useContext} from 'react';
import { Link } from "@reach/router"
import styles from './issue-list.module.scss';
import {List, Issue, Dropdown} from '../../components';
import {IssuesContext} from "../../context";
// import getSortByFunctionFor from '../../helpers/sort';

export const IssueList = () => {
  const {favorites, setFavorites, issues, setIssues} = useContext(IssuesContext);
  const [sortBy, setSortBy] = useState(undefined);

  const addToFavorites = id => () => {
    const favoriteIssue = issues.find(issue => issue.id === id);
    setFavorites([...favorites, favoriteIssue]);
  };

  useEffect(() => {
    if (sortBy) {
      alert('TODO: review sort functions.')
    }
  }, [sortBy, issues, setIssues]);

  return (
    <>
      <header>
        {/* TITLE */}
        <h1>
          List of issues
        </h1>

        {/* LINK */}
        <nav>
          <Link to="favorites">Favorites</Link>
        </nav>
      </header>

      <div className={styles.buttons__container}>
        {/* SORT BY */}
        <Dropdown
          onChange={e => {setSortBy(e.target.value)}}
          label='sort by state'
        >
          <Dropdown.Option>
            asc
          </Dropdown.Option>
          <Dropdown.Option>
            desc
          </Dropdown.Option>
        </Dropdown>

        {/* SORT BY */}
        <Dropdown
          onChange={e => {setSortBy(e.target.value)}}
          label='sort by id'
        >
          <Dropdown.Option>
            asc
          </Dropdown.Option>
          <Dropdown.Option>
            desc
          </Dropdown.Option>
        </Dropdown>
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
