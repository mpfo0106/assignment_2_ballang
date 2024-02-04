const getReserves = (member_price) => {
  return member_price * 0.01;
};

const isFreeShipping = (member_price) => {
  if (member_price >= 50000) {
    return "무료";
  } else {
    return "3000원";
  }
};
// const deliveryExpected = () => {
//   return getDate() + 30
// };

const calculator = {
  getReserves,
  isFreeShipping,
};

export default calculator;
