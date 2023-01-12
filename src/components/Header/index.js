import React from 'react';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import { Theme } from 'components/Theme';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{<GlobalSvgSelector id="logo" />}</div>
      <div className={styles.wrapper}>
        <Theme />
        <button className={styles.authBtn}>LogIn</button>
      </div>
    </header>
  );
};
