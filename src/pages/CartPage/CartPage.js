import React from "react";
import Page from "../../Page/Page";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../store/reducers/cart.reducer";

function CartPage() {
  const goods = useSelector((state) => state.cart.goods);
  const dispatch = useDispatch();

  const handleClickRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <Page>
      <h2 className="text-center text-4xl">Shopping bag</h2>
      <ul className="grid grid-cols-4 gap-4">
        {goods.map((good, index) => (
          <li
            key={good.goodsno}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={good.img_i}
              alt={good.goodsnm}
              className="w-full h-auto mb-2"
            />
            <h4 className="font-bold text-lg mb-1">{good.brandnm_kr}</h4>
            <h6 className="text-sm font-light mb-1">{good.origin}</h6>
            <h6 className="text-sm font-semibold mt-3">{good.price} 원</h6>
            <button
              className="bg-black text-white rounded py-1 px-1 ml-1 "
              onClick={() => handleClickRemoveCart(good.id)}
            >
              장바구니에서 제거
            </button>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default CartPage;
