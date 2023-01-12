import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import { Workspace } from 'components/Workspace';

export const Modal = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={isActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={styles.content}>
        <button className={styles.close} onClick={() => setIsActive(false)}>{<GlobalSvgSelector id="closeIcon" />}</button>
        <div className={styles.workspaces}>
          <Workspace fieldName="HTML" />
          <Workspace fieldName="CSS" />
          <Workspace fieldName="JS" />
        </div>
        <button className={styles.save}>Save</button>
      </div>
    </div>
  );
};
