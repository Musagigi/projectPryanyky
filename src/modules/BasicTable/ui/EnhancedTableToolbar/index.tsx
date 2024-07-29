import { useState } from 'react';
import { Toolbar, Typography } from '@mui/material';

import { LoadingModal } from 'shared/ui/modals/LoadingModal';
import { NotifyModal } from 'shared/ui/modals/NotifyModal';
import { DeleteButton } from 'shared/ui/buttons/DeleteButton';

import { useModalState } from 'shared/hooks/useModalState';
import { useModalLoading } from 'shared/hooks/useModalLoading';
import { EditButton } from 'shared/ui/buttons/EditButton';

export const EnhancedTableToolbar = ({
  selected,
}: Record<'selected', string>) => {
  const [modalError, setModalError] = useState({
    titleText: '',
    bodyText: '',
  });

  const { isLoading, handleLoadingTrue, handleLoadingFalse } =
    useModalLoading();
  const { isOpen, handleModalOpen, handleModalClose } = useModalState();

  return (
    <Toolbar>
      {isLoading && <LoadingModal />}
      <NotifyModal
        open={isOpen}
        handleClose={handleModalClose}
        titleMessage={modalError.titleText}
        textMessage={modalError.bodyText}
      />
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        component="div"
      >
        Данные
      </Typography>
      {selected && (
        <>
          <EditButton
            selected={selected}
            handleLoadingTrue={handleLoadingTrue}
            handleLoadingFalse={handleLoadingFalse}
            handleModalOpen={handleModalOpen}
            setModalError={setModalError}
          />

          <DeleteButton
            selected={selected}
            handleLoadingTrue={handleLoadingTrue}
            handleLoadingFalse={handleLoadingFalse}
            handleModalOpen={handleModalOpen}
            setModalError={setModalError}
          />
        </>
      )}
    </Toolbar>
  );
};
