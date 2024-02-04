import React from "react";
import Page from "../../Page/Page";
import { useSelector } from "react-redux";

function CartPage() {
  const goods = useSelector((state) => state.goods);
  return (
    <Page>
      <h2 className="text-center text-4xl">쇼핑백</h2>
      <div>
        {goods.map((good, index) => {
          <div key={index} className="mb-4">
            <h4>{good.brandnm}</h4>
            <p>{good.goodsnm}</p>
            <p>가격: {good.price} 원</p>
          </div>;
        })}
      </div>
    </Page>
  );
}

export default CartPage;
