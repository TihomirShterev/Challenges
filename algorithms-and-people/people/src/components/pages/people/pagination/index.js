import React from 'react';
import styles from './index.module.css';

const Pagination = ({
  pageIndex,
  pageOptions,
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  gotoPage,
  pageSize,
  setPageSize
}) => {

  return (
    <div className={styles.pagination}>
      <div className={styles["page-number"]}>
        <nav>
          <ul className={styles["page-list"]}>
            {pageOptions.map(number => (
              <li key={number + 1}>
                <a
                  className={pageIndex === number ? styles["page-link-active"] : styles["page-link"]}
                  onClick={() => gotoPage(number)}
                  href="!#">{number + 1}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles["page-buttons"]}>
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
  );
};

export default Pagination;
