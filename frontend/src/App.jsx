// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import CreateBookForVendor from "./components/Dashboard/Vendor/CreateBookForVendor";
import DeleteBookForVendor from "./components/Dashboard/Vendor/DeleteBookForVendor";
import EditBookForVendor from "./components/Dashboard/Vendor/EditBookForVendor";
import ShowBookForVendor from "./components/Dashboard/Vendor/ShowBookForVendor";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import { AuthProvider } from "./context/AuthContext";
import CustomerDashboard from "./components/Dashboard/CustomerDashboard";
import ShopkeeperDashboard from "./components/Dashboard/ShopkeeperDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import VendorDashboard from "./components/Dashboard/VendorDashboard";
import DeleteUser from './components/Dashboard/Admin/DeleteUser';
import ShowUser from './components/Dashboard/Admin/ShowUser';
import EditUser from './components/Dashboard/Admin/EditUser';
import Home from "./pages/Home";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/books" element={<Home />} /> */}
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/vendor/create" element={<CreateBookForVendor />} />
        <Route path="/books/vendor/delete/:id" element={<DeleteBookForVendor />} />
        <Route path="/books/vendor/details/:id" element={<ShowBookForVendor />} />
        <Route path="/books/vendor/edit/:id" element={<EditBookForVendor />} />
        <Route path="/users/delete/:id" element={<DeleteUser />} />
        <Route path="/users/details/:id" element={<ShowUser/>} />
        <Route path="/users/edit/:id" element={<EditUser/>} />
        <Route path="/" element={<Home />} />
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