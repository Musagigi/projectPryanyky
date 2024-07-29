import { RootState } from '../store';

export const tableDataSelector = (state: RootState) =>
  state.tableData.tableData;
