const sortBy = type => issueArr => issueArr.sort(type);

const closed = ({state}) => state === 'closed' ? -1 : 1;
const open = ({state}) => state === 'open' ? -1 : 1;

const idAsc = ({id: id1}, {id: id2}) => id1 > id2 ? 1 : -1;
const idDesc = ({id: id1}, {id: id2}) => id1 > id2 ? -1 : 1;

const target = {
  state: {
    closed: sortBy(closed),
    open: sortBy(open),
  },
  id: {
    asc: sortBy(idAsc),
    desc: sortBy(idDesc),
  },
};

const noOp = () => {};

const handler = {
  get: (obj, prop) => obj[prop] ? obj[prop] : noOp(),
};

export default new Proxy(target, handler)
