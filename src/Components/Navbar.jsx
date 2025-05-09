import React from "react";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive && "text-blue-400"}`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => `${isActive && "text-blue-400"}`}>
          About
        </NavLink>
      </li>
      <li className="h-fit">
        <NavLink
          to="/cart"
          className={({ isActive }) => `${isActive && "text-blue-400"}`}>
          <IoMdCart />
        </NavLink>
      </li>
      <li className="h-fit">
        <NavLink
          to="/favorites"
          className={({ isActive }) => `${isActive && "text-blue-400"}`}>
          <MdBookmarkAdd />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="px-0 navbar max-w-[1200px] mx-auto w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden  pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pl-0">daisyUI</a>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
