import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <div className="bg-white">
      <section className="bg-black text-white p-4 flex justify-between items-center">
        <div>럭셔리 쇼핑이 참 쉽다, 발랑</div>
        <div>Online luxury boutique</div>

        <div className=" text-white py-2 px-4 ">
          {isLoggedIn ? (
            <div onClick={logOut}>로그아웃</div>
          ) : (
            <div>
              <Link to="/sign-in">로그인</Link>
            </div>
          )}

          <Link to="/my-page">마이페이지</Link>
        </div>
      </section>
      <section className="p-4 flex justify-center items-center">
        <header className="text-black font-bold text-center text-6xl">
          <Link to="/">BALAANG</Link>
        </header>

        {isLoggedIn ? (
          <Link to="/cart">
            <button className="bg-black text-white rounded py-2 px-4 ml-4">
              장바구니
            </button>
          </Link>
        ) : (
          <Link to="/sign-in">
            <button className="bg-black text-white rounded py-2 px-4 ml-4">
              장바구니
            </button>
          </Link>
        )}
      </section>
    </div>

    /* <section>
        <ul className="flex justify-center">
          <li> NEW IN</li>
          <li> 의류</li>
          <li> 슈즈</li>
          <li> 가방</li>
          <li> 액세서리</li>
          <li> 주얼리</li>
          <li> SALE</li>
          <li> DESIGNERS</li>
        </ul>
      </section> */
  );
}

export default Header;
