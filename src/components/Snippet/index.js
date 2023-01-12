import React, { useState } from 'react';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import styles from './Snippet.module.scss';

export const Snippet = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.snippet}>
      <div className={styles.top}>
        <p className={styles.title}>{title}</p>
        <button className={styles.checkbox} onClick={() => setIsChecked(!isChecked)}>
            {isChecked ? <GlobalSvgSelector id='checkMark'/> : null}
        </button>
      </div>
      <div className={styles.bottom}>
        <button className={styles.edit}>{<GlobalSvgSelector id="editIcon" />}</button>
        <button className={styles.close}>{<GlobalSvgSelector id="closeIcon" />}</button>
      </div>
    </div>
  );
};
