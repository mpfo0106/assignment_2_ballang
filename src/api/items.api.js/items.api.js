const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getItems = async () => {
  const endpoints = "http://192.168.1.14:3000/products";

  const response = await fetch(endpoints, options);
  const data = await response.json();
  const items = data.results;
  console.log(items);

  return items;
};

const itemsAPI = {
  getItems,
};

export default itemsAPI;
