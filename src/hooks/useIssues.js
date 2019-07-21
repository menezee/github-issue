import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Git from '../clients/git';
import {issuesAdapter} from '../adapters';

export const useIssues = repo => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    (async () => {
      const rawIssues = await Git.getIssues(repo);
      const adaptedIssues = issuesAdapter(rawIssues);

      setIssues(adaptedIssues);
    })()
  }, [repo]);

  return issues;
};

useIssues.propTypes = {
  repo: PropTypes.string.isRequired,
};
