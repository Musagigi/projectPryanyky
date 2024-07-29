import { useState } from 'react';
import axios from 'axios';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Paper, TextField, Typography } from '@mui/material';

import { SubmitFormButton } from 'shared/ui/buttons/SubmitFormButton';
import { LoadingModal } from 'shared/ui/modals/LoadingModal';
import { NotifyModal } from 'shared/ui/modals/NotifyModal';
import { InputeTableDatePicker } from './ui/InputeTableDatePicker';

import { useAppDispatch } from 'app/store/hooks';
import { addDataToTable } from 'app/store/slices/tableDataSlice';
import { addDataTableApi } from 'shared/api/requests/table/addDataTableApi';
import { useModalState } from 'shared/hooks/useModalState';
import { convertDataToIso } from './utils/convertDataToIso';
import {
  TKeyTableData,
  TTableDataWithoutId,
} from 'shared/lib/types/TTableData';
import { ADD_RECORD } from 'modules/BasicTable/utils/constans';
import { boxForm, boxWrapper } from './styles';
import { TITLE_TABLE } from 'shared/lib/constans/table';
import { BodyFormToTable } from 'shared/ui/forms/BodyFormToTable';

export const FormAddRecordToTable = () => {
  const dispatch = useAppDispatch();
  const [modalError, setModalError] = useState({
    titleText: '',
    bodyText: '',
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TTableDataWithoutId>();

  const { isOpen, handleModalOpen, handleModalClose } = useModalState();

  const onSubmit: SubmitHandler<TTableDataWithoutId> = async (data) => {
    const convertData = convertDataToIso(data);

    try {
      const response = await addDataTableApi({ data: convertData });

      if (response.status === 200) {
        dispatch(addDataToTable(response.data.data));
      } else {
        handleModalOpen();
      }
    } catch (error) {
      if (
        axios.isAxiosError<{ error?: { name: string; message: string } }>(
          error,
        ) &&
        error.response?.status === 404
      ) {
        setModalError({ titleText: error.name, bodyText: error.message });
      }
      console.log(error);
      handleModalOpen();
    }
  };

  return (
    <Paper
      sx={boxWrapper}
      variant="outlined"
    >
      {isSubmitting && <LoadingModal />}
      <NotifyModal
        open={isOpen}
        handleClose={handleModalClose}
        titleMessage={modalError.titleText}
        textMessage={modalError.bodyText}
      />
      <Typography
        component="h3"
        variant="h6"
      >
        {ADD_RECORD}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BodyFormToTable
          control={control}
          nameInput={TITLE_TABLE}
          styles={boxForm}
        >
          <SubmitFormButton />
        </BodyFormToTable>
      </Box>
    </Paper>
  );
};
