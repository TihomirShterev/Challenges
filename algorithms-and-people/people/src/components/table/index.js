import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { COLUMNS } from '../../utils/columns';
import styles from './index.module.css';

const Table = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const data = useMemo(() => tableInfo, [tableInfo]);
  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
  );
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://apis.chromeye.com:9191/people');
      const result = await response.json();
      setTableInfo(result);
      setLoadingData(false);
    } catch (err) {
      console.log(err);
    }
  }, [setTableInfo]);

  useEffect(() => {
    if (loadingData) {
      fetchData();
    }
  }, [fetchData, loadingData]);

  return (
    <div className={styles.screen}>
      {loadingData
        ? (
          <p>Loading... Please wait...</p>
        ) : (
          <>
            <table className={styles.people} {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  // {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
    </div>
  );
};

export default Table;
