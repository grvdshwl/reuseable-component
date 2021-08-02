import React from "react";
import styles from "./GoogleButton.module.css";
import GoogleImage from "../../asset/google.png";

const GoogleButton = ({ ...props }) => {
  const googleLogin = () => {
    window.open("http://localhost:3000/user/auth/google/", "_self");
  };

  return (
    <div onClick={googleLogin} {...props} className={styles.googleBtn}>
      {" "}
      <div className={styles.googleBtnComponent}>
        <div className={styles.googleBtnImage}>
          <img src={GoogleImage} alt="google-icon" width="25x" height="auto" />
        </div>
        <div className={styles.googleBtnTitle}>Sign in with Google</div>
      </div>
    </div>
  );
};

export default GoogleButton;
