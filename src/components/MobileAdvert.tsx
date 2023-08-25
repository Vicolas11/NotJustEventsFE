import styles from "../styles/MobileAdvert.module.scss";

const MobileAdvert = () => {
  return (
    <section className={styles.advert_section}>
      <div className={styles.advert}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h1>Download Our App Now</h1>
            <p>
              Discover a New Era of Event Planning and Entertainment Booking
              with our Cutting-Edge Online Marketplace
            </p>
            <div className={styles.btn_wrapper}>
              <button className={styles.btn_applestore}>
                <img src="../svg/applestore.svg" alt="Applestore" />
                <span>Apple store</span>
              </button>
              <button className={styles.btn_playstore}>
                <img src="../svg/playstore.svg" alt="Playstore" />
                <span>Google store</span>
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <img src="../img/phones.png" alt="Phones" />
          </div>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.down}>
            <div className={styles.left}>
              <h2>Stay Up-to-date</h2>
              <p>
                Sign up for our newsletter to receive exciting news on new
                products and features
              </p>
            </div>
            <div className={styles.right}>
              <input type="email" placeholder="Enter your email address" />
              <button className={styles.btn_subscribe}>
                <span>Subscribe</span>
                <img src="../svg/arrowShortRight.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAdvert;
