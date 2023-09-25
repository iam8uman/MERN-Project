import { Routes, Route } from "react-router";
import App from "../App";
import Products from "../components/Product";
import AddProduct from "../components/Add";
import UpdateProduct from "../components/UpdateProduct";
import Profile from "../components/Profile";
import Login from "../components/Logout";

const root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products" element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default root;
