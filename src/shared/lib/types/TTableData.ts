export type TTableData = {
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

export type TTableDataWithoutId = Omit<TTableData, 'id'>;

export type TFromAddRecordToTable = Omit<
  TTableDataWithoutId,
  'employeeSigDate' | 'companySigDate'
>;

export type TKeyTableData = keyof TFromAddRecordToTable;
