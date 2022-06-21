import styles from "./Navbar.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { ImFeed } from "react-icons/Im";
import { IoNotificationsOutline } from "react-icons/io5";
const Navbar = () => {
  const styleIcons = {
    color: "white",
    fontSize: "1.5rem",
    marginTop: "8px",
  };

  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.inner__container}>
          <div className={styles.left}>
            <div>
              <p className={styles.logo}>QuillHash</p>
            </div>
            <div>
              <p>
                <ImFeed style={styleIcons} />
              </p>
            </div>
            <div>
              <p>
                <BiUserCircle style={styleIcons} />
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <p>
                <IoNotificationsOutline style={styleIcons} />
              </p>
            </div>
            <div>
              <p className={styles.nav__btn}>SignUp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
