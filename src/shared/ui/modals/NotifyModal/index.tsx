import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  ERROR_REQUEST_MESSAGE,
  ERROR_REQUEST_TITLE,
} from 'shared/lib/constans/request';
import { notifyModaDialog, notifyModalClose } from './styles';

type TNotifyModal = {
  open: boolean;
  titleMessage?: string;
  textMessage?: string;
  handleClose: React.MouseEventHandler<HTMLElement>;
};

export const NotifyModal = ({
  open = false,
  titleMessage = ERROR_REQUEST_TITLE,
  textMessage = ERROR_REQUEST_MESSAGE,
  handleClose,
}: TNotifyModal) => {
  return (
    <Dialog
      open={open}
      sx={notifyModaDialog}
      onClick={handleClose}
    >
      <DialogTitle>{titleMessage}</DialogTitle>
      <DialogContent>
        <DialogContentText>{textMessage}</DialogContentText>
      </DialogContent>
      <IconButton
        onClick={handleClose}
        sx={notifyModalClose}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};
