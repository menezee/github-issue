export const issuesAdapter = issues =>
  issues.map(issueAdapter);


const issueAdapter = issue => ({
  title: issue.title,
  state: issue.state,
  id: issue.id,
});
