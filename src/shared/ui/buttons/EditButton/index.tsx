import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';

import { SubmitFormButton } from '../SubmitFormButton';

import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { tableDataSelector } from 'app/store/selectors/tableDataSelector';
import { updateDataToTable } from 'app/store/slices/tableDataSlice';
import { editDataTableApi } from 'shared/api/requests/table/editDataTableApi';
import { convertDataToIso } from 'modules/FormAddRecordToTable/utils/convertDataToIso';
import {
  TKeyTableData,
  TTableData,
  TTableDataWithoutId,
} from 'shared/lib/types/TTableData';

import { bodyForm, formWrapper } from './styles';

export const EditButton = ({
  selected,
  handleLoadingTrue,
  handleLoadingFalse,
  handleModalOpen,
  setModalError,
}: {
  selected: string;
  handleLoadingTrue: () => void;
  handleLoadingFalse: () => void;
  handleModalOpen: () => void;
  setModalError: React.Dispatch<
    React.SetStateAction<{
      titleText: string;
      bodyText: string;
    }>
  >;
}) => {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector(tableDataSelector);
  const { control, handleSubmit, reset } = useForm<TTableDataWithoutId>();

  const [formOpen, setFormOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TTableData | null>(null);

  const onSubmit: SubmitHandler<TTableDataWithoutId> = async (data) => {
    const convertData = convertDataToIso(data);

    handleLoadingTrue();
    try {
      const response = await editDataTableApi(selected, convertData);

      if (response.status === 200) {
        dispatch(updateDataToTable(response.data.data));
        setFormOpen(false);
      } else {
        setModalError({ titleText: 'Ошибка!', bodyText: 'Попробуйте позже' });
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
    } finally {
      handleLoadingFalse();
    }
  };

  useEffect(() => {
    if (selectedRow) {
      reset(selectedRow);
    }
  }, [selectedRow]);

  const handleOpenForm = () => {
    setSelectedRow(tableData.find((item) => item.id === selected)!);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <Tooltip title="Редактировать">
        <IconButton onClick={handleOpenForm}>
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={formOpen}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={formWrapper}
        >
          {selectedRow && (
            <Box sx={bodyForm}>
              {Object.keys(selectedRow).map((name, index) => (
                <Controller
                  key={index}
                  control={control}
                  name={name as TKeyTableData}
                  defaultValue={selectedRow[name as TKeyTableData]}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={name}
                      required
                    />
                  )}
                />
              ))}
            </Box>
          )}
          <SubmitFormButton />
          <Button onClick={handleCloseForm}>Отменить</Button>
        </Box>
      </Dialog>
    </>
  );
};
