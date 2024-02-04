import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import ProductDetailPage from "./pages/ProductDetailPage";
import MyPage from "./pages/MyPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/goods/:goodId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/my-page" element={<MyPage />} /> */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
