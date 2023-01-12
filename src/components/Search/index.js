import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import styles from './Search.module.scss';

export const Search = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <form className={styles.search}>
      <input type="text" name="name" placeholder="Search" autocomplete="off" />
      <div className={styles.icon}>
        {theme === 'dark' ? (
          <GlobalSvgSelector id="dark-search" />
        ) : (
          <GlobalSvgSelector id="light-search" />
        )}
      </div>
    </form>
  );
};
