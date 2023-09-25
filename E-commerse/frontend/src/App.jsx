import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import AddProduct from "./components/Add";
import UpdateProduct from "./components/UpdateProduct";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      <Navbar />

      {/* <Outlet /> */}

      <Routes>
          <Route path="products" element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
