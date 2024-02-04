import React from "react";
import { Link } from "react-router-dom";

function GoodsListItem({ good }) {
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
      <button className="bg-black text-white rounded py-2 px-4 ml-4 ">
        장바구니
      </button>
    </div>
  );
}

export default GoodsListItem;
