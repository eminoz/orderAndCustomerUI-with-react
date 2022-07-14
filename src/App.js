import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, BrowserRouter, Link } from "react-router-dom";
import LoginForm from "./components/pages/user/loginPage";
import SignupForm from "./components/pages/user/signupPage";
import ProductList from "./components/shared/ProductList";

import { userActions } from "./store/user-slice";
export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    dispatch(userActions.fetchUserFromLocal());
  }, [isAuth, dispatch]);

  console.log(isAuth);
  return (
    <BrowserRouter>
      <nav>
        <h1> Order List </h1>
        <Link to={"/"}> home</Link>
        <Link to={"/login"}> login</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={!isAuth ? <Navigate to="/login" /> : <ProductList />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}
