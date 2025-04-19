import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

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
