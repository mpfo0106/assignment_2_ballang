import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../Page/Page";
import { updateUserId } from "../../store/reducers/user.reducer";

function MyPage() {
  const userId = useSelector((state) => state.user.id);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userIdInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickUpdatUserId = () => {
    if (isLoggedIn) {
      const newId = userIdInputRef.current.value;
      dispatch(updateUserId(newId));
    }
  };
  return (
    <Page>
      <section>
        <h2 className="text-center text-4xl">마이 페이지</h2>
        {isLoggedIn && (
          <>
            <h3>아이디 수정</h3>
            <input ref={userIdInputRef} type="text" placeholder={userId} />
            <button onClick={handleClickUpdatUserId}>아이디 변경하기</button>
          </>
        )}
      </section>
    </Page>
  );
}

export default MyPage;
