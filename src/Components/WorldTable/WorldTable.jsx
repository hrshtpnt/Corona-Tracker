import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Divider,
  TablePagination,
  TableRow,
  Button,
} from "@material-ui/core";
import { fetchTableData } from "../../api/index";
import styles from "./worldTable.module.css";
import sortImage from "../../images/sort-black.svg";
import classnames from "classname";

const columns = [
  {
    id: "country",
    label: "Country",
    minWidth: 50,
    align: "left",
  },
  {
    id: "cases",
    label: "Cases",
    minWidth: 50,
    align: "right",
  },
  {
    id: "todayCases",
    label: "Cases Today",
    minWidth: 50,
    align: "right",
  },
  {
    id: "deaths",
    label: "Deaths",
    minWidth: 50,
    align: "right",
  },
  {
    id: "todayDeaths",
    label: "Deaths Today",
    minWidth: 50,
    align: "right",
  },
  {
    id: "recovered",
    label: "Recovered",
    minWidth: 50,
    align: "right",
  },
  {
    id: "active",
    label: "Active",
    minWidth: 50,
    align: "right",
  },
  {
    id: "critical",
    label: "Critical",
    minWidth: 50,
    align: "right",
  },
  {
    id: "casesPerOneMillion",
    label: "Cases/Million",
    minWidth: 50,
    align: "right",
  },
  {
    id: "deathsPerOneMillion",
    label: "Deaths/Million",
    minWidth: 50,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 800,
  },
});

function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [rows, setRows] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchWorldData = async () => {
     setRows(await fetchTableData());
  };

  useEffect(() => {
    fetchWorldData();
  }, []);

  const handleSortByCases = () => {
    setRows(
      [...rows].sort((a, b) => {
        return b.cases - a.cases;
      })
    );
  };

  const handleSortByDeaths = () => {
    setRows(
      [...rows].sort((a, b) => {
        return b.deaths - a.deaths;
      })
    );
  };

  const handleSortByRecovered = () => {
    setRows(
      [...rows].sort((a, b) => {
        return b.recovered - a.recovered;
      })
    );
  };

  const clearSort = () => {
    fetchWorldData();
  };
if (rows === []) {
  return <p>Loading...</p>;
  }
  return (
    <React.Fragment>
    <Divider className={styles.width70}/>
    <br />
    <div className={styles.container}>
      <div className={classnames(styles.width100, "row")}>
        <div className={classnames(styles.root, "col-sm-12")}>
          <h6 className={styles.sortText}>
            <img src={sortImage} alt="sort" className={styles.sortImage} />
            Sort
          </h6>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            className={styles.rootButton}
            onClick={handleSortByCases}
          >
            Cases
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            className={styles.rootButton}
            onClick={handleSortByDeaths}
          >
            Deaths
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={styles.rootButton}
            onClick={handleSortByRecovered}
          >
            Recovered
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={styles.rootButton}
            onClick={clearSort}
          >
            Clear Sort
          </Button>
        </div>
      </div>
      <div className={styles.rootTable}>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.country}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows && rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {rows && <TablePagination
            rowsPerPageOptions={[20,50,100,150,200,300]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />}
        </Paper>
      </div>
    </div>
    </React.Fragment>
  );
}

export default StickyHeadTable;
