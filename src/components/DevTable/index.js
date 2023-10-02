import React, { useState } from "react";
import { useSortableData} from "../../shared/hooks/hook";
import ReactPaginate from "react-paginate";
import styles from '../../shared/styles/index.module.scss'

const ProductTable = (props) => {
    const [currentPage, setCurrentPage] = useState(0); //Pagination

    const { items, requestSort, sortConfig } = useSortableData(props.data);

    console.log({items})
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : null;
    };

    // Pagination
    const PER_PAGE = 100;
    const pageCount = Math.ceil(items.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE;

    return (
        <>
            <table className={styles.datatable}>
                <thead className={styles.datatableThead}>
                <tr>
                    <th className={styles.thName}>
                        <button
                            type="button"
                            onClick={() => requestSort("id")}
                            className={`${styles.btn} ${getClassNamesFor("id")}`}
                        >
                            ID
                        </button>
                    </th>
                    <th className={styles.thName}>
                        <button
                            type="button"
                            onClick={() => requestSort("first_name")}
                            className={`${styles.btn} ${getClassNamesFor("first_name")}`}
                        >
                            FirstName
                        </button>
                    </th>
                    <th className={styles.thName}>
                        <button
                            type="button"
                            onClick={() => requestSort("last_name")}
                            className={`${styles.btn} ${getClassNamesFor("last_name")}`}
                        >
                            LastName
                        </button>
                    </th>
                    <th className={styles.thName}>
                        <button
                            type="button"
                            onClick={() => requestSort("email")}
                            className={`${styles.btn} ${getClassNamesFor("email")}`}
                        >
                            Email
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {items.length === 0 ? (
                    <tr className={styles.tableRow}>
                        <td colspan="2" className={styles.tableData}>
                            No matching records found
                        </td>
                    </tr>
                ) : (
                    items.slice(offset, offset + PER_PAGE).map((item, index) => (
                        <tr key={index} className={styles.tableRow}>
                            <td className={styles.tableData}>{item.id}</td>
                            <td className={styles.tableData}>{item.first_name}</td>
                            <td className={styles.tableData}>{item.last_name}</td>
                            <td className={styles.tableData}>{item.email}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
            <div className={styles.datatableFooter}>
                <div className={styles.datatableShowing}>
          <span>
            Showing {offset + 1} to {offset + PER_PAGE} of {items.length}{" "}
              entries
          </span>
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={styles.pagination}
                    previousLinkClassName={styles.paginationLink}
                    nextLinkClassName={styles.paginationLink}
                    disabledClassName={styles.paginationDisabled}
                    activeClassName={styles.paginationActive}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                />
            </div>
        </>
    );
};

export default ProductTable;
