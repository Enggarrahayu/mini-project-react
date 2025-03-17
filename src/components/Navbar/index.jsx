import { useState } from "react";
import logo from '../../assets/img/logo.png'
import '../../assets/style/main.scss'
import {NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  return (
    <header className="bg-theme-light/50">
      <nav className="container flex items-center justify-between navbar">
        {/* Logo */}
        <div className="order-0">
          <a>
            <img src={logo} height="20" width="147" alt="logo" />
          </a>
        </div>

        {/* Navbar Toggler */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center order-1 cursor-pointer lg:hidden"
        >
          {isMenuOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              ></polygon>
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
          )}
        </button>

        {/* Navbar Menu */}
        <ul
          className={`navbar-nav order-2 w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="nav-item">
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/users" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/profile" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item mt-3.5 lg:hidden">
            <NavLink 
            to="/signin" 
            className="mt-8 btn btn-white"
          >
            Sign Up Now
            </NavLink>           
          </li>
        </ul>

        <div className="items-center order-1 hidden ml-auto md:order-2 md:ml-0 lg:flex">
        {isAuthenticated ? (
        <button onClick={handleLogout} className="btn btn-white btn-sm border-border">
          Logout
        </button>
          ) : (
            <NavLink 
            to="/login" 
            className="btn btn-white btn-sm"
          >
            Sign Up Now
            </NavLink>             
        )}
        </div>
      </nav>
    </header>
    
  );
}

export default Navbar