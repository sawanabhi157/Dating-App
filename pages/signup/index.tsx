import type { NextPage } from "next";
import styles from "./signup.module.scss";
import Navbar from "../../components/Navbar";
import { useState } from "react";
const SignUp: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cfPassword, setcfPassword] = useState<string>("");
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.inner__container}>
          <div className={styles.top}>
            <h2 className={styles.h2__top}>SignUp</h2>

            <p className={styles.p__top}>
              Create your account to get full access
            </p>
          </div>

          <div className={styles.mid}>
            <form action="">
              <div>
                <label htmlFor="username">Enter Name</label>
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
                <label>Enter Email</label>
                <input
                  type="text"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  name="email"
                  id="email"
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
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  onChange={(e) => setcfPassword(e.target.value)}
                  value={cfPassword}
                  name="cfPassword"
                  id="cfPassword"
                />
              </div>
            </form>
          </div>

          <div className={styles.btm}>
            <button className={styles.btn}>SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
