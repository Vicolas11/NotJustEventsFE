import styles from "../styles/HowItWorks.module.scss";

const HowItWorks = () => {
  return (
    <section className={styles.how_it_works_section}>
      <div className={styles.how_it_works}>
        <h1>How it works</h1>
        <div className={styles.wrapper}>
          <div className={styles.vendors}>
            <div className={styles.left}>
              <h2>For Vendors</h2>
              <div>
                <span>
                  <img src="../svg/create.svg" alt="create icon" />
                  <p>Create Your Profile</p>
                </span>
                <span>
                  <img src="../svg/showcase.svg" alt="showcase icon" />
                  <p>Showcase Your Services</p>
                </span>
                <span>
                  <img src="../svg/showcase.svg" alt="showcase icon" />
                  <p>Receive Booking Requests</p>
                </span>
                <span>
                  <img src="../svg/deliver.svg" alt="deliver icon" />
                  <p>Deliver Outstanding Services</p>
                </span>
                <span>
                  <img src="../svg/deliver.svg" alt="deliver icon" />
                  <p>Get Paid Securely</p>
                </span>
              </div>
              <button className={styles.btn_join_vendor}>
                Join as a Vendor today!
              </button>
            </div>
            <div className={styles.right}>
              <img src="../img/image10.png" alt="vendor" />
            </div>
          </div>

          <div className={styles.organizers}>
            <div className={styles.left}>
              <img src="../img/image11.png" alt="organizers" />
            </div>
            <div className={styles.right}>
              <h2>For Event Organizers</h2>
              <div>
                <span>
                  <img src="../svg/fileplus.svg" alt="file plus icon" />
                  <p>Discover Vendors</p>
                </span>
                <span>
                  <img src="../svg/circleswap.svg" alt="circle swap icon" />
                  <p>Securely Book Events</p>
                </span>
                <span>
                  <img src="../svg/dollar.svg" alt="dollar circle icon" />
                  <p>Plan Event</p>
                </span>
                <span>
                  <img src="../svg/shield.svg" alt="shield icon" />
                  <p>Host Event</p>
                </span>
              </div>
              <button className={styles.btn_plan_event}>
                Plan Your Event Today!
              </button>
            </div>
          </div>

          <div className={styles.owners}>
            <div className={styles.left}>
              <h2>For Venue Owners</h2>
              <div>
                <span>
                  <img src="../svg/copy.svg" alt="copy icon" />
                  <p>List Your Venue</p>
                </span>
                <span>
                  <img src="../svg/copy.svg" alt="copy icon" />
                  <p>Showcase Your Space</p>
                </span>
                <span>
                  <img src="../svg/date.svg" alt="date icon" />
                  <p>Receive Booking Requests</p>
                </span>
                <span>
                  <img src="../svg/date.svg" alt="date icon" />
                  <p>Host Memorable Events</p>
                </span>
                <span>
                  <img src="../svg/secure.svg" alt="secure icon" />
                  <p>Secure Payments</p>
                </span>
              </div>
              <button className={styles.btn_join_vendor}>
                List Your Venue Now!
              </button>
            </div>
            <div className={styles.right}>
              <img src="../img/image12.png" alt="owners" />
            </div>
          </div>

          <div className={styles.attendees}>
            <div className={styles.left}>
              <img src="../img/image13.png" alt="attendees" />
            </div>
            <div className={styles.right}>
              <h2>For Attendees</h2>
              <div>
                <span>
                  <img src="../svg/fileplus.svg" alt="file plus icon" />
                  <p>Browse Event Category</p>
                </span>
                <span>
                  <img src="../svg/circleswap.svg" alt="circle swap icon" />
                  <p>Securely Book Tickets</p>
                </span>
                <span>
                  <img src="../svg/circleswap.svg" alt="circle swap icon" />
                  <p>Collaborate with Organizers</p>
                </span>
                <span>
                  <img src="../svg/dollar.svg" alt="dollar circle icon" />
                  <p>Stay Updated</p>
                </span>
                <span>
                  <img src="../svg/shield.svg" alt="shield icon" />
                  <p>Experience Events</p>
                </span>
              </div>
              <button className={styles.btn_plan_event}>
                Plan Your Event Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
