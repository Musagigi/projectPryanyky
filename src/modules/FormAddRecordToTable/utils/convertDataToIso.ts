import { TTableDataWithoutId } from 'shared/lib/types/TTableData';
import { convertInputDateToIso } from 'shared/lib/utils/convertInputDateToIso';

export const convertDataToIso = (data: TTableDataWithoutId) => {
  return {
    ...data,
    employeeSigDate: convertInputDateToIso(data.employeeSigDate),
    companySigDate: convertInputDateToIso(data.companySigDate),
  };
};
