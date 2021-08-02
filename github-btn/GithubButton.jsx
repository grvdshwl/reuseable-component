import styles from "./GithubButton.module.css";
import GithubImage from "../../asset/github.png";
const GithubButton = ({ ...props }) => {
  const GithubLogin = () => {
    window.open("http://localhost:4500/auth/github", "_self");
  };
  return (
    <div onClick={GithubLogin} {...props} className={styles.githubBtn}>
      {" "}
      <div className={styles.githubBtnComponent}>
        <div className={styles.githubBtnImage}>
          <img src={GithubImage} alt="github-icon" width="45px" height="auto" />
        </div>
        <div className={styles.githubBtnTitle}>Sign in with Github</div>
      </div>
    </div>
  );
};

export default GithubButton;
