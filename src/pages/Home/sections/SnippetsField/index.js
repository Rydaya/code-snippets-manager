import React from 'react';
import { AddBtn } from 'components/AddBtn';
import { Search } from 'components/Search';
import { Snippet } from 'components/Snippet';

import styles from './SnippetsField.module.scss';


export const SnippetsField = () => {
  return <div className={styles.snippetsField}>
    <AddBtn>Add snippet</AddBtn>
    <Search />
    <div className={styles.snippets}>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
      <Snippet title='Button'/>
    </div>
  </div>;
};
