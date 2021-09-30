import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { getTableInfo } from '../../services/people';
import { COLUMNS } from '../../utils/columns';
import GlobalFilter from '../globalFilter';
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
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 3
      }
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const fetchData = useCallback(async () => {
    const info = await getTableInfo();
    setTableInfo(info);
    setLoadingData(false);
  }, [setTableInfo]);

  useEffect(() => {
    if (loadingData) {
      fetchData();
    }
  }, [fetchData, loadingData]);

  return (
    <div className={styles.screen}>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      {loadingData
        ? (
          <p>Loading... Please wait...</p>
        ) : (
          <>
            <div className={styles.pagination}>
              <div className={styles["page-number"]}>
                <span> Page <strong> {pageIndex + 1} of {pageOptions.length} </strong> </span>
                {canPreviousPage && (
                  <button onClick={() => previousPage()}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                )}
                {canNextPage && (
                  <button onClick={() => nextPage()}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                )}
              </div>
              <div className={styles["page-size"]}>
                <span>Per Page</span>
                <select
                  value={pageSize}
                  onChange={e => setPageSize(Number(e.target.value))}>
                  {[1, 3, 5].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      --- {pageSize} ---
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
