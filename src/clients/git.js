const buildUrl = repo => `https://api.github.com/repos/${repo}/issues?state=all`;

const getIssues = async repo => {
  const URL = buildUrl(repo);

  const res = await fetch(URL);
  const body = await res.json();
  return body;
};

export default {
  getIssues,
}