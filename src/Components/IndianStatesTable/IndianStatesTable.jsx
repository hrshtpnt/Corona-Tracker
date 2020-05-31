import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper} from '@material-ui/core';
import styles from './IndianStatesTable.module.css';

function IndianStatesTable({statesData}) {
  return (
    <TableContainer component={Paper} className={styles.tableView}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>State / UT</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statesData.map((row) => (
            <TableRow key={row._id} >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="right">{row.cured}</TableCell>
              <TableCell align="right">{row.death}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IndianStatesTable;
