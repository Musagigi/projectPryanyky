import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import { EnhancedTableHead } from './ui/EnhancedTableHead';
import { EnhancedTableToolbar } from './ui/EnhancedTableToolbar';
import { EnhancedTableRow } from './ui/EnhancedTableRow';

import { useTablePagination } from './hooks/useTablePagination';
import { tableDataSelector } from 'app/store/selectors/tableDataSelector';
import { useAppSelector } from 'app/store/hooks';

export const BasicTable = () => {
  const tableData = useAppSelector(tableDataSelector);
  const [selected, setSelected] = useState('');

  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    useTablePagination();

  const visibleRows = useMemo(
    () => tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),

    [page, rowsPerPage, tableData],
  );
  console.log('test');
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleClickByRow = (_: MouseEvent, id: string) => {
    selected.includes(id) ? setSelected('') : setSelected(id);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper variant="outlined">
        <EnhancedTableToolbar selected={selected} />

        <TableContainer>
          <Table size="small">
            <EnhancedTableHead tableData={tableData} />

            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <EnhancedTableRow
                    key={row.id}
                    row={row}
                    isItemSelected={isItemSelected}
                    handleClick={handleClickByRow}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
