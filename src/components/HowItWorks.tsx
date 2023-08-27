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
              <ul className={styles.list_items}>
                <li>
                  <img src="../svg/create.svg" alt="create icon" />
                  <p>Create Your Profile</p>
                </li>
                <li>
                  <img src="../svg/showcase.svg" alt="showcase icon" />
                  <p>Showcase Your Services</p>
                </li>
                <li>
                  <img src="../svg/showcase.svg" alt="showcase icon" />
                  <p>Receive Booking Requests</p>
                </li>
                <li>
                  <img src="../svg/deliver.svg" alt="deliver icon" />
                  <p>Deliver Outstanding Services</p>
                </li>
                <li>
                  <img src="../svg/deliver.svg" alt="deliver icon" />
                  <p>Get Paid Securely</p>
                </li>
              </ul>
              <div className={styles.btn_wrapper}>
                <button className={styles.btn_join_vendor}>
                  Join as a Vendor today!
                </button>
              </div>
            </div>
            <div className={styles.right}>
              <img src="../img/image10.png" alt="vendor" />
            </div>
          </div>

          <div className={styles.organizers}>
            <div className={styles.left}>
              <img src="../img/organizers.png" alt="organizers" />
            </div>
            <div className={styles.right}>
              <h2>For Event Organizers</h2>
              <ul className={styles.list_items}>
                <li>
                  <img src="../svg/fileplus.svg" alt="file plus icon" />
                  <p>Discover Vendors</p>
                </li>
                <li>
                  <img src="../svg/circleswap.svg" alt="circle swap icon" />
                  <p>Securely Book Events</p>
                </li>
                <li>
                  <img src="../svg/dollar.svg" alt="dollar circle icon" />
                  <p>Plan Event</p>
                </li>
                <li>
                  <img src="../svg/shield.svg" alt="shield icon" />
                  <p>Host Event</p>
                </li>
              </ul>
              <div className={styles.btn_wrapper}>
                <button className={styles.btn_plan_event}>
                  Plan Your Event Today!
                </button>
              </div>
            </div>
          </div>

          <div className={styles.owners}>
            <div className={styles.left}>
              <h2>For Venue Owners</h2>
              <ul className={styles.list_items}>
                <li>
                  <img src="../svg/copy.svg" alt="copy icon" />
                  <p>List Your Venue</p>
                </li>
                <li>
                  <img src="../svg/copy.svg" alt="copy icon" />
                  <p>Showcase Your Space</p>
                </li>
                <li>
                  <img src="../svg/date.svg" alt="date icon" />
                  <p>Receive Booking Requests</p>
                </li>
                <li>
                  <img src="../svg/date.svg" alt="date icon" />
                  <p>Host Memorable Events</p>
                </li>
                <li>
                  <img src="../svg/secure.svg" alt="secure icon" />
                  <p>Secure Payments</p>
                </li>
              </ul>
              <div className={styles.btn_wrapper}>
                <button className={styles.btn_join_vendor}>
                  List Your Venue Now!
                </button>
              </div>
            </div>
            <div className={styles.right}>
              <img src="../img/owners.png" alt="owners" />
            </div>
          </div>

          <div className={styles.attendees}>
            <div className={styles.left}>
              <img src="../img/attendees.png" alt="attendees" />
            </div>
            <div className={styles.right}>
              <h2>For Attendees</h2>
              <ul className={styles.list_items}>
                <li>
                  <img src="../svg/fileplus.svg" alt="file plus icon" />
                  <p>Browse Event Category</p>
                </li>
                <li>
                  <img src="../svg/circleswap.svg" alt="circle swap icon" />
                  <p>Securely Book Tickets</p>
                </li>
                <li>
                  <img src="../svg/circleswap.svg" alt="circle swap icon" />
                  <p>Collaborate with Organizers</p>
                </li>
                <li>
                  <img src="../svg/dollar.svg" alt="dollar circle icon" />
                  <p>Stay Updated</p>
                </li>
                <li>
                  <img src="../svg/shield.svg" alt="shield icon" />
                  <p>Experience Events</p>
                </li>
              </ul>
              <div className={styles.btn_wrapper}>
                <button className={styles.btn_plan_event}>
                  Plan Your Event Today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
