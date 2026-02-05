import styles from "./Navigation.module.css";
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;