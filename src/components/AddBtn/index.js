import React from 'react';
import styles from './AddBtn.module.scss';

import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';

export const AddBtn = ({ children }) => {
  return (
    <button className={children ? `${styles.add_btn} ${styles.add_snippet}` : `${styles.add_btn} ${styles.add_folder}`}>
      {<GlobalSvgSelector id="dark-folder" />}
      {children ? children : null}
    </button>
  );
};
