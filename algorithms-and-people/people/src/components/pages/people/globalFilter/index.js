import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styles from './index.module.css';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined);
  }, 500)
  return (
    <input
      className={styles.keyword}
      value={value || ''}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Enter Keyword"
    />
  );
}

export default GlobalFilter;
