import React, { use, useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link, Navigate, NavLink, useLocation, useNavigate } from "react-router";
import "./Navbar.css";
import { Authcontext } from "../Context/Authcontext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(Authcontext);
  const navigate =useNavigate();


  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOut()
   navigate('/')
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li className="font-medium text-md mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-medium text-md  mr-2">
        <NavLink to="/marathons">Marathons</NavLink>
      </li>
      <li className="font-medium text-md  mr-2">
        <NavLink to="/addmarathon">Add Marathons</NavLink>
      </li>
      <li className="font-medium text-md  mr-2">
        <NavLink to="/mymarathonlist">My Marathons List</NavLink>
      </li>

      {user && (
        <li className="font-medium text-md  mr-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}

    </>
  );

  return (
    <div>
      <div className="navbar bg-base-400 shadow-sm w-11/12 mx-auto ">
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-2xl md:text-2xl text-md  font-bold">
            <span className="text-[#020079]">Marathon</span>
            <span className="text-[#020079]">Hub</span>
            <img
              className="lg:w-10 md:w-10 w-8 rounded-none"
              src="/logo/marathon_fav-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <div>
            <button onClick={changeTheme} className=" mr-3">
              {theme === "light" ? (
                <CiLight className="mt-2" size="35" />
              ) : (
                <MdDarkMode className="mt-2" size="35" />
              )}
            </button>
          </div>

          {user && (
            <div className="avatar ">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-1 mr-3">
                <img src={user.photoURL} />
              </div>
            </div>
          )}

          {user ? (
            <button
              className="btn text-white rounded-xl px-4 py-1 bg-[#020079]"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/regester"
                className="btn text-white rounded-xl px-4 py-1 bg-[#020079]"
              >
                Regester
              </Link>

              <Link
                to="/login"
                className="btn text-white rounded-xl px-4 py-1 bg-[#020079]"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
