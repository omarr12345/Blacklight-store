import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Uploadproducts from "./components/upload_products/Upload_Products";
import Navbar from "./components/navbar/HomeNavbar";
import Buyingform from "./components/buyingform/Buyingform";
import Orders from "./components/orders/Orders";
import Products from "./components/products/Products";
import AdminRoute from "./components/adminroute/AdminRoute";
import AdminLogin from "./components/AdminLogin/AdminLogin";
function App() {
  return (
    <div className="App" dir="rtl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<Buyingform />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route exact path="/" element={<AdminRoute />}>
          <Route path="/admin/uploadproducts" element={<Uploadproducts />} />{" "}
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
