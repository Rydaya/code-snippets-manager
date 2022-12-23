import React from 'react';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{<GlobalSvgSelector id="logo" />}</div>
      <div className={styles.wrapper}>
        <button className={styles.theme}>{<GlobalSvgSelector id="dark-theme" />}</button>
        <button className={styles.authBtn}>LogIn</button>
      </div>
    </header>
  );
};
