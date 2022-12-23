import React from 'react';

import styles from './Home.module.scss';
import { CodeField } from './sections/CodeField';
import { FoldersField } from './sections/FoldersField';
import { SnippetsField } from './sections/SnippetsField';

export const Home = () => {
  return <div className={styles.home}>
    <FoldersField/>
    <div>
      <SnippetsField/>
      <CodeField/>
    </div>
  </div>;
};
