// import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <NavLink
              to="signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              SignUP
            </NavLink>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="products"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"} 
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="add"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"} 
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  AddProduct
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="update"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"} 
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  UpdateProduct
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="profile"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"} 
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="logout"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"} 
                          block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Logout
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
