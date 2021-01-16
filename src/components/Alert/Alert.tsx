import React, { FC } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useAlert } from './useAlert';
import { IAlert } from './types';

export const Alert: FC<IAlert> = (props) => {
  const {
    autoHideDuration = 2000,
  } = props;

  const {
    alert,
    onClose,
  } = useAlert();

  return (
    <Snackbar
      open={alert.isOpen}
      autoHideDuration={autoHideDuration}
    >
      <MuiAlert
        severity={alert.severity}
        variant="filled"
        onClose={onClose}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};
