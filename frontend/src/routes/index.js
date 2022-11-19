import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeView from "../view/Home";
import DashboardView from "../view/Dashboard";
import ProductView from "../view/Product";
import SalesView from "../view/Sales";
import PurchaseView from "../view/Purchase";
import UsersView from "../view/Users";
import DashRoutes from "./DashRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<HomeView />} />
      <Route element={<DashRoutes />}>
        <Route path="/user" element={<UsersView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/sales" element={<SalesView />} />
        <Route path="/purchase" element={<PurchaseView />} />
        <Route path="/product" element={<ProductView />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
