import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const Dashboard = () => {
  let isAuth = useSelector((state) => state.user.isAuth);

  console.log(isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? navigate("/") : navigate("/login");
  }, [isAuth, navigate]);

  return (
    <>
      <ProductList />
      <CategoryList />
    </>
  );
};

export default Dashboard;
