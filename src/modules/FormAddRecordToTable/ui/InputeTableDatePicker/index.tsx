import { Control, Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { TTableDataWithoutId } from 'shared/lib/types/TTableData';

type TInputeTableDatePicker = {
  control: Control<TTableDataWithoutId>;
};

export const InputeTableDatePicker = ({ control }: TInputeTableDatePicker) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name="employeeSigDate"
        render={({ field }) => (
          <DatePicker
            {...field}
            slotProps={{
              textField: {
                required: true,
              },
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="companySigDate"
        render={({ field }) => (
          <DatePicker
            {...field}
            slotProps={{
              textField: {
                required: true,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
