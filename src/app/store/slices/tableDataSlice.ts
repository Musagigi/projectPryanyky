import { createSlice } from '@reduxjs/toolkit';

type TTableData = {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id: string;
};

type TTableDataArray = {
  tableData: Array<TTableData>;
};

const initialState: TTableDataArray = {
  tableData: [],
};

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    setDataToTable(state, action) {
      state.tableData = action.payload;
    },
    addDataToTable(state, action) {
      state.tableData.push(action.payload);
    },
    removeDataToTable(state, action) {
      state.tableData = state.tableData.filter(
        (item) => item.id !== action.payload,
      );
    },
    updateDataToTable(state, action) {
      const index = state.tableData.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.tableData[index] = { ...action.payload };
      }
    },
  },
});

export const {
  setDataToTable,
  addDataToTable,
  removeDataToTable,
  updateDataToTable,
} = tableDataSlice.actions;
export default tableDataSlice.reducer;
