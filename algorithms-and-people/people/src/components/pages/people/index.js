import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { getTableInfo } from '../../../services/people';
import { COLUMNS } from '../../../utils/columns';
import GlobalFilter from './globalFilter';
import Table from './table';
import Pagination from './pagination';
import styles from './index.module.css';

const People = () => {
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
    gotoPage,
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
            <Pagination
              pageIndex={pageIndex}
              pageOptions={pageOptions}
              canPreviousPage={canPreviousPage}
              previousPage={previousPage}
              canNextPage={canNextPage}
              nextPage={nextPage}
              gotoPage={gotoPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />
            <Table
              getTableProps={getTableProps}
              getTableBodyProps={getTableBodyProps}
              headerGroups={headerGroups}
              page={page}
              prepareRow={prepareRow}
            />
          </>
        )}
    </div>
  );
};

export default People;
