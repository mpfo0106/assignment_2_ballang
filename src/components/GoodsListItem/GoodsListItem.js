import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/reducers/cart.reducer";

function GoodsListItem({ good }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickAddCart = () => {
    if (isLoggedIn) {
      const updatedGood = { ...good };
      dispatch(addCart(updatedGood));
      const addCartConfirm = window.confirm(
        "해당 상품을 쇼핑백에 담았습니다. \n 쇼핑백으로 이동하시겠습니까?"
      );
      if (addCartConfirm) {
        navigate("/cart");
      }
    } else {
      navigate("/sign-in");
    }
  };
  return (
    <div>
      <Link to={`/goods/${good.id}`} className="block p-4 hover:bg-gray-100">
        <img
          src={good.img_i}
          alt={good.goodsnm}
          className="w-full h-auto mb-2"
        />
        <h4 className="font-bold text-lg mb-1">{good.brandnm_kr}</h4>
        <h6 className="text-sm font-light mb-1">{good.origin}</h6>
        <h6 className="text-sm font-semibold mt-3">{good.price} 원</h6>
      </Link>
      <button
        className="bg-black text-white rounded py-2 px-4 ml-4 "
        onClick={handleClickAddCart}
      >
        장바구니
      </button>
    </div>
  );
}

export default GoodsListItem;
