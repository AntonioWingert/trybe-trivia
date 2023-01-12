const fetchApi = async (actualToken) => {
  const url = `https://opentdb.com/api.php?amount=5&token=${actualToken}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default fetchApi;
