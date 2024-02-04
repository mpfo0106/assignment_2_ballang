import React from "react";
import GoodsListItem from "../GoodsListItem";

function GoodsList({ goods }) {
  return (
    <section>
      <h2>발란 아이템</h2>
      <ul>
        {goods.map((good) => (
          <li key={good.goodsno}>
            <GoodsListItem good={good} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GoodsList;
