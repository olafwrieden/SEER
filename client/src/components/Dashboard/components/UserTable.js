import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaAngleDown, FaAngleUp, FaCrown } from "react-icons/fa";
import { usePagination, useSortBy, useTable } from "react-table";

const Table = ({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  totalItems,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  return (
    <>
      <table
        {...getTableProps()}
        className="table is-striped is-hoverable is-fullwidth"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}{" "}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaAngleDown />
                      ) : (
                        <FaAngleUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              <td colSpan="5">Loading...</td>
            ) : (
              <td colSpan="5">
                Showing {page.length} of {totalItems} results
              </td>
            )}
          </tr>
        </tbody>
      </table>

      {/* Pagination Navigation */}
      <nav
        className="pagination is-right"
        role="navigation"
        aria-label="pagination"
      >
        {/* Backwards / Forwards */}
        <button
          className="pagination-previous"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"Previous"}
        </button>
        <button
          className="pagination-next"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {"Next"}
        </button>

        {/* Location */}
        <ul className="pagination-list">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </ul>

        {/* Results per Page */}
        <ul className="pagination-list">
          <select
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </ul>
      </nav>
    </>
  );
};

const UserTable = () => {
  /* User Table Column Headers */
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
        Cell: (props) => {
          const isAdmin = props.value === "ADMIN";
          return (
            <div>
              {String(props.value)
                .toLowerCase()
                .replace(/\b(\w)/g, (s) => s.toUpperCase())}
              {isAdmin ? (
                <FaCrown
                  className="has-text-warning"
                  style={{ paddingLeft: "5px" }}
                />
              ) : (
                ""
              )}
            </div>
          );
        },
      },
      {
        Header: "Status",
        accessor: "enabled",
        Cell: (props) => (
          <span
            className={`tag is-${
              !!props.value ? "success" : "danger"
            } is-light`}
          >
            {Boolean(props.value) ? "Enabled" : "Disabled"}
          </span>
        ),
      },
    ],
    []
  );

  // We'll start our table without any data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(async ({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setLoading(true);

    // Fetch Data
    const data = await fetch(
      `/api/v1/users?limit=${pageSize}&page=${pageIndex}`
    ).then((res) => res.json());
    console.log(data);

    if (fetchId === fetchIdRef.current) {
      setData(data.data);
      setTotalItems(data.totalItems);
      setPageCount(data.totalPages);
      setLoading(false);
    }
  }, []);

  return (
    <div className="container">
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        totalItems={totalItems}
      />
    </div>
  );
};

export default UserTable;
