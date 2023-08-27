import styles from "../styles/AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.aboutus_section}>
      <div className={styles.aboutus}>
        <div className={styles.left}>
          <img src="../img/image2.png" alt="img2" />
          <img src="../img/image3.png" alt="img3" />
          <img src="../img/image4.png" alt="img4" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h1>About Us</h1>
            <h2>Welcome to NotJustEvent</h2>
            <p>
              Welcome to NotJustEvent, your ultimate platform for
              revolutionizing how events are conceptualized, planned, and
              executed.Our user-friendly platform combines cutting-edge
              technology and a vibrant community to create exceptional event
              experiences.Discover a new era of event planning, where seamless
              collaboration between event organizers, vendors, performers, and
              attendees becomes a reality
            </p>
            <button className={styles.btn_get_started}>
              <span>Get Started Today</span>
              <img src="../svg/arrowShortRightWhite.svg" alt="arrow" />
            </button>
          </div>
          <div className={styles.down}>
            <div className={styles.col0}>
              <img src="../img/image2.png" alt="img2" />
              <img src="../img/image3.png" alt="img3" />
              <img src="../img/image4.png" alt="img4" />
            </div>
            <div className={styles.col1}>
              <img src="../img/image5.png" alt="img5" />
              <img src="../img/image6.png" alt="img6" />
              <img src="../img/image5.png" alt="img5" />
            </div>
            <div className={styles.col2}>
              <img src="../img/image7.png" alt="img7" />
              <img src="../img/image4.png" alt="img4" />
            </div>
            <div className={styles.col3}>
              <img src="../img/image8.png" alt="img8" />
              <img src="../img/image9.png" alt="img9" />
              <img src="../img/image8.png" alt="img8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
