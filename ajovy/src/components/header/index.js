import React from 'react';
import styles from './index.module.css'

const Header = () => {
  return (
    <header className={styles.navigation}>
      <a
        href="https://www.indeavr.com/en"
        className={styles["prescribing-info-link"]}
      >
        Prescribing Information
      </a>
    </header>
  );
};

export default Header;