
const getXFilesAll = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`, {
  })
    .then(res => res.json());
};


export { getXFilesAll };
