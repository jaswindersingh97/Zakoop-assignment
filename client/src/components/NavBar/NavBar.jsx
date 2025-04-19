import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token")
  console.log(user)
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const onLogout =() =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  const isAuthenticated = token && user;
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>🛒 Hyperlocal</Link>
      <div className={styles.navLinks}>
        <Link to="/">Stores</Link>
        {!isAuthenticated && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {isAuthenticated && (
          <>
            <Link to="/orders">Orders</Link>
            <Link to="/cart">Cart</Link>
            <div className={styles.profile} onClick={toggleDropdown}>
              <div className={styles.initials}>{getInitials(user?.name)}</div>
              {showDropdown && (
                <div className={styles.dropdown}>
                  <div><strong>{user?.name}</strong></div>
                  <div>{user?.email}</div>
                  <button onClick={() => { onLogout(); navigate("/login"); }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
