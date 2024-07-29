import {
  ChangeEventHandler,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Box, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { InputeTableDatePicker } from 'modules/FormAddRecordToTable/ui/InputeTableDatePicker';

import {
  TKeyTableData,
  TTableDataWithoutId,
} from 'shared/lib/types/TTableData';

type TBodyFromToTable = {
  control: Control<TTableDataWithoutId>;
  nameInput: string[];
  children: ReactNode;
  styles: object;
};

export const BodyFormToTable = ({
  control,
  nameInput,
  children,
  styles,
}: TBodyFromToTable) => {
  return (
    <>
      <Box sx={styles}>
        {nameInput.map((name, index) => (
          <Controller
            key={index}
            control={control}
            name={name as TKeyTableData}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
              />
            )}
          />
        ))}
        <InputeTableDatePicker control={control} />
      </Box>
      {children}
    </>
  );
};
