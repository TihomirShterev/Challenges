import React from 'react';
import styles from './index.module.css';
import logo from '../../assets/site-logo-ajovy.png';

const Logo = () => {
  return (
    <article className={styles["image-container"]}>
      <img src={logo} className={styles.image}></img>
    </article>
  );
};

export default Logo;