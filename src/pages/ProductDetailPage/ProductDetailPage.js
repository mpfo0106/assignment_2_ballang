import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/items.api.js/api";
import Page from "../../Page/Page";
import calculator from "../../utils/calculator";

function ProductDetailPage() {
  const { goodId } = useParams();
  const [good, setGood] = useState(null);

  useEffect(() => {
    api.goods.getGood(goodId).then((data) => setGood(data));
  }, [goodId]);

  if (good === null) return null;

  return (
    <Page>
      <section>
        {console.log(1)}
        <img src={good.img_i} alt={good.goodsnm} />
        <h2>{good.brandnm}</h2>
        <span>
          {good.goodsnm} | 발란코드[{good.id}]{" "}
        </span>
      </section>
      <hr />

      <section>
        <ul>
          <li>상품 금액</li> <span> {good.consumer}원</span>
          <li>판매가</li> <span>{good.standard_price}원 </span>
          <li>최대 혜택가</li> <span>{good.member_price}원</span>
          <li>적립금 최대</li>
          <span>{calculator.getReserves(good.member_price)}원</span>
          <li>무이자할부 최대 12개월</li>
          <li>배송비</li>
          <span>{calculator.isFreeShipping(good.member_price)}</span>
          <li>도착예정</li>
          <span>02/26</span>
          <span>도착예정</span>
        </ul>
      </section>
      <hr />
      <section>
        <h3>옵션 선택</h3>
        <select defaultValue="">
          <option value="" disabled>
            옵션 (옵션명)
          </option>

          {good.option.map((option, index) => (
            <option key={index} value={option.size}>
              {option.size} (재고 보유중)
            </option>
          ))}
        </select>

        <div></div>
        <button>BUY NOW</button>

        <button>장바구니</button>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
