import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AddBtn.module.scss';

import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';

export const AddBtn = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <button className={children ? `${styles.addBtn} ${styles.addSnippet}` : `${styles.addBtn} ${styles.addFolder}`}>
      {theme === 'dark'? <GlobalSvgSelector id="dark-folder" /> : <GlobalSvgSelector id="light-folder" />}
      {children ? children : null}
    </button>
  );
};
