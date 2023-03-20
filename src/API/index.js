const getCharactersList = async (url, query = '') => {
  const data = await fetch(`${url}${query}`);
  const result = await data.json();
  return result;
};

export default getCharactersList;
