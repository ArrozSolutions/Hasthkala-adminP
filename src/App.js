import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Customers from './pages/Admin/Customers';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminCategory from './pages/Admin/AdminCategory';
import Inbox from './pages/Admin/Inbox';
import OurStaff from './pages/Admin/OurStaff';
import AddProducts from './pages/Admin/AddProducts';
import AddCategory from './pages/Admin/AddCategory';
import AdminUser from './pages/Admin/AdminUser';
import AdminHome from './pages/Home/AdminHome';
import AdminLogin from './pages/Login/AdminLogin';
import AdminCoupons from './pages/Admin/AdminCoupons';
import AddCoupons from './pages/Admin/AddCoupons';
import AdminAttributes from './pages/Admin/AdminAttributes';
import AddAttributes from './pages/Admin/AddAttributes';
import AdminGiftBox from './pages/Admin/AdminGiftBox';
import AddGiftBox from './pages/Admin/AddGiftBox';
import AdminGiftCard from './pages/Admin/AdminGiftCard';
import AddGiftCard from './pages/Admin/AddGiftCard';
import AdminSettings from './pages/Admin/Settings/AdminSettings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<AdminHome />} />
        <Route exact path={"/admin-dashboard"} element={<AdminDashboard />} />
        <Route exact path={"/admin-customers"} element={<Customers />} />
        <Route exact path={"/admin-orders"} element={<AdminOrders />} />
        <Route exact path={"/admin-products"} element={<AdminProducts />} />
        <Route exact path={"/admin-categories"} element={<AdminCategory />} />
        <Route exact path={"/admin-inbox"} element={<Inbox />} />
        <Route exact path={"/admin-settings"} element={<AdminSettings />} />
        <Route exact path={"/admin-staff"} element={<OurStaff />} />
        <Route exact path={"/admin-add-product"} element={<AddProducts />} />
        <Route exact path={"/admin-add-coupons"} element={<AddCoupons />} />
        <Route exact path={"/admin-add-attributes"} element={<AddAttributes />} />
        <Route exact path={"/admin-add-giftbox"} element={<AddGiftBox />} />
        <Route exact path={"/admin-add-giftcard"} element={<AddGiftCard />} />
        <Route exact path={"/admin-add-category"} element={<AddCategory />} />
        <Route exact path={"/admin-user-info/:id"} element={<AdminUser />} />
        <Route exact path={"/admin-login"} element={<AdminLogin />} />
        <Route exact path={"/admin-coupons"} element={<AdminCoupons />} />
        <Route exact path={"/admin-attributes"} element={<AdminAttributes />} />
        <Route exact path={"/admin-giftbox"} element={<AdminGiftBox />} />
        <Route exact path={"/admin-giftcard"} element={<AdminGiftCard />} />
      </Routes>
    </div>
  );
}

export default App;
