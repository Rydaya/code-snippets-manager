import React from 'react';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import styles from './Search.module.scss';

export const Search = () => {
  return (
    <form className={styles.search}>
      <input type="text" name="name" placeholder="Search" />
      <div className={styles.icon}>{<GlobalSvgSelector id="search-icon" />}</div>
    </form>
  );
};
