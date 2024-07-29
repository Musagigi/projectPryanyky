import { MouseEvent } from 'react';
import { Checkbox, TableCell, TableRow } from '@mui/material';

import { convertIsoDateToRuFormat } from 'shared/lib/utils/convertIsoDateToRuFormat';
import { TTableData } from 'shared/lib/types/TTableData';

type TEnhancedTableRow = {
  row: TTableData;
  isItemSelected: boolean;
  handleClick: (_: MouseEvent, id: string) => void;
};

export const EnhancedTableRow = ({
  row,
  isItemSelected,
  handleClick,
}: TEnhancedTableRow) => {
  const labelId = `enhanced-table-checkbox-${row.id}`;

  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.id)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
      sx={{ cursor: 'pointer' }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </TableCell>
      <TableCell align="center">{row.documentStatus}</TableCell>
      <TableCell align="center">{row.employeeNumber}</TableCell>
      <TableCell align="center">{row.documentType}</TableCell>
      <TableCell align="center">{row.documentName}</TableCell>
      <TableCell align="center">{row.companySignatureName}</TableCell>
      <TableCell align="center">{row.employeeSignatureName}</TableCell>
      <TableCell align="center">
        {convertIsoDateToRuFormat(row.employeeSigDate)}
      </TableCell>
      <TableCell align="center">
        {convertIsoDateToRuFormat(row.companySigDate)}
      </TableCell>
    </TableRow>
  );
};
