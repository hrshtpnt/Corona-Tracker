import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import styles from './IndianStatesTable.module.css';

function IndianStatesTable({ statesData }) {
  return (
    <TableContainer component={Paper} className={styles.tableView}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>State / UT</TableCell>
            <TableCell align="right">Confirmed Indian</TableCell>
            <TableCell align="right">Confirmed Foreign</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Total Comfirmed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statesData.map((row) => (
            <TableRow key={row.loc}>
              <TableCell component="th" scope="row">
                {row.loc}
              </TableCell>
              <TableCell align="right">{row.confirmedCasesIndian}</TableCell>
              <TableCell align="right">{row.confirmedCasesForeign}</TableCell>
              <TableCell align="right">{row.discharged}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.totalConfirmed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IndianStatesTable;
