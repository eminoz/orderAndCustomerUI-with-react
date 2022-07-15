import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import LoginForm from "./components/pages/user/loginPage";
import SignupForm from "./components/pages/user/signupPage";
import Dashboard from "./components/shared/Home";

import { userActions } from "./store/user-slice";
export default function App() {
  const dispatch = useDispatch();

  let isAuth = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    dispatch(userActions.fetchUserFromLocal());
  }, [isAuth, dispatch]);
  return (
    <BrowserRouter>
      <nav>
        <h1> Order List </h1>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        {!isAuth && (
          <Link to={"/login"}>
            <Button>login</Button>
          </Link>
        )}

        {isAuth && (
          <Button
            onClick={() => {
              dispatch(userActions.logout());
            }}
          >
            logOut
          </Button>
        )}
      </nav>
      <Routes>
        <Route exat path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}
