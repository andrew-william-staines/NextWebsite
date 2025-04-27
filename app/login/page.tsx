import React from 'react';
import styles from './login.module.css';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPop}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <Link href="/login" className={styles.button}>Login</Link>
      </div>
    </div>
  );
};

export default LoginPage;
