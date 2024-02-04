import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import ProductDetailPage from "./pages/ProductDetailPage";
import MyPage from "./pages/MyPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/sign-in" element={<SignInPage />} /> */}
      <Route path="/goods/:goodId" element={<ProductDetailPage />} />
      {/* <Route path="/cart" element={<CartPage />} />
      <Route path="/my-page" element={<MyPage />} /> */}
    </Routes>
  );
}

export default App;
