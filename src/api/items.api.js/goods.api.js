const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getAllGoods = async () => {
  const response = await fetch(endpoint, options);
  const data = await response.json();
  console.log(data);
  return data;
};

const getGood = async (productId) => {
  const singleEndpoint = `${endpoint}/${productId}`;
  const response = await fetch(singleEndpoint, options);
  const data = await response.json();
  return data;
};

const goodsAPI = {
  getAllGoods,
  getGood,
};
export default goodsAPI;
