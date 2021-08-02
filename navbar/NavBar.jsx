import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import userContext from "../../store/user.context";
import axios from "axios";

const NavBar = () => {
  const user = useContext(userContext);

  const handleLogout = () => {
    axios
      .get("http://localhost:4500/logout", { withCredentials: true })
      .then((res) => {
        if (res.data === "done") {
          window.location.href = "/";
        }
      });
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navComponent}>
        <Link to="/">
          <span> Home</span>
        </Link>

        {!user ? (
          <>
            <Link to="/login">
              <span>Login</span>
            </Link>
            <Link to="/register">
              <span>Register</span>
            </Link>
          </>
        ) : (
          <span className={styles.logout} onClick={handleLogout}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
