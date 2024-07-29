import { Button } from '@mui/material';
import { SubmitFormBtn } from './styles';

type TSubmitFormButton = {
  isSubmitting?: boolean;
};

export const SubmitFormButton = ({ isSubmitting }: TSubmitFormButton) => {
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={isSubmitting}
      sx={SubmitFormBtn}
    >
      {isSubmitting ? 'отправка данных...' : 'подтвердить'}
    </Button>
  );
};
