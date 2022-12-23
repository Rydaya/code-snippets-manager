import React from 'react';
import styles from './Folder.module.scss';

export const Folder = ({children}) => {
  return (
    <button className={styles.folder}>{children}</button>
  );
};  