import axios from 'axios';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { removeDataTableApi } from 'shared/api/requests/table/removeDataTableApi';
import { useAppDispatch } from 'app/store/hooks';
import { removeDataToTable } from 'app/store/slices/tableDataSlice';

export const DeleteButton = ({
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

  const handleDeleteRecord = async () => {
    try {
      handleLoadingTrue();
      const response = await removeDataTableApi(selected);

      if (response.status === 200) {
        dispatch(removeDataToTable(selected));
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
    } finally {
      handleLoadingFalse();
    }
  };

  return (
    <Tooltip title="Удалить">
      <IconButton onClick={handleDeleteRecord}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
