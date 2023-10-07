import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Customers from './pages/Admin/Customers';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminCategory from './pages/Admin/AdminCategory';
import Inbox from './pages/Admin/Inbox';
import AdminSettings from './pages/Admin/AdminSettings';
import OurStaff from './pages/Admin/OurStaff';
import AddProducts from './pages/Admin/AddProducts';
import AddCategory from './pages/Admin/AddCategory';
import AdminUser from './pages/Admin/AdminUser';
import AdminHome from './pages/Home/AdminHome';
import AdminLogin from './pages/Login/AdminLogin';

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
        <Route exact path={"/admin-add-category"} element={<AddCategory />} />
        <Route exact path={"/admin-user-info/:id"} element={<AdminUser />} />
        <Route exact path={"/admin-login"} element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
