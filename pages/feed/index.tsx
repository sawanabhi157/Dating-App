import styles from "./feed.module.scss";
import Navbar from "../../components/Navbar";
import SwipeButtons from "../../components/SwipeButtons";
const index = () => {
  return (
    <>
      <div className={styles.conatiner}>
        <Navbar />
        <div className={styles.inner__container}>
          <div className={styles.discover}></div>
          <div className={styles.card__container}></div>
          <div className={styles.swipe__buttons}>
            <SwipeButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
