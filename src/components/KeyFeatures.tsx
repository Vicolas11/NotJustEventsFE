import styles from "../styles/KeyFeatures.module.scss";

const KeyFeatures = () => {
  return (
    <section className={styles.key_features_section}>
      <div className={styles.key_features}>
        <h1>Our Key Features</h1>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div>
              <img src="../svg/arrowToFro.svg" alt="arrow_to_fro icon" />
            </div>
            <h2>All-in-one event management</h2>
            <p>
              Enjoy a user-friendly platform that seamlessly brings together
              event organizers, vendors, and attendees on a single platform for
              streamlined event planning and execution.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src="../svg/realtime.svg" alt="realtime icon" />
            </div>
            <h2>Real-Time Data Analytics</h2>
            <p>
              Take your event experience one step further by gaining valuable
              insights into user behavior, trends, and vendor performance,
              empowering you to make informed decisions.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src="../svg/securePay.svg" alt="secure_payment icon" />
            </div>
            <h2>Secure Payment Gateway</h2>
            <p>
              Be at ease and carry out transactions seamlessly as our trusted
              payment system ensures safe and convenient transactions for
              attendees, event organizers, and vendors.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src="../svg/seamless.svg" alt="seamless icon" />
            </div>
            <h2>Seamless Collaboration</h2>
            <p>
              Plan and execute a hitch-free event through collaboration and
              synergy among event organizers, vendors, and attendees using
              platform features.
            </p>
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <button className={styles.btn_explore}>
            <span>Explore all features</span>
            <img src="../svg/arrowShortRight.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
