import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1 className="text-center text-3xl bg-slate-500 p-3 text-yellow-50 font-semibold">
        Ecommerse-The Electronic Commerse Platform
      </h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      <Routes>
        <Route exact path="/">{<Home/>}</Route>
        <Route exact path="/about">{<About/>}</Route>
        <Route exact path="/contact">{<Contact/>}</Route>
        <Route exact path="/login">{<Login/>}</Route>
      </Routes>

      </Router>
    </>
  );
};

export default Navbar;
