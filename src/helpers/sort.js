const sortByState = issueArr => issueArr.sort((issue) => issue.state === 'closed' ? 1 : -1);
const sortById = issueArr => issueArr.sort((issue1, issue2) => issue1.id > issue2.id ? 1 : -1);

const target = {
  state: sortByState,
  id: sortById,
};

const noOp = () => {};

const handler = {
  get: (obj, prop) => obj[prop] ? obj[prop] : noOp(),
}

export default new Proxy(target, handler)
