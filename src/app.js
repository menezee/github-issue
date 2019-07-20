import React, {useState, useEffect} from 'react';
import {useIssues} from './hooks';
import {List, Issue, SortBy} from './components';
import getSortByFunctionFor from './helpers/sort';

const REPO = 'vmg/redcarpet';

const App = () => {
  const [sortBy, setSortBy] = useState();
  const [issues, setIssues] = useIssues(REPO);

  useEffect(() => {
    if(sortBy) {
      const sortFunction = getSortByFunctionFor[sortBy];
      setIssues(sortFunction(issues));
    }
  }, [sortBy, issues, setIssues]);

  return (
    <>
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
            />
          ))
        }
      </List>
    </>
  );
};

export default App;
