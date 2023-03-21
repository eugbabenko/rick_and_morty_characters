export const getCharactersList = async (url, query = '') => {
  const data = await fetch(`${url}?${query}`);
  const result = await data.json();
  return result;
};

export const getCharacterByID = async (url, id) => {
  const data = await fetch(`${url}${id}`);
  const result = await data.json();
  return result;
};
