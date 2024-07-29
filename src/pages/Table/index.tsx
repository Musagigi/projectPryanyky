import { Box } from '@mui/material';

import { NotifyModal } from 'shared/ui/modals/NotifyModal';
import { LoadingModal } from 'shared/ui/modals/LoadingModal';
import { BasicTable } from 'modules/BasicTable';
import { FormAddRecordToTable } from 'modules/FormAddRecordToTable';

import { useTableData } from './hooks/useTableData';
import { boxWrapper } from './styles';

const Table = () => {
  const { tableData, isOpen, isLoading, modalError, handleModalClose } =
    useTableData();

  return (
    <>
      {isLoading && <LoadingModal />}
      <NotifyModal
        open={isOpen}
        handleClose={handleModalClose}
        titleMessage={modalError.titleText}
        textMessage={modalError.bodyText}
      />
      {tableData.length > 0 && (
        <Box sx={boxWrapper}>
          <BasicTable />
          <FormAddRecordToTable />
        </Box>
      )}
    </>
  );
};

export default Table;
