import React from "react";
import GoodsListItem from "../GoodsListItem";

function GoodsList({ goods }) {
  return (
    <section>
      <ul className="grid grid-cols-4 gap-4">
        {goods.map((good) => (
          <li
            key={good.goodsno}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <GoodsListItem good={good} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GoodsList;
