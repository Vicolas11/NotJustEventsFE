import styles from "../styles/PageFooter.module.scss";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const PageFooter = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.more_info}>
          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">See My Rates</Link>
              </li>
              <li>
                <Link to="/">Our blog</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">See My Rates</Link>
              </li>
              <li>
                <Link to="/">Our blog</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>FAQs</h4>
            <ul>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.follow_us}>
          <h3>FOLLOW US</h3>
          <div className={styles.social_media}>
            <span>
              <img
                className={styles.linkedin}
                src="../svg/linkedin.svg"
                alt="linkedIn"
              />
            </span>
            <span>
              <FaFacebookF size={20} color="white" />
            </span>
            <span>
              <img
                className={styles.twitter}
                src="../svg/twitter.svg"
                alt="twitter"
              />
            </span>
            <span>
              <img
                className={styles.instagram}
                src="../svg/instagram.svg"
                alt="instagram"
              />
            </span>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>All rights reserved &copy; 2023 NotJustEvents</p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
