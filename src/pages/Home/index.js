import React from 'react';

import styles from './Home.module.scss';
import { CodeField } from '../../components/CodeField';
import { FoldersField } from './sections/FoldersField';
import { SnippetsField } from './sections/SnippetsField';
import { Modal } from 'components/Modal';

export const Home = () => {
  return <div className={styles.home}>
    <FoldersField/>
    <div className={styles.container}>
      <SnippetsField/>
      <CodeField fieldName='HTML'/>
      <CodeField fieldName='CSS'/>
      <CodeField fieldName='JS'/>
    </div>
    <button className={styles.btn}>Get result</button>
    <Modal/>
  </div>;
};
