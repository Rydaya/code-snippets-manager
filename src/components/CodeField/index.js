import React from 'react';

import styles from './CodeField.module.scss';

export const CodeField = ({ fieldName }) => {
  return (
    <div className={styles.codeField}>
      <div className={styles.title}>{fieldName}</div>
      <div className={styles.codeSpace}>
        \/*-- button --*/ 
      </div>
    </div>
  );
};
