import React from 'react';

import { Folder } from 'components/Folder';
import { Search } from '../../../../components/Search';

import styles from './FoldersField.module.scss';
import { AddBtn } from 'components/AddBtn';

export const FoldersField = () => {
  return (
    <div className={styles.folders_field}>
      <div className={styles.folders}>
        <Folder>React</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <Folder>Angular</Folder>
        <AddBtn />
      </div>
      <Search />
    </div>
  );
};
