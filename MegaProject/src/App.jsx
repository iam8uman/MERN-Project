import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // state change garna use hunxa!

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-grey-400">
        <div className="w-full bg-gray-100">
          <Header />
          <main> Outlettt::<Outlet/></main>
          <Footer />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
