import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero}>
        <h1 className={styles.hero_txt}>
          Revolutionize your <span className={styles.evt_txt}>Events</span> with
          our <span className={styles.inno_txt}>Innovation</span>{" "}
        </h1>
        <h1 className={styles.mobile_hero_txt}>
          Revolutionize your <span className={styles.evt_txt}>Events</span> with
          our <span className={styles.inno_txt}>Innovation</span>{" "}
        </h1>
        <p>
          Explore a Wide Range of Trusted Vendors and Book Your Event Services
          Today. Get Your Tickets Now for the Hottest Events in Town. Easy
          Booking Process. Unforgettable Experiences Await!"
        </p>
        <button className={styles.btn_take_tour}>
          <span>Take Tour</span>
          <img src="../svg/arrowShortRightWhite.svg" alt="arrow" />
        </button>
        <div className={styles.hero_img_wrapper}>
          <img src="../img/image1.png" alt="HeroImage" />
          <div className={styles.overlap}>
            <span className={styles.events}>
              <h2>10,000+</h2>
              <p>Events</p>
            </span>
            <span className={styles.vendors}>
              <h2>3,000+</h2>
              <p>Vendors</p>
            </span>
            <span className={styles.planners}>
              <h2>1,000+</h2>
              <p>Events Planners</p>
            </span>
            <span className={styles.attendees}>
              <h2>30,000+</h2>
              <p>Attendees</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
