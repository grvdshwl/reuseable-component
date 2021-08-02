import styles from "./FacebookButton.module.css";
import FacebookImage from "../../asset/facebook.png";
const FacebookButton = ({ ...props }) => {
  const facebookLogin = () => {
    window.open("http://localhost:4500/auth/facebook", "_self");
  };
  return (
    <div onClick={facebookLogin} {...props} className={styles.facebookBtn}>
      {" "}
      <div className={styles.facebookBtnComponent}>
        <div className={styles.facebookBtnImage}>
          <img
            src={FacebookImage}
            alt="facebook-icon"
            width="50px"
            height="auto"
          />
        </div>
        <div className={styles.facebookBtnTitle}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default FacebookButton;
