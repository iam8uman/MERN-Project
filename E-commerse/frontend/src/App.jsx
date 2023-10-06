import { Route, Routes } from "react-router-dom";
import Products from "./components/Product";
import AddProduct from "./components/Add";
import UpdateProduct from "./components/UpdateProduct";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Root from "./routes/root";

function App() {
  // localstorage bata data nikalna
  const data = localStorage.getItem("userInfo");

  return (
    <>
      {/* <Outlet vitra ko kura matra xa yeha /> */}
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="products" element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
          <Route path="profile" element={<Profile />} />
          
          {data ? (
            <Route path="logout" element={<Logout />} />
          ) : (
            <Route path="signup" element={<Signup />} />
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
