import { useEffect, useState } from 'react';
import axios from 'axios';
import { getDataTableApi } from 'shared/api/requests/table/getDataTableApi';
import { useModalLoading } from 'shared/hooks/useModalLoading';
import { useModalState } from 'shared/hooks/useModalState';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setDataToTable } from 'app/store/slices/tableDataSlice';

import { TTableData } from 'shared/lib/types/TTableData';
import { tableDataSelector } from 'app/store/selectors/tableDataSelector';

export const useTableData = () => {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector(tableDataSelector);

  const [modalError, setModalError] = useState({
    titleText: '',
    bodyText: '',
  });

  const { isOpen, handleModalOpen, handleModalClose } = useModalState();
  const { isLoading, handleLoadingTrue, handleLoadingFalse } =
    useModalLoading();

  useEffect(() => {
    const loadTableData = async () => {
      try {
        handleLoadingTrue();
        const response = await getDataTableApi<TTableData>();
        const { data } = response.data;

        if (data === null) {
          handleModalOpen();
        } else {
          dispatch(setDataToTable(data));
        }
      } catch (error) {
        if (
          axios.isAxiosError<{ error?: { name: string; message: string } }>(
            error,
          ) &&
          error.response?.status === 401
        ) {
          setModalError({ titleText: error.name, bodyText: error.message });
        }
        handleModalOpen();
        console.log(error);
      } finally {
        handleLoadingFalse();
      }
    };
    loadTableData();
  }, []);

  return {
    tableData,
    modalError,
    isLoading,
    isOpen,
    handleModalClose,
  };
};
