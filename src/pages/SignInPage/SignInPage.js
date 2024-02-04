import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { Navigate, useNavigate } from "react-router-dom";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("udemy");
  const [password, setPassword] = useState("udemy");
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (username === "udemy" && password === "udemy") {
      signIn();
      navigate("/");
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>로그인 성공</div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력해 주세요"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
          />

          <button onClick={handleClickSignIn}>로그인 하기</button>
        </form>
      )}
    </div>
  );
}

export default SignInPage;
