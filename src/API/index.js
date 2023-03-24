import BASE_API_URL from '../settings';

export const getCharactersList = async (query) => {
  const data = await fetch(`${BASE_API_URL}?${query}`);
  const result = await data.json();
  return result;
};

export const getCharacterByID = async (id) => {
  const data = await fetch(`${BASE_API_URL}${id}`);
  const result = await data.json();
  return result;
};
