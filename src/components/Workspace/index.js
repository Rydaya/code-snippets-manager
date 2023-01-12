import React from 'react';
import styles from './Workspace.module.scss';

export const Workspace = ({ fieldName }) => {
  return (
    <div className={styles.workspace}>
      <div className={styles.title}>{fieldName}</div>
      <textarea className={styles.codeSpace}></textarea>
    </div>
  );
};
