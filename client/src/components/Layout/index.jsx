import React from "react";
import styles from "./layout.module.css";
import NavBar from './../NavBar/NavBar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.container}>
      <NavBar isAuthenticated={true} user={{name:"jaswinder singh", email:"jaswinder@gmail.com"}}/>
      <main className={styles.main}><Outlet /></main>
    </div>
  );
};

export default Layout;
