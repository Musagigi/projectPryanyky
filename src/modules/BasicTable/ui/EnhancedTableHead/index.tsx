import { TableCell, TableRow } from '@mui/material';
import TableHead from '@mui/material/TableHead';

import { TTableData } from 'shared/lib/types/TTableData';
import { tableHead } from './styles';

export const EnhancedTableHead = ({
  tableData,
}: Record<'tableData', Array<TTableData>>) => {
  const tableHeaderRow = Object.keys(tableData[0]).filter(
    (item) => item !== 'id',
  );

  return (
    <TableHead sx={tableHead}>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {tableHeaderRow.map((headCell, index) => (
          <TableCell
            key={index}
            align="left"
          >
            {headCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
