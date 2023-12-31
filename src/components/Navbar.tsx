import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.scss";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const link = pathname.split("/")[1];
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo} onClick={goHome}>
          <img src="../svg/logo.svg" className={styles.logo} alt="Logo" />
        </div>

        <div className={styles.navbar_link}>
          <ul className={styles.nav_link}>
            <li className={link === "platforms" ? styles.nav_li_active : ""}>
              <Link to="/platforms">Platforms</Link>
              <img src="../svg/evaArrowDownFill2.svg" alt="dropdown" />
            </li>
            <li className={link === "venues" ? styles.nav_li_active : ""}>
              <Link to="/venues">Venues</Link>
            </li>
            <li className={link === "events" ? styles.nav_li_active : ""}>
              <Link to="/events">Events</Link>
            </li>
            <li className={link === "vendors" ? styles.nav_li_active : ""}>
              <Link to="/vendors">Vendors</Link>
            </li>
            <li className={link === "works" ? styles.nav_li_active : ""}>
              <Link to="/works">How it works</Link>
            </li>
          </ul>
        </div>

        <div className={styles.btn_wrapper}>
          <button className={styles.btn_sign_in}>Sign In</button>
          <button className={styles.btn_sign_up}>Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
