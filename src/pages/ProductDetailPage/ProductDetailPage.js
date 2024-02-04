import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/items.api.js/api";
import Page from "../../Page/Page";
import calculator from "../../utils/calculator";
import { useAuth } from "../../contexts/auth.context";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/reducers/cart.reducer";

function ProductDetailPage() {
  const { goodId } = useParams();
  const [good, setGood] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    api.goods.getGood(goodId).then((data) => setGood(data));
  }, [goodId]);

  if (good === null) return null;

  const handleClickAddCart = () => {
    if (isLoggedIn) {
      const updatedGood = { ...good, selectedOption };
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
    <Page>
      <section className="flex">
        <img src={good.img_i} alt={good.goodsnm} className="w-1/2" />
        <div className="ml-4 w-1/2">
          <h2 className="text-3xl font-bold mb-2">{good.brandnm}</h2>
          <span className="block mb-4">
            {good.goodsnm} | 발란코드[{good.id}]
          </span>
          <hr className="border-t-4 border-gray-600 my-6" />
          <ul className="space-y-5">
            <li>
              <strong className="mr-4 font-semibold">상품 금액</strong>
              <span className="font-bold">{good.consumer} 원</span>
            </li>
            <li>
              <strong className="mr-4 font-semibold">판매가</strong>
              <span>{good.standard_price} 원</span>
            </li>
            <li>
              <strong className="mr-4 font-semibold">최대 혜택가</strong>
              <span className="font-extrabold text-xl">
                {good.member_price} 원
              </span>
              <span className="text-red-600 ml-2 font-semibold">
                {good.sale_percent}%
              </span>
            </li>
            <li>
              <strong className="mr-4 font-semibold">적립금</strong>
              <span>{calculator.getReserves(good.member_price)}원</span>
            </li>
            <li>
              <strong className="mr-4 font-semibold">무이자할부</strong>
              <span>최대 12개월</span>
            </li>
            <li>
              <strong className="mr-4 font-semibold">배송비</strong>
              <span>{calculator.isFreeShipping(good.member_price)}</span>
            </li>
            <li>
              <strong> 도착예정</strong>
              <span>02/08 도착예정</span>
            </li>
          </ul>
          <hr className="border-t-2 border-gray-600 my-6" />
          <h3 className="font-bold">옵션 선택</h3>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="block w-full mt-2 mb-4 p-2 border border-gray-400 rounded"
          >
            <option value="" disabled>
              옵션 (옵션명)
            </option>
            {good.option.map((option, index) => (
              <option key={index} value={option.size}>
                {option.size} (재고 보유중)
              </option>
            ))}
          </select>
          <button className="bg-black text-white rounded py-2 px-4 w-full mb-2 ">
            BUY NOW
          </button>
          <button
            onClick={handleClickAddCart}
            className="bg-black text-white rounded py-2 px-4 w-full"
          >
            Add Cart
          </button>
        </div>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
