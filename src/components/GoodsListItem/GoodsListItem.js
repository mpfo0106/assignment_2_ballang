import React from "react";
import { Link } from "react-router-dom";

function GoodsListItem({ good }) {
  // 상세정보로
  return (
    <Link to={`/goods/${good.id}`}>
      <img src={good.img_i} alt={good.goodsnm} />
      <h6>{good.goodsnm}</h6>
    </Link>
  );
}

export default GoodsListItem;
