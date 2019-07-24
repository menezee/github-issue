import React, {useState, useEffect, useContext} from 'react';
import { Link } from '@reach/router'
import classnames from 'classnames';
import {List, Issue, Dropdown} from '../../components';
import {IssuesContext} from "../../context";
import sortFunctions from '../../helpers/sort';
import commonContainerStyles from '../container.module.scss';

export const IssueList = () => {
  const {favorites, setFavorites, issues, setIssues} = useContext(IssuesContext);
  const [sortBy, setSortBy] = useState([]);

  const addToFavorites = id => () => {
    const favoriteIssue = issues.find(issue => issue.id === id);
    setFavorites([...favorites, favoriteIssue]);
  };

  useEffect(() => {
    if (sortBy.length) {
      const [type, order] = sortBy;
      const sort = sortFunctions[type][order];
      setIssues(sort([...issues]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);


  return (
    <div className={classnames('container', commonContainerStyles['issue-container'])}>
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

      <div className='d-flex'>
        {/* SORT BY */}
        <Dropdown
          onChange={e => {setSortBy(['state', e.target.value])}}
          label='sort by state'
        >
          <Dropdown.Option>
            open
          </Dropdown.Option>
          <Dropdown.Option>
            closed
          </Dropdown.Option>
        </Dropdown>

        {/* SORT BY */}
        <Dropdown
          onChange={e => {setSortBy(['id', e.target.value])}}
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
    </div>
  );
};
