import React from 'react';
import styles from './AddBtn.module.scss';

import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';

export const AddBtn = ({ children }) => {
  return (
    <button className={styles.add_btn}>
      {<GlobalSvgSelector id="dark-folder" />}
      {children ? children : null}
    </button>
  );
};
