import type { NextPage } from "next";
import styles from "../styles/login.module.scss";
import Navbar from "../components/Navbar";
import { useState } from "react";
const Login: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.inner__container}>
          <div className={styles.top}>
            <h2 className={styles.h2__top}>Login</h2>

            <p className={styles.p__top}>Enter Login Details to get access</p>
          </div>

          <div className={styles.mid}>
            <form action="">
              <div>
                <label htmlFor="username">Enter Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  autoComplete="off"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="password">Enter Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>

          <div className={styles.btm}>
            <button className={styles.btn}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
