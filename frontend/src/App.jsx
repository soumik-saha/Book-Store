// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import { AuthProvider } from "./context/AuthContext";
import CustomerDashboard from "./components/Dashboard/CustomerDashboard";
import ShopkeeperDashboard from "./components/Dashboard/ShopkeeperDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import VendorDashboard from "./components/Dashboard/VendorDashboard";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard/customer" element={<CustomerDashboard />} />
        <Route path="dashboard/shopkeeper" element={<ShopkeeperDashboard />} />
        <Route path="dashboard/admin" element={<AdminDashboard />} />
        <Route path="dashboard/vendor" element={<VendorDashboard />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;