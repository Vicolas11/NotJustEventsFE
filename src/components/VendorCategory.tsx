import styles from "../styles/VendorCategory.module.scss";

const VendorCategory = () => {
  return (
    <section className={styles.category_section}>
      <div className={styles.category}>
        <h1>Vendor Categories</h1>
        <div>
          <div className={styles.col1}>
            <img src="../img/dj.png" alt="DJ" />
            <h3>DJ</h3>
          </div>
          <div className={styles.col2}>
            <img src="../img/caterer1.png" alt="Caterer" />
            <img src="../img/caterer2.png" alt="Caterer" />
            <h3>Caterer</h3>
          </div>
          <div className={styles.col3}>
            <img src="../img/makeupArtist.png" alt="Makeup" />
            <h3>Makeup Artist</h3>
          </div>
          <div className={styles.col4}>
            <img src="../img/drink1.png" alt="Drink" />
            <img src="../img/drink2.png" alt="Drink" />
            <h3>Drink</h3>
          </div>
        </div>
      </div>
      <div className={styles.create_evts}>
        <div className={styles.create}>
          <div className={styles.left}>
            <h1>Create and manage your events now!</h1>
          </div>
          <div className={styles.right}>
            <img className={styles.arrow} src="../svg/arrow.svg" alt="Diagonal Box" />
            <div className={styles.btn_wrapper}>
              <button className={styles.btn_create_evts}>
                <span>Create Event</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src="../svg/box.svg" alt="Diagonal Box" />
        </div>
      </div>
    </section>
  );
};

export default VendorCategory;
