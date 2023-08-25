import styles from "../styles/Testimony.module.scss";

const Testimony = () => {
  return (
    <section className={styles.testimony_section}>
      <div className={styles.testimony}>
        <h1>Don’t just take our word for it</h1>
        <p>Hear from our customers who have had experience with NotJustEvent</p>
        <div className={styles.carousel}>
          <div className={styles.review}>
            <p>
              “NotJustEvent turned my event planning experience upside down—in
              the best way possible! I organized a corporate conference that was
              a roaring success, all thanks to their platform. The range of
              services available, from venue selection to catering and even
              entertainment, made my job a breeze. The transparency and ease of
              use were truly remarkable. Kudos to NotJustEvent for making me
              look like a seasoned event planner!"
            </p>
            <div className={styles.testifier}>
              <img src="../img/reviewUser.png" alt="Review User" />
              <div>
                <h3>Rahmah Sadau</h3>
                <p>Event Organizer</p>
                <span>
                  <img src="../svg/star.svg" alt="star" />
                  <img src="../svg/star.svg" alt="star" />
                  <img src="../svg/star.svg" alt="star" />
                  <img src="../svg/star.svg" alt="star" />
                  <img src="../svg/star.svg" alt="star" />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.navigator}>
            <img src="../svg/arrowleft.svg" alt="Arrow Left" />
            <div className={styles.indicators}>
              <span className={styles.ind1}></span>
              <span className={styles.ind2}></span>
              <span className={styles.ind3}></span>
            </div>
            <img src="../svg/arrowright.svg" alt="Arrow Right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
