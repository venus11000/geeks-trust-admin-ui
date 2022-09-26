export const get = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
