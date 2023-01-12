import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTheme } from 'store/slices/themeSlice';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import styles from './Theme.module.scss';


export const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(next));
  }

  return (
    <button onClick={changeTheme} className={styles.theme}>
        {theme === 'dark' ? <GlobalSvgSelector id="dark-theme" /> : <GlobalSvgSelector id="light-theme" />}
    </button>
  )
};
